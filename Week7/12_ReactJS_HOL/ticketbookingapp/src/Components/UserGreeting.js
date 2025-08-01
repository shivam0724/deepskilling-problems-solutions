import React from 'react'
import Flights from './Flights'
import Booking from './Booking'

const UserGreeting = (props) => {
    return (
        <div className='box'>
            <h1>Welcome back!</h1>

            <button style={{marginBottom: "10px"}} onClick={() => props.setIsLogged(false)}>Logout</button>
            <hr />
            <Flights />
            <hr />
            <Booking isLoggedIn={props.isLogged} />
        </div>
    )
}

export default UserGreeting
