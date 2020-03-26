let bigImg = document.getElementsByClassName('img')[0],
    swiper = document.getElementsByClassName('liderWrap')[0],
    left = document.getElementsByClassName('lfbtn')[0],
    right = document.getElementsByClassName('rtbtn')[0],
    oUl = document.getElementsByClassName('item-small-wrap')[0],
    oLi = oUl.getElementsByTagName('li'),
    arr = ["./images/banner1.jpg", "./images/banner2.jpg", "./images/banner3.jpg", "./images/banner4.jpg"],
    oA = ['http://www.JD.com', 'http://www.baidu.com', 'http://www.JD.com', 'http://www.baidu.com'],
    index = 0,
    len = arr.length,
    timer;
runSwiper();
//轮播函数
function runSwiper() {
    timer = setInterval(() => {
        deleteDot();
        index++;
        if (index > 3) {
            index = 0;
        }
        oLi[index].className = 'active';
        bigImg.setAttribute('src', arr[index]);
    }, 3000);
}
//离开图片
swiper.addEventListener('mouseover', () => {
    clearInterval(timer);
}, false);
//离开图片
swiper.addEventListener('mouseleave', () => {
    runSwiper();
}, false);

//左按钮实现
left.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    bigImg.setAttribute('src', arr[index]);
    deleteDot();
    oLi[index].className = 'active';
}, false);
// 右按钮实现
right.addEventListener('click', () => {
    index++;
    if (index > 3) {
        index = 0;
    }
    bigImg.setAttribute('src', arr[index]);
    deleteDot();
    oLi[index].className = 'active';
}, false);

// 取消选择点的样式
function deleteDot() {
    for (let i = 0; i < len; i++) {
        oLi[i].className = '';
    }
}

//点击小圆点切换图片
for (let i = 0; i < oLi.length; i++) {
    oLi[i].onclick = function () {
        deleteDot();
        oLi[i].className = 'active';
        index = i;
        bigImg.setAttribute('src', arr[index]);
    }
}