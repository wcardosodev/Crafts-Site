var slideIndex = 0;
//showSlides();

var imagesPath = './images/products/';

// document.getElementById("box-frames").onmouseover = async function() {
//     //get current item
//     var currentItem = document.getElementById("box-frames").className;
//     var i = parseInt(currentItem);
//     while (i <= 4) {
//         showImages("box-frames", imagesPath + 'frames/box/', i)
//         await sleep(2000)
//         i += 1;
//         document.getElementById("box-frames").className = i;
//     }
//     showImages("box-frames" ,imagesPath + 'frames/box/', 1);
//     document.getElementById("box-frames").className = 1;
// }

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function showImages(item, path, length) {
    var i = length
    document.getElementById(item).src = path + i + '.jpg';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }