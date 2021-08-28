let backgroundImg = document.querySelector(".homeBackground");
let whichBack = 2;

setInterval (function() {
    if (whichBack == 1) {
        backgroundImg.style.background = "url(assets/background1.jpg) center center no-repeat";
        whichBack++;
    } else if (whichBack == 2) {
        backgroundImg.style.background = "url(assets/background2.jpg) center center no-repeat";
        whichBack++;
    } else {
        backgroundImg.style.background = "url(assets/background3.jpg) center center no-repeat";
        whichBack = 1;
    };
}, 3000)