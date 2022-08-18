
import click
from api.models import db, User, Taller, Services

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
            user.password = "admin"
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
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        taller.user_id = user.id
        db.session.add(taller)
        db.session.add(user)
        db.session.commit()
        
        print("User Taller Update: ", user.email, " created.")


    @app.cli.command("services") # pipenv run flask services
    def insert_services_data():
        print("Creating Services")
        for x in range(1, 5):
            service = Services()
            service.name = "Servicio n: " + str(x)
            service.desc = "Desc ejemplo n: "+ str(x)
            db.session.add(service)
            db.session.commit()

        print("All services created")