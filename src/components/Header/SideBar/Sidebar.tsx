import './styles.scss'
import { motion } from 'motion/react';
import { NavLink } from 'react-router';
import {links} from '../../../data'

interface SidebarProps{
    onClose():void
}
const Sidebar = ({onClose}:SidebarProps) =>{
    
    return(
        <>
        <motion.section initial={{opacity:0, x:155}} animate={{opacity:1, x:0}} transition={{duration:.4}}  className='sidebarMain'>
            <motion.div className='sidebarMain_components'>
            <nav>
                {links.map((link,index)=>(
                    <>  
                        <NavLink key={index} className={({isActive})=>isActive ? `active`:``} to={link.goTo} onClick={onClose}>
                            <li>0{link.index} <span>{link.title}</span></li>
                        </NavLink>
                    </>
                ))}    
            </nav>
            </motion.div>
        </motion.section>
        </>
    )
}

export default Sidebar;