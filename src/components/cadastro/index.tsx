import React, { useState } from 'react';
import './cadastro.css';  // Import the CSS file
import api from "../../helpers/axios"
import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

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
            const response = await api.post('/auth/register', form);
            if (response.status === 201) {
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
        <Flex
        w="full"
        h="100vh"
        align="center"
        justify="center"
        py={12}
        bgImage="url('truck.jpg')"
        bgSize="cover"
    >
        <Box 
            as="form" 
            onSubmit={handleSubmit} 
            p={8} 
            bg="white" 
            boxShadow="md" 
            borderRadius="md"
        >
            <FormControl mb={4}>
                <FormLabel>Nome</FormLabel>
                <Input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Insira seu nome"
                    required
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>CPF</FormLabel>
                <Input
                    type="text"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleChange}
                    placeholder="Insira seu CPF"
                    required
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Data de Nascimento</FormLabel>
                <Input
                    type="date"
                    name="dataNascimento"
                    value={form.dataNascimento}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Telefone</FormLabel>
                <Input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="Insira seu telefone"
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Insira seu email"
                    required
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Senha</FormLabel>
                <Input
                    type="password"
                    name="senha"
                    value={form.senha}
                    onChange={handleChange}
                    placeholder="Insira sua senha"
                    required
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Confirme sua Senha</FormLabel>
                <Input
                    type="password"
                    name="confirmeSenha"
                    value={form.confirmeSenha}
                    onChange={handleChange}
                    placeholder="Confirme sua senha"
                    required
                />
            </FormControl>
            <Button type="submit" colorScheme="blue">
                Cadastrar
            </Button>
        </Box>
    </Flex>
);
};

export default CadastroC;
