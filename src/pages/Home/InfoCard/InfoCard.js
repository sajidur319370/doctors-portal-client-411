import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (

        <div className={`card card-side bg-base-100 shadow-xl ${bgClass} text-white p-6`}>
            <figure>
                <img src={icon} alt=" " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>


    );
};

export default InfoCard;