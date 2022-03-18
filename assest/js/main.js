var nextImg = document.getElementById('slider__next');
var returnImg = document.getElementById('slider__return')

var i = 0;
nextImg.addEventListener('click', function() {
    var imgs = ['./assest/img/4-IMG_104221-680x460-594x427.jpg', './assest/img/4-IMG_104221-680x460-300x160.jpg', './assest/img/photodune-903822-meal-s-300x160.jpg'];
    i++

    function changeImg() {
        if (i < imgs.length) {
            document.getElementById('slider__img').style.backgroundImage = 'url(' + imgs[i] + ')';
        } else {
            i = 0;
            changeImg();
        }
    }
    changeImg();
});
returnImg.addEventListener('click', function() {
    var imgs = ['./assest/img/4-IMG_104221-680x460-594x427.jpg', './assest/img/4-IMG_104221-680x460-300x160.jpg', './assest/img/photodune-903822-meal-s-300x160.jpg'];
    i--;

    function changeImg() {
        if (i >= 0) {
            document.getElementById('slider__img').style.backgroundImage = 'url(' + imgs[i] + ')';
        } else {
            i = imgs.length - 1;
            changeImg();
        }
    }
    changeImg();
});