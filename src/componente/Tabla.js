import Boton from "./Boton";


const Tabla = () => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                      
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Arle</td>
                    <td>Calderon</td>
                    
                    <td> <Boton noc = "Agregar"/> <Boton noc = "Eliminar"/> </td>
                    </tr>

                    <tr>
                    <td>Ange</td>
                    <td>Cruh</td>
                   
                    <td> <Boton noc = "Agregar"/> <Boton noc = "Eliminar"/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;