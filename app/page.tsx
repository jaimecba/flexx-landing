'use client'

import Header from './site/components/Header'
import Hero from './site/components/Hero'
import Products from './site/components/Products'
import Services from './site/components/Services'
import CTA from './site/components/CTA'
import Diferenciais from './site/components/Diferenciais'
import Footer from './site/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Products />
            <Services />
            <CTA />
            <Diferenciais />
            <Footer />
        </>
    )
}