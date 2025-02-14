import './styles.scss'
import { useEffect, useState } from 'react'
import { destinations } from '../../data'
import { motion } from 'motion/react'


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
                        <motion.img initial={{rotate:0}} animate={{rotate:360}} transition={{
                            repeat:Infinity,
                            duration:25,
                            ease:'linear'
                        }} src={currentDestination.images.png} />
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
                        <motion.h2 key={currentDestination.name} initial={{x:155, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.55, delay:.55}}>{currentDestination.name}</motion.h2>
                        <motion.p key={currentDestination.desc} initial={{y:100,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.25, duration:.45}}>{currentDestination.desc}</motion.p>
                        <hr />
                        <div className='info'>
                            <motion.div key={currentDestination.distance} initial={{y:75, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.25, duration:.5}} className='distance'>
                                <p>avg. distance</p>
                                <span>{currentDestination.distance}</span>
                            </motion.div>
                            <motion.div key={currentDestination.travelTime} initial={{y:75, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.25, duration:.5}}  className='time'>
                                <p>ext. travel time</p>
                                <span>{currentDestination.travelTime}</span>
                            </motion.div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Destination;