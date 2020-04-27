import os
from json import load as load_json_file
import fireo
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class DevelopmentConfig(object):
    # Flask
    SECRET_KEY = 'SECRET_KEY'
    TEMPLATES_AUTO_RELOAD = True
    DEBUG = True
    SEND_FILE_MAX_AGE_DEFAULT = 0

    #Flask-Assets
    ASSETS_DEBUG = False

    # Flask-Via
    #VIA_ROUTES_MODULE = "app.routes"

    #Flask-Security
    #SECURITY_REGISTERABLE = True
    #SECURITY_TRACKABLE = True
    #SECURITY_SEND_REGISTER_EMAIL = False
    #SECURITY_LOGIN_URL = '/login/'
    #SECURITY_LOGOUT_URL = '/logout/'
    #SECURITY_REGISTER_URL = '/register/'
    #SECURITY_POST_LOGIN_VIEW = "/"
    #SECURITY_POST_LOGOUT_VIEW = "/"
    #SECURITY_POST_REGISTER_VIEW = "/"
    #SECURITY_LOGIN_USER_TEMPLATE = 'security/login.html'
    #SECURITY_REGISTER_USER_TEMPLATE = 'security/register.html'


    #Flask-Script
    APP_FOLDER = "app/"

    #Flask-Uploads
    UPLOADED_USER_DEST = APP_FOLDER + "static/img/user"
    UPLOADED_USER_URL = 'http://0.0.0.0:8000/user/upload'

    #OAUTH LOGIN
    #OAUTH_CREDENTIALS = {
    #    'google': {
    #        'id': '854631142271-srib07p7ggb9d3q312257ub3vjjjk0eb.apps.googleusercontent.com',
    #        'secret': 'RxNi3UvBwumuFXPm5gmGOIqY'
    #    }
    #}

    #with open("app/config/client_secrets.json") as fd:
    #    OAUTH_DATA = load_json_file(fd)
    #OAUTH_CLIENT_ID = OAUTH_DATA["web"]["client_id"]
    #OAUTH_URI = OAUTH_DATA["web"]["auth_uri"]
    #OAUTH_TOKEN_URI = OAUTH_DATA["web"]["token_uri"]
    #OAUTH_CLIENT_SECRET = OAUTH_DATA["web"]["client_secret"]

    fireo.connection(from_file="C:/Users/Izabella.Varga/Downloads/oceanic-hangout-267217-dddf5d27745a.json")

app_config = {
    'development': DevelopmentConfig
}