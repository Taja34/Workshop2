import React from 'react'
import { useNavigate } from 'react-router-dom'
import human from '../../assets/crew/image-anousheh-ansari.png'

const Engineer = () => {
  let crew = {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
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

export default Engineer