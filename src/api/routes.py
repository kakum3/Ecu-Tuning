"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST']) #{"email: adf, password: asdfasd"}
def login():

    
    body = request.get_json()
    email = User.query.filter_by(email=body["email"]).first()
    password = body["password"]

    if email is None:
        return jsonify("El usuario no existe"), 404
    if email.password != password:
        return jsonify("Contraseña incorrecta"), 401

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    my_token = create_access_token(identity=email.id)
    return jsonify({ "token": my_token, "user_id": email.id }), 200