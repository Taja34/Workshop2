import React from 'react'
import Planeta from '../assets/destination/image-europa.png'
const Europa = () => {
    let planeta = {
        "name": "Europa",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      }
  return (
    <>
   
    <img src={Planeta} className='planeta'/>
<aside className='infoplaneta'> 
<article className='infoplaneta__name'>{planeta.name}</article>
<article className='infoplaneta__description'>{planeta.description}</article>
<article className='infoplaneta__distancias'>
  <div><p className='infoplaneta__distancias__tiltes'>AVG. DISTANCE</p>
  <p className='infoplaneta__distancias__text'>{planeta.distance}</p></div>
  <div><p className='infoplaneta__distancias__tiltes'>EST. TRAVEL TIME</p>
  <p className='infoplaneta__distancias__text'>{planeta.travel}</p></div>
</article></aside>


</>
  )
}

export default Europa