/**
 * En un componente de clase en react se
 * metodos de cliclo de vida 
 * almacena stados, this
 */

import React, { Component } from 'react';

class Buscador extends Component {
    
    /**
     * Permite leer los datos ingresados en el imput
     */
    busquedaRef = React.createRef();
    
    obtenerDatos = (e) => {
        e.preventDefault();
        // console.log( this.busquedaRef.current.value );

        // Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        // Lo enviamos al componente principal
        this.props.datosBusqueda( termino );
    }
    
  render () {
    return (
      <form onSubmit={ this.obtenerDatos }>
        <div className="row">
            <div className="form-group col-md-8">
                <input ref={ this.busquedaRef } type="text" className="form-control form-control-lg" placeholder="Busca una imagen. Ejemplo: comida" />
            </div>
            <div className="form-group col-md-4">
                <input type="submit" className="btn btn-secondary btn-block" value="Busca" />
            </div>
        </div>
      </form>
    );

  }
}

export default Buscador;