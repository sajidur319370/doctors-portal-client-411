import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Service = ({ service }) => {
    const { name, description, image } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <PrimaryButton>BUY NOW</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Service;