import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import LoginStyle from '../componentes/LoginStyle.module.css';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../pages/Container.module.css";
import MyImage from "../img/logo.png";
import ImageDecoration from "../img/logoDoeApm.png";
import LogoTopDecoration from "../img/LogoTopDecoration.png";

// Definindo o esquema de validação com Yup
const schema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    sobrenome: yup.string().required('Sobrenome é obrigatório'),
    email: yup.string()
        .required('Email é obrigatório')
        .email('Email inválido'),
    senha: yup.string()
        .required('Senha é obrigatória')
        .min(6, 'Senha deve ter pelo menos 6 caracteres'),
    telefone: yup.string().required('Telefone é obrigatório')
});

const Cadastro = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const enviarDados = async (dados) => {
        try {
            await axios.post('http://localhost:8080/clientela', dados, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setSuccessMessage('Cliente cadastrado com sucesso!');
            setErrorMessage('');
            reset(); // Reseta o formulário
            navigate('/loginPage'); // Redireciona para a página de login após o cadastro
        } catch (error) {
            console.error("Erro ao cadastrar:", error.response?.data || error.message);
            setErrorMessage('Erro ao cadastrar cliente! Tente novamente.');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <div className={styles.containerGlobal}>
                <div className={styles.container}>
                    <div className={styles.topDecoration}>
                        <img src={LogoTopDecoration} alt="Logo" />
                    </div>
                    <div className={styles.borderImage}>
                        <img src={MyImage} alt="logo" />
                    </div>
                    <div>
                        <img src={ImageDecoration} alt="decoração" />
                    </div>
                </div>
                <form className={LoginStyle.containerGlobalLogin} onSubmit={handleSubmit(enviarDados)}>
                    <div className={LoginStyle.loginInit}>
                        <h2>Bem-vindo(a)!</h2>
                        <p className={LoginStyle.p}>Cadastre-se para navegar pelo site.</p>
                    </div>
                    <div className={LoginStyle.inputContainer}>
                        <label>Nome:</label>
                        <Controller
                            name="nome"
                            control={control}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                        {errors.nome && <span className={LoginStyle.error}>{errors.nome.message}</span>}
                        
                        <label>Sobrenome:</label>
                        <Controller
                            name="sobrenome"
                            control={control}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                        {errors.sobrenome && <span className={LoginStyle.error}>{errors.sobrenome.message}</span>}
                        
                        <label>Email:</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <input type="email" {...field} />}
                        />
                        {errors.email && <span className={LoginStyle.error}>{errors.email.message}</span>}
                        
                        <label>Senha:</label>
                        <Controller
                            name="senha"
                            control={control}
                            render={({ field }) => <input type="password" {...field} />}
                        />
                        {errors.senha && <span className={LoginStyle.error}>{errors.senha.message}</span>}
                        
                        <label>Telefone:</label>
                        <Controller
                            name="telefone"
                            control={control}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                        {errors.telefone && <span className={LoginStyle.error}>{errors.telefone.message}</span>}
                    </div>
                    <div className={LoginStyle.button}>
                        <button type="submit">Cadastrar</button>
                    </div>
                    <div className={LoginStyle.loginEnd}>
                        <span>Já tem uma conta? <Link to="/loginPage">Entre</Link></span>
                    </div>
                </form>
                {successMessage && <p className={LoginStyle.success}>{successMessage}</p>}
                {errorMessage && <p className={LoginStyle.error}>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Cadastro;
