import { Box, Button, Grid } from "@chakra-ui/react"
import { Carga } from "../../../interfaces/cargas"

interface ItemCargaProps {
    carga: Carga
    apagarCarga(id: number): void
    alterarStatus(carga: Carga): void
}

function ItemCarga({carga,apagarCarga,alterarStatus}:ItemCargaProps){
    return (
        <Grid templateColumns='3fr 1fr' 
        p={5} backgroundColor='gray' my={3}>
            <Box>{carga.id} - {carga.specs}</Box>
            <Box>
                <Button mr={5} 
                onClick={() => alterarStatus(carga)}
                colorScheme='green'>
                </Button>
                <Button onClick={() => apagarCarga(carga.id)}
                colorScheme="red">Remover</Button>
            </Box>
        </Grid>
    )
}

export default ItemCarga