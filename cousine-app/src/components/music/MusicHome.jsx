import Footer from '../Footer'
import '../../styles/music.css';
import { NavbarUse } from '../NavbarUse';
import MusicPreview from './MusicPreview';

export const MusicHome = () => {

    
    return(
        <>
       <NavbarUse/>
       <div className="music-home">
            <div className='row'>
                    <h1>My music</h1>
                    <div className='col-sm'>
                        My music player
                    </div>
                    <div className='col-sm'>
                        My music list
                    </div>
            </div>
        </div>
        <MusicPreview/>
       <Footer/>
        </>
    )
}