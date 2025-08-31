import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import HeroCarousel from "./components/HeroCarousal.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-slate-900">
      <Navbar />

      {/* Hero / Carousel */}
      <header id="home" className="pt-20">
        <HeroCarousel />
      </header>

      <main>
        <section id="how-it-works" className="h-[40vh]"><HowItWorks /></section>
        {/* <section id="about" className="h-[40vh]"><About /></section> */}
        <section id="contact" className="h-[30vh]"></section>
      </main>
      <About id="about" />
      <Contact id="contact"/>
      <footer><Footer/></footer>
    </div>
  );
}
