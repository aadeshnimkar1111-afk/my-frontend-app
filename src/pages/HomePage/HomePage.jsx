import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import TopDevelopers from '../../components/TopDevelopers/TopDevelopers'
import PropertiesCarousel from '../../components/PropertiesCarousel/PropertiesCarousel'
import PossessionTimeline from '../../components/PossessionTimeline/PossessionTimeline'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import ReelsCarousel from '../../components/ReelsCarousel/ReelsCarousel'
import OnlineSiteVisit from '../../components/OnlineSiteVisit/OnlineSiteVisit'
import OnlineProjectPresentation from '../../components/OnlineProjectPresentation/OnlineProjectPresentation'
import MediaCoverage from '../../components/MediaCoverage/MediaCoverage'
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
      <MediaCoverage />
      <TopDevelopers />
      <OnlineProjectPresentation />
      <PossessionTimeline />
      <Footer />
    </>
  )
}

export default HomePage
