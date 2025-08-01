import React from 'react'
import Flights from './Flights'

const GuestGreeting = (props) => {
    return (
        <div className='box'>
            <h1>Please sign up.</h1>
            <button style={{ marginBottom: "10px" }} onClick={() => props.setIsLogged(true)}>Login</button>
            <hr />
            <Flights />
        </div>
    )
}

export default GuestGreeting
