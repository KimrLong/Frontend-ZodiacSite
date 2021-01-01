//date value for API call

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


//API call information
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

// enter modal function here//

$(()=>{

    $(".cardClick").click(async (e)=> {
        var birthDate;
        if (e.target.id == "aries"){
		birthDate = await newFunc(Aries)
		}
		else if (e.target.id == "taurus"){
				birthDate = await newFunc(Taurus)
		}
		else if (e.target.id == "gemini"){
		birthDate = await newFunc(Gemini)
		}
		else if(e.target.id == "cancer"){
		birthDate = await newFunc(Cancer)
		}
		else if(e.target.id == "leo"){
		birthDate = await newFunc(Leo)
		}
		else if(e.target.id == "virgo"){
		birthDate = await newFunc(Virgo)
		}
		else if(e.target.id == "libra"){
		birthDate = await newFunc(Libra)
		}
		else if(e.target.id == "scorpio"){
		birthDate = await newFunc(Scorp)
		}
		else if(e.target.id == "sagittarius"){
		birthDate = await newFunc(Sagg)
		}
		else if(e.target.id == "capricorn"){
		birthDate = await newFunc(Cap)
		}
		else if(e.target.id == "aquarius"){
		birthDate = await newFunc(Aqu)
		}
		else if(e.target.id == "pisces"){
		birthDate = await newFunc(Pisces)
		}

        console.log(e.target.id)
        console.log("modal")
        var myHeading = "<p>I Am Added Dynamically </p>"
        $("#modal-body").html(myHeading + birthDate)
        $('#myModal').modal('show')
        $(".btn").click(function(){
            $("#myModal").modal('hide')
        })
    });
})





