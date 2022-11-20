import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, ...rest} = props;

    const inlineStyles = {
        width,
        height,
        overflow: 'hidden',
        objectFit: 'cover'
    }

    return (
        <div style={inlineStyles} {...rest}>
            {children}
        </div>
    );
}


//<div></div>
// React.createElement('div', props, children);

export default ImageWrapper;