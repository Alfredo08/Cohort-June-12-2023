from flask import render_template, request, redirect, session, flash
from flask_app.models.users_model import User
from flask_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/', methods=['GET'])
def login_registration():
    return render_template('index.html')

@app.route('/home', methods=['GET'])
def home():
    if 'user_id' not in session:
        return redirect('/')
    return render_template('home.html', list_todos = [])

@app.route('/user/new', methods=['POST'])
def create_user():
    if User.validate_registration(request.form) == False:
        return redirect('/')
    encrypted_password = bcrypt.generate_password_hash(request.form['password'])
    new_user = {
        **request.form,
        "password" : encrypted_password
    }
    user_id = User.create_one(new_user)
    session['user_id'] = user_id
    session['first_name'] = new_user['first_name']
    session['last_name'] = new_user['last_name']
    return redirect('/home')

@app.route('/login', methods=['POST'])
def process_login():
    data = {
        "email": request.form['email_login']
    }
    current_user = User.get_one(data)
    if current_user == None:
        flash("This email doesn't exist", "password_login_error")
        return redirect('/')
    if not bcrypt.check_password_hash(current_user.password, request.form['password_login']):
        flash("Wrong credentials", "password_login_error")
        return redirect('/')
    session['user_id'] = current_user.id
    session['first_name'] = current_user.first_name
    session['last_name'] = current_user.last_name
    return redirect('/home')

@app.route('/logout', methods=['POST'])
def process_logout():
    session.clear()
    return redirect('/')