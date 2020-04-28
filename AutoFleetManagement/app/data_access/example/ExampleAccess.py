from app import db
from app.core.models.ExampleModel import Example


class ExampleAccess:
    @staticmethod
    def save(email, full_name, location):
        newEntity = Example(full_name=full_name, email=email, location=location)
        db.session.add(newEntity)
        db.session.commit()

    @staticmethod
    def getById(id):
        model =  Example.query.filter_by(id=id).first()
        #result = example_schema.dumps(model).data
        return model
