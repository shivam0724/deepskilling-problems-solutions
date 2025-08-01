import React from 'react';
import { flights } from './Flights';

export default function Booking({ isLoggedIn }) {
    if (!isLoggedIn) {
        return null;
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
            <h2>Book Your Ticket</h2>
            <label htmlFor="flightSelect">Select a flight from the list below:</label>
            <select defaultValue="" id="flightSelect" style={{ margin: "10px 0" }}>
                {flights.map(flight => (
                    <option key={flight.id} value={flight.id}>
                        {flight.from} → {flight.to} at {flight.time}
                    </option>
                ))}
            </select>
            <button onClick={() => alert("Booking Success!!!")}>Book Now</button>
        </div>
    );
}