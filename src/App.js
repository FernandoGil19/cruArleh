import Boton from "./componente/Boton";
import CrudForm from "./componente/CrudForm";
import Tabla from "./componente/Tabla";

const App = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>

            <Boton noc = "ei"/>
            <CrudForm/>
            <Tabla/>

        </div>
    )
}

export default App;