import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Home(){
    return (
        <Layout>
            <div>
                <h1>Home</h1>
                <p></p>
                <Link to='/sobre'>Ir para Sobre</Link>
                <p></p>
                <Link to='/Contato'>Ir para Contato</Link>
                <p></p>
                <Link to='/tarefas'>Ir para Tarefas</Link>
                <p></p>
                <Link to='/relatorio'>Ir para Relatorio</Link>
            </div>
        </Layout>
    )
}

export default Home