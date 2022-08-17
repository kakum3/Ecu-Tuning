from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_client = db.Column(db.Boolean(), unique=False, nullable=False)
    id_taller= db.Column(db.Integer, db.ForeignKey('taller.id'),
        nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "taller_id":self .id,
            "is_client":self .is_client,
            "name":self.name
            


            # do not serialize the password, its a security breach
        }

class Taller(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.String(200), unique=True, nullable=False)
    datos_taller = db.Column(db.String(200), unique=True, nullable=False)
    lista_servicios = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "datos_taller": self.datos_taller,
            "lista_servicios": self.lista_servicios,
        }