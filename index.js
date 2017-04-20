const fs=require('fs');
const path=require('path');
const {retrievePixelsFromImage} =require('./lib/pix');
const {send}=require('./lib/comm');

const filename=path.join("C:/Users/itminus/personal info/1.png");
const saveas=path.join("C:/Users/itminus/personal info/1.xlsx");

retrievePixelsFromImage(filename)
    .then(pixels=>{
        const obj={
            pixels,
            filename:saveas,
        };
        send(JSON.stringify(obj));
    })