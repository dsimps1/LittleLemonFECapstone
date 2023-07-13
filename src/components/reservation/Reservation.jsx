import React from 'react'
import './reservation.css'
import BookingForm from '../../components/booking-form/BookingForm'


const Reservation = () => {
    return (
        <section id="reservation">
            {/* <div className="container reservation__container">
                <h1>Reserve a Table</h1>
            </div> */}
            <div>
                <BookingForm />
            </div>
        </section>
    )
  }

  export default Reservation