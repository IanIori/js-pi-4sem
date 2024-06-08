import { Button, Flex, Input, Select } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../../../helpers/axios"
import { PostCarga } from "../../../interfaces/cargas"

interface FormCargaProps {
    carregarCarga(): void
}

function FormCarga({carregarCarga}: FormCargaProps){
    const [specCarga , setSpecCarga] = useState('')
    const [statusCarga, setStatusCarga] = useState('')
    const [pesoCarga, setPesoCarga] = useState<number>(0)

    function adicionarCarga(){
        if(specCarga != ''){
            const novaCarga:PostCarga = {
                specs: specCarga,
                weight: pesoCarga,
                status: statusCarga
            }
            api.post('/carga',novaCarga)
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
                type="number"
                value={pesoCarga}
                onChange={(evento) => setPesoCarga(parseFloat(evento.target.value) || 0)}
                placeholder="Peso da carga"
                size="md"
            />
            
            <Select
                value={statusCarga}
                onChange={(evento) => setStatusCarga(evento.target.value)}
                placeholder="Selecione o status"
                size="md"
            >
                <option value="pending">Pendente</option>
                <option value="in-progress">Em rota</option>
                <option value="completed">Completeda</option>
            </Select>
            
            <Button onClick={adicionarCarga} colorScheme="blue">Adicionar</Button>
        </Flex>
    )
}

export default FormCarga