
class Book:
    # Class attribute
    all_books = []

    # Constructor
    def __init__(self, title, authors, chapters, edition):
        # Instance attributes
        self.title = title
        self.authors = authors
        self.chapters = chapters
        self.edition = edition
        Book.all_books.append(self)

    # Instance method
    def print_info(self):
        print(f"Title: {self.title}")
        print(f"Authors: {self.authors}")
        print(f"Chapters: {self.chapters}")
        print(f"Edition: {self.edition}")

    @classmethod
    def print_all_books(cls):
        for book in cls.all_books:
            book.print_info()


book_a = Book('Book A', ['Alan', 'Roger'], 10, 2)
book_b = Book('Book B', ['Alan'], 12, 5)
book_c = Book('Book C', ['Roger'], 120, 1)

Book.print_all_books()

"""
print(book_a)
book_a.print_info()

book_a.title = 'Book AAAA'
book_a.print_info()

print(book_a.title)
"""