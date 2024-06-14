import Layout from "../../components/layout"
import SimpleCard from "../../components/simple-card"

function About() {
    return (
        <Layout>
                <SimpleCard imgURL="src/assets/truck.jpg" title="Controle de Carga" text="Controle toda a logística de cargas com eficiência e otimização." />
                <SimpleCard imgURL="src/assets/truck.jpg" title="Ranking de Motoristas" text="Com uma avaliação justa de motoristas, garanta uma boa satisfação de seus funcionários e melhore seu desempenho." />
                <SimpleCard imgURL="src/assets/truck.jpg" title="Captação por Sensores" text="Com sensores de tempereatura e impacto acompanhado de monotorização por GPS,
                garanta rotas seguras e monotorização para suas cargas." />
        </Layout>
    )
}

export default About


