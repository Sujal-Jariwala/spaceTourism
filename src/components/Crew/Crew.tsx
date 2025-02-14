import { useEffect, useState } from 'react';
import './styles.scss'
import { crews } from '../../data';
import { motion } from 'motion/react';


const Crew = () =>{
    const [currentCrewMember, setCurentCrewMember] = useState(crews[0]);

    const updateCrew = (crewmemberName:string) =>{
        const crewMem = crews.find(crew=>crew.name === crewmemberName)
        if(crewMem) setCurentCrewMember(crewMem);
    }

    useEffect(()=>{
        document.body.setAttribute('data-page', 'crew')
    },[])
    
    return(
        <>
            <section className='crewMain'>
                <div className='crewMain_components'>
                    <div className='container1'>
                        <h2>02 <span>meet your crew</span></h2>
                    </div>
                    <div className='container2'>
                        <div className='leftSection'>
                            <div className='content1'>
                                <motion.div key={currentCrewMember.role} initial={{x:150, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:.35, duration:.75}} className='roleDiv'>
                                    <p className='role'>{currentCrewMember.role}</p>
                                </motion.div>
                                <motion.div key={currentCrewMember.name} initial={{x:-150, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:.35, duration:.85}} className='nameDiv'>
                                    <span>{currentCrewMember.name}</span>
                                </motion.div>
                                <motion.p key={currentCrewMember.bio} initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.35, delay:.65}} className='bio'>{currentCrewMember.bio}</motion.p>
                            </div>
                            <div className='btnContainer'>
                                {crews.map((crew, index)=>(
                                    <>
                                    <button key={index} className={currentCrewMember.name === crew.name ? `active` : ``} onClick={()=>updateCrew(crew.name)}>
                                    </button>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className='rightSection'>
                            <motion.img key={currentCrewMember.images.png} initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:.5, delay:.5}} src={currentCrewMember.images.png} alt={currentCrewMember.name} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crew;