import React from 'react';
import ReviewForm from './ReviewForm';

function VisitCard({ visit, destinations }) {
    const {start_date, end_date, destination_id, user_id} = visit
    const destinationVisit = destinations.map(destination => destination.id === destination_id)

    return (
        <div className='visit-outer-div'>
            <div className='visit-card' style={{backgroundImage: `url(${destinationVisit[0].image}})`}}>
                <div className='visit-form-div'>
                    <div className='visit-content'>
                        <ReviewForm house_id={destinationVisit[0].id} user_id={user_id} />
                    </div>
                </div>
                <div className='visit-information-container'>
                    <div className='visit-info-div'>
                        <h2 className='visit-title'>{destinationVisit[0].location}</h2>
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
        </div>
    )
}

export default VisitCard;