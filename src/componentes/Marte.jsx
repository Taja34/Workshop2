import React from 'react'
import Planeta from '../assets/destination/image-mars.png'

const Marte = () => {
let planeta = {
  "name": "MARS",
  "images": {
    "png": "./assets/destination/image-mars.png",
    "webp": "./assets/destination/image-mars.webp"
  },
  "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "distance": "225 mil. km",
  "travel": "9 months"
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

export default Marte