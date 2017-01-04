//JLab Solution
/*
const TAX_RATE = 0.08;
const PHONE_PRICE = 79.99;
const ACCESSORY_PRICE = 6.99;

var bankAccountBalance = 899.34;
var amount = 0;
var phones = 0;


function calculatePricePerPhone(){
	var price = PHONE_PRICE + ACCESSORY_PRICE;
	var priceTax = price * TAX_RATE;
	var total = price + priceTax;
	// var formatedPrice = '$' + total.toFixed(2);

	amount = amount + total;
}


while(amount < bankAccountBalance){
	calculatePricePerPhone();

	if(amount < bankAccountBalance){
	phones += 1;
	console.log('Total Number of Phones: ' + phones);
	console.log('Total Price of Phones: $' + amount.toFixed(2) );	

	} else {
		console.log('You Can Not Afford Any More Phones');
	}
}
*/
//Kyle Simpson Solution
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}
function formatAmount(amount){
	return "$" + amount.toFixed(2);
}

//keep buying phones while you still have money
while(amount < bank_balance){
	amount = amount + PHONE_PRICE;

	//can we afford an accessory?
	if(amount < SPENDING_THRESHOLD){
		amount = amount + ACCESSORY_PRICE;
	}
	//add tax
	amount = amount + calculateTax(amount);

	console.log("Your Purchase: "+ formatAmount(amount));
	//do you have enough money
	if(amount > bank_balance){
		console.log("You can not afford this purchase");
	}
}

//TYPEOF
var a;
console.log("var a is: " + typeof(a));

var obj = {
	a: 'hello world',
	b: 43,
	c: true
};
console.log(obj.a);
console.log(obj['b']);

//explicit coercion
var d = '42';
var e = Number(d);
console.log('e: '+e);

//implicit coercion
var f = '42';
var g = f * 2;
console.log('g: '+g);
