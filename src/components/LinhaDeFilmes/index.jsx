import React from "react";
import './index.css'


export default ({ title, items, key }) => {
    return (
        <div className="card-filmes">
            <h2>{title}</h2>
            <div key={key} className="aréa-lista">

                <div className="fileira-filmes">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="imagem">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



