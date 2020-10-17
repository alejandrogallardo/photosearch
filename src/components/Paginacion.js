import React from 'react';

const Paginacion = props  => {
    return (
        <div className="py-3">
            <button onClick={ props.paginaAnterior } className="btn btn-info mr-1">&larr; Anterios</button>
            <button onClick={ props.paginaSiguiente } className="btn btn-info">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;