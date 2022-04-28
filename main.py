from flask import Flask, redirect, url_for, jsonify #import flask module

app = Flask(__name__) # create an instance of the flask web application

@app.route("/")  # its  a router. It takes us to the default domain page

#function definition

def home():
    f = open("index.html")
    text = f.read();
    f.close()
    return text

@app.route("/question")

def sendquestion():
    d = {
        "que":"Q. Who is the father of computer",
        "ans":["Charles Babbage","Chandan","Prasthuth", "tejas"]
    }
    return jsonify(d)

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
