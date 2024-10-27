import React, { useEffect, useState, useRef } from 'react'
import './Weather.css'
import search_icon from '../assets/search-icon.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const icons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
}

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = process.env.REACT_APP_API_KEY;

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [city, setCity] = useState("");

    const search = async (cityName) => {
        if(cityName === ''){
            alert("Please select a city")
            return
        }
        try {
            const url = `${API_URL}?q=${cityName}&units=metric&appid=${APP_ID}`
            const response = await fetch(url)
            const data = await response.json()

            if(!response.ok){
                alert(data.message || "Failed to fetch weather data");
                return  
            }

            const icon = icons[data.weather[0].icon] || clear
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name, 
                icon: icon
            })
        }
        catch (err) {
            setWeatherData(null)
            console.error("Error fetching weather data:", err);
        }
    }

    useEffect(()=>{
        search('Mexicali')
    },[])

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input 
                    type='text' 
                    placeholder='Search' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <img src={search_icon} width="30" height="30" alt='' onClick={()=>search(city)}/>
            </div>
            {weatherData?<>
                <div className='weather-tempeture'>
                <div className='col'>
                    <h2 className='tempeture'>{weatherData.temperature}</h2>
                </div>
                <div className='col'>
                    <img src={weatherData.icon} className='weather-icon' alt=''/>
                </div>
            </div>
            <h3 className='location'>{weatherData.location}</h3>
            <div className='weather-data'>
                <div className='col'>
                    <img src={humidity} alt=''/>
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className='col'>
                    <img src={wind} alt=''/>
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
            </>:<></>}
        </div>
    )
}

export default Weather