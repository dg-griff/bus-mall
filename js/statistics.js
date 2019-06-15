'use strict';

/* Function definitions */

// Create function that retrieves data from local storage
function getResults() {
    var userResults = JSON.parse(localStorage.getItem('userResults'));
    // var results;
    // if (userResults) {
    //     console.log('User Results already saved!');
    //     results = userResults;
    // }
}

// Create function to render chart
function chartRender() {
    var context = document.getElementById('myChart').getContext('2d');
    var data = dataProducts;
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

// Create function that saves results to local storage
function saveResults() {
    localStorage.setItem('userResults', JSON.stringify(productData));
}

// Create function that retrieves data from local storage
function getResults() {
    var results = JSON.parse(localStorage.getItem('userResults'));
    if (results) {
        console.log('User Results already saved!');
    }
    dataProducts = results.name;
    dataLabels = results.click;
}

// Create function that clears data in Local Storage
function handleStorageClear() {
    localStorage.clear();
}

/* Object Constructor */
function Product(name) {
    this.name = name;
    this.click = 0;
    this.shown = 0;
    productData.push(this);
}

/*Function Calls and Global Variables */

var dataProducts = [];
var dataLabels = [];
var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productData = [];
var clearStorage = document.getElementById('clear-local');
clearStorage.addEventListener('click', handleStorageClear);

// Create an object for each product
for (var j = 0; j < products.length; j++) {
    var productModel = new Product(products[j]);
}


getResults();
console.log(dataProducts);
console.log(dataLabels);
chartRender();