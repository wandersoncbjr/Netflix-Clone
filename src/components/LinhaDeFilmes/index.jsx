import React, { useState } from "react";
import './index.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default ({ title, items, key }) => {
    const [scrollx, setScrollx] = useState(0);
    const setinhaEsquerda = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollx(x);
    }

    const setinhaDireita = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let larguraDaLista = items.results.length * 150;
        if ((window.innerWidth - larguraDaLista) > x) {
            x = (window.innerWidth - larguraDaLista) - 60;

        }
        setScrollx(x);
    }


    return (
        <div className="card-filmes">
            <h2>{title}</h2>
            <div className="iconEsquerda" onClick={setinhaEsquerda}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="iconDireita" onClick={setinhaDireita}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div key={key} className="aréa-lista">
                <div className="fileira-filmes" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150

                }}>
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



