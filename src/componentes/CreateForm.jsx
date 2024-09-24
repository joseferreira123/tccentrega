import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LoginStyle from "./LoginStyle.module.css";
import { AuthContext } from '../context/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Defina o esquema de validação para registro
import {  useLocation } from 'react-router-dom';

// Defina o esquema de validação para login

const CreateForm = ({ elements, linkText, schema }) => {
  
    const location = useLocation();

    const {validarForm} = useContext(AuthContext)
    const navigate = useNavigate()
    // Configure o useForm para usar o yupResolver com o schema fornecido
    const { register, handleSubmit: onSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    // Função de manipulação do envio do formulário
    const handleSubmit = (data) => {
        validarForm(data)
        if (location.pathname === '/loginFunc') {
           navigate('/homeFunc'); // Rota para usuário
          } 
          else if (location.pathname === '/registerFunc') {
            navigate('/homeFunc'); // Rota para funcionário
          }

          else if (location.pathname === '/loginPage') {
            navigate('/itens'); // Rota para funcionário
          }
          else if (location.pathname === '/registerPage') {
            navigate('/itens'); // Rota para funcionário
          }
        

    };

    return (



        <>
            <form className={LoginStyle.inputContainer} onSubmit={onSubmit(handleSubmit)}>
                <div className={LoginStyle.containerGlobalLogin}>
                    <div className={LoginStyle.loginInit}>
                        <h2>Bem-vindo(a)!</h2>
                        <p className={LoginStyle.p}>Cadastre-se para navegar pelo site.</p>
                    </div>

                    <div className={LoginStyle.inputContainer}>
                        {elements.map((e, index) => (
                            <div className={LoginStyle.inputContainer} key={index}>
                                <label htmlFor={e.nameForm}>{e.label}</label>
                                <input
                                    id={e.nameForm}
                                    type={e.type}
                                    {...register(e.nameForm)}
                                />
                                {errors[e.nameForm] && (
                                    <span className={LoginStyle.error}>
                                        {errors[e.nameForm]?.message}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className={LoginStyle.button}>
                        <button type="submit">Cadastrar</button>
                    </div>

                    <div className={LoginStyle.loginEnd}>
                        <span>{linkText}</span>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateForm;
