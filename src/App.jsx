import React, { useEffect, useLayoutEffect, useState } from 'react'
import api from './services/api';
import LinhaDeFilmes from './components/LinhaDeFilmes';
import './App.css';
import FilmeEmDestaques from './components/FilmeEmDestaques';
import Header from './components/Header';
import Footer from './components/Footer'


function App() {

    const [listaFilmes, setFilmesLista] = useState([]);
    const [dadosDoDestaques, setDadosDoDestaques] = useState(null);
    const [HeaderPreto, setHeaderPreto] = useState(false);

    useEffect(() => {
        const carregarTudo = async () => {
            let list = await api.pegandoLista();
            /*  console.log(list); */
            setFilmesLista(list);

            let original = list.filter(i => i.slug === 'originais');
            let escolhaAleatoria = Math.floor(Math.random() * (original[0].items.results.length - 1));
            let FilmeEscolhido = original[0].items.results[escolhaAleatoria];
            let infoAleatoria = await api.pegarInfoDosFilmes(FilmeEscolhido.id, 'tv');
            setDadosDoDestaques(infoAleatoria);
        }
        carregarTudo();
    }, []);

    useEffect(()=>{
        const scrollListener = () =>{
            if(window.scrollY > 10){
                setHeaderPreto(true)
            }

            else(setHeaderPreto(false))

        }

        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[]);

    return (
        <div className="App">
            <Header preto={HeaderPreto}/>
            {dadosDoDestaques &&
                <FilmeEmDestaques item={dadosDoDestaques} />}
            <section className='listas'>
                {listaFilmes.map((item, key) => (
                    <div>
                        <LinhaDeFilmes key={key} title={item.titles} items={item.items} />
                    </div>
                ))}
            </section>
            <Footer/>
        </div>
    );
}

export default App;