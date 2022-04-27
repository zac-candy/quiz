from flask import Flask, redirect, url_for #import flask module

app = Flask(__name__) # create an instance of the flask web application

@app.route("/")  # its  a router. It takes us to the default domain page

#function definition

def home():
    return "Welcome to REVA university"

@app.route("/<name>")
def user(name):
    return f"Hello <h1>{name}</h1>" #We are using a formatted string



@app.route("/admin")
def admin():
    return redirect(url_for("user", name = "aDMin"))

    
if __name__  == "__main__": #to run the flask website
    app.run(debug= True) #get the program running
