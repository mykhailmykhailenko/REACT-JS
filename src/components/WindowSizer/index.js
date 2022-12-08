import React from 'react';
import useWindowSizer from '../../hooks/useWindowSizer';

function WindowSizer (props) {
    
    const sizes = useWindowSizer();

        return (
            <div>
                <p>Width: {sizes.x}</p>
                <p>Height: {sizes.y}</p>
            </div>
        )
}

export default WindowSizer;