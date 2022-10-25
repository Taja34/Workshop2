import React from 'react'
import imgTech from '../assets/technology/image-space-capsule-landscape.jpg'


const Capsule = () => {
    let tecnologia = {
        "name": "Space capsule",
        "images": {
          "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
          "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }

  return (
    <>
    <section>
    <span className='title_technology'><strong>03</strong> SPACE LAUNCH 101</span>
    <div className='main_launch'>
    <span className='title_terminology'>THE TERMINOLOGY…</span>
    <span className='title_Princ'>{tecnologia.name}</span>
    <span className='txt_main'>{tecnologia.description}</span>
    </div>
    <figure> <img src={imgTech} className='imgMain'></img></figure>
    </section>
    </>
  )
}

export default Capsule