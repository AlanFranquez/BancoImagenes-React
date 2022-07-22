import { useState } from "react"
import { Form } from "./components/Form";
import { ImgGrid } from "./components/ImgGrid";

export const Banco = () => {

    const [busqueda, setBusqueda] = useState([]);

    const agregar = (nuevoValor) => {

        if(busqueda.includes(nuevoValor)) {
            return;
        }

        setBusqueda([nuevoValor])
    }
    
  return (
    <>
        <h1>Hola Mundo</h1>

        <Form valorAgregado={agregar}/>
        
        <h1>{busqueda}</h1>

        <div>
            {busqueda.map((img) => {
                return <ImgGrid key={img} img={img}/>
            })}

        </div>
        

    </>
  )
}
