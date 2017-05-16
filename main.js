// code goes here
var answer1 = document.querySelector("#answer1")

var answer1html = ""
var sum = items.reduce(function(a,b){
	return a + b.price
},0) // why not a.price?

var avg = sum / items.length
answer1.innerHTML = `The average price is $${avg.toFixed(2)}.`
//

var answer2 = document.querySelector("#answer2")

var answer2html = ''
var priceRange = items.filter(function(item){
	return item.price > 14 && item.price < 18
}).forEach(function(value){
	answer2html += value.title + "\n"
})

answer2.innerHTML = answer2html
//

var answer3 = document.querySelector("#answer3")

var answer3html = ""
var gbp = items.filter(function(item){
	return item.currency_code === "GBP"
}).forEach(function(item){
	answer3html += `${item.title} costs &pound;${item.price}\n`
})

answer3.innerHTML = answer3html
//

var answer4 = document.querySelector("#answer4")

var answer4html = ""
var wood = items.filter(function(item){
	return item.materials.indexOf('wood') !== -1
}).forEach(function(item){
	answer4html += `${item.title}\n`
})

answer4.innerHTML = answer4html
//

var answer5 = document.querySelector("#answer5")

var answer5html = ""
var eightMa = items.filter(function(item){
	return item.materials.length >= 8
}).forEach(function(item){
	answer5html += `${item.title}\n\n`
	item.materials.forEach(function(material){
		answer5html += `${material}\n`
	})
})

answer5.innerHTML = answer5html
//

var answer6 = document.querySelector("#answer6")

var answer6html = ""
var seller = items.filter(function(item){
	return item.who_made == "i_did"
}).length

answer6html = `${seller} were made by their sellers.`

answer6.innerHTML = answer6html










