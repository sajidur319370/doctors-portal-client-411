import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: fluoride

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: cavity

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: whitening

        }
    ]
    return (
        <div>
            <div className='mt-16 '>
                <div className='text-center'>
                    <h3 className='text-secondary text-2xl font-bold py-4'>Our Services</h3>
                    <h2 className='text-accent  lg:text-5xl md:text-4xl  text-3xl font-semibold py-4'>Services We Provide</h2>

                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        serviceData.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }

                </div>


            </div>

        </div>
    );
};

export default Services;