

fetch("https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result/", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "5ebc03e641msh91de1db69ede71dp13e0f0jsnb8c37847f3b1",
		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
	},
	"body": {
		"mystic_dob": "1987-05-21",
		"mystic_name": "John"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


function newFunction (month){
		let opts = {
		mystic_dob: month, //"1987-10-17",
		mystic_name: "Kanny"
	
} //make a variable where it says date of birth//initialize

// let tavelInfo =

var Cap = "2000-01-17"
var Aqu = "2000-02-17"
var Pisces = "2000-03-17"
var Aries = "2000-04-17"
var Taurus = "2000-05-17"
var Gemini = "2000-06-17"
var Cancer = "2000-07-17"
var Leo = "2000-08-17"
var Virgo = "2000-09-17"
var Libra = "2000-10-17"
var Scorp = "2000-11-17"
var Sagg = "2000-12-17"



function newFunc(zodiac){
let opts = {
	mystic_dob: zodiac,
} 
let tavelInfo =

	fetch("https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result/",
		{
			method: 'post',
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"x-rapidapi-key": "5ebc03e641msh91de1db69ede71dp13e0f0jsnb8c37847f3b1",
				"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
				"useQueryString": true
			},
			body: JSON.stringify(opts)
		})
		.then(result => result.json())
		.then(data => {
			console.log(data.data["Travel Habits"])

	
		})

	
	}

	// fetch('https://corona.lmao.ninja/v2/states')
	// .then(result => result.json())
	// .then(data => {
	// 	console.log(data)
	// 	let htmlArr = data.map(obj =>{
	// 		return `<li>${obj.state} cases: ${obj.cases} today: ${obj.todayCases}</li>`
	// 	})
	// 	let ul = document.querySelector('ul');
	// 	ul.innerHTML = htmlArr.join('');
	// })


	// .catch((error)=>{
	// 	console.log(error)
	// })




		// let travelInfo = 
	// fetch("https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result/",
	// 	{
	// 		method: 'post',
	// 		headers: {
	// 			"content-type": "application/x-www-form-urlencoded",
	// 			"x-rapidapi-key": "5ebc03e641msh91de1db69ede71dp13e0f0jsnb8c37847f3b1",
	// 			"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
	// 			"useQueryString": true
	// 		},
	// 		body: JSON.stringify(opts)
	// 	})
	// 	travelInfo.then((results) => {
	// 		console.log(results.json())
	
	// 	})
			
	
	// 	.then((data) => {
	// 		console.log(data)
	// 	})



		})
}



