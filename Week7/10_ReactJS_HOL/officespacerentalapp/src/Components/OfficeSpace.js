import React from 'react'

const OfficeSpace = ({ office }) => {
    const sr = "https://southgaterealtyllc.com/wp-content/uploads/2017/12/shutterstock_735875389.jpg";
    const Img = ({ }) => <img src={sr} className="office-img" width={"25%"} height={"25%"} alt="Office Space" />;
    return (
        <div className='office-box'>
            <Img />
            <div className='office-details'>
                <h3>{office.Name}</h3>
                <h4 style={{color: office.Rent > 60000 ? 'red' : 'green'}}>Rent: {office.Rent}</h4>
                <h4>Address: {office.Address}</h4>
            </div>
        </div >
    )
}

export default OfficeSpace
