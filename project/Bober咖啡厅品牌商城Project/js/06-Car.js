window.onload=function () {

    var wOrderDl = document.getElementById('wOrderDl');
    var starbuckJsonArr = []
    for (var i in starbucksJson) {
        starbuckJsonArr.push(i)
    }
    //循环对应食品的图片、中文名、英文名
    wOrderDl.children[1].children[1].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[0]].preview + '';
    wOrderDl.children[1].children[2].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].title + '';
}