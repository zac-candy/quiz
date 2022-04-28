# program to verify the functioning of the database

import sqlalchemy

#feed the questions database's url
url = "sqlite:///quiz.db"

#create an sqlalchemy engine and connect the obtained url to it
engine = sqlalchemy.create_engine(url)

#check the database connection
print("connected to the database")

# coding: utf-8
from sqlalchemy import Column, MetaData, Table, Text

metadata = MetaData()

t_questions = Table(
    'questions', metadata,
    Column('question', Text),
    Column('op1', Text),
    Column('op2', Text),
    Column('op3', Text),
    Column('op4', Text),
    Column('answer', Text)
)

