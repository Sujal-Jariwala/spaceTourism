import { useEffect, useState } from 'react';
import './styles.scss'
import { crews } from '../../data';



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
                                <div className='roleDiv'>
                                    <p className='role'>{currentCrewMember.role}</p>
                                </div>
                                <div className='nameDiv'>
                                    <span>{currentCrewMember.name}</span>
                                </div>
                                <p className='bio'>{currentCrewMember.bio}</p>
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
                            <img src={currentCrewMember.images.png} alt={currentCrewMember.name} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Crew;