
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



let opts = {
	mystic_dob: "1987-10-17",
	mystic_name: "Kanny"
	
} //make a variable where it says date of birth//initialize

// let tavelInfo =
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

