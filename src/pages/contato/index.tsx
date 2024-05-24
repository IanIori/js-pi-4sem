import HomeContent from "../../components/home-content"
import Layout from "../../components/layout"
import Simple from "../../components/newsletter"
import All from "../../components/redes-contato"


function Contato(){
    return (
        <Layout>
            <div>
            <All></All>
            </div>
            <div>
            <Simple></Simple>
            </div>
        </Layout>
    )
}

export default Contato