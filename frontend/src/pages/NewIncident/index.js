import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import api from '../../services/api';


import './style.css';

export default function NewIncident(){
    const ongId = localStorage.getItem('ongId');    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value,setValue] = useState(''); 

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {title,description,value}

        await api.post('incidents',data,{            
            headers:{
                Authorization:ongId
            }
        }).then(data=>{
            setTitle('');
            setDescription('');
            setValue('');
            // alert(`Caso cadastrado com sucesso, ID: ${data.data}`);
        }).catch(()=>{
            alert('Caso não registrado.');
        })

    }
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para isso.</p>
                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input placeholder="Titulo do caso"
                value={title}
                onChange={e=>setTitle(e.target.value)}/>

                <textarea placeholder="Descrição"
                value={description}
                onChange={e=>setDescription(e.target.value)}>

                </textarea>

                <input placeholder="Valor em reais"
                value={value} onChange={e=>setValue(e.target.value)}/>
              

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}