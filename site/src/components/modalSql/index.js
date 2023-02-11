import './index.scss'
import '../../common/common.scss'

function ModalProjetoMysql({ exibir, fechar }) {

    return (
        <main>
            <section className="container-modal fontd-quicksan" style={{ visibility: exibir ? 'visible' : 'hidden' }}>
                <div className="modal-header flexbox-row ">
                   <h1>MODELAGENS DDL DML</h1>
                    <button onClick={fechar}>Fechar</button>
                </div>
                <p>Algumas das modelagens de banco de dados mysql realizadas durante meu curso, nelas incluem: </p>
                <ul>
                    <li>Modelagem para uma livraria</li>
                    <li>Modelagem para um sistema de musica</li>
                    <li>Modelagem de um e-commerce</li>
                </ul>
                <p>Para acessar os projetos clique na imagem abaixo: </p>
               <a href="https://github.com/luanreinhold/Modelagens-MySql"><img src="./images/github-original-wordmark.svg" alt="github" /></a>
            </section>
        </main>

    )
}

export default ModalProjetoMysql;