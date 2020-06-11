import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations';
import './style.css';


export default function Notification({messagePass,timePass,activePass}) {

    const [active, setActive] = useState(activePass);
    const [message, setMessage] = useState(messagePass);
    const [time,setTime] = useState(timePass);
    
    // function notification() {
    //     let notification = '';
    //     if (active) {
    //         notification = (
    //             <FadeInUp className="notification">
    //                 <span>{message}</span>
    //             </FadeInUp>
    //         );

    //         setTimeout(() => {
    //             setActive(false);
    //         }, time);
    //     }

    //     return notification;
    // }

    // useEffect(()=>{
    //     console.log('a')
    //   return notification();  
    // },[active])

    return (<div/>);
   
}
// const FadeInUp = styled.div`animation:1.5s ${keyframes`${fadeInUp}`} none`;