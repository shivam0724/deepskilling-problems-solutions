import React from 'react'

const Buttons = () => {
    const [count, setCount] = React.useState(0);
    const sayHello = (s) => alert(s);

    return (
        <div className='buttons-container'>
            <span>{count}</span>
            <button onClick={() => {setCount(count + 1); sayHello("Hello! Member")}}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => sayHello("Welcome!!!")}>Say Welcome</button>
            <button onClick={() => alert("I was clicked")}>Click on Me</button>
        </div >
    )
}

export default Buttons
