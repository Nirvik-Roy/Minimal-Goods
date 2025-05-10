'use client'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from "gsap/gsap-core"
gsap.registerPlugin(ScrollTrigger);
const Furniture = () =>{
    useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.categories_wrapper_divs_wrapper',
            start:'top 5%',
            scrub:1,
            markers:true,
        }
    })
    tl.to('.furniture_text_wrapper',{
        position:'fixed',
        bottom:'0px',
        transition:'0.3s linear all'
    })
    },[])
return(
    <>
   
    <div className="furniture_text_wrapper">
            <h1 className="furniture_text">Furniture</h1>
            {/* <h1 className="furniture_text">Decor</h1>
            <h1 className="furniture_text">Office</h1>
            <h1 className="furniture_text">Tech</h1> */}
     
        </div>
<div className="furniture_grid_layout"></div>
   
    </> 
)
}

export default Furniture;