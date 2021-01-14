"""
export FLASK_APP=app.py
export FLASK_ENV=development (for manual server refreshes during code changes)
flask run
"""
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/') # '/' is added to the url of the website
def index():
  return render_template('index.html')

@app.route('/technicals')
def technicals():
  return 'This is a page for various technical writeups I\'ve done while in university'

@app.route('cool-stuff')
def cool_stuff():
  return 'This is a page to store small js programs you make'
