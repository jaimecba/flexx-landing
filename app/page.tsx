'use client';

import Header from './site/components/Header';
import Hero from './site/components/Hero';
import Services from './site/components/Services';
import Diferenciais from './site/components/Diferenciais';
import Footer from './site/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Diferenciais />
            <Footer />
        </>
    );
}