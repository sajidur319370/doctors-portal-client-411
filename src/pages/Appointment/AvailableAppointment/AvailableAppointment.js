import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-411.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-411.vercel.app/appointmentOptions')
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
                        refetch={refetch}
                    ></BookingModal>
                }

            </div>
        </section>
    );
};

export default AvailableAppointment;