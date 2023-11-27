from flask import render_template, request, redirect, session
from flask_app.models.todos_model import Todo
from flask_app import app

@app.route('/home', methods=['GET'])
def home():
    if 'user_id' not in session:
        return redirect('/')
    list_todos = Todo.get_all()
    return render_template('home.html', list_todos = list_todos)

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

@app.route('/todo/remove/<int:id>', methods=['POST'])
def remove_todo(id):
    data = {
        "id" : id
    }
    Todo.delete_one(data)
    return redirect('/home')

@app.route('/todo/edit_form/<int:id>', methods=['GET'])
def edit_todo_form(id):
    if 'user_id' not in session:
        return redirect('/')
    data = {
        "id" : id
    }
    todo = Todo.get_one(data)
    return render_template('edit_todo_form.html', todo=todo)

@app.route('/todo/edit/<int:id>', methods=['POST'])
def edit_todo(id):
    data = {
        **request.form,
        "id" : id
    }
    Todo.edit_one(data)
    return redirect('/home')
