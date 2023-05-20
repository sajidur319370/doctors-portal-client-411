import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-16' style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: 'cover' }}>

            <div className="flex-col lg:flex lg:flex-row-reverse justify-evenly">
                <img src={chair} alt='' className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='shadow-lg rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;