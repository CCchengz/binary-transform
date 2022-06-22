# binary-transform

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33e74b70c4d14aa2b6c3d6c4eb77be64~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)


#### 字符串与base64的相互转化
（1）window.btoa(): 用于创建一个 base-64 编码的字符串。该方法使用 "A-Z", "a-z", "0-9", "+", "/" 和 "=" 字符来编码字符串。

（2）window.atob(): 解码通过 base64 编码的字符串数据


#### base64与Blob/File的相互转化
（1）blob/file转化为base64,借助FileReader.readAsDataURL()
```
let fileReader = new FileReader();
fileReader.onload = function(e) {
    console.log(e.target.result);
}
fileReader.readAsDataURL(blob/file);
```
（2）除此之外，FileReader读取Blob/File还有其他读取方式
```
FileReader.readAsText(): 将 Blob 或者 File 对象转根据特殊的编码格式转化为内容 (字符串形式);
FileReader.readAsArrayBuffer();
```
（3）base64转换为blob/file
参考 base64ToBlob.js



