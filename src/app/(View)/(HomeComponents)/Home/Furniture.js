'use client'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from "gsap/gsap-core"
gsap.registerPlugin(ScrollTrigger);
import img1 from '../../../../../Assets/61a99f375fb3b2487762e34b_furniture4.jpeg'
import img2 from '../../../../../Assets/61a99f1b3ba972c74f0c68a1_furniture2.jpeg'
import img3 from '../../../../../Assets/61a99f29da4f9f67e8a96c62_furniture3.jpeg'
import img4 from '../../../../../Assets/61a99f0fd78e9995d9b714ee_furniture1.jpeg'
import Image from 'next/image';
import { useState } from 'react';
const Furniture = () =>{
    const [toggle,setToggle]=useState(1)
    useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.furniture_grid_layout',
            start:'top 40%',
            end:'bottom 65%',
            scrub:1,
            markers:true,
            
        }
    })
    tl.to('.furniture_grid_layout',{
        opacity:'1',
        onComplete:()=>{
            setToggle(2)
        },
        onReverseComplete:()=>{
alert('hello world')
        },
        onStart:()=>{
            setToggle(1)
        }
    })
    
    },[])
return(
    <>
   <div className='furniture_text_main'>
   <div className="furniture_text_wrapper">
           { toggle === 1 &&  <h1 className="furniture_text">Furniture</h1>}
             { toggle === 2 &&<h1 className="furniture_text">Decor</h1>}
            { toggle === 3 &&  <h1 className="furniture_text">Office</h1>}
           { toggle === 4  && <h1 className="furniture_text">Tech</h1> }
     
        </div>
   </div>
   
<div className="furniture_grid_layout">
    <div className='furniture_img_1_div'>
        <Image alt='furniture' src={img1}/>
    </div>
    <div className='furniture_img_4_div'>
    <Image alt='furniture' src={img3}/>
    </div>
    <div className='furniture_img_2_div'>
    <Image alt='furniture' src={img2}/>
    </div>
 
    <div className='furniture_img_5_div'>
    <Image alt='furniture' src={img4}/>
    </div>
</div>



<div className="furniture_grid_layout2">
    <div className='furniture_img_1_div'>
        <Image alt='furniture' src={img1}/>
    </div>
    <div className='furniture_img_4_div'>
    <Image alt='furniture' src={img3}/>
    </div>
    <div className='furniture_img_2_div'>
    <Image alt='furniture' src={img2}/>
    </div>
 
    <div className='furniture_img_5_div'>
    <Image alt='furniture' src={img4}/>
    </div>
</div>



<div className="furniture_grid_layout3">
    <div className='furniture_img_1_div'>
        <Image alt='furniture' src={img1}/>
    </div>
    <div className='furniture_img_4_div'>
    <Image alt='furniture' src={img3}/>
    </div>
    <div className='furniture_img_2_div'>
    <Image alt='furniture' src={img2}/>
    </div>
 
    <div className='furniture_img_5_div'>
    <Image alt='furniture' src={img4}/>
    </div>
</div>



   
    </> 
)
}

export default Furniture;