from flask import Flask, flash, redirect, render_template, request, session, jsonify, Markup, abort
import json


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#!/usr/bin/env python
# coding: utf-8

# In[1]:



arr=[]
headers = []

f = open('Workbook_fifa.csv','r', errors = 'ignore')
for header in f.readline().split(','):
 headers.append(header)

#path = "purchase_data.csv"


for header in f.readline().split(','):
 headers.append(header)

for line in f.readlines():
 lineItems = {}
 for i,item in enumerate(line.split(',')):
   lineItems[headers[i]] = item
 arr.append(lineItems)

f.close()

jsonText = json.dumps(arr)

 

@app.route('/')
def home():
   #dat=jsonText
   #return "Hello"
   return render_template("index.html",dat=Markup(jsonText))

if __name__ == "__main__":
   app.run(debug=True)


