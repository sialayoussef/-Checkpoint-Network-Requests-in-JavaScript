
const weather=async()=>{
    try {
        var res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=584b4a7a31e71c8645f53d22222a0184")
        var ress = await res.json()
    
        var city = document.querySelector(".city")   
        city.innerText = ress.name

        var date = document.querySelector('.date')
        date.innerText = ress.weather[0].description    

        var temp = document.querySelector('.temp')
        temp.innerText = Math.floor(ress.main.temp -272,15)
     
         
    } catch (error) {
        console.log(error)
    }
}

weather()