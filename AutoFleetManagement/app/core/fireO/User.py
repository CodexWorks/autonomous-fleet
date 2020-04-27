from fireo.models import Model
from fireo.fields import TextField

class User(Model):
    username = TextField()
    email = TextField()

    def __init__(self, username = None, email = None):
        self.username = username
        self.email = email


