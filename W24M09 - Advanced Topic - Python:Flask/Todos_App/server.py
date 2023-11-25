from flask_app import app
from flask_app.controllers import users_controller, todos_controller

app.run(debug=True, port=5001)