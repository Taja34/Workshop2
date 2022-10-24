import React from 'react'
import Planeta from '../assets/destination/image-titan.png'
const Titan = () => {
    let planeta = {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
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

export default Titan