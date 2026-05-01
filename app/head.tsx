'use client'

import { Viewport } from 'next'

export default function Head() {
    return (
        <>
            <Viewport />
            <title>Secullum - Controle de Ponto Online Seguro e Integrado ao eSocial</title>
            <meta name="description" content="Gerencie a jornada de trabalho dos seus colaboradores com o Secullum. Plataforma completa com biometria, QR Code, geolocalização e integração ao eSocial e REP. Experimente grátis!" />
            <link rel="canonical" href="https://www.secullum.com.br/" />

            <meta property="og:title" content="Secullum - Controle de Ponto Online Seguro e Integrado ao eSocial" />
            <meta property="og:description" content="Gerencie a jornada de trabalho dos seus colaboradores com o Secullum. Plataforma completa com biometria, QR Code, geolocalização e integração ao eSocial e REP. Experimente grátis!" />
            <meta property="og:image" content="https://www.secullum.com.br/og-image.jpg" />
            <meta property="og:url" content="https://www.secullum.com.br/" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Secullum - Controle de Ponto Online Seguro e Integrado ao eSocial" />
            <meta name="twitter:description" content="Gerencie a jornada de trabalho dos seus colaboradores com o Secullum. Plataforma completa com biometria, QR Code, geolocalização e integração ao eSocial e REP. Experimente grátis!" />
            <meta name="twitter:image" content="https://www.secullum.com.br/og-image.jpg" />
            <meta name="twitter:site" content="@secullumbr" />

            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
            <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
        </>
    )
}
