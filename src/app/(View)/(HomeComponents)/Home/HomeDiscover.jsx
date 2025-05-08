'use client'
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
const HomeDiscover = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.discover_text_wrap',
                start: 'top 18%',
                end:'+=500',
                scrub: 2,
            }
        })
        tl.to('.discover_text_wrap h1', {
            y: '200',
           
            stagger:0.15

        })
    }, [])
    return (
        <>
            <div className='home_discover_wrapper' >
                <div className='discover_text_wrap'>
                    <h1>Discover</h1>
                </div>

                <div className='discover_text_wrap'>
                    <h1 style={{
                        fontStyle: 'italic',
                        fontWeight: '100'
                    }}>the best in</h1>
                </div>


                <div className='discover_text_wrap'>
                    <h1>minimal</h1>
                </div>


                <div className='discover_text_wrap'>
                    <h1>design</h1>
                </div>
            </div>

        </>
    )
}

export default HomeDiscover