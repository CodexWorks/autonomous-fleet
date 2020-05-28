import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    # Flask
    SECRET_KEY = 'SECRET_KEY'
    TEMPLATES_AUTO_RELOAD = True
    DEBUG = True

    path = os.path.dirname(os.path.abspath(__file__))
    os.chdir(path)

    # Flask-Assets
    ASSETS_DEBUG = False

    # Flask-Script
    APP_FOLDER = "app/"
