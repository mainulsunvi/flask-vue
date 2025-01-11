from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='../static', template_folder='../templates')
# CORS(app)

@app.route('/')
def index():

    data = { "name" : "Fask + Vue Js + 🌞✌" }
    return render_template('index.html', data=data)

@app.route('/api/data')
@cross_origin()
def api_data():

    data = { "name" : "Fask + Vue Js + 🌞✌" }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
