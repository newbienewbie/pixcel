一句话简介：像素的艺术——把Excel每个单元格当作像素点来作画！

## 基本原理

1. Node.js 读取图片信息
2. Node.js 启动 CScript.exe 子进程，以标准输入输出机制传递信息
3. CScript 解释 JScript 代码，通过Excel 自动化接口对图像进行逐单元格（逐像素）绘制

## 示例

![screenshot](https://github.com/newbienewbie/pixcel/raw/master/screenshot.png)