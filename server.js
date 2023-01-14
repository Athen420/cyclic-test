/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Allan Mathew John Student ID: 159852219 Date: 1-13-2023
*
*  Online (Cyclic) URL: _______________________________________________________
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Allan Mathew John - 159852219");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);