"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Services, Taller, Contacts
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

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
     usr = User(email=body['email'], password = body['password'], name=body['name'], is_client=body['is_client'])
     db.session.add(usr)
     db.session.commit()
     
     return jsonify({'msg':'ok'}), 200

@api.route('/login', methods=['POST']) #{"email: adf, password: asdfasd"}
def login():
        
    body = request.get_json()
    usr = User.query.filter_by(email=body["email"]).first()
    password = body["password"]

    if usr is None:
        return jsonify("El usuario no existe"), 404
    if usr.password != password:
        return jsonify("Contraseña incorrecta"), 401

    my_token = create_access_token(identity=usr.id)
    print(my_token)
    return jsonify({ "token": my_token, "user_id": usr.id, "msg":"ok" }), 200

@api.route('/map', methods=['GET'])
def handle_map():
    
    talleres=Taller.query.all()
    return jsonify([x.serialize() for x in talleres]),200 


@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    taller = user.taller
    return jsonify({"msg": "ok", "user_info": user.serialize(), "taller":taller.serialize()}), 200

@api.route("/profile", methods=["POST"])
@jwt_required()
def post_profile():
    body = request.get_json()

    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()

    if len(body["name"]) > 6:
        user.name = body["name"]

    if len(body["email"]) > 6:
        user.email = body["email"]

    if len(body["password"]) > 6:
        user.password = body["password"]

    user.is_client = body["is_client"]

    
    if not body["is_client"]:

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
    
    usr = User.query.filter_by(id=current_user).first()

    body = request.get_json()
    taller = User.query.filter_by(id=body["taller_id"]).first()
    contact = Contacts(from_id=usr.id, to_id=taller.id, message=body["message"])

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


