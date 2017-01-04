const TAX_RATE = 0.08;
const PHONE_PRICE = 79.99;
const ACCESSORY_PRICE = 6.99;
const SPENDING_THRESHOLD = 700.43;

var bankAccountBalance = 899.34;
var amount = 0;
var phones = 0;


function calculatePricePerPhone(){
	var price = PHONE_PRICE + ACCESSORY_PRICE;
	var priceTax = price * TAX_RATE;
	var total = price + priceTax;
	var formatedPrice = '$' + total.toFixed(2);

	amount = amount + total;
}



while(amount < bankAccountBalance){
	calculatePricePerPhone();
	phones += 1;
	console.log('Total Number of Phones: ' + phones);
	console.log('Total Price of Phones: $' + amount.toFixed(2) );
}