import React, { useState } from 'react';
import { FiMenu, FiPower,FiX, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

export default function Menu({ handleLogout }) {
    const [classToggle, setClassToggle] = useState({ display: "none" })

    function handleToggle() {
        if (classToggle.display === 'none') {
            setClassToggle({
                display: 'block',
                position:'absolute'                
            })
        } else {
            setClassToggle({
                display: "none"
            })
        }
    }
    return (
        <div id="menu">
            <div id="menu-container">
                <div id="menu-desktop">
                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button type="button" onClick={handleLogout}><FiPower size={18} color="#e02041" /></button>
                </div>

                <div id="menu-device">
                    <button type="button" className="button" onClick={handleToggle}><FiMenu size={18} color="#e02041" /></button>
                </div>
            </div>

            <div style={classToggle} className="menu-slide">
                    <div className="menu-background" onClick={handleToggle}></div>
                       <div className="menu-itens">
                        <ul>
                                <li><button className="menu-button" onClick={handleToggle}><FiX size={28} color="#fff"/></button></li>
                                <li><Link to="/incidents/new"><FiFileText size={18} color="#fff"/><span>Cadastrar novo caso</span></Link></li>
                                <li><a href="#"><FiPower size={18} color="#fff" /><span>Logout</span></a></li>
                                
                            </ul>
                       </div>
             </div>
        </div>
    );
}