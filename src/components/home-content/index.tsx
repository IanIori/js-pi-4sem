import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HomeContent() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(src/assets/truck.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear-gradient(90deg, rgba(105,105,105,0.32793796229429273) 0%, rgba(0,0,0,0.8713553292410714) 100%)'}>
          <Stack maxW={'2xl'} align={'flex-center'} spacing={6}>
          <Text
              color={'white'}
              fontWeight={800}
              lineHeight={1.2}
              textAlign={"center"}
              fontSize={useBreakpointValue({ base: '2xl', md: '5xl' })}>
                Inovação e Tecnologia
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={"center"}
              fontSize={useBreakpointValue({ base: '1xl', md: '3xl' })}>
                Com mais pessoas, precisaremos de mais alimentos, fibras, combustível e
                infraestrutura. Inovações revolucionárias e nosso espiríto pioneiro serão   
                necessários para enfrentar os desafios do futuro, sem esquecer de que nossos
                recursos são limitados.
            </Text>
            <Stack direction={'row'} display={"flex"} justifyContent={"center"}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }