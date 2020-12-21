

let opts = {
	mystic_dob: "1987-05-21",
	mystic_name: "John"
}
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
		console.log(data)
	})





