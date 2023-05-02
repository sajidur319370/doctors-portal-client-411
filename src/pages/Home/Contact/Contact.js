import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='mt-16 py-4' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='text-center'>
                <h3 className='text-secondary text-2xl font-bold py-4'>Appointment</h3>
                <h2 className=' text-4xl font-semibold'>Make an appointment Today</h2>
            </div>
            <form className="w-1/2 mx-auto">

                <div className="md:w-full my-5">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="email" type="Email" placeholder="Your Email" />

                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full mb-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="name" type="text" placeholder="Your Name" />

                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mb-2 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary" id="message" cols="30" rows="10" placeholder="Your Message" />
                </div>


                <PrimaryButton>Submit</PrimaryButton>
            </form>

        </section>

    );
};

export default Contact;