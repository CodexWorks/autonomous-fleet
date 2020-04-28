import os
from configparser import ConfigParser

import sqlalchemy

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    # Flask
    SECRET_KEY = 'SECRET_KEY'
    TEMPLATES_AUTO_RELOAD = True
    DEBUG = True

    path = os.path.dirname(os.path.abspath(__file__))
    os.chdir(path)

    # Create a parser
    parser = ConfigParser()

    # Read config file
    parser.read("app/config/credentials.ini")

    # Get section, default to postgresql
    db = {}
    section = 'postgresql'
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0].encode('utf-8')] = param[1].encode('utf-8')

    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(params[2][1], params[3][1], params[0][1], \
                     int(params[4][1]), params[1][1])

    # Connect to the PostgreSQL server
    #con = sqlalchemy.create_engine(url, client_encoding='utf8')



    SQLALCHEMY_DATABASE_URI = url
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    #Flask-Assets
    ASSETS_DEBUG = False

    #Flask-Script
    APP_FOLDER = "app/"
