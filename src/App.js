/**
 * Con props se pasa informacion de componente padre al hijo
 */
import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  /**
   * state llave : valor
   */
  state = {
    termino: '',
    imagenes: [], // se va llenar cuando este la consulta
    pagina: ''
  }

  /**
   * 
   */
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  /**
   * Codigo del paginador
   */
  paginaAnterior = () => {
    console.log('Pagina Anterior...');
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    // Si la pagina es 1 ya no ir hacia atras
    if ( pagina === 1 ) return null;
    // Sumar 1 a la pagina actual
    pagina--;
    // Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    console.log( pagina );
  }
  paginaSiguiente = () => {
    console.log('Pagina Siguiente...');
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    // Sumar 1 a la pagina actual
    pagina++;
    // Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    console.log( pagina );
  }

  /**
   * Cogigo de la api
   */
  consultarApi = () => {
    const datosUrl = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13086065-25764b3f9692cfccc8745b7be&q=${ datosUrl }&page=${ pagina }`;
    console.log( url );
    fetch( url )
      .then(res => res.json() )
      // .then( resultado => console.log( resultado.hits ) )
      .then( resultado => this.setState({ imagenes: resultado.hits }) )
  }

  datosBusqueda = ( termino ) => {
    console.log( termino );
    this.setState({ // callback permite cambiar el estado de forma dinamica
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    }) // agregalo al state y ejecuta esta funcion
  }

  render () {
    return (
      
      <div className="container">
        <div className="jumbotron">
          <h1>Buscador de fotos</h1>
          <Buscador
            datosBusqueda={ this.datosBusqueda }
          />
          
        </div>

        <div className="row justify-content-center">
          <Resultado 
            paginaAnterior={ this.paginaAnterior }
            paginaSiguiente={ this.paginaSiguiente }
            imagenes={ this.state.imagenes }
          />
        </div>

      </div>
    );

  }
}

export default App;
