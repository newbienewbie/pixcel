const getPixels=require('get-pixels');
const fs=require('fs');


function retrievePixelsFromImage(url){
    return new Promise(function(resolve,reject){
        getPixels(url,function(err,pixels){
            if(err){
                reject(err);
            }else{
                const shape=pixels.shape;
                const w=shape[0];
                const h=shape[1];
                const c=shape[2];
                const pix=[];
                for(var i=0;i<w;i++){
                    const row=[];
                    for(var j=0;j<h;j++){
                        const color=[pixels.get(i,j,0),pixels.get(i,j,1),pixels.get(i,j,2),pixels.get(i,j,3)];
                        row.push(color);
                    }
                    pix.push(row);
                }
                resolve(pix);
            }
        });
    });
}


module.exports={retrievePixelsFromImage};