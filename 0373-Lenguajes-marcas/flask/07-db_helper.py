import sqlite3
from flask import g

DATABASE = "my_database.db"


def init_db(app):
    print("Initialising DB")
    with sqlite3.connect(DATABASE) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                edad INTEGER NOT NULL
            )
        """)
        conn.commit()

    # Register teardown to close per-request connections
    @app.teardown_appcontext
    def close_db(exception):
        db = g.pop("db", None)
        if db is not None:
            db.close()



def get_db():
    """
    Return a SQLite connection for the current request, stored in g.
    Automatically closed by teardown function.
    """
    if "db" not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row  # allows access by column name
    return g.db