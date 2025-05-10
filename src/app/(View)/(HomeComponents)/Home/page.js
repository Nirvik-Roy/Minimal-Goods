import HomeBanner from "./HomeBanner"
import './Home.css'
import HomeNavbar from "./HomeNavbar"
import HomeDiscover from "./HomeDiscover"
import HomeImage from "./HomeImage"
import Categories from "./Categories"
import Furniture from "./Furniture"

const Page = () => {
  return (
    <>
      <HomeBanner/>
      <div className="home_body_wrapper ">
      <div className="universal_container">
      <HomeNavbar/>
      <HomeDiscover/>
      <HomeImage/>
     <Categories/>
     <Furniture/>
      </div>
       
      </div>
    </> 
  )
}

export default Page