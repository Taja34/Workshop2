import React from 'react'
import { useNavigate } from 'react-router-dom'
import human from '../../assets/crew/image-victor-glover.png'

const Pilot = () => {
 let crew = {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  }
 return (
<>
<aside className='crew'> 
<article className='crew__role'>{crew.role}</article>
<article className='crew__name'>{crew.name}</article>
<article className='crew__bio'>{crew.bio}</article>

</aside>
<img src={human} className='person'/>

  </>
)
}

export default Pilot