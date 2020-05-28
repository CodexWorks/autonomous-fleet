from flask import Blueprint, request, jsonify

example = Blueprint('example', __name__)

@example.route("/get_auction_house", methods=["GET"])
def get_auction_house():
    return jsonify('This is auction house module.')

@example.route("/get_logistics_erp", methods=["GET"])
def get_logistics_erp():
    return jsonify('This is logistics erp module.')