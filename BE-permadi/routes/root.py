from routes import app
from flask import request, jsonify


@app.route("/")
def get_root():
    """Permadi API"""
    # Message to the user
    message = {
        'apiVersion': 'v1.1',
        'message': 'Use /api/v1',
    }
    # Making the message looks good
    resp = jsonify(message)
    # Returning the object
    return resp


@app.route("/api/v1/")
def get_welcome():
    """Permadi API"""
    # Message to the user
    message = {
        'apiVersion': 'v1.1',
        'status': 'Online',
        'message': 'Welcome',
        'routesAvailables' : {
          '/api/v1/': [{'login' : ['/']}, {'/register': ['/']}, {'/machine': ['/', '/:id']}, {'/account': ['/', '/:id']}, {'/task' : ['/', '/:id']} ]
          }
    }
    # Making the message looks good
    resp = jsonify(message)
    # Returning the object
    return resp

@app.errorhandler(404)
def page_not_found(e):
    """Send 404 message."""
    # Message to the articles
    message = {
        "error": "This route is currently not supported."  
    }
    # Making the message looks good
    resp = jsonify(message)
    # Sending OK response
    resp.status_code = 404
    # Returning the article
    return resp
