from app import create_app
from app.models import db
from dotenv import load_dotenv
load_dotenv()

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
