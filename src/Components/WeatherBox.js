import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className='weatherBox'>
        <h2 >{weather?.name}</h2>
        <h2>{weather?.main.temp} °C</h2>
        <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}

export default WeatherBox