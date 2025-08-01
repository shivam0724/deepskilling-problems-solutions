import React from 'react'

const CurrencyConvertor = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const toCurr = e.target.toCurr.value;

        if (amount && toCurr) {
            alert(`Converted ${amount} INR to ${toCurr} is ${toCurr === 'EUR' ? (amount * 0.011).toFixed(2) : (amount * 0.012).toFixed(2)} ${toCurr}`);
        } else {
            alert("Please fill in all fields");
        }

        e.target.reset();
    }
    return (
        <div>
            <h2 style={{color: "green"}}>Currency Convertor!!!</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <div>
                    <label htmlFor="amount">Amount (in INR) : </label>
                    <input type="number" id="amount" name="amount" min={0} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label htmlFor="toCurr">To:</label>
                    <select id="toCurr" name="toCurr">
                        <option value="EUR">EURO</option>
                        <option value="USD">USDOLLAR</option>
                    </select>
                </div>
                <button type="submit" style={{ alignSelf: 'flex-end' }}>Convert</button>
            </form>
        </div>
    )
}

export default CurrencyConvertor
