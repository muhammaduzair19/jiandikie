import AOS from "aos"
import About from "./components/about"
import Blogs from "./components/blogs"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Pricing from "./components/pricing"
import Tutorial from "./components/tutorial"
import WhatYouCanDo from "./components/what-you-can-do"
import { useEffect } from "react"
import 'aos/dist/aos.css';


const App = () => {





  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Default easing for AOS animations// Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, [])





  return (
    <>
      <Navbar />
      <main className="font-primary w-full min-h-screen overflow-hidden">
        <Hero />
        <About />
        <WhatYouCanDo />
        <Pricing />
        <Tutorial />
        <Blogs />
      </main>
      <Footer />
    </>
  )
}

export default App