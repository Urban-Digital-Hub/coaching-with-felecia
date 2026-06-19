import Header from "./components/header"
import Carousel from "./components/carousel"
import About from "./components/about"
import Services from "./components/services"
import Footer from "./components/footer"
import Testimonial from "./components/testimonial"
import Contact from "./components/contact"
import { Route, Routes, useLocation } from "react-router-dom"
import Notfound from "./pages/notfound"
// import Swal from "sweetalert2"
import { useEffect } from "react"
import BookSession from "./components/bookSession"
import Blog from "./components/blog"
import FormMessage from "./pages/message"
import Coaching from "./components/coaching"
import FitnessandLifestyle from "./components/fitnessandlifestyle"
import Term from "./components/term"
import ClientIntakeModule from "./components/clientintake"
import SEO from "./components/SEO"
import Book from "./components/book"

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>
    Tawk_LoadStart?: Date
  }
}

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Your Wellness Matters",
  "image": "https://coachingwithfelecia.com/images/logo.jpeg",
  "description": "Wellness coaching and mentorship practice dedicated to helping women unlearn survival mode, reclaim softness, and rebuild lives rooted in emotional truth.",
  "url": "https://coachingwithfelecia.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "IL",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Felecia Hammond",
    "jobTitle": "Wellness Content Creator & Coach"
  }
}

function App() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API ?? ({} as Record<string, unknown>)
    window.Tawk_LoadStart = new Date()

    const style = document.createElement('style')
    style.textContent = `
      .tawk-minified,
      .tawk-minified iframe,
      .tawk-iframe-wrapper iframe,
      .tawk-minified .tawk-icon,
      .tawk-minified .tawk-button,
      #tawkchat-maximized-content,
      .tawk-chat {
        max-width: 100% !important;
        width: auto !important;
      }
      .tawk-minified {
        right: 0 !important;
      }
      .swal2-popup {
        width: min(92vw, 560px) !important;
      }
      .swal2-html-container {
        word-wrap: break-word;
      }
    `
    document.head.appendChild(style)

    const s1 = document.createElement("script")
    s1.async = true
    s1.src = 'https://embed.tawk.to/6a182caae37d1e1c33dfc947/default'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    s1.id = 'tawk-script'

    const s0 = document.getElementsByTagName("script")[0]
    s0?.parentNode?.insertBefore(s1, s0)

    return () => {
      const existing = document.getElementById('tawk-script')
      existing?.parentNode?.removeChild(existing)
      style.remove()
    }
  }, [])


  const location = useLocation()
  const isFormMessagePage = location.pathname === "/form-message"

  return (
    <>
      {!isFormMessagePage && <Header />}

      <Routes>
        {/* Home route composes the main landing sections */}
        <Route
          path="/"
          element={
            <>
              <SEO 
                title="Coaching and Mentorship with Felecia"
                description="Unlearn survival mode, reclaim your softness, and rebuild a life rooted in emotional truth. Wellness coaching, emotional intelligence, and faith-rooted healing for women with Felecia Hammond."
                keywords="Felecia Hammond, Your Wellness Matters, The Tactical Pause, wellness coaching, emotional healing, trauma recovery, nervous system awareness, self leadership, faith healing, women life coach"
                path="/"
                schemaData={homeSchema}
              />
              <Carousel />
              <About />
              <Services />
              <BookSession />
              <Testimonial />
              <Blog />
              <Book />
              <Coaching />
              <FitnessandLifestyle />
              <Contact />
            </>
          }
        />
        <Route 
          path="/about" 
          element={
            <>
              <SEO 
                title="About Felecia Hammond"
                description="Meet Felecia Hammond: U.S. Army veteran, memoirist (author of The Tactical Pause), mother of two, and founder of Your Wellness Matters. Learn about her journey from survival to embodied healing."
                keywords="Felecia Hammond veteran, The Tactical Pause book, author Felecia Hammond, Your Wellness Matters founder, emotional healing story"
                path="/about"
              />
              <About />
            </>
          } 
        />
        <Route 
          path="/services" 
          element={
            <>
              <SEO 
                title="Wellness & Coaching Services"
                description="Explore our elegant coaching services designed to support strength, nourishment, and nervous-system safety. Find the right program for your wellness journey."
                keywords="wellness services, coaching programs, nervous system safety, somatic wellness, women coaching sessions"
                path="/services"
              />
              <Services />
            </>
          } 
        />
        <Route 
          path="/testimonial" 
          element={
            <>
              <SEO 
                title="Client Success Stories & Testimonials"
                description="Read inspiring stories and testimonials from women who have worked with Felecia to break survival patterns, heal emotional flashbacks, and find peace."
                keywords="coaching testimonials, wellness client success stories, Felecia Hammond reviews, healing transformation stories"
                path="/testimonial"
              />
              <Testimonial />
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
              <SEO 
                title="Contact Felecia | Book a Session"
                description="Get in touch with Felecia Hammond to start your healing journey. Reach out for inquiries, mentorship details, or general support."
                keywords="contact Felecia Hammond, book wellness session, Your Wellness Matters contact, life coach email"
                path="/contact"
              />
              <Contact />
            </>
          } 
        />
        <Route 
          path="*" 
          element={
            <>
              <SEO 
                title="Page Not Found"
                description="The page you are looking for does not exist."
                path="/404"
                noIndex={true}
              />
              <Notfound />
            </>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <>
              <SEO 
                title="Wellness & Personal Growth Blog"
                description="Read expert insights, practical tips, guided meditation tips, and personal growth articles from Felecia. Watch our latest YouTube video resources."
                keywords="wellness blog, personal growth articles, mindful living blog, emotional intelligence tips, YouTube wellness videos"
                path="/blog"
              />
              <Blog />
            </>
          } 
        />
        <Route 
          path="/form-message" 
          element={
            <>
              <SEO 
                title="Message Status"
                description="Form submission status details."
                path="/form-message"
                noIndex={true}
              />
              <FormMessage />
            </>
          } 
        />
        <Route 
          path="/coaching" 
          element={
            <>
              <SEO 
                title="1:1 Coaching & Mentorship Programs"
                description="Explore our premium programs: The Tactical Pause Mentorship, 1:1 Emotional Healing & Transformation Coaching, Soft Life for Strong Women, and Faith-Centered Mentorship."
                keywords="The Tactical Pause mentorship, emotional healing coaching, soft life coach, motherhood coaching, faith based mentorship"
                path="/coaching"
              />
              <Coaching />
            </>
          } 
        />
        <Route 
          path="/fitness-lifestyle" 
          element={
            <>
              <SEO 
                title="Fitness + Nutrition Coaching"
                description="Elegant coaching supporting physical strength, nourishment, and nervous-system safety. Custom workout plans and restriction-free nutrition."
                keywords="fitness coaching, nutrition coaching, nervous system movement, intuitive nourishment, strength coaching for women"
                path="/fitness-lifestyle"
              />
              <FitnessandLifestyle />
            </>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <>
              <SEO 
                title="Terms of Service & Privacy Policy"
                description="Review the terms and conditions and privacy policies for Coaching & Mentorship with Felecia (Your Wellness Matters)."
                keywords="terms of service, privacy policy, coaching agreement"
                path="/terms"
              />
              <Term />
            </>
          } 
        />
        <Route 
          path="/client-intake" 
          element={
            <>
              <SEO 
                title="Client Intake Form"
                description="Start your onboarding by completing the secure client intake form. Let us customize your wellness plan."
                path="/client-intake"
                noIndex={true}
              />
              <ClientIntakeModule />
            </>
          } 
        />
      </Routes>

      {!isFormMessagePage && <Footer />}

    </>
  )
}

export default App
