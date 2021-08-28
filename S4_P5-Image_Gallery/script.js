let image = document.querySelector("img");
let whichPic = 0;
const picGallery = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg"];

function prevPic() {
    whichPic = whichPic - 1;
    if (whichPic == -1) {
        whichPic = 5;
    }
    image.setAttribute("src", picGallery[whichPic]);
}

function nextPic() {
    whichPic = whichPic + 1;
    if (whichPic == 6) {
        whichPic = 0;
    }
    image.setAttribute("src", picGallery[whichPic]);
}