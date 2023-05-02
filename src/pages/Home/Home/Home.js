import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Care from '../Care/Care';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>

        </div>
    );
};

export default Home;