import MapaComponente from "../../components/mapa/mapa"

function Rota() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Meu Mapa</h1>
      <MapaComponente />
    </div>
    )
}

export default Rota