'use client'
import './Home.css'
import img from '../../../../../Assets/61a9acabe07361ebdee22b3a_image3.jpg'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from "gsap/gsap-core"
import { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger);
export default function HomeImage (){

    useEffect(()=>{
     const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.home_image_main_wrapper5',
            start:'top 15%',
            scrub:2,
            pin:true,
        }
     })
     
     tl.to('.home_body_wrapper',{
        background:'#e9e2da',
        
     },0)
     tl.to('.home_nav_wrapper',{
        background:'#e9e2da',
        color:'rgb(46, 42, 39)',
       
     },0)
     tl.to('#Path_2',{
         fill:'#332e2b',
        
     },0)
     tl.to('.home_nav_links_wrapper p',{
        color:'#332e2b',
       
     },0)
     tl.fromTo('.home_image_div',{
        width:'500px',
        height:'500px',
        borderRadius:'500px',
     },{
        width:'100%',
        height:'100vh',
        borderRadius:'0',
    
     },0)

    },[])
  return(
    
    <>
    
    <div className="home_image_main_wrapper5">
            <div className="home_image_div">
                <Image alt='furtinure img' src={img}/>
            </div>
        </div>
   
        
    </>
  )
}