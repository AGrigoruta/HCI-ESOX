import React from 'react';

const Image = function statelessFunctionComponentClass(props) {

    let source = props.imageIsRelative ?
        'img/' + props.imageSource :
        '/img/' + props.imageSource;

    const style = {
        image: {
            width: '100%',
            height: 'auto',
            position: 'relative',
            overflow: 'hidden',
            padding: '5px'
        }
    }

    return (
        <img src={source} role="presentation" style={style.image} />
    )
}

export default Image