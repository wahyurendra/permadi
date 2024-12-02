import os

DATABASE_USER = os.environ.get("DATABASE_USER", "root")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD", "root")
DATABASE_HOST = os.environ.get("DATABASE_HOST", "127.0.0.1:27017")
DATABASE_URI = f'mongodb+srv://muhammadjalaludin548:jAqGb0oc2VBZ0NOs@permadi.9xvaf.mongodb.net/?'

SECRET = os.getenv("SECRET", "Permadi")