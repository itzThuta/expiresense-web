import About from "./components/About.jsx";
import Benefits from "./components/Benefits.jsx";
import Contact from "./components/Contact.jsx";
import FeatureShowcase from "./components/FeatureShowcase.jsx";
import Footer from "./components/Footer.jsx";
import HeroCarousel from "./components/HeroCarousal.jsx";
import Navbar from "./components/Navbar";
import Savings from "./components/Savings.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-slate-900">
      <Navbar />

      {/* Hero / Carousel */}
      <header id="home" className="pt-20">
        <HeroCarousel />
      </header>

      <main>
        {/* How it works / Features (no fixed height) */}
        <section id="how-it-works" className="scroll-mt-20">
          <FeatureShowcase />
        </section>

        {/* Benefits — gently pulled up toward Features */}
        <section className="scroll-mt-20 -mt-4 sm:-mt-6 lg:-mt-8">
          <Benefits id="benefits" className="pt-6 sm:pt-8 lg:pt-10" />
        </section>

        {/* Savings calculator */}
        <section className="scroll-mt-20">
          <Savings />
        </section>

        {/* About + Contact */}
        <section className="scroll-mt-20">
          <About id="about" />
        </section>

        <section className="scroll-mt-20">
          <Contact id="contact" />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
