import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import Menu from '../../components/menu'; 

import './style.css';
import logo from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    useEffect(() => {       
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(data => {
            setIncidents(data.data);
        }).catch(() => {
            alert('Erro ao buscar casos.')
        })
    }, [ongId])

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    async function handleDelete(id){
        await api.delete(`incidents/${id}`,{
            headers:{
                Authorization:ongId
            }
        }).then(()=>{
            setIncidents(incidents.filter(incident => incident.id !== id))
        }).catch(()=>{
            alert('Erro ao deletar caso.');
        })
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero" />
                <span>Bem Vindo, {ongName}</span>                
                                    
                <Menu handleLogout={handleLogout}/>
            </header>

            <h1>Casos cadastrados</h1>

            <ul className="incidents-ul">
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO</strong>
                        <p>{incident.description}</p>
                        <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={()=>handleDelete(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}