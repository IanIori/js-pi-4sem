import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Img,
} from '@chakra-ui/react';

interface Props {
  imgURL: string
  title: string
  text: string
}

export default function SimpleCard({imgURL, title, text}: Props) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'} >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Img src={imgURL} />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>
            {text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}