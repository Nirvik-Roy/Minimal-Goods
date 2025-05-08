import Image from 'next/image'
import './Home.css'
import bannerImg from '../../../../../Assets/61a99a988b4f23100cbdaaf2_image1.jpg'
const HomeBanner = () =>{
    return(
        <>
            <div className="home_banner_wrapper">
                <Image alt='banner_img' className='banner_img' src={bannerImg} objectFit='cover' ></Image>
            </div>
        </>
    )
}
export default HomeBanner