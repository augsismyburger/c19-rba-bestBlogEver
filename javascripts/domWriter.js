"use strict";

let   Handlebars = require("hbsfy/runtime"),
      blogTemplate = require("../templates/blog.hbs");

function writeBlog(data) {
    return new Promise(function(resolve, reject) {
        $('#pageContent').html(blogTemplate(data));
        resolve();
    });
}

module.exports = {writeBlog};
