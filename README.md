## Install Node Module First

npm i

## Run the Application

node index

## Test the Application

npm test

## Instructions

`class-store.js` will have file operations (CRUD) related methods encapsulated in a class

`handler.js` will have routing methods (GET, POST, PUT, DELETE) to access the file operation methods

So the endpoints to do the demo of this application as

All endpoints must have Header `Content-Type: application/json` If you send a data along with

## To write a new data into file store

POST http://localhost:3000/store
{
"name": "Satheesh R",
"age": 28,
"expiresIn": 300 // optional
}

## To get all file store data

GET http://localhost:3000/store

## To get particular record by key

GET http://localhost:3000/store/c49d672b631f460993ec292bcc7703fc
c49d672b631f460993ec292bcc7703fc - is auto generated 32-charecters key

## To update particular record by key

PUT http://localhost:3000/store/c49d672b631f460993ec292bcc7703fc
{
"name": "Satheesh R",
"age": 28,
"expiresIn": 300 // optional
}

## To delete particular record by key

DELETE http://localhost:3000/store/c49d672b631f460993ec292bcc7703fc
