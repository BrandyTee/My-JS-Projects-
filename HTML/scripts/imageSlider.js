//Image Slider

let image = document.getElementById("image");
let next = document.getElementById("next");
let back = document.getElementById("back");

let images = ["wa.png", "w7.png", "de.png", "ar.png", "sb.png", "el.png", "mf.png", "wc.png", "le.png", "eg.png"];

let count = 0

next.addEventListener("click", moveNext);
back.addEventListener("click", moveBack);

function moveNext(e) {
    //Select image
    if (count < images.length - 1) {
        count ++;
        let newImage = images[count];
        image.src = `images/${newImage}`;
    } else if (count === images.length - 1) {
        count = 0;
        let newImage = images[count];
        image.src = `images/${newImage}`;
    }
    
}


function moveBack(e) {
    //Select image
    if (count > 0) {
        count --;
        let newImage = images[count];
        image.src = `images/${newImage}`;
    } else if (count === 0) {
        count = images.length - 1;
        let newImage = images[count];
        image.src = `images/${newImage}`;
    }
    
}











