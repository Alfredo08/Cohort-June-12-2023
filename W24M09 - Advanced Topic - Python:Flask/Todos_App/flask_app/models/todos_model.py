from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE

class Todo:
    def __init__(self, data):
        self.id = data["id"]
        self.description = data["name"]
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