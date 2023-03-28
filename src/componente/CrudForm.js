import { useState } from "react"



const dbform = {
    id:null,
    name: '',
    lastname: ''
}


const CrudForm = () => {
    const [form,setForm]= useState(dbform)

    const handleChange = (e) => {}
    const handleSubmit = (e) => {}
    const handleReset = (e) => {}


    return(
        <div>
            <h3>Crear</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' onChange={handleChange} placeholder='Nombre'/>
                <input type='text' name='lastname' onChange={handleChange} placeholder="Apellido"/>
                <input type='submit' value='Enviar'/>
                <input type='reset' onClick={handleReset} value='Limpiar'/>

            </form>
        </div>
    )
}

export default CrudForm;
