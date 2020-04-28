from firebase_admin import credentials
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from config import Config
import firebase_admin

# Initialize app
app = Flask(__name__)
app.config.from_object(Config)
JWTManager(app)

# Initialize db
db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)
migrate.init_app(app, db)
# Set credentials for firebase
app_credentials = credentials.Certificate("app/config/oceanic-hangout-267217-dddf5d27745a.json")
firebase_admin.initialize_app(app_credentials)

# Blueprints
from app.web.controllers.user import UserController as user_blueprint
from app.web.controllers.example import ExampleController as example_blueprint
app.register_blueprint(user_blueprint.user, url_prefix='/user')
app.register_blueprint(example_blueprint.example, url_prefix='/example')


