import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Listagem = () => {
    const [clientes, setClientes] = useState([]);
    const [itemApagado, setItemApagado] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário

    const receberDados = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/clientela');
            setClientes(response.data);
            setMessage('');
        } catch (error) {
            console.error(error);
            setMessage('Erro ao carregar dados.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Aqui você pode buscar os dados do usuário do local storage ou estado global
        const userData = localStorage.getItem('user'); // Exemplo: buscar do local storage
        setUser(userData ? JSON.parse(userData) : null); // Parse caso esteja no formato JSON
        receberDados();
    }, [itemApagado]);

    const apagarDados = async (cliente) => {
        const confirmDelete = window.confirm(`Tem certeza que deseja apagar ${cliente.nome} ${cliente.sobrenome}?`);
        if (!confirmDelete) return;

        try {
            await axios.delete('http://localhost:8080/clientela', { data: cliente });
            setItemApagado(true);
            setMessage(`${cliente.nome} apagado com sucesso!`);
        } catch (error) {
            console.error(error);
            setMessage('Erro ao apagar cliente.');
        }
    };

    return (
        <div>
          
            {user && <p>Bem-vindo, {user.nome}!</p>} {/* Exibe o nome do usuário */}
            {message && <Alert variant="info">{message}</Alert>}
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.sobrenome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>
                                    <Button variant="danger" onClick={() => apagarDados(cliente)}>
                                        Apagar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Listagem;
