import Navbar from "./asset/components/Navbar";
import Hero from "./asset/components/Hero";
// import Partners from "./asset/components/Partners";
import Features from "./asset/components/Features";
import WhyChoose from "./asset/components/WhyChoose";
import Steps from "./asset/components/Steps";
import Stats from "./asset/components/Stats";
import CTA from "./asset/components/CTA";
import Footer from "./asset/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <Steps />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
