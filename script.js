function convertChar() {
    var charInput = document.getElementById("charInput").value;
    
    if (charInput.length !== 1) {
        alert("输入无效，请输入一个字符。");
        return;
    }

    var firstChar = charInput.charAt(0);

    // 转换为 UTF-8 编码的字节数组
    var utf8Bytes = [];
    for (var i = 0; i < firstChar.length; i++) {
        utf8Bytes.push(firstChar.charCodeAt(i));
    }

    var utf8Result = "UTF-8 编码：" + utf8Bytes.join(" ");
    document.getElementById("utf8Result").innerHTML = utf8Result;

    // 转换为 Unicode 编码的字符值
    var unicodeResult = "Unicode 编码：" + firstChar.charCodeAt(0);
    document.getElementById("unicodeResult").innerHTML = unicodeResult;
    //Alt
    var altCodeResult = "Alt 代码：" + getAltCode(firstChar);
    document.getElementById("altCodeResult").innerHTML = altCodeResult;
    //Test1
    var Test ="unicodeT111111:" + firstChar.fromCharCode(0);
    document.getElementById("1").innerHTML = Test;
}

function getAltCode(char) {
    return "Alt+0" + char.charCodeAt(0);
}






