import './index.scss'
import '../../common/common.scss'

function ModalPokedex({ exibir, fechar }) {

    return (
        <main>
            <section className="container-modal fontd-quicksan" style={{ visibility: exibir ? 'visible' : 'hidden' }}>
                <div className="modal-header flexbox-row ">
                   <h1>Pokédex</h1>
                    <button onClick={fechar}>Fechar</button>
                </div>
                <p>Esse projeto foi feito com o intuito de praticar NodeJs com a api do pokeapi.co, Ela foi criada utilizando: </p>
                <ul>
                    <li>Nodejs</li>
                    <li>Express</li>
                    <li>Axios</li>
                    <li>React</li>
                    <li>Html5 & Sass</li>
                </ul>
                <p>Para mais informações de como ela foi pensada e executada, acesse o repositorio através da imagem abaixo: </p>
               <a href="https://github.com/luanreinhold/pokedex"><img src="./images/github-original-wordmark.svg" alt="github" /></a>
            </section>
        </main>

    )
}

export default ModalPokedex;