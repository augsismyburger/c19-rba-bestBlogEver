"use strict";

let db = require('./database'),
    DOM = require('./domWriter');

let blogTarget = $('#pageContent');

db.getBlogs()
.then( function(data) {
   return DOM.writeBlog(data);
}).then(function() {
    return console.log('all finshed');
});