CREATE TABLE users(
    id INTEGER NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE todos(
    id INTEGER NOT NULL PRIMARY KEY AUTO INCREMENT,
    description VARCHAR(500) NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO users(id, first_name, last_name, age)
VALUES (123, 'Alex', 'Miller', 25);



CREATE TABLE book_authors(
    book_id INTEGER,
    author_id INTEGER,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
)