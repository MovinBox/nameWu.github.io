window.onload=function () {

    var wCenterDl = document.getElementById('wCenterDl');
    var starbuckJsonArr = []
    for (var i in starbucksJson) {
        starbuckJsonArr.push(i)
    }
    //循环对应食品的图片、中文名、英文名
    for (var j = 1; j < wCenterDl.children.length; j++) {
        wCenterDl.children[j].children[0].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[j]].preview + '';
        wCenterDl.children[j].children[0].children[1].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[j]].title + '';
        wCenterDl.children[j].children[0].children[1].children[1].innerHTML = '' + starbuckJsonArr[j].split('/')[4] + '';
    }
}