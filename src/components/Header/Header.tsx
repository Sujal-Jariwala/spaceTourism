import { useEffect, useState } from 'react';
import './styles.scss'
import Sidebar from './SideBar/Sidebar';
import { NavLink } from 'react-router';
import {links} from '../../data'

const Header = () =>{
    const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth<=768);
    const [isOpen, setIsOpen] = useState(false);

    const toggler = () =>{
        setIsOpen((prev)=>!prev);
    }    

    useEffect(()=>{
        const handleResize = () =>{
            setisSmallScreen(window.innerWidth<=768)
        }
        window.addEventListener('resize', handleResize)

        return()=> window.removeEventListener('resize', handleResize);

    },[])
    return(
        <>
        <header className='headerMain'>
            <div className='headerMain_components'>
                <div className='leftSection'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                <div className='divider'></div>
                </div>
                {isSmallScreen?(
                    <>
                    <div className='parent' >
                    <div className={`container ${isOpen ? `active`: ``}`} onClick={toggler}>
                            <div className="lines line__1"></div>
                            <div className="lines line__2"></div>
                            <div className="lines line__3"></div>
                        </div>
                    </div> 
                    {isOpen&&(
                        <>
                            <Sidebar onClose={()=>setIsOpen(false)}/>
                        </>
                    )}
                    </>
                ):(
                    <>
                        
                <div className='rightSection'>
                    <nav>
                        {links.map((link,index)=>(
                            <>
                            <NavLink className={({isActive})=>isActive ? `active`:``} key={index} to={link.goTo} >
                                <li>0{link.index} <span>{link.title}</span></li>
                            </NavLink>
                            </>
                        ))}
                    </nav>
                </div>  
                    </>
                )}
            </div>
        </header>
        </>
    )
}

export default Header;