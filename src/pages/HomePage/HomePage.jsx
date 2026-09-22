import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import TopDevelopers from '../../components/TopDevelopers/TopDevelopers'
import PropertiesCarousel from '../../components/PropertiesCarousel/PropertiesCarousel'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import ReelsCarousel from '../../components/ReelsCarousel/ReelsCarousel'
import OnlineSiteVisit from '../../components/OnlineSiteVisit/OnlineSiteVisit'
import MediaCoverage from '../../components/MediaCoverage/MediaCoverage'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopDevelopers />
      <WhyChooseUs />
      <ReelsCarousel />
      <OnlineSiteVisit />
      <PropertiesCarousel />
      <MediaCoverage />
      <Footer />
    </>
  )
}

export default HomePage
