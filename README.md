# Short Url
## Introduction
[Node.JS](https://nodejs.org/en/) | [Express](https://expressjs.com/)<br/>
This is my repository built with Node JS, and the Express Framework for the short url service
#### What is Node.JS ?<br/>
Node.js is a platform used for developing web-based applications. This platform uses JavaScript as its programming language which was designed by Ryan Dahl
#### What is Express ?<br/>
express is a web framework used to create a RESTful API, the excellence of which is:<br/>
1. Support for middleware creation<br/>
2. Support for various HTTP verbs such as POST, GET, PUT, DELETE, OPTION, HEAD, and others<br/>
3. Jade template engine is installed<br/>
4. Static file management such as CSS and Javascript
## Requirements
1. `npm` (node package manager)<br/>
2. `npm i -s express` (from npm)
## How to make a short url ?
1. open the postman application<br/>
2. input this RESTful API `https://shorurl12.herokuapp.com/create` in postman with the post method<br/>
3. enter in the postman url body as a key and value, for example : `{url : https://www.mongodb.com/cloud/atlas}`<br/>
4. sample results : `https://shorurl12.herokuapp.com/mDlAG00Nh` protocol and headears will follow their respective host
