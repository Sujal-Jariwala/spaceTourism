import { useEffect, useState } from 'react';
import './styles.scss'
import { technology } from '../../data';
import { motion } from 'motion/react';

const Technology = () =>{

    const [currentTech, setCurrentTech] = useState(technology[0]);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=1024)
    
    useEffect(()=>{
        document.body.setAttribute('data-page','technology')

        const handleResize = () =>{
            setIsSmallScreen(window.innerWidth<=1024)
        }

        window.addEventListener('resize', handleResize)

        return()=>window.removeEventListener('resize', handleResize)

    },[])


    
    const updateTech = (techName:string) =>{
        const clickedTech = technology.find(tech=>tech.name === techName)
        if(clickedTech) setCurrentTech(clickedTech);
    }
    return(
        <>
            <section className='technologyMain'>
                <div className='technologyMain_components'>
                    <div className='container1'>
                        <h2>03 <span>space launch 101</span></h2>
                    </div>
                    <div className='container2'>
                        <div className='leftSection'>
                            <div className='leftSection_content1'>
                                {technology.map((tech,index)=>(
                                    <>
                                    <button key={index} onClick={()=>updateTech(tech.name)} className={currentTech.name === tech.name ? `active`: ``}>
                                        {tech.index}
                                    </button>
                                    </>
                                ))}
                            </div>
                            <div className='leftSection_content2'>
                                <h2>The terminology...</h2>
                                <span>{currentTech.name}</span>
                                <motion.p key={currentTech.desc} initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.15, duration:.45}}>{currentTech.desc}</motion.p>
                            </div>
                        </div>
                        <div className='rightSection'>
                            <motion.img key={currentTech.images.portrait} initial={{y:-102, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:.25, duration:.45}} src={isSmallScreen ? currentTech.images.landscape : currentTech.images.portrait} alt={currentTech.name} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technology;