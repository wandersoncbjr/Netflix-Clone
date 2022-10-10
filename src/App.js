import React, { useEffect, useState } from 'react'
import api from './services/api';
import LinhaDeFilmes from './components/LinhaDeFilmes';
import './App.css';
import FilmeEmDestaques from './components/FilmeEmDestaques';



function App() {

    const [listaFilmes, setFilmesLista] = useState([]);
    const [ dadosDoDestaques, setDadosDoDestaques] = useState(null);

    useEffect(() => {
        const carregarTudo = async () => {
            let list = await api.pegandoLista();
            console.log(list);
            setFilmesLista(list);

            let original = list.filter(i=>i.slug === 'originais');
            let escolhaAleatoria = Math.floor(Math.random() * (original[0].items.results.length - 1));
            let FilmeEscolhido = original[0].items.results[escolhaAleatoria];
            let infoAleatoria = await api.pegarInfoDosFilmes(FilmeEscolhido.id, 'tv');
            setDadosDoDestaques(infoAleatoria);
        }
        carregarTudo();
    }, []); 

    return (
        <div className="App">

            {dadosDoDestaques && 
            <FilmeEmDestaques item={dadosDoDestaques}/>}



            <section className='listas'>
                {listaFilmes.map((item, key) => (
                    <div>
                        <LinhaDeFilmes key={key} title={item.titles} items={item.items} />
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;
