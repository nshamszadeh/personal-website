"""
export FLASK_APP=app.py
export FLASK_ENV=development (for manual server refreshes during code changes)
flask run
"""
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
  return {
    'userId': 1,
    'title': 'Flask React Application'
  }


"""
  return {
    'userId': 1,
    'title': 'Flask React Application',
    'completed': False
  }
"""