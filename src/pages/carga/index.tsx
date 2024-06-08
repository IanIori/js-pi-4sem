import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import ItemCarga from "../../components/cargas/item-carga"
import { useEffect, useState } from "react"
import FormCarga from "../../components/cargas/form-carga"
import { Carga } from "../../interfaces/cargas"
import api from "../../helpers/axios"

function Cargas(){
    const [cargas, setCargas] = useState<Carga[]>([])

    async function carregarCarga(){
        const resposta = await api.get('/carga')
        if(resposta.status == 200){
            setCargas(resposta.data)
        } else {
            alert('Erro ao carregar cargas!');
        }
    }

    useEffect(() => {
        carregarCarga()
    },[])

    function apagarCarga(id: number){
        api.delete(`/carga/${id}`)
        .then(resposta => {
            if(resposta.status == 204) {
                carregarCarga()
            } else {
                alert('Erro ao remover!')
            }
        })
        .catch(erro => {
            console.log(erro)
        })
    }

    function alterarStatus(status: string, carga: Carga){
        carga.status = status
        api.put(`/task/${carga.id}`,carga)
        .then(() => {
            carregarCarga()
        })
    }

    return (
        <Layout>
            <h1>Cargas</h1>
            <hr />

            <FormCarga carregarCarga={carregarCarga} />
            {
                cargas.map((carga) => (
                    <ItemCarga
                    key={carga.id}
                    apagarCarga={apagarCarga}
                    alterarStatus={alterarStatus} 
                    carga={carga} />
                ))
            }
        </Layout>
    )
}

export default Cargas