import React from "react";
import './index.css'


export default () => {

    return (
        <>

            <footer class="pie-pagina">
                <div class="grupo-1">
                    <div class="box">
                        <figure>
                            {/* <a href="#">
                        <img src="img/logotipo-sleedw.svg" alt="Logo de SLee Dw">
                    </a> */}
                        </figure>
                    </div>
                    <div class="box">

                        <h2>CONTATOS</h2>
                        <div class="red-social">
                            <a href="https://github.com/wandersoncbjr" class="fa fa-github"></a>
                            <a href="https://www.linkedin.com/in/wanderson-santos-7717651ba/" class="fa fa-linkedin"></a>
                            <a href="https://www.instagram.com/wanderson_santos013/" class="fa fa-instagram"></a>

                        </div>
                        <div className="email">
                            <div> <h4>wadersoncbjr2@gmail.com</h4> </div>
                        </div>
                    </div>
                </div>
                <div class="box">
                </div>
                <div class="grupo-2">
                    <small>&copy; 2022 <b>The Movie DB</b> - Todos os Direitos Reservados Para Netflix.</small>
                </div>
            </footer>
        </>
    )

};