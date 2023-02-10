import './index.scss'
import '../../common/common.scss'
function ModalProjeto({ exibir, fechar }) {

    return (
        <main>
            <section className="container-modal fontd-quicksan" style={{ visibility: exibir ? 'visible' : 'hidden' }}>
                <div className="modal-header flexbox-row ">
                   <h1>Store Games</h1>
                    <button onClick={fechar}>Fechar</button>
                </div>
                <p>Este foi meu projeto de conclusão de curso (tcc). Onde eu e meu grupo criamos um e-commerce com a visão administrativa e a do usuario. A ideia era de trazer o mais próximo possível a experiência de um e-commerce real</p>
                <p>Participei de todas as etapas do projeto, como: a criação do layout com design low-fidelity e high-fidelity no figma, o planejamento e criação de todo o ddl e dml do banco de dados,
                    integração do mysql ao front end com api em nodejs, implementação das páginas com técnicas de re-uso, componentes reutilizaveis e afins.
                </p>
                <p>Tecnologias usadas: React, Javascript, Nodejs, Html5, Css, Sass, React, Figma</p>
                <p>Para verificar todas as funcionalidades acesse o repositorio do projeto através da imagem abaixo: </p>
               <img src="./images/github-original-wordmark.svg" alt="github" />
            </section>
        </main>

    )
}

export default ModalProjeto;