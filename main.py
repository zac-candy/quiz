from flask import Flask, redirect, url_for, jsonify #import flask module

import sqlalchemy
from sqlalchemy import Table, Column, Integer, String, Text
from sqlalchemy.orm import mapper
# from yourapplication.database import metadata, db_session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base



url="sqlite:///quiz.db"
engine = sqlalchemy.create_engine(url)

db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


print("connected to database")
from sqlalchemy import Column,MetaData,Table,Text
metadata=MetaData()


class Question(Base):
    __tablename__ = 'questions'
    id = Column(Integer, primary_key = True)
    question = Column(Text)
    op1 = Column(Text)
    op2 = Column(Text)
    op3 = Column(Text)
    op4 = Column(Text)
    answer  = Column(Text)

    def __init__(self, question,op1,op2,op3,op4,answer):
        self.question = question
        self.op1 = op1
        self.op2 = op2
        self.op3 = op3
        self.op4 = op4
        self.answer = answer

    def getJSON(self):
        d= {
            "que": self.question,
            "ans": [self.op1,self.op2,self.op3,self.op4],
            "key":self.answer
        }
        return d

app = Flask(__name__) # create an instance of the flask web application


@app.route("/")  # its  a router. It takes us to the default domain page

#function definition

def home():
    f = open("index.html")
    text = f.read()
    f.close()
    return text

@app.route("/question")
def sendquestion():
    data = db_session.query(Question).all()
    q = []
    for row in data:
        q.append(row.getJSON())
    return jsonify(q)
    

@app.route("/answer/<op>")
def checkAnswer(op):
    if op=="1":
        d = {"answer":True}
    else :
        d = {"answer":False}
    return jsonify(d)




@app.route("/<name>")
def user(name):
    if name.endswith(".css") or name.endswith(".js"):
        g = open(name)
        t = g.read()
        g.close()
        return t
    else:    
        return f"Hello {name}"
    




    
if __name__  == "__main__": #to run the flask website
    app.run(debug= True) #get the program running

