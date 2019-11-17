window.onload=function () {

    var wCenterDl = document.getElementById('wCenterDl');
    var starbuckJsonArr = []
    for (var i in starbucksJson) {
        starbuckJsonArr.push(i)
    }
    //循环对应食品的图片、中文名、英文名
    wCenterDl.children[1].children[1].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[0]].preview + '';
    wCenterDl.children[1].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].title + '';
    wCenterDl.children[1].children[2].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].body + '';
}