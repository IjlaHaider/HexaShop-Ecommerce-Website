import Header from "../Component/Header.jsx"
import Footer from "../Component/Footer.jsx"
import HomeBanner from "../Component/HomeBanner.jsx"
import HomeSection from "../Component/HomeSection.jsx"
import HomeWomen from "../Component/HomeWomen.jsx"
import HomeKids from "../Component/HomeKids.jsx"
import HomeExplore from "../Component/HomeExplore.jsx"
import HomeSocial from "../Component/HomeSocial.jsx"
import HomeSubscribe from "../Component/HomeSubscribe.jsx"


const Home =()=>{
    return(
        <>
        <Header></Header>
        <HomeBanner></HomeBanner>
        <HomeSection></HomeSection>
        <HomeWomen></HomeWomen>
        <HomeKids></HomeKids>
        <HomeExplore></HomeExplore>
        <HomeSocial></HomeSocial>
        <HomeSubscribe></HomeSubscribe>
        <Footer></Footer>
        
        </>
    )
}
export default Home