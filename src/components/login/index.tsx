import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../helpers/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSignIn = async () => {
    try {
      const response = await api.post('/auth/login', { email, senha })
      if (response.status === 200) {
        // Assuming the API returns a token or some kind of user information
        // Save the token or user info to localStorage or context/state
        localStorage.setItem('token', response.data.token)

        // Navigate to the main page
        navigate('/main')
      } else {
        alert('Login failed. Please check your credentials and try again.')
      }
    } catch (error) {
      console.error('Error during sign in:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage={'url(src/assets/truck.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Entre na sua conta</Heading>
          <Text fontSize={'lg'} color={'black'}>
            para conhecer todas nossas <Link href='/about' color={'green.300'}>características</Link> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)} 
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((show) => !show)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'green.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.800',
                }}
                onClick={handleSignIn}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
