import React from 'react';
import videoNotFound from "../../assets/videoplayback.mp4";
  const NotFound = () => {
        return (
            
            <div>
                <br></br>
               <video src={videoNotFound} width="100%" height="100%" autoPlay />
            </div>
        );
    
    }
    
export default NotFound;