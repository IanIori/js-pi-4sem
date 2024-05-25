import { Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../../../helpers/axios"
import { PostCarga } from "../../../interfaces/cargas"

interface FormCargaProps {
    carregarCarga(): void
}

function FormCarga({carregarCarga}: FormCargaProps){
    const [specCarga , setSpecCarga] = useState('')
    const [statusCarga, setStatusCarga] = useState('')
    const [pesoCarga, setPesoCarga] = useState(0)

    function adicionarCarga(){
        if(specCarga != ''){
            const novaCarga:PostCarga = {
                specs: specCarga,
                weight: pesoCarga,
                status: statusCarga
            }
            api.post('/task',novaCarga)
            .then(() => {
                setSpecCarga('')
                setPesoCarga(0)
                setStatusCarga('')
                carregarCarga()
            })
        }
    }

    const inputCarga = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if(inputCarga.current) inputCarga.current.focus()
    }, [])

    return (
        <Flex alignItems='center' justifyContent='space-around'>
            <Input
            ref={inputCarga}
            value={specCarga}
            onChange={(evento) => setSpecCarga(evento.target.value)}
            placeholder="Especificação da carga" 
            size='md' />
            
            <Input
            ref={inputCarga}
            value={pesoCarga}
            onChange={(evento) => setPesoCarga(evento.target.valueAsNumber)}
            placeholder="Peso da carga" 
            size='md' />
            
            <Input
            ref={inputCarga}
            value={statusCarga}
            onChange={(evento) => setStatusCarga(evento.target.value)}
            placeholder="Status da carga" 
            size='md' />
            
            <Button onClick={adicionarCarga} colorScheme="blue">Adicionar</Button>
        </Flex>
    )
}

export default FormCarga