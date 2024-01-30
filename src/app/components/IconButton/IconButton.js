import React from 'react';
import './IconButton.css';
import Clickable from '../Clickable/Clickable';
import Image from 'next/image';

const IconButton = props => {
    return (
        <Clickable onClick={props.onClick}>
            {/* <img className="logo" src={props.icon} alt={props.alt}/> */}
            <Image src={props.icon} alt={props.alt} className='logo'/>
            <span className="logotype">{props.text}</span>
        </Clickable>
    );
}

export default IconButton;