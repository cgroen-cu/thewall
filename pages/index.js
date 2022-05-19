import styled from 'styled-components'
import Head from 'next/head'
import GratitudeApp from "../components/GratitudeApp"
export default function Home() {
  return <>
    <Head>
      <title> The WALL </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <GratitudeApp />
  
  </>
}
