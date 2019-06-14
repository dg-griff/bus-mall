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
    var productItem;
  
    var imageSource = prodImagePath(products[index]);
    prodImage.setAttribute("src", imageSource);
    prodImage.setAttribute("id", products[index]);
    prodImage.addEventListener("click", handler);
    var product = searchFor(products[index]);
    product.shown++;
    prodDisplay.appendChild(prodImage);

    // Turn off event listener and display results after 25 clicks
    if (votes === 25) {
        prodImage.removeEventListener("click", handler);
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML = "<h1>Results</h1>";
        var productList = document.createElement("ul");
        var productPercent;
        for (var k = 0; k < productData.length; k++) {
           productVote = document.getElementById("display");
           productItem = document.createElement("li");
           productPercent = Math.floor((productData[k].click / productData[k].shown) * 100);
           productItem.textContent = `${productData[k].click} votes (${productPercent}%) for the ${productData[k].name}`;
           productList.appendChild(productItem);
        }
        productVote.appendChild(productList);
    }
}

function handler(event) {
    var search = event.target.id;
    console.log(search);
    var product = searchFor(search);
    product.click++;
    votes++;
    console.log(`You have clicked ${search} ${product.click} times`);
    
    displayImages();
    if (votes === 25) {
        document.getElementById("display").innerHTML = "";
        saveResults();
        chartRender();
    }
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
    createImage(index);
    }
    // console.log(votes);
}

// Create function to store image clicks in an array
function getClicks() {
    var clicks = [];
    for (var i = 0; i < productData; i++) {
      clicks.push(productData[i].clicks);
    }
    return clicks; 
  }

// Create function that saves results to local storage
function saveResults() {
    localStorage.setItem('userResults', JSON.stringify(productData));
}

// Create function that retrieves data from local storage
function getResults() {
    var userResults = JSON.parse(localStorage.getItem('userResults'));
    var results;
    if (userResults) {
        console.log('User Results already saved!');
        results = userResults;
    }
}

// Create function that clears data in Local Storage
function handleStorageClear() {
    localStorage.clear();
}

/********* Create function to render Chart */

function chartRender() { 
    var context = document.getElementById('myChart').getContext('2d');
    var data = [productData[0].click,
    productData[1].click,
    productData[2].click,
    productData[3].click,
    productData[4].click,
    productData[5].click,
    productData[6].click,
    productData[7].click,
    productData[8].click,
    productData[9].click,
    productData[10].click,
    productData[11].click,
    productData[12].click,
    productData[13].click,
    productData[14].click,
    productData[15].click,
    productData[16].click,
    productData[17].click,
    productData[18].click,
    productData[19].click
   ];
    var myChart = new Chart(context, {
        type: 'bar',
        data: {
            labels: products,
            datasets: [{
                label: 'Number of Clicks',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgb(25, 144, 46, 0.2)',
                    'rgb(250, 79, 25, 0.2)',
                    'rgb(81, 102, 17, 0.2)',
                    'rgb(92, 48, 39, 0.2)',
                    'rgb(233, 2, 80, 0.2)',
                    'rgb(161, 132, 173, 0.2)',
                    'rgb(34, 247, 13, 0.2)',
                    'rgb(201, 161, 185, 0.2)',
                    'rgb(57, 28, 102, 0.2)',
                    'rgb(134, 70, 129, 0.2)',
                    'rgb(33, 119, 130, 0.2)',
                    'rgb(3, 195, 217, 0.2)',
                    'rgb(210, 253, 1, 0.2)',
                    'rgb(76, 184, 146, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgb(25, 144, 46, 1)',
                    'rgb(250, 79, 25, 1)',
                    'rgb(81, 102, 17, 1)',
                    'rgb(92, 48, 39, 1)',
                    'rgb(233, 2, 80, 1)',
                    'rgb(161, 132, 173, 1)',
                    'rgb(34, 247, 13, 1)',
                    'rgb(201, 161, 185, 1)',
                    'rgb(57, 28, 102, 1)',
                    'rgb(134, 70, 129, 1)',
                    'rgb(33, 119, 130, 1)',
                    'rgb(3, 195, 217, 1)',
                    'rgb(210, 253, 1, 1)',
                    'rgb(76, 184, 146, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

/* Object Constructor */
function Product(name) {
    this.name = name;
    this.click = 0;
    this.shown = 0;
    productData.push(this);
}

/*********- Main Code Block: Global variables and function calls -********/


var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn','usb', 'water-can', 'wine-glass' ];
var displayCount = 3;
var productData = [];
var votes = 0;
var clearStorage = document.getElementById('clear-local');
clearStorage.addEventListener('click', handleStorageClear);

for (var j = 0; j < productData.length; j++) {
    productClicks.push(productData[i].click);
    console.log(productData.length);
}

// Create an object for each product
for (var j = 0; j < products.length; j++) {
    var productModel = new Product(products[j]);
}

// Generate new image set
displayImages();

// Save Results to Local Storage
saveResults();

// Retrieve results from Local Storage
getResults();