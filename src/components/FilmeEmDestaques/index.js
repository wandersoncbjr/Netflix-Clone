import React from "react";
import './index.css'

export default ({item}) => {
    return(

        <section className ="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div>
                {item.original_name}
            </div>
        </section>

    );

    }