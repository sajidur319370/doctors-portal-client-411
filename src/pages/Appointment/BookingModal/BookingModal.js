import format from 'date-fns/format';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patient = form.patient.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient,
            slot,
            email,
            phone,
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking Confirmed");
                    setTreatment(null);
                    refetch();
                } else {
                    toast.error(data.message);
                    setTreatment(null);
                }

            })

        console.log(booking);
        console.log(user);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-2'>
                        <input type="text" defaultValue={date} className="input w-full input-bordered" />
                        <select name='slot' className="select w-full input-bordered">

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='patient' type="text" defaultValue={user?.displayName} placeholder="You Name" className="input w-full input-bordered" />
                        <input name="email" type="Email" defaultValue={user?.email} placeholder="Your Email" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />

                        <br />
                        <input type="submit" value="submit" className='w-full btn btn-accent' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;