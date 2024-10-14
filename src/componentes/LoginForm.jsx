import CreateForm from "./CreateForm";
import { Link } from "react-router-dom";
import * as yup from 'yup';

// Esquema de validação para login
const loginSchema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório").min(8, "Sua senha precisa conter entre 8 e 16 caracteres").max(16, "Sua senha precisa conter entre 8 e 16 caracteres"),
});

const LoginForm = () => {
    const elements = [
        { label: "Email", type: "email", nameForm: "email" },
        { label: "Senha", type: "password", nameForm: "password" }
    ];

    return (
        <CreateForm 
            elements={elements} 
            linkText={<p>Não tem uma conta? <Link to="/cadastroteste">Cadastre-se</Link></p>}
            schema={loginSchema}// Passe o schema correto
        />
    );
};

export default LoginForm;
