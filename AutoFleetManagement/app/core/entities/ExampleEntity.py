import json


class ExampleEntity(object):
    def __init__(self, id, full_name, email, location):
        self.id = id
        self.full_name = full_name
        self.email = email
        self.location = location

    def to_dict(self):
        example = {
            'id': self.id,
            'full_name': self.full_name,
            'email': self.email,
            'location':self.location
        }
        return example

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)

