import React from 'react';
import CreateForm from './CreateForm';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

// Esquema de validação para registro
const registerSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    surname: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup.string().required('Campo obrigatório').min(8, 'Sua senha precisa conter entre 8 e 16 caracteres').max(16, 'Sua senha precisa conter entre 8 e 16 caracteres'),
    confirmepassword: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'As senhas devem corresponder'),
    tel: yup.number().required('Campo obrigatório'),
});

const RegisterFunc = () => {
    const elements = [
        { label: 'Nome', type: 'text', nameForm: 'name' },
        { label: 'Sobrenome', type: 'text', nameForm: 'surname' },
        { label: 'Email', type: 'email', nameForm: 'email' },
        { label: 'Senha', type: 'password', nameForm: 'password' },
        { label: 'Confirme sua senha', type: 'password', nameForm: 'confirmepassword' },
        { label: 'Telefone', type: 'text', nameForm: 'tel' },
    ];

    const handleSubmit = {
        
    };

    return (
        <CreateForm
            elements={elements}
            linkText={<p>Já tem uma conta? <Link to="/loginFunc">Entre</Link></p>}
            schema={registerSchema}
            onSubmit={handleSubmit} // Passando a função de envio
        />
    );
};

export default RegisterFunc;
