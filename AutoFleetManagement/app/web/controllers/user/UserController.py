from flask import request, jsonify
from flask import Blueprint
from firebase_admin import auth
from flask_jwt_extended import (create_access_token)

user = Blueprint('user', __name__)

@user.route("/connect", methods=["POST"])
def connect():
    if request.method == "POST":
        email = request.get_json()["email"]
        password = request.get_json()["password"]
        user = auth.get_user_by_email(email)
        access_token = create_access_token(
            identity={'email': user.email})
        result = access_token
        return result

@user.route("/register", methods=["POST"])
def register():
    if request.method == "POST":
        email = request.get_json()["email"]
        password = request.get_json()["password"]
        display_name = request.get_json()["first_name"] + ' ' +  request.get_json()["last_name"]
        auth.create_user(
            email=email, password=password, display_name=display_name)
        result = {
            'first_name': request.get_json()["first_name"],
            'last_name': request.get_json()["last_name"],
            'email': email,
            'password': password
        }
        return jsonify({'result': result})