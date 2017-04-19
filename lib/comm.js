const spawn=require('child_process').spawn;
const path=require('path');
const iconv=require('iconv-lite');


// execute wsh script
const p=path.join(__dirname,"jscript/index.wsf");
const jscript=spawn('cscript.exe',[p]);


// stdout
jscript.stdout.on('data',(data)=>{
    console.log(iconv.decode(data,"gbk"));
});

// stderr
jscript.stderr.on('data',(data)=>{
    console.log('error: ',iconv.decode(data,"gbk"));
});


function send(msg){
    const buffer=new Buffer(msg);
    jscript.stdin.end( iconv.encode(buffer,"gbk"))
}



module.exports={send};