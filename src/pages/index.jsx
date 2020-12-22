import React from 'react';
var fs = require('fs');

var list = ``;
var i = 0;
fs.readdir(`./video`, function(error, filelist){
    while(i < filelist.length){
    list = list + `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <video controls src="video/${filelist[i]}"></video>
        <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
            </div>
        </div>
        </div>
    </div>`
    i = i + 1;
    }
})

class Index extends React.Component{        
    render(){
        return list;
    }
}

export default Index;