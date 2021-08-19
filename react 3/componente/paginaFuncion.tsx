import React from 'react';

const paginaFuncion = (props:{jeans:String,talle:number}) => {
    return (

<a className="pagina-link"
target="_blank"
rel="noopener noreferrer">

Bienvenido a la pagina - {props.jeans}: {props.talle}
</a>

    )
}

const paginaFuncion: React.FunctionComponent =() => {

    const [talle, setTalle]= React.useState(6)
    return (
        <div className= "commercio">
        <header className="commercio-header">
        <bienvenido name={'Frida'} talle= {talle} />

        <button className="button" onClick={()}=> {
            console.log ("CLICK")
            setTalle(talle+1)
        }}>
        increase talle
        </button>
        </header>
        </div>
    )
}
export default paginaFuncion;