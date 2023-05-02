import React from 'react';
import quote from './../../../assets/icons/quote.svg';
import people1 from './../../../assets/images/people1.png';
import people2 from './../../../assets/images/people2.png';
import people3 from './../../../assets/images/people3.png';
import Testimonial from './Testimonial';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            location: 'California',
            rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 2,
            img: people2,
            name: 'Winson Herry',
            location: 'California',
            rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 3,
            img: people3,
            name: 'Winson Herry',
            location: 'California',
            rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        }
    ]
    return (
        <section className='mt-16 mx-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary text-2xl font-bold py-4'>Testimonial</h3>
                    <h2 className='text-accent text-3xl md:text-4xl lg:text-5xl font-semibold pb-4'>What Our Patients Says</h2>
                </div>
                <figure className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Testimonial
                        review={review}
                        key={review._id}
                    >

                    </Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;