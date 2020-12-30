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



async function newFunc(zodiac){
var opts = {
	mystic_dob: zodiac
} 
var travelInfo =

	await fetch("https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result/",
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
			console.log(data.data["Travel Habits"])
			return data.data["Travel Habits"]

	
		})
		console.log(travelInfo)
		return travelInfo

	}



var taurus1 = document.querySelector('#taurus')
taurus1.addEventListener('click',()=>{
    newFunc(Taurus)
})

var scorpio1 = document.querySelector('#scorpio')
scorpio1.addEventListener('click',()=>{
	newFunc(Scorp)
})

var sagittarius1 = document.querySelector('#sagittarius')
sagittarius1.addEventListener('click',()=>{
	newFunc(Aries)
})

var aries1 = document.querySelector('#capricorn')
aries1.addEventListener('click',()=>{
	newFunc(Aries)
})

var aries1 = document.querySelector('#aquarius')
aries1.addEventListener('click',()=>{
	newFunc(Sagg)
})

var pisces1 = document.querySelector('#pisces')
pisces1.addEventListener('click',()=>{
	newFunc(Pisces)
})

console.log(newFunc(Virgo));




