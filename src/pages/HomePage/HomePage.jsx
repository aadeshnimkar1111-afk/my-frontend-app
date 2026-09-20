import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import PropertiesCarousel from '../../components/PropertiesCarousel/PropertiesCarousel'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import ReelsCarousel from '../../components/ReelsCarousel/ReelsCarousel'
import OnlineSiteVisit from '../../components/OnlineSiteVisit/OnlineSiteVisit'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ReelsCarousel />
      <OnlineSiteVisit />
      <PropertiesCarousel />
      <Footer />
    </>
  )
}

export default HomePage
