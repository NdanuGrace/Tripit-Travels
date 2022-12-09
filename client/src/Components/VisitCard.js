import React from 'react';

function VisitCard({ start_date, end_date, destinations }) {

    return (
        <div className='visit-outer-div'>
            {destinations.map((destination) => (

                <div className='visit-card' style={{ backgroundImage: `url(${destination.image}})` }}>

                    <div className='visit-information-container'>
                        <div className='visit-info-div'>
                            <h2 className='visit-title'>{destination.location}</h2>
                            <div className='visit-more-information'>
                                <div className='from-and-to-container'>
                                    <div className='box from'>
                                        <p className='from'>From: {start_date}</p>
                                    </div>
                                    <div className='box to'>
                                        <p className='to'>To: {end_date}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
    
    ))}

    </div>
    )  }      


export default VisitCard;