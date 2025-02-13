import './styles.scss'
import { useEffect, useState } from 'react'
import { destinations } from '../../data'



const Destination = () =>{
    const [currentDestination, setCurrentDestination] = useState(destinations[0]);

    const updateDestination = (destinationName:string)=>{
        const newDestination = destinations.find(dest=>dest.name === destinationName)
        if(newDestination) setCurrentDestination(newDestination)

    }
    
    useEffect(()=>{
        document.body.setAttribute('data-page','destination')
    },[])
    return(
        <>
            <section className='destinationMain'>
                <div className='destinationMain_components'>
                    <div className='container1'>
                        <h2>01 <span>Pick your destination</span></h2>
                    </div>
                    <div className='container2'>
                        <div className='leftSection'>
                        <img src={currentDestination.images.png} />
                    </div>
                    <div className='rightSection'>
                        <nav>
                            {destinations.map((destination, index)=>(
                                <>
                                <li className={currentDestination.name === destination.name ? `active` : ``} key={index} onClick={()=>updateDestination(destination.name)}>
                                {destination.name}
                                </li>
                                </>
                            ))}
                        </nav>
                        <h2>{currentDestination.name}</h2>
                        <p>{currentDestination.desc}</p>
                        <hr />
                        <div className='info'>
                            <div className='distance'>
                                <p>avg. distance</p>
                                <span>{currentDestination.distance}</span>
                            </div>
                            <div className='time'>
                                <p>ext. travel time</p>
                                <span>{currentDestination.travelTime}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Destination;