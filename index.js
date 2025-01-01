
let bill = prompt("Please set total bill");
let discount = prompt("Please set discount")/100;
let totalPrice = bill - bill*discount;
document.write("total price is: " + totalPrice )
let tax = 14/100*totalPrice + totalPrice;
document.write(", Total after Tax: " + tax)



