import React, {useState, useEffect} from 'react';
import VisitCard from './VisitCard';


function MyVisits({ user, destinations }) {
    const [visits, setVisits] = useState([])

    useEffect(() => {
        fetch(`/visits`)
        .then(r => r.json())
        .then(data => setVisits(data))
    },[])
    

    // const renderVisits = visits.map(visit => <VisitCard visit={visit} key={visit.id} destinations={destinations} user={user} />)

    return(
        <div>
            <div className='visits-header-div'>
                <h1>MY VISITS</h1>
            </div>
            <div className='all-my-visits'>
            {visits.map((visit) => (
          <VisitCard
            key={visit.id}
           start_date = {visit.start_date}
           end_date = {visit.end_date}
           destinations = {destinations}
          />
        
      ))}
            </div>
        </div>
    )
}

export default MyVisits;
