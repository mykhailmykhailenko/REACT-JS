import React, { useEffect, useState } from 'react';

function WindowSizer (props) {
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

        return (
            <div>
                <p>Width: {sizes.x}</p>
                <p>Height: {sizes.y}</p>
            </div>
        )
}

export default WindowSizer;