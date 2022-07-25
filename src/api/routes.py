"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def Signup():
     request.get_json()
     user=User(email=body['email'])
     password=body['password']

      
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

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    my_token = create_access_token(identity=usr.id)

    return jsonify({ "token": my_token, "user_id": email.id, "msg":"Ok" }), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()
    
    usr = User.query.filter_by(id=current_user).first()

    return jsonify({"msg": "ok", "id": usr.id, "email": usr.email }), 200