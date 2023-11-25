from flask import render_template, request, redirect, session
from flask_app.models.todos_model import Todo
from flask_app import app


@app.route('/todo/form', methods=['GET'])
def display_todo_form():
    if 'user_id' not in session:
        return redirect('/')
    return render_template('todo_form.html')

@app.route('/todo/new', methods=['POST'])
def create_todo():
    data = {
        **request.form,
        "user_id" : session['user_id']
    }
    todo_id = Todo.create_one(data)
    return redirect('/home')