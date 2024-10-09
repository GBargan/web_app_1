from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/get_quote', methods = ['GET'])
def get_quote():
    quote = subprocess.run(['python3', 'llm_api.py'], capture_output=True, text=True)
    return jsonify({'output': quote.stdout})

if __name__ == '__main__':
    app.run(debug=True)