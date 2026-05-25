import Header from "./components/header"
import Carousel from "./components/carousel"
import About from "./components/about"
import Services from "./components/services"
import Footer from "./components/footer"
import Testimonial from "./components/testimonial"
import Contact from "./components/contact"
import { Route, Routes } from "react-router-dom"
import Notfound from "./pages/notfound"


function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home route composes the main landing sections */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <About />
              <Services />
              <Testimonial />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
