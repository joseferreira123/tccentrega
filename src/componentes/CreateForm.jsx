import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LoginStyle from './LoginStyle.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateForm = ({ elements, linkText, schema, onSubmit }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const handleFormSubmit = (data) => {
        onSubmit(data); // Chama a função de envio de dados recebida como prop

        // Navegação, se necessário, pode ser adicionada aqui
        if (location.pathname === '/loginFunc') {
            navigate('/homeFunc');
        } else if (location.pathname === '/registerFunc') {
            navigate('/homeFunc');
        } else if (location.pathname === '/loginPage') {
            navigate('/itens');
        } else if (location.pathname === '/registerPage') {
            navigate('/itens');
        }
    };

    return (
        <form className={LoginStyle.inputContainer} onSubmit={handleSubmit(handleFormSubmit)}>
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
    );
};

export default CreateForm;
