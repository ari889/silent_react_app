import React, { Fragment } from 'react'
import About from './Section/About'
import Client from './Section/Client'
import Contact from './Section/Contact'
import ContactInfo from './Section/ContactInfo'
import Creative from './Section/Creative'
import Feature from './Section/Feature'
import FeatureApp from './Section/FeatureApp'
import Hero from './Section/Hero'
import LandingOffer from './Section/LandingOffer'
import Map from './Section/Map'
import Price from './Section/Price'
import Screenshot from './Section/Screenshot'
import Seperator from './Section/Seperator'
import Service from './Section/Service'
import Subscribe from './Section/Subscribe'
import Team from './Section/Team'
import Testimonial from './Section/Testimonial'
import Video from './Section/Video'


const Home = () => {
    return (
        <Fragment>
            <Hero />
            <LandingOffer />
            <Seperator />
            <Feature />
            <Video />
            <Team />
            <About />
            <Service />
            <FeatureApp />
            <Seperator />
            <Creative />
            <Seperator />
            <Screenshot />
            <Client />
            <Price />
            <Subscribe />
            <Seperator />
            <Testimonial />
            <Seperator />
            <Map />
            <Contact />
            <ContactInfo />
        </Fragment>
    )
}

export default Home