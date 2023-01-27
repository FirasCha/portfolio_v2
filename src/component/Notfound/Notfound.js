import React from 'react';
import videoNotFound from "../../assets/videoplayback.mp4";
  const NotFound = () => {
        return (
            <div>
               <video src={videoNotFound} width="100%" height="100%" autoplay="true" />
            </div>
        );
    
    }
    
export default NotFound;