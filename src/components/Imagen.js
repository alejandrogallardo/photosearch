import React from 'react';

const Imagen = ( props ) => {

    const { largeImageURL, likes, previewURL, tags, views, downloads } = props.imagen;

    return (
        <div className="col-sm-12 col-md-6 mb-4">
            <div className="card">
                <img src={ previewURL } alt={ tags } className="card-img-top" />
                <div className="card-body">
                    <p className="card-text"><i className="fas fa-heart"></i> { likes } Me gusta</p>
                    <p className="card-text"><i className="fas fa-eye"></i> { views } Vistas</p>
                    <p className="card-text"><i className="fas fa-cloud-download-alt"></i> { downloads } Descargas</p>
                    <a href={ largeImageURL } target="_blank" className="btn btn-primary btn-block" ><i className="fas fa-external-link-square-alt"></i> Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;