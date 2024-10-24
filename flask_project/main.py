from flask import Flask,render_template,request,redirect,session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///login.db'
app.config['SECRET_KEY']=os.urandom(24)
db=SQLAlchemy(app)

migrate=Migrate(app,db)

#table route
class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False)
    username=db.Column(db.String(80),unique=True,nullable=False)
    password=db.Column(db.String(80),nullable=False)


# define home route
@app.route('/')
def home():
    return render_template('index.html')

# define another route
@app.route('/rescue')
def rescue():
    return render_template('index.html')

@app.route('/medical')
def medical():
    return render_template('medical.html')

@app.route('/food_supply')
def food_supply():
    return render_template('food.html')

@app.route('/shelter')
def shelter():
    return render_template('shelter.html')

@app.route('/lost_one')
def lost_one():
    return render_template('index.html')








if __name__=='__main__':
    app.run(debug=True)