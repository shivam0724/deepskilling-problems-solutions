import React from 'react';

export const flights = [
    { id: 1, from: 'DEL', to: 'BOM', time: '10:00 AM' },
    { id: 2, from: 'BLR', to: 'MAA', time: '02:30 PM' },
    { id: 3, from: 'HYD', to: 'CCU', time: '06:45 PM' },
];

export default function Flights() {
    return (
        <div>
            <h2>Available Flights</h2>
            <ul>
                {flights.map(f => (
                    <li key={f.id}>
                        {f.from} → {f.to} at {f.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}