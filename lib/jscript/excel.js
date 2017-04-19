var excel={};

!function(){

    /**
     * 从颜色数组(r,g,b,alpha)中解析颜色(整数)
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

        // 这里像素数组的列是Excel的行
        var colsCount=pixes.length;
        // 这里像素数组的行是Excel的列
        var rowsCount=pixes[0].length;
        WScript.Echo('excel rowsCount:'+rowsCount+"\tcolsCount:"+colsCount);
        try{
            //设置行高
            for(var i=0;i<rowsCount;i++){
                var row=app.ActiveSheet.Rows(i+1);
                row.RowHeight=0.50;
            }
            // 设置列宽
            for(var j=0;j<colsCount;j++){
                var column=app.ActiveSheet.Columns(j+1);
                column.ColumnWidth=0.06;
            }
            
            // 设置
            for(var i=0;i<colsCount;i++){
                WScript.Echo('正在绘制第:'+(i+1)+" 列");
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