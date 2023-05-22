import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const { isLoading, error, data: appointmentOption = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {


            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // })
    return (
        <section className='my-16'>
            <p className='text-secondary font-bold text-md text-center'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOption.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }{
                    treatment && <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                }

            </div>
        </section>
    );
};

export default AvailableAppointment;