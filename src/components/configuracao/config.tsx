import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Button, VStack, Heading, Avatar } from '@chakra-ui/react';
import './config.css';
import AvatarComponent from '../avatar';

const ConfiguracaoC = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        imagem: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleLogout = () => {
        // Handle logout logic here
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
                p={8} 
                bg="white" 
                boxShadow="md" 
                borderRadius="md"
                width="400px"
            >
                <VStack spacing={4} align="stretch">
                    <Heading as="h2" size="lg" textAlign="center">Configurações</Heading>
                    <AvatarComponent/>
                    <FormControl>
                        
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                        />
                        <Button colorScheme="green" onClick={handleSubmit}>Alterar Imagem</Button>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Alterar dados cadastrados</FormLabel>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            placeholder="Insira seu nome"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Insira seu email"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Telefone</FormLabel>
                        <Input
                            type="tel"
                            name="telefone"
                            value={form.telefone}
                            onChange={handleChange}
                            placeholder="Insira seu telefone"
                        />
                    </FormControl>
                    <Button colorScheme="green" onClick={handleSubmit}>Salvar Alterações</Button>
                    <Button colorScheme="red" onClick={handleLogout}>Sair</Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default ConfiguracaoC;
