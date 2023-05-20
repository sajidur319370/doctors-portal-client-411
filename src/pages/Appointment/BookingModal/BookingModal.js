import format from 'date-fns/format';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'pp');
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

        setTreatment(null);

        console.log(booking);
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
                        <input name='patient' type="text" placeholder="You Name" className="input w-full input-bordered" />
                        <input name="email" type="Email" placeholder="Your Email" className="input w-full input-bordered" />
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