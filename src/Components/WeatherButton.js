import React from 'react'
import { Button} from 'react-bootstrap';

const WeatherButton = ({citis, selectedCity , onClick}) => {

  return (
    <div className='WeatherButton'>
        <Button 
         variant={`${selectedCity === '' ? "dark" : "outline-dark"}`}  
        className='button' onClick={()=> onClick('current')}>νμ¬ μμΉ</Button>
        {citis&&citis.map((city) => (
          <Button 
          variant={`${selectedCity === city ? "dark" : "outline-dark"}`} key={city}
          onClick={()=>onClick(city)}>{city}</Button>
          ))} 
         
    </div>
  )
}

export default WeatherButton