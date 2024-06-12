import React from "react";
import LogoVideo from '../../images/AssamNeon - Video.mp4';
import './entry.css'

const Entry = () => {
    return(
        <div className="entry">
            <video className="entryVideo" src={LogoVideo} autoPlay muted loop />
        </div>
    )
};

export default Entry;