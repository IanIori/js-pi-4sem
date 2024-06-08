import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  VStack
} from '@chakra-ui/react';
import AvatarComponent from '../avatar'; 

import { To, useNavigate } from 'react-router-dom';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  const handleNavigation = (path: To) => {
    navigate(path);
    onClose();
  }

  return (
    <>
      <Button colorScheme='green' onClick={onOpen}>
        Menu
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' backgroundColor={'green'}>
            <Box display="flex" alignItems="center">
              <AvatarComponent />
              <Text marginLeft="12px">João da Silva </Text>
              <Text scrollMarginBottom="12px">   ★★★★☆</Text>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <Button variant="outline" colorScheme="blue" onClick={() => handleNavigation('/calendario')}>Calendário</Button>
              <Button variant="outline" colorScheme="blue">Rotas</Button>
              <Button variant="outline" colorScheme="blue" onClick={() => handleNavigation('/relatorios')}>Relatórios</Button>
              <Button variant="outline" colorScheme="blue">Configurações</Button>
              <Button variant="solid" colorScheme="red">Sair</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
