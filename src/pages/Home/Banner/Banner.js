import React from 'react';
import chair from "../../../assets/images/chair.png"
import bg from "../../../assets/images/bg.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className='max-w-full'>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-1/2">
                        <img src={chair} className="rounded-lg shadow-2xl" alt="" />
                    </div>
                    <div className="max-w-lg">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;