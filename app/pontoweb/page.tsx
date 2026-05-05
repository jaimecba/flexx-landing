"use client";

import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Metrics from '../components/Metrics';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
// import SocialProof from './components/SocialProof';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Metrics />
      <Features />
      <Testimonials />
      {/* <SocialProof /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}