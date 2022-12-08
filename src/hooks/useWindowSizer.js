import React, {useState, useEffect} from "react";

function useWindowSizer () {
    const [sizes, setSizes] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });

    useEffect(()=>{
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize',  resizeHandler)
        }
    },[]);


    const resizeHandler = () => {
        setSizes({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }

    return sizes
} 

export default useWindowSizer;
