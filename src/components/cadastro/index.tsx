import React, { useState } from 'react';
import './cadastro.css';  // Import the CSS file
import axios from 'axios';

interface FormState {
    nome: string;
    cpf: string;
    dataNascimento: string;
    telefone: string;
    email: string;
    senha: string;
    confirmeSenha: string;
}

const CadastroC: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        nome: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        senha: '',
        confirmeSenha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form.senha !== form.confirmeSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            const response = await axios.post('/auth/register', form);
            if (response.status === 200) {
                alert('Cadastro realizado com sucesso!');
                setForm({
                    nome: '',
                    cpf: '',
                    dataNascimento: '',
                    telefone: '',
                    email: '',
                    senha: '',
                    confirmeSenha: ''
                });
            } else {
                alert('Erro ao realizar cadastro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao realizar cadastro. Tente novamente.');
        }

        console.log('Form data:', form);
    };

    return (
           <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Insira seu nome"
                    required
                />
            </div>
            <div>
                <label>CPF:</label>
                <input
                    type="text"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleChange}
                    placeholder="Insira seu CPF"
                    required
                />
            </div>
            <div>
                <label>Data de Nascimento:</label>
                <input
                    type="date"
                    name="dataNascimento"
                    value={form.dataNascimento}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Telefone:</label>
                <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="Insira seu telefone"
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Insira seu email"
                    required
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    value={form.senha}
                    onChange={handleChange}
                    placeholder="Insira sua senha"
                    required
                />
            </div>
            <div>
                <label>Confirme sua Senha:</label>
                <input
                    type="password"
                    name="confirmeSenha"
                    value={form.confirmeSenha}
                    onChange={handleChange}
                    placeholder="Confirme sua senha"
                    required
                />
            </div>
            <div>
                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </form>
    );
};

export default CadastroC;
