from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE

class Todo:
    def __init__(self, data):
        self.id = data["id"]
        self.description = data["description"]
        self.status = data["status"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
    
    @classmethod
    def create_one(cls, data):
        query = """
                INSERT INTO todos(description, status, user_id)
                VALUES (%(description)s, %(status)s, %(user_id)s);
                """
        todo_id = connectToMySQL(DATABASE).query_db(query, data)
        return todo_id
    
    @classmethod
    def get_all(cls):
        query = """
                SELECT * 
                FROM todos;
                """
        results = connectToMySQL(DATABASE).query_db(query)
        list_todos = []
        for row in results:
            list_todos.append(cls(row))
        return list_todos
    
    @classmethod
    def delete_one(cls, data):
        query = """
                DELETE FROM todos
                WHERE id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_one(cls, data):
        query = """
                SELECT *
                FROM todos
                WHERE id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        return cls(result[0])
    
    @classmethod
    def edit_one(cls, data):
        query = """
                UPDATE todos
                SET description = %(description)s, status = %(status)s
                WHERE id = %(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query, data)