var excel={};

!function(){

    /**
     * ����ɫ����(r,g,b,alpha)�н�����ɫ(����)
     * @param {Array} array 
     * @return {Number}
     */
    function parseColor(array){
        var r=parseInt(array[0]);
        var g=parseInt(array[1]);
        var b=parseInt(array[2]);
        var a=parseInt(array[3]);
        
        var color=Number(r)*1
            + Number(g)*256
            + Number(b)*65536;
        return color;
    }


    function draw(filename,pixes){
        
        var app=new ActiveXObject("Excel.Application");
        var book=app.Workbooks.Add();
        app.Visible=true;

        // �����������������Excel����
        var colsCount=pixes.length;
        // �����������������Excel����
        var rowsCount=pixes[0].length;
        WScript.Echo('excel rowsCount:'+rowsCount+"\tcolsCount:"+colsCount);
        try{
            //�����и�
            for(var i=0;i<rowsCount;i++){
                var row=app.ActiveSheet.Rows(i+1);
                row.RowHeight=0.50;
            }
            // �����п�
            for(var j=0;j<colsCount;j++){
                var column=app.ActiveSheet.Columns(j+1);
                column.ColumnWidth=0.06;
            }
            
            // ����
            for(var i=0;i<colsCount;i++){
                WScript.Echo('���ڻ��Ƶ�:'+(i+1)+" ��");
                for(var j=0;j<rowsCount;j++){
                    var color=parseColor(pixes[i][j]);
                    var cell=app.Cells(j+1,i+1);
                    cell.Interior.Color=color;
                }
            }

            book.SaveAs(filename);
            book.Close();
        }catch(e){
            WScript.Echo(e.getMessge());
            book.Close();
        }
    }
    excel.draw=draw;

}();