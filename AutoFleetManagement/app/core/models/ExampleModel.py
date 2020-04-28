from app import db

class Example(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(64))
    email = db.Column(db.String(120))
    location = db.Column(db.String(128))
