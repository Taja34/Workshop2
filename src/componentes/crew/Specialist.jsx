import React from 'react'
import { useNavigate } from 'react-router-dom'
import human from '../../assets/crew/image-mark-shuttleworth.png'

const Specialist = () => {
  let crew = {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
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
export default Specialist