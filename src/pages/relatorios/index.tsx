import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Relatorio(){
    return (
        <Layout>
            <div>
                <h1>Relatórios</h1>

                <p></p>
                <Link to='/'>Ir para Home</Link>                
                <p></p>
                <Link to='/sobre'>Ir para Sobre</Link>
                <p></p>
                <Link to='/Contato'>Ir para Contato</Link>
                <p></p>
                <Link to='/tarefas'>Ir para Tarefas</Link>
                <p></p>
                </div>
        </Layout>
    )
}

export default Relatorio