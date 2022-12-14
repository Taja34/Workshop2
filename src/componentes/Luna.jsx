import React from 'react'
import { useNavigate } from 'react-router-dom'
import Planeta from '../assets/destination/image-moon.png'

const Luna = () => {
let planeta =  {
  "name": "Moon",
  "images": {
    "png": "./assets/destination/image-moon.png",
    "webp": "./assets/destination/image-moon.webp"
  },
  "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "distance": "384,400 km",
  "travel": "3 days"
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

export default Luna