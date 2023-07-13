import './booking-form.css';
import React from "react";
import { useState } from "react"
// import { validateEmail } from "../src/utils";

/* const PasswordErrorMessage = () => {
 return (
   <p className="FieldError">Password should have at least 8 characters</p> 
 );
};
  */
const BookingForm = () => {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [guestNum, setGuestNum] = useState("");
    const [occasion, setOccasion] = useState("");

    /*  const getIsFormValid = () => {
       return (
         firstName &&
         validateEmail(email) &&
         password.value.length >= 8 &&
         role !== "role"
       );
     };
      */
    const clearForm = () => {
        setResDate("");
        setResTime("");
        setGuestNum("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted");
        clearForm();
    };

    const availableTimes = [
        {
            time: "17:00",
        },
        {
            time: "18:00",
        },
        {
            time: "19:00",
        },
        {
            time: "20:00",
        },
        {
            time: "21:00",
        },
        {
            time: "22:00",
        },
    ];

    return (
        <section id="booking-form">
        <div className="container booking-form__container">
            <form id="form" onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Reserve a Table</h2>
                    <div className="Field">
                        <label>
                            Date <sup>*</sup>
                        </label>
                        <input type='date'
                            value={resDate}
                            onChange={(e) => {
                                setResDate(e.target.value);
                            }}
                            placeholder="Date"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Time <sup>*</sup>
                        </label>
                        <select value={resTime} onChange={(e) => setResTime(e.target.value)}>  
                            {
                                availableTimes.map((times) => (
                                    <option value={times.time}>{times.time}</option>
                                )
                            )}
                        </select>

                            {/*<select value={resTime} onChange={(e) => setResTime(e.target.value)}>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </select> */}
                        
                    </div>
                    <div className="Field">
                        <label>
                            Number of Guests <sup>*</sup>
                        </label>
                        <input
                            value={guestNum}
                            onChange={(e) => {
                                setGuestNum(e.target.value);
                            }}
                            placeholder="Number of Guests"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Occasion <sup>*</sup>
                        </label>
                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button type="submit" id="btn">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
        </section>
    );
}

export default BookingForm; 