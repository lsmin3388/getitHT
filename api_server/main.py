from flask import Flask, request, jsonify
from sklearn import tree
from transeNum import rawD, clearD, fruitD, sojuD

from repository.clearRepo import datas, names
clfC = tree.DecisionTreeClassifier()
clfC = clfC.fit(datas, names)

from repository.rawRepo import datas, names
clfR = tree.DecisionTreeClassifier()
clfR = clfR.fit(datas, names)

from repository.fruitRepo import datas, names
clfF = tree.DecisionTreeClassifier()
clfF = clfF.fit(datas, names)

from repository.sojuRepo import datas, names
clfS = tree.DecisionTreeClassifier()
clfS = clfS.fit(datas, names)

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def calculate():

    data = request.json
    userData = [data['userData'][0]]
    alcoType = data['alcoType'][0]

    if alcoType == 'clear':
        result = clfC.predict(userData)
        result = clearD[result[0]]
    elif alcoType == 'raw':
        result = clfR.predict(userData)
        result = rawD[result[0]]
    elif alcoType == 'fruit':
        result = clfF.predict(userData)
        result = fruitD[result[0]]
    elif alcoType == 'soju':
        result = clfS.predict(userData)
        result = sojuD[result[0]]

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)