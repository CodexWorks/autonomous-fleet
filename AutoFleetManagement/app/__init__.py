from firebase_admin import credentials
from flask import Flask, render_template, current_app
from flask_jwt_extended import JWTManager

from config import app_config
import firebase_admin

def create_app(config_name):
    app = Flask(__name__)
    #, static_folder="static/app", template_folder="static/app/public"
    app.config.from_object(app_config[config_name])

    app_credentials = credentials.Certificate("app/config/oceanic-hangout-267217-dddf5d27745a.json")
    firebase_admin.initialize_app(app_credentials)



    from .web.controllers.user import UserController as user_blueprint
    app.register_blueprint(user_blueprint.user, url_prefix='/user')

    JWTManager(app)
    #@app.route('/', methods=['GET'])
    #@app.route('/home', methods=['GET'])
    #def index():
    #    return render_template("templates/index.html")


    return app