import React from 'react'
import imgTech from '../assets/technology/image-spaceport-portrait.jpg'


const Spaceport = () => {

    let tecnologia ={
        "name": "Spaceport",
        "images": {
          "portrait": "./assets/technology/image-spaceport-portrait.jpg",
          "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
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

export default Spaceport