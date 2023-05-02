import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-16'
            style={{ backgroundImage: `url(${appointment})` }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='1/2'>
                        <img src={doctor} alt=" " className="w-max rounded-lg shadow-2xl" />
                    </div>
                    <div className='text-white'>
                        <h3 className='text-secondary text-2xl font-bold py-4'>Appointment</h3>
                        <h2 className='text-2xl  md:text-4xl  lg:text-5xl font-semibold'>Make an appointment Today</h2>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;