

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
        for x in range(1, 7):
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
        taller.w_address = "Calle Franciso, 3 Ciudad Real"
        taller.lat = 39
        taller.lng = -3
       #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(email="test_user_2@test.com").first()
        user.is_client = False
        taller = Taller()
        taller.w_name = "Taller Barcelona"
        taller.w_address = "Calle de Pau claris, Barcelona"
        taller.lat = 41
        taller.lng = 2
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(email="test_user_3@test.com").first()
        user.is_client = False
        taller = Taller()
        taller.w_name = "Taller Campera Motor"
        taller.w_address = "Calle Campera, 555 Cordoba"
        taller.lat = 37
        taller.lng = -5
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(email="test_user_4@test.com").first()
        user.is_client = False
        taller = Taller()
        taller.w_name = "El Taller"
        taller.w_address = "Calle Muelle, 33 Albacete"
        taller.lat = 36
        taller.lng = -2
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(email="test_user_5@test.com").first()
        user.is_client = False
        taller = Taller()
        taller.w_name = "Vigo Auto Talleres"
        taller.w_address = "Rúa Emilio Pardo Bazán, 67 Vigo"
        taller.lat = 42
        taller.lng = -9
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()

        user = User.query.filter_by(email="test_user_6@test.com").first()
        user.is_client = False
        taller = Taller()
        taller.w_name = "ReproRACE Tomelloso"
        taller.w_address = "Calle campo, 67 Tomelloso"
        taller.lat = 38
        taller.lng = -1
        #adding all services, but needs filtering
        taller.w_services = (Services.query.all())
        user.taller = taller
        db.session.add(user)
        db.session.commit()
        
        print("User Taller Update: ", user.email, " created.")


    @app.cli.command("services") # pipenv run flask services
    def insert_services_data():
        print("Creating Services and ECU")
        serviceecu = Services()
        serviceecu.name = "ECU"
        serviceecu.desc = ""
        db.session.add(serviceecu)
        servicemotor = Services()
        servicemotor.name = "Motor"
        servicemotor.desc = "Modificaciones de tubo de escape, admisión, colectores, silenciadores, etc."
        db.session.add(servicemotor)
        servicesonido = Services()
        servicesonido.name = "Sistema de sonido"
        servicesonido.desc = "Instalación de sistemas de sonido, pantallas e iluminación led."
        db.session.add(servicesonido)
        servicealerones = Services()
        servicealerones.name = "Alerones"
        servicealerones.desc = "Colación de todo tipo de alerones no metálicos para tu vehículo."
        db.session.add(servicealerones)
        servicepinturas = Services()
        servicepinturas.name = "Pinturas y vinilos"
        servicepinturas.desc = "Pinturas vinilos tuning para todo tipo de vehículos."
        db.session.add(servicepinturas)
        servicellantas = Services()
        servicellantas.name = "Llantas"
        servicellantas.desc = "Modificación de llantas de todo tipo y medidas totalmente homologadas."
        db.session.add(servicellantas)
        servicecarroceria = Services()
        servicecarroceria.name = "Carrocería"
        servicecarroceria.desc = "Alerones, entradas de aire, disminuciones de peso, parachoques delanteros, bajada de altura, etc."
        db.session.add(servicecarroceria)
        servicetintado = Services()
        servicetintado.name = "Tintado Lunas"
        servicetintado.desc = "Tintado de lunas homologadas varias tonalidades a elegír."
        db.session.add(servicetintado)
        db.session.commit()




        print("All services created")