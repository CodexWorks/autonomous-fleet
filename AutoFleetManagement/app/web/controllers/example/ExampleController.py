from flask import Blueprint, request, jsonify

from app.business_logic.example.ExampleService import ExampleService

example = Blueprint('example', __name__)

# http://localhost:5000/example/getById=1 (GET)
@example.route("/getById=<id>", methods=["GET"])
def getById(id):
    entity = ExampleService.getEntityById(id)
    return entity.toJson()