
import click
from api.models import db, User, Taller, Services

from werkzeug.security import generate_password_hash
"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    @app.cli.command("adduser") # pipenv run flask adduser
    def adduser():
        print("Creating 2 test users")
        for x in range(1, 3):
            user = User()
            user.name = "test_user_name_" + str(x)
            user.email = "test_user_" + str(x) + "@test.com"
            hashed_password = generate_password_hash("admin")
            user.password = hashed_password
            user.is_client = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("addtaller") # pipenv run flask addtaller
    def addtaller():
        print("Updating _1 test talleres")
        
        user = User.query.filter_by(email="test_user_1@test.com").first()
        user.is_client = False

        taller = Taller()
        taller.w_name = "Mecánicos Paco"
        taller.w_address = "C:\Fake No 0"
        taller.lat = 39
        taller.lng = -3
        
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        
        user.taller = taller
        db.session.add(user)
        db.session.commit()
        
        print("User Taller Update: ", user.email, " created.")


    @app.cli.command("services") # pipenv run flask services
    def insert_services_data():
        print("Creating Services and ECU")
        service = Services()
        service.name = "ECU"
        service.desc = ""
        db.session.add(service)
        for x in range(1, 5):
            service = Services()
            service.name = "Servicio n: " + str(x)
            service.desc = "Desc ejemplo n: "+ str(x)
            db.session.add(service)
        
        db.session.commit()

        print("All services created")