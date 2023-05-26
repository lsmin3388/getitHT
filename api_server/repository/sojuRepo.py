import json

JSON = 'datalib/soju.json'

with open(JSON, 'r') as f:
    data = json.load(f)
names = []
datas = []
for d in data:
    names.append(d[0])
    datas.append([d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]])

print(datas)