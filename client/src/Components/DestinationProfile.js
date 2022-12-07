import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function DestinationProfile({ user }) {
    const [destination, setDestination] = useState({})
    const { id } = useParams()
    const [value, onChange] = useState([new Date(), new Date()]);
    const {image, name, location, description, reviews} = destination
    
    useEffect(() => {
        fetch(`/destinations/${id}`)
        .then(r => r.json())
        .then(data => setDestination(data))
    },[id])

    let finish = value[1].toString().split(' ')
    let begining = value[0].toString().split(' ')
    switch(finish[1]){
        case 'Jan':
            finish[1] = '01'
            break;
        case 'Feb':
            finish[1] = '02'
            break;
        case 'Mar':
            finish[1] = '03'
            break;
        case 'Apr':
            finish[1] = '04'
            break;
        case 'May':
            finish[1] = '05'
            break;
        case 'Jun':
            finish[1] = '06'
            break;
        case 'Jul':
            finish[1] = '07'
            break;
        case 'Aug':
            finish[1] = '08'
            break;
        case 'Sep':
            finish[1] = '09'
            break;
        case 'Oct':
            finish[1] = '10'
            break;
        case 'Nov':
            finish[1] = '11'
            break;
        default:
            finish[1] = '12'
            break;
    }
    switch(begining[1]){
        case 'Jan':
            begining[1] = '01'
            break;
        case 'Feb':
            begining[1] = '02'
            break;
        case 'Mar':
            begining[1] = '03'
            break;
        case 'Apr':
            begining[1] = '04'
            break;
        case 'May':
            begining[1] = '05'
            break;
        case 'Jun':
            begining[1] = '06'
            break;
        case 'Jul':
            begining[1] = '07'
            break;
        case 'Aug':
            begining[1] = '08'
            break;
        case 'Sep':
            begining[1] = '09'
            break;
        case 'Oct':
            begining[1] = '10'
            break;
        case 'Nov':
            begining[1] = '11'
            break;
        default:
            begining[1] = '12'
            break;
    }
    
    let start = begining[3] + '-' + begining[1] + '-' + begining[2] 
    let end = finish[3] + '-' + finish[1] + '-' + finish[2] 
    const handleBooking = () => {
        fetch('/visits',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                start_date: start,
                end_date: end,
                house_id: id,
                user_id: user.id
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    return(
        <div className='profile'>
            <h1 className='name'>{name}</h1>
            <br></br> 
            <br></br> 
            <div className='information'>
                <div className='pic-and-Stars'>
                    <img className="img" src={image} alt={name}></img>
                </div>
                <div className='details'>
                    <h1>{location}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className='booking'>
              
                <div className='book-visit'>
                    <h1>Book Visit</h1>
                    {/* <form onSubmit={handleSubmit}  className="reservations">
   <label for="fullname">Full Name</label>
    <input type='text' onChange={handleChanges}  value={reservationForm.name}
 name="name"placeholder="full name"/><br/>
    <label for="email">Email</label>
    <input type='email' onChange={handleChanges}  value={reservationForm.email} name="email" placeholder="enter your email"/><br/>
    <label for="number">Phone Number</label>
    <input type='number' onChange={handleChanges}  value={reservationForm.phone_number}  name="phone_number" placeholder="enter your phone number"/><br/>
    <label for="seats">Number of Seats</label>
    <input type='number' onChange={handleChanges}  value={reservationForm.seats}  name="seats" placeholder="enter number of seats"/><br/>
    <label for="datetime">Date-Time</label>
    <input type='datetime-local' onChange={handleChanges}  value={reservationForm.time}  name="time" placeholder="enter time and date"/><br/> */}
                    {/* <DateRangePicker
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date"
                        onChange={onChange}
                        value={value}
                        yearAriaLabel="Year"
                        format='y-MM-dd'
                    /> */}
                <Link to={`/myvisits`}>
                    <button onClick={handleBooking}>Book Now!</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default DestinationProfile;



















