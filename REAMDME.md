# **Zodiac Travel Destination!**
<!-- ![](C:\Users\Kanny\DigitalCraft\Project FrontEnd\GroupProject\images\zodiac.png) -->
<p align="center">
  <img src="images\zodiac.png" width="350" alt="accessibility text">
</p>

___

## Overview:
Designed a travel destination website based on your personal zodiac! Easily click the zodiac that represents when you are born, be provided information about your zodiac's personal travel habits, and recommendations about where you should travel next will be included with pictures and popular activies as well! 

___

## What we used:
Technolgies:
- HTML5
- CSS3
- JavaScript ES6
- Bootstrap 4
- Node.js
- AOS animate-on-scroll library
- AWS
APIs
- https://www.triposo.com/api/console/20201111
- https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result/
Other:
- AJAX
- JSON
___
## MVP (Minimum Viable Product):
- Desigining and hosting a zodiac page on AWS.
- Responsive design
___
## Stretch Goals Completed:
- fetched key information from API
- used DOM manipulation to display information
- 
___
## Stretch Goals Future:
- add weather to destination
- 
- 
___
##Code Snippets:
Fetches the country information from the API to be used and displayed properly in the webpage.
```
                let locationsArr = [];
                let country = "";;
                let countryNames = ["Italy" ,"Paris", "Greece", "Peru", "Indonesia", "Portugal", "Mexico", "Egypt", "Brazil", "Argentina", "Jamaica", "Australia"]
                country = fetch(`https://www.triposo.com/api/20201111/location.json?part_of=${countryNames[x]}`)
                locationsArr.push(country);
                console.log(locationsArr);
                let promiseTest = Promise.all(locationsArr);
                console.log(promiseTest);
                promiseTest.then((arrayResults) =>{
                    return Promise.all(arrayResults.map(char=>{
                    return char.json()
                }))
            .then((dataOfArray) =>{
                    console.log(dataOfArray);
                    console.log(x);
                    var text = `Your astrological destination is ${dataOfArray[0].results[0].name}!`
                    var snippet = `${dataOfArray[0].results[0].snippet}`
                    console.log(text);
                    console.log(snippet);
                    var h1 =  document.querySelector("h1");
                    var h3 = document.querySelector("h3");
                    h1.innerHTML = text;
                    h3.innerHTML = snippet;
                })
            })
        }
```
___
Used async/await with fetch to simplify the code promise.
```
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
                "x-rapidapi-key": "xxx",
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
        localStorage.zodiac = e.target.id
        // var myHeading = "<h2>Travel Habits</h2>" //`${}`
        $("#withX").html(e.target.id)
        $("#nextX").html(birthDate)
        $('#myModal').modal('show')
        $(".btn").click(function(){
            $("#myModal").modal('hide')
        })
        console.log(localStorage.zodiac)
        console.log("modal")
    });
})
```


## Team:
- **Matthew Roberts** 
 [Matthewtroberts10@gmail.com](Matthewtroberts10@gmail.com)
 <https://github.com/Mattie-07>
- **Kim Long** 
 [Kimrlong09@gmail.com](Kimrlong09@gmail.com)
 <https://github.com/KimrLong>
 - **Kanny Mohamad** 
 [kanny.ghafour@gmail.com](kanny.ghafour@gmail.com)
 <https://github.com/kannyg87>
GitHubGitHub
Mattie-07 - Overview
Hi everyone! I'm a full-stack developer! Mattie-07 has 12 repositories available. Follow their code on GitHub.
GitHubGitHub
KimrLong - Overview
KimrLong has 12 repositories available. Follow their code on GitHub.
GitHubGitHub
kannyg87 - Overview
kannyg87 has 8 repositories available. Follow their code on GitHub.
