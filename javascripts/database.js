"use strict";

function getBlogs() {

    return new Promise(function(resolve, reject) {
        $.ajax({
            url: '../blogs.json'
        }).done(function(data){
            console.log('sucess', data);
            resolve(data);
        }).fail(function(data) {
            reject('something went wrong', data);
        });
    });
}

module.exports = {getBlogs};
