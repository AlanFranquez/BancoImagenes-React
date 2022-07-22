import { useState } from "react"


export const Form = ({valorAgregado}) => {

    const [error, setError] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const nuevoValor = (e) => {
        setInputValue(e.target.value);

        // console.log(e.target.value)
    }

    const agregarImagen = (e) => {
        e.preventDefault()

        // console.log('probando..')

        if(inputValue === '') {
            setError(true);

            setTimeout(() => {
                setError(false)
            }, 2000);

            return;
        };

        setError(false);

        valorAgregado(inputValue);

        setInputValue('');
    }



  return (
    <>
        <form onSubmit={agregarImagen}>
            <input type="text" placeholder="Busca tu imagen favorita" value={inputValue} onChange={nuevoValor} />

        </form>

        <p>{error ? 'Todos los campos son obligatrios' : null}</p>
    </>
  )
}
