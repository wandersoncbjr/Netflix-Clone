import React, { useEffect, useState } from 'react'
import api from './services/api';
import LinhaDeFilmes from './components/LinhaDeFilmes';


function App() {

    const[listaFilmes, setFilmesLista] = useState([]);


    useEffect(() => {

        const carregarTudo = async () => {
            let list = await api.pegandoLista();
            console.log(list);
            setFilmesLista(list);
        }

        carregarTudo();

    }, []);

    return (
        <div className="App">
            <section className='listas'>
                {listaFilmes.map((item, key)=>(
            

                    
                    <div>
                        <LinhaDeFilmes key={key} title={item.titles} items={item.items}/>

                      
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;
