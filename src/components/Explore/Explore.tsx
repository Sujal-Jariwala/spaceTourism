import { useEffect } from 'react';
import './styles.scss'

const Explore = () =>{
    useEffect(()=>{
        document.body.setAttribute('data-page', 'home')
    },[])
    return(
        <>
        <section className='exploreMain'>
            <div className='exploreMain_components'>
                <div className='leftSection'>
                    <h4>So, you want to travel to</h4>
                    <h1>space</h1>
                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <div className='rightSection'>
                    <div className='circle'>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Explore;