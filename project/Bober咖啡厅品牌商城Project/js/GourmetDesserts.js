// console.log(starbucksJson["/menu/beverages/coffee-plus-ice-cream/affogato"].title);
window.onload=function () {
    var wFoodUl = document.getElementById('wFoodUl');
    var wCoffeeUl = document.getElementById('wCoffeeUl');
    var starbuckJsonArr = []
    for (var i in starbucksJson) {
        starbuckJsonArr.push(i)
    }
    // console.log(starbuckJsonArr)//38开始是吃的
    //循环对应食品的图片、中文名、英文名
    for (var j = 0; j < wFoodUl.children.length; j++) {
        wFoodUl.children[j].children[0].children[0].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[j + 38]].preview + '';
        wFoodUl.children[j].children[0].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[j + 38]].title + '';
        wFoodUl.children[j].children[0].children[2].innerHTML = '' + starbuckJsonArr[j + 38].split('/')[4] + '';
    }

    wCoffeeUl.children[0].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[3]].preview + '';
    wCoffeeUl.children[2].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[2]].preview + '';
    wCoffeeUl.children[5].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[5]].preview + '';
    wCoffeeUl.children[7].children[0].src = 'https://www.starbucks.com.cn' + '' + starbucksJson[starbuckJsonArr[0]].preview + '';

    wCoffeeUl.children[1].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[3]].title + '';
    wCoffeeUl.children[1].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[3]].body + '';

    wCoffeeUl.children[3].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[2]].title + '';
    wCoffeeUl.children[3].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[2]].body + '';

    wCoffeeUl.children[4].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[5]].title + '';
    wCoffeeUl.children[4].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[5]].body + '';

    wCoffeeUl.children[6].children[0].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].title + '';
    wCoffeeUl.children[6].children[1].innerHTML = '' + starbucksJson[starbuckJsonArr[0]].body + '';
}