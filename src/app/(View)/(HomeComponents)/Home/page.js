import HomeBanner from "./HomeBanner"
import './Home.css'
import HomeNavbar from "./HomeNavbar"
import HomeDiscover from "./HomeDiscover"

const Page = () => {
  return (
    <>
      <HomeBanner/>
      <div className="home_body_wrapper ">
      <div className="universal_container">
      <HomeNavbar/>
      <HomeDiscover/>
      </div>
       
      </div>
    </> 
  )
}

export default Page