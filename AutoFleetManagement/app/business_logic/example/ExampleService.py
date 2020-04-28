from app.core.entities.ExampleEntity import ExampleEntity
from app.data_access.example.ExampleAccess import ExampleAccess
from app.core.entities.ExampleEntity import ExampleEntity

class ExampleService:
    def getEntityById(id):
        try:
            exampleDTO = ExampleAccess.getById(id)
            if exampleDTO:
                return ExampleEntity(exampleDTO.id, exampleDTO.full_name, exampleDTO.email, exampleDTO.location)
            return None
        except Exception as exp:
            return None