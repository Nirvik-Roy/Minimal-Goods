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
import { useEffect, useState } from 'react';
const Furniture = () => {
   

    useEffect(() => {
        // Section 1: furniture
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.furniture_grid_layout',
            start: 'top -10%',
            end: 'bottom 65%',
            scrub: 1,
         
          },
        });
    
        tl1.to('.home_body_wrapper', { background: '#2e2a27' }, 0)
          .to('.home_nav_wrapper', { background: '#2e2a27' }, 0)
          .to('.home_nav_wrapper p', { color: '#e6dfd7' }, 0)
          .to('#Path_2', { fill: '#e6dfd7' }, 0)
          .to('.furniture', { color: '#e6dfd7', autoAlpha: 1 }, 0)
          .to('.furniture', { autoAlpha: 0 }, 1)
          .to('.decor', { autoAlpha: 1, color: '#e6dfd7' }, 1);
    
        // Section 2: decor → office
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.furniture_grid_layout2',
            start: 'top -10%',
            end: 'bottom 65%',
            scrub: 1,
          },
        });
    
        tl2.to('.home_body_wrapper', { background: '#e6dfd7' }, 0)
          .to('.home_nav_wrapper', { background: '#e6dfd7' }, 0)
          .to('.home_nav_wrapper p', { color: '#2e2a27' }, 0)
          .to('#Path_2', { fill: '#2e2a27' }, 0)
          .to('.decor', { autoAlpha: 0, color: '#413b38' }, 1)
          .to('.office', { autoAlpha: 1, color: '#413b38' }, 1);
    
        // Section 3: office → tech
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: '.furniture_grid_layout3',
            start: 'top -10%',
            end: 'bottom 65%',
            scrub: 1,
          },
        });
    
        tl3.to('.home_body_wrapper', { background: '#2e2a27' }, 0)
          .to('.home_nav_wrapper', { background: '#2e2a27' }, 0)
          .to('.home_nav_wrapper p', { color: '#e9e2da' }, 0)
          .to('#Path_2', { fill: '#e9e2da' }, 0)
          .to('.office', { autoAlpha: 0, color: '#e9e2da' }, 1)
          .to('.tech', { autoAlpha: 1, color: '#e9e2da' }, 1);
      }, []);
    
    return (
        <>
            <div className='furniture_text_main'>
                <div className="furniture_text_wrapper">
                   <h1 className="furniture_text furniture">Furniture</h1>
                    <h1 className="furniture_text decor">Decor</h1>
                     <h1 className="furniture_text office">Office</h1>
                 <h1 className="furniture_text tech">Tech</h1>

                </div>
            </div>

            <div className="furniture_grid_layout">
                <div className='furniture_img_1_div'>
                    <Image alt='furniture' src={img1} />
                </div>
                <div className='furniture_img_4_div'>
                    <Image alt='furniture' src={img3} />
                </div>
                <div className='furniture_img_2_div'>
                    <Image alt='furniture' src={img2} />
                </div>

                <div className='furniture_img_5_div'>
                    <Image alt='furniture' src={img4} />
                </div>
            </div>



            <div className="furniture_grid_layout2">
                <div className='furniture_img_1_div'>
                    <Image alt='furniture' src={img1} />
                </div>
                <div className='furniture_img_4_div'>
                    <Image alt='furniture' src={img3} />
                </div>
                <div className='furniture_img_2_div'>
                    <Image alt='furniture' src={img2} />
                </div>

                <div className='furniture_img_5_div'>
                    <Image alt='furniture' src={img4} />
                </div>
            </div>



            <div className="furniture_grid_layout3">
                <div className='furniture_img_1_div'>
                    <Image alt='furniture' src={img1} />
                </div>
                <div className='furniture_img_4_div'>
                    <Image alt='furniture' src={img3} />
                </div>
                <div className='furniture_img_2_div'>
                    <Image alt='furniture' src={img2} />
                </div>

                <div className='furniture_img_5_div'>
                    <Image alt='furniture' src={img4} />
                </div>
            </div>




            <div className="furniture_grid_layout4">
                <div className='furniture_img_1_div'>
                    <Image alt='furniture' src={img1} />
                </div>
                <div className='furniture_img_4_div'>
                    <Image alt='furniture' src={img3} />
                </div>
                <div className='furniture_img_2_div'>
                    <Image alt='furniture' src={img2} />
                </div>

                <div className='furniture_img_5_div'>
                    <Image alt='furniture' src={img4} />
                </div>
            </div>




        </>
    )
}

export default Furniture;