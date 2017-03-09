// code goes here
var answer1 = document.querySelector("#answer1")

var sum = items.reduce(function(a,b){
	return a + b.price
},0)

var avg = sum / items.length
answer1.innerHTML = 'The average price is $${avg.toFixed(2)}.'
//

var answer2 = document.querySelector("#answer2") 

var priceRange = items.filter(function(item){
	return item.price > 14 && item.price < 18
})
//

var gbp = items.filter(functoin(item){
	return item.currency_code === "GBP"
})

var answer3 = document.querySelector("#answer3")
var answer3html = ""
gbp.forEach(functoin(item){
	answer3html += '${item.title} costs &pound; ${item.price}\n'
})

answer3.innerHTML =answer3html