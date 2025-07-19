import Navbar from './components/Navbar.jsx'
import ImageSlider from "./components/ImageSlider";
import FlavorSection from "./components/FlavorSection";
import AboutHistorySection from "./components/AboutHistorySection";
import TodaysSpecial from "./components/TodaysSpecial";
import ReviewForm from "./components/ReviewForm";
import Footer from "./components/Footer";
import './App.css'

function App() {
   return <div>
    <Navbar />
    <ImageSlider />
    <FlavorSection />
    <AboutHistorySection />
    <TodaysSpecial />
    <ReviewForm />
    <Footer />
   </div>
    
}
export default App
