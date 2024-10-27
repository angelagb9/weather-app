import React from 'react'
import './Weather.css'
import search_icon from '../assets/search-icon.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search'/>
                <img src={search_icon} width="30" height="30"/>
            </div>
            <div class='weather-tempeture'>
                <div className='col'>
                    <h2 className='tempeture'>16º</h2>
                </div>
                <div className='col'>
                    <img src={clear} className='weather-icon'/>
                </div>
            </div>
            <h3 className='location'>Mexico</h3>
            <div className='weather-data'>
                <div className='col'>
                    <img src={humidity}/>
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className='col'>
                    <img src={wind}/>
                    <div>
                        <p>34 km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather