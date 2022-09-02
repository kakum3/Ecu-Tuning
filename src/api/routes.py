"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, send_from_directory
from api.models import db, User, Services, Taller, Contacts
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash

api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def Signup():
     body = request.get_json()
     hashed_password = generate_password_hash(body['password'])

     user = User(email=body['email'], password = hashed_password, name=body['name'], is_client=body['is_client'])
     
     if body["is_client"]==False:
        taller = Taller(w_name=body['w_name'], w_address=body['w_address'], lat=body['lat'], lng=body["lng"])
        user.taller = taller

     db.session.add(user)
     db.session.commit()
     
     return jsonify({'msg':'ok'}), 200

@api.route('/login', methods=['POST']) #{"email: adf, password: asdfasd"}
def login():
        
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()

    

    if user is None:
        return jsonify("El usuario no existe"), 404
    if not user.checkPassword(body["password"]):
        return jsonify("Contraseña incorrecta"), 401

    my_token = create_access_token(identity=user.id)

    return jsonify({ "token": my_token, "is_client": user.is_client, "msg":"ok" }), 200

@api.route('/restore', methods=['POST'])
def post_restore():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    my_token = create_access_token(identity=user.id)
    return jsonify({ "token": my_token, "msg":"ok" }), 200

@api.route('/new/password', methods=['POST'])
@jwt_required()
def new_password():
    body = request.get_json()
    
    if not body["password"] == body["confirm"]:
        return jsonify({"msg": "error"})

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    hashed_password = generate_password_hash(body['password'])
    user.password = hashed_password

    db.session.add(user)
    db.session.commit()

    return jsonify({ "msg":"ok" }), 200

@api.route('/map', methods=['GET'])
@jwt_required()
def handle_map():
    
    talleres=Taller.query.all()
    return jsonify({"msg":"ok", "talleres":[x.serialize() for x in talleres]}),200 


@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    taller = user.taller
    if taller is not None:
        taller = taller.serialize()
    return jsonify({"msg": "ok", "user_info": user.serialize(), "taller":taller}), 200

@api.route("/profile", methods=["POST"])
@jwt_required()
def post_profile():
    body = request.get_json()

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()

    if body["a_password"] != user.password:
        return jsonify({"msg":"Contraseña incorrecta"}), 200

    if len(body["n_password"]) > 6:
        user.password = body["n_password"]

    if len(body["name"]) > 6:
        user.name = body["name"]

    if len(body["email"]) > 6:
        user.email = body["email"]

    if user.is_client == False:
        services = Services.query.all()

        taller = user.taller
        taller.w_services = []
        for i in range(len(services)):
            if body["sel_services"][i]["value"] == True:
                taller.w_services.append(services[i])

        if len(body["w_name"]) > 6:
            taller.w_name = body["w_name"]
        if len(body["w_address"]) > 6:
            taller.w_address = body["w_address"]



    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "ok", "user_info": user.serialize(),
     "taller":taller.serialize()}), 200


@api.route("/contact", methods=["POST"])
@jwt_required()
def post_contact():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    
    user = User.query.filter_by(id=current_user).first()

    body = request.get_json()

    taller = Taller.query.filter_by(id=body["taller_id"]).first()

    contact = Contacts(from_id=user.id, to_id=taller.user_id, message=body["message"], telefon=body["telefon"] , asunto=body["asunto"] , fname=body["fname"])

    if not len(body["message"]) > 6: 
        return jsonify({"msg": "error"}), 200       
    if not len(body["asunto"]) > 6:
        return jsonify({"msg": "error"}), 200         
    if not len(body["telefon"]) > 6:
         return jsonify({"msg": "error"}), 200        
    if not len(body["fname"]) > 2: 
        return jsonify({"msg": "error"}), 200 

    db.session.add(contact)
    db.session.commit()
    return jsonify({"msg": "ok"}), 200

    

@api.route("/services", methods=["GET"])
def services():
        
    servicios = Services.query.all()

    return jsonify({"msg": "ok", "all_services": [x.serialize() for x in servicios]}), 200

@api.route("/taller/<int:id>", methods=["GET"])
def get_taller(id):
        
   taller= Taller.query.filter_by(id=id).first()

  
   return jsonify({"msg":'ok',"taller":taller.serialize()}), 200


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

@api.route('/upload', methods=['POST'])
@jwt_required()
def upload():
    if 'file' not in request.files:
        print('No file part')
        return redirect(request.url)
    file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
    if file.filename == '':
        print('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        current_user = get_jwt_identity()
        user = User.query.filter_by(id=current_user).first()
        filename = secure_filename(file.filename)
        file.save('./images/'+filename)
        user.image = filename
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "ok", "img_name": filename})

@api.route('/images/<path:path>')
def send_image(path):
    return send_from_directory('../images', path)