import React, {useState, useEffect} from 'react';
import DestinationCard from './DestinationCard';

function AvailableDestinations() {
    const[destinations, setDestinations] = useState([])

useEffect(() =>{
  fetch('/destinations')
  .then(r => r.json())
  .then(data => setDestinations(data))
},[])

    // const [selectedState, setSelectedState] = useState('All')
    
    // const filterHouses = () => {
    //     if(selectedState === "All"){
    //         return houses
    //     } else {
    //         return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
    //     }
    // }

    // const test = filterHouses()

    
    return (
        <div>
            <div className='houses-header-div'>
                <h1>TRIPIT TRAVELS</h1>
            </div>
            <div className='selector-div'>
                <label>
                Select Location:
      
      
                </label>
            </div>
            <div className='available-houses'>
            {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            name={destination.name}
            location={destination.location}
            description= {destination.description}
            per_night={destination.per_night}
          />
        
      ))}
            </div>
        </div>
    )
}

export default AvailableDestinations;