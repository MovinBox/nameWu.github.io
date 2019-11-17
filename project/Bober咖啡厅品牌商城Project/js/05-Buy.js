window.onload=function () {

    var wCenterBuy = document.getElementById('wCenterBuy');
    var starbuckJsonArr = []
    for (var i in starbucksJson) {
        starbuckJsonArr.push(i)
    }
    //循环对应食品的图片、中文名、英文名
    wCenterBuy.children[3].children[0].children[1].children[0].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[0]].preview + '';
    wCenterBuy.children[3].children[0].children[1].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].title + '';
}