import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Rodape() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Inicio</Link>
            <Link href={'/about'}>Sobre</Link>
            <Link href={'/Contato'}>Contato</Link>
            </Stack>
          <Text>© 2024 Fatec. All rights reserved</Text>
        </Container>
      </Box>
    );
  }
  