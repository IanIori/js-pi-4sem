import { Box, Button, Grid, Input } from "@chakra-ui/react"
import { Carga } from "../../../interfaces/cargas"
import { useState } from "react"

interface ItemCargaProps {
    carga: Carga
    apagarCarga(id: number): void
    alterarStatus(status: string, carga: Carga): void
}

function ItemCarga({carga,apagarCarga,alterarStatus}:ItemCargaProps){
    const [value, setValue] = useState('')

    return (
        <Grid templateColumns='3fr 1fr' 
        p={5} backgroundColor='gray' my={3}>
            <Box>{carga.id} - {carga.specs}</Box>
            <Box>
                <Input 
                value = {value} 
                placeholder='Cargo status'
                onChange = {(evento) => setValue(evento.target.value)}>
                </Input>
                <Button mr={5} 
                onClick={() => alterarStatus(value, carga)}
                colorScheme='green'>
                </Button>
                <Button onClick={() => apagarCarga(carga.id)}
                colorScheme="red">Remover</Button>
            </Box>
        </Grid>
    )
}

export default ItemCarga