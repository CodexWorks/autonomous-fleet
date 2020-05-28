from flask import Flask
from flask_jwt_extended import JWTManager

from config import Config

# Initialize app
app = Flask(__name__)
app.config.from_object(Config)
JWTManager(app)

# Blueprints
from app.web.controllers.example import example_controller as example_blueprint
app.register_blueprint(example_blueprint.example, url_prefix='/example')




