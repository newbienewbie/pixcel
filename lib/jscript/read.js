// read stream from stdin 

var input={};

!function(){

    /**
     * �ӱ�׼������������̴����Ĳ���
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