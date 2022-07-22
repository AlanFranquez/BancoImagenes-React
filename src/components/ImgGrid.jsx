import { useEffect, useState } from "react";
import { extraerDatos } from "../helpers/getImg"
import { Resultados } from "./Resultados";


export const ImgGrid = ({img}) => {

    const [imagen, setImagen] = useState([])
    

    const newImageResultados = async() => {
        const insertar = await extraerDatos(img);

        setImagen(insertar);
    };

    useEffect(() => {
      newImageResultados();
    }, [])
    
    console.log(imagen)

  return (
    <>
        <div className="resultaods">
            {imagen.map((resultado) =>{
                return <Resultados key={resultado.id} {...resultado}/>
            })}
        </div>


    </>
  )
}
