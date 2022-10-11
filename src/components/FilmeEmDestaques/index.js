import React from "react";
import './index.css'

export default ({ item }) => {
    console.log(item);

    let primeiraData = new Date(item.first_air_date);
    let generos = [];
    for (let i in item.genres) {
        generos.push(item.genres[i].name)
    };

    return (

        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="div-vertical">
                <div className="div-horizontal">
                    <div className="nome">{item.name}</div>
                    <div className="informações">
                        <div className="pontos">{item.vote_average} pontos </div>
                        <div className="data"> {primeiraData.getFullYear()} </div>
                        <div className="temporadas">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ' '}</div>
                    </div>
                    <div className="informações-filmes">{item.overview}</div>
                    <div className="botoes">
                        <a href={`/watch/${item.id}`} className="botao-1">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="botao-2"> + Minha Lista</a>
                    </div>
                    <div className="generos"><strong>Gêneros:</strong> {generos.join(', ')}</div>
                </div>
            </div>
        </section>

    );

}