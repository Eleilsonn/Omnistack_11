import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';


import './styles.css';

import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();

        await api.post('session',{id})
        .then(data=>{
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',data.data.name);
            history.push('/profile');
        }).catch(()=>{
            alert(`Falha no login, tente novamente.`)
        })
    }
    return (    
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e=>setId(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}