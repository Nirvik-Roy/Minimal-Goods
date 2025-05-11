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
const Furniture = () => {
    const [toggle, setToggle] = useState(1)
    useGSAP(() => {
        const tl = gsap.timeline()
        gsap.to('.home_body_wrapper',{
            background:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1,
            },
        })

        gsap.to('.home_nav_wrapper',{
            background:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.home_nav_wrapper p',{
            color:'#e6dfd7',
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('#Path_2',{
            fill:'#e6dfd7',
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.furniture',{
             color:"#e6dfd7",
             scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1,
                
            },
        })
        gsap.to('.furniture',{
            visibility:'hidden',
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
                
                
            },
        })
        gsap.to('.decor',{
            visibility:'visible',
            color:"#e6dfd7",
            scrollTrigger:{
                trigger:'.furniture_grid_layout',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
            },
        })














        gsap.to('.home_body_wrapper',{
            background:'#e6dfd7',
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1,
            },
        })

        gsap.to('.home_nav_wrapper',{
            background:'#e6dfd7',
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.home_nav_wrapper p',{
            color:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('#Path_2',{
            fill:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.decor',{
            visibility:'hidden',
            color:"#413b38",
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
            },
        })
        gsap.to('.office',{
            visibility:'visible',
            color:"#413b38",
            scrollTrigger:{
                trigger:'.furniture_grid_layout2',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
            },
        })












        gsap.to('.home_body_wrapper',{
            background:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1,
            },
        })

        gsap.to('.home_nav_wrapper',{
            background:'#2e2a27',
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.home_nav_wrapper p',{
            color:'#e9e2da',
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('#Path_2',{
            fill:'#e9e2da',
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'top 0%',
                end:'bottom 65%',
                scrub:1, 
            }
        })
        gsap.to('.office',{
            visibility:'hidden',
            color:"#e9e2da",
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
            },
        })
        gsap.to('.tech',{
            visibility:'visible',
            color:"#e9e2da",
            scrollTrigger:{
                trigger:'.furniture_grid_layout3',
                start:'bottom 100%',
                end:'bottom 90%',
                scrub:1,
            },
        })
    }, [])
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