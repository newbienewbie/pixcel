const fs=require('fs');
const path=require('path');
const {retrievePixelsFromImage} =require('./lib/pix');
const {send}=require('./lib/comm');

const filename=path.join("C:/Users/itminus/personal info/Sniper .jpg");

retrievePixelsFromImage(filename)
    .then(pixels=>{
        const obj={
            pixels,
            filename,
        };
        send(JSON.stringify(obj));
    })