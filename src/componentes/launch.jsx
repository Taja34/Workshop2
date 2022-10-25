import React from 'react'
import imgTech from '../assets/technology/image-launch-vehicle-portrait.jpg'

const Launch = () => {
    let tecnologia = {
        "name": "Launch vehicle",
        "images": {
          "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
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

export default Launch