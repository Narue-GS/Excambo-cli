from flask import Flask, render_template
from flask_cors import CORS

import psycopg2

con = psycopg2.connect(host='localhost', database='fm',  user='postgres', password='3321')
gres = con.cursor()
app = Flask(__name__)
CORS(app)


def question():
    print("Howdy my friend!\nhow do I look in the web?lmao")
    a = input(": ")
    return a


@app.route("/get_all_users")
def get_all_users():    
    sql = "SELECT * FROM users"
    gres.execute(sql)
    return gres.fetchall()


if __name__=="__main__":
    app.run(debug=True)
