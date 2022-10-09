import React, { useEffect } from 'react'
import api from './api';


function App() {

    useEffect(() => {

        const carregarTudo = async () => {
            let list = await api.pegandoLista();
            console.log(list);
        }

        carregarTudo();

    }, []);

    return (
        <div className="App">
            olá mundo
        </div>
    );
}

export default App;
