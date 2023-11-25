from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
import re

class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.email = data["email"]
        self.password = data["password"]
    
    @classmethod
    def create_one(cls, data):
        query = """
                INSERT INTO users(first_name, last_name, email, password)
                VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);
                """
        user_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_id
    
    @classmethod
    def get_one(cls, data):
        query = """
                SELECT *
                FROM users
                WHERE email = %(email)s;
                """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) > 0:
            return cls(results[0])
        return None
    
    @staticmethod
    def validate_registration(data):
        is_valid = True
        if len(data['first_name']) < 3:
            flash("Please provide your first name", "first_name_error")
            is_valid = False
        if len(data['last_name']) < 3:
            flash("Please provide your last name", "last_name_error")
            is_valid = False
        if data['password'] != data['password_confirmation']:
            flash("Your passwords do not match", "password_error")
            is_valid = False
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(data['email']):
            flash("Please provide a valid email", "email_error")
            is_valid = False
        
        return is_valid