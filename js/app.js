'use strict';

/* Function Definitions */

function prodImagePath(productName) {
    var imageExtension = "jpg";
    if (productName === "sweep") {
        imageExtension = "png";
    } else if (productName === "usb") {
        imageExtension = "gif";
    }
    return `img/${productName}.${imageExtension}`;
} 

function displayImage() {
    var prodDisplay = document.getElementById("display");
    var prodImage = document.createElement("img");
    var index = Math.floor(Math.random() * products.length);
    var imageSource = prodImagePath(products[index]);
    prodImage.setAttribute("src", imageSource);
    prodImage.setAttribute("id", products[index]);
    prodImage.addEventListener("click", handler);
    prodDisplay.appendChild(prodImage);
}

function handler(event) {
    var search = event.target.id;
    console.log(search);
    for (var k = 0; k < productData.length; k++) {
        if (search === productData[k].name) {
            productData[k].click++;
            console.log(`${search} has been clicked ${productData[k].click} time(s).`);
            break;
        }
    }
}

/* Object Constructor */
function Product(name) {
    this.name = name;
    this.click = 0;
    this.shown = 0;
    productData.push(this);
}


var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn','usb', 'water-can', 'wine-glass' ];
var displayCount = 3;
var productData = [];
var click = 0;

// Display 3 images
for (var i = 0; i < displayCount; i++) {
    displayImage();
}

// Create an object for each product
for (var j = 0; j < products.length; j++) {
    var productModel = new Product(products[j]);
}