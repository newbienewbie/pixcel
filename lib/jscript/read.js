// read stream from stdin 

var input={};

!function(){

    /**
     * 从标准输入接收主进程传来的参数
     */
    function receive(){
        var str="";
        while(!WScript.StdIn.AtEndOfStream){
            str+=WScript.StdIn.Read(1);
        }
        WScript.echo(str);
        var result=JSON.parse(str);
        return result;
    }
    input.receive=receive;
}();