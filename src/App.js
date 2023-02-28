import './App.css';
import SchoolsHeader from './components/SchoolsHeader';
import VideoWrap from './components/VideoWrap'
import Demo from './components/Demo'
import StickyBanner from './components/StickyBanner'
import AppBanner from './components/AppBanner'
import PrepBox from './components/PrepBox'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import SchoolsFooter from './components/SchoolsFooter'
import AboutGoo from './components/mobile_aboutGoo'
import PrepBoxMobile from './components/mobile_prebox'
import AISection from './components/ai'
function App() {
  return (
    <>
      <SchoolsHeader/>
      <VideoWrap/>
      <Demo/>
      <AboutGoo/>
      <AppBanner/>
      <PrepBox/>
      <PrepBoxMobile/>
      <AISection/>
      <Testimonials/>
      <Pricing/>
      <StickyBanner/>
      <SchoolsFooter/>
    </>
  );
}

export default App;
