var shop = {
    customerName: "Chaky",
    totalPrice: 0,
    products: [
        "Pizza",
        "Naan",
        "Sourdough",
        "Foccacia",
        "iPhone X"
    ],
    price: [40, 10, 20, 80, 1000],


    displayCustomerName: function() {
        var customerElement = document.getElementById("customer-name");
        customerElement.innerHTML = this.customerName;
    },
    displayProductList: function() {
        var productsText = "";
        var productsElement = document.getElementById("product-list");

        for (var i = 0; i < 5; i++) {
            productsText = productsText + "<li class= 'list-group-item'>" + this.products[i] +
                "<span class = 'badge'>$" + this.price[i] + "</li>";
        }

        productsElement.innerHTML = productsText;

    },


    displayTotalPrice: function() {
        this.totalPrice = this.price[0] + this.price[1] + this.price[2] + this.price[3] + this.price[4];
        this.totalPrice = 0.75 * this.totalPrice;
        var totalPriceElement = document.getElementById("price");
        var totalPriceText = "$" + this.totalPrice + "<span class='badge'>25% off";


        totalPriceElement.innerHTML = totalPriceText;
    },
}
shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();
// var hourNow = new Date().getHours();
// var greeting="";

// if (hourNow > 18) {
//     greeting= "Good evening";
//    } else if (hourNow > 12) { 
//      greeting = "Good afternoon";
//    }else if (hourNow > 5){ 
//      greeting = "Good morning";
//    }else {
//    greeting = "Don't stay up late";
//    }
// var customername = "Chaky";
// // var price = 10;
// // var quantity = 3;

// var products = [
//     "Pizza",
//     "Naan",
//     "Sourdough",
//     "Foccacia",
//     "iPhone X",
// ];
// var price = [40, 10, 20, 80, 1000];
// var percent = 0.75;
// var productsText = "";
// var productsElement = document.getElementById("product-list");
// var totalPrice = price[0]+price[1]+price[2]+price[3]+price[4];
// var discountPrice=percent*totalPrice;
//  for(var i = 0; i < 5; i++){
//             productsText += "<li class='list-group-item'>" +products[i] + "<span class='badge'>$" +price[i] + "</li>";
//         }
// // productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='bridge'>$" +
// //   price[0] + "</li>";
// // productsText = productsText + "<li class='list-group-item'>" + products[1] + "<span class='bridge'>$" +
// //     price[1] + "</li>";
// // productsText = productsText + "<li class='list-group-item'>" + products[2] + "<span class='bridge'>$" +
// //     price[2] + "</li>";
// // productsText = productsText + "<li class='list-group-item'>" + products[3] + "<span class='bridge'>$" +
// //     price[3] + "</li>";
// // productsText = productsText + "<li class='list-group-item'>" + products[4] + "<span class='bridge'>$" +
// //     price[4] + "</li>";
// productsElement.innerHTML = productsText;


// document.getElementById("greeting").innerHTML = greeting;
// document.getElementById("customer-name").innerHTML = "Chaky";
// document.getElementById("price").innerHTML = "$" + discountPrice + "<span class='badge'>25% off";