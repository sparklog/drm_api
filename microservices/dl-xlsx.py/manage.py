import os
from dotenv import load_dotenv
from flask_script import Manager

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')

if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

from app import create_app

app = create_app(os.getenv('FLASK_ENV') or 'development')
manager = Manager(app)

if __name__ == '__main__':
    manager.run()
