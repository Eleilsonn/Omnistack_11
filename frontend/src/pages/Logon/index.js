import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

import Notification from '../../components/notification';


import './styles.css';

import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
    const [id, setId] = useState('');
    const [notificatioMessage,setNotificationMessage] = useState('');
    const [notificatioTime,setNotificationTime] = useState(5000);
    const [notificatioActive,setNotificationActive] = useState(true);
    

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        await api.post('session', { id })
            .then(data => {
                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', data.data.name);
                history.push('/profile');
            }).catch(() => {
                //  alert(`Falha no login, tente novamente.`)
                setNotificationMessage('Falha no login, tente novamente.');
                setNotificationTime(4500);
                setNotificationActive(true);
                console.log(notificatioActive)
               
            })
    }
    return (
        <div className="logon-container">
            <Notification 
            activePass={notificatioActive}
            timePass={notificatioTime}
            messagePass={notificatioMessage}
            />

            <section className="form">
                <img src={logo} alt="Be The Hero" className="logoImg" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <section className="section-img-background">
                <img src={heroesImg} alt="Heroes" className="img-background" />
            </section>
        </div>
    );
}