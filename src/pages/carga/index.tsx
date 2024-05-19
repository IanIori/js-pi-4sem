import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import ItemTarefa from "../../components/cargas/item-carga"
import { useEffect, useState } from "react"
import FormTarefa from "../../components/cargas/form-carga"
import { Tarefa } from "../../interfaces/cargas"
import api from "../../helpers/axios"

function Cargas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    async function carregarLista(){
        const resposta = await api.get('/task')
        if(resposta.status == 200){
            setTarefas(resposta.data)
        }
    }
    useEffect(() => {
        carregarLista()
    },[])

    function apagarTarefa(id: number){
        api.delete(`/task/${id}`)
        .then(resposta => {
            if(resposta.status == 204) {
                carregarLista()
            } else {
                alert('Erro ao remover!')
            }
        })
        .catch(erro => {
            console.log(erro)
        })
    }

    function alterarStatus(tarefa: Tarefa){
        tarefa.completed = !tarefa.completed
        api.put(`/task/${tarefa.id}`,tarefa)
        .then(() => {
            carregarLista()
        })
    }

    return (
        <Layout>
            <h1>Tarefas</h1>
            <Link to='/'>Voltar para Home</Link>
            <hr />

            <FormTarefa carregarLista={carregarLista} />
            {
                tarefas.map((tarefa) => (
                    <ItemTarefa
                    key={tarefa.id}
                    apagarTarefa={apagarTarefa}
                    alterarStatus={alterarStatus}
                    tarefa={tarefa} />
                ))
            }
        </Layout>
    )
}

export default Tarefas