import React from 'react';

const Testimonial = ({ review }) => {
    const { name, img, location, rev } = review;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{rev}</p>
                <div className="flex items-center justify-around pt-6">
                    <div className="avatar">
                        <div className="w-12 lg:w-24 md:w-16  rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-medium text-lg text-accent'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;