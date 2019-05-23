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

function createImage(index) {
    var prodDisplay = document.getElementById("display");
    var prodImage = document.createElement("img");
    var productVote;
  
    var imageSource = prodImagePath(products[index]);
    prodImage.setAttribute("src", imageSource);
    prodImage.setAttribute("id", products[index]);
    prodImage.addEventListener("click", handler);
    var product = searchFor(products[index]);
    product.shown++;
    console.log(productData[index]);
    prodDisplay.appendChild(prodImage);

    if (votes === 25) {
        prodImage.removeEventListener("click", handler);
        for (var k = 0; k < productData.length; k++) {
           productVote = document.getElementById("display");
          console.log(`${productData[k].click} votes for ${productData[k].name}`);
        }
    }
}

function handler(event) {
    var search = event.target.id;
    console.log(search);
    var product = searchFor(search);
    product.click++;
    votes++;
    displayImages();
}

function searchFor (searchTerm) {
    for (var h = 0; h < productData.length; h++) {
        if (searchTerm === productData[h].name) {
            return productData[h];
        }
    }
}

function displayImages () {
    // Clearing the page of previous images
    document.getElementById("display").innerHTML = "";
    // Display 3 images
        // Ensure 3 unique images are displayed each time
    var lastIndex = [];
    for (var i = 0; i < displayCount; i++) {
        if (lastIndex.length === 20) {
        debugger;
        }
    do {
        var index = Math.floor(Math.random() * products.length);
        } while (lastIndex.indexOf(index) >= 0);
    lastIndex.push(index);
    console.log(index);
    createImage(index);
    }
    console.log(votes);
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
var votes = 0;

// Create an object for each product
for (var j = 0; j < products.length; j++) {
    var productModel = new Product(products[j]);
}

// Generate new image set
displayImages();

