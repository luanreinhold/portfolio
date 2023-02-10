import { useEffect, useState } from 'react'
import './index.scss';
import '../../common/common.scss'
import CardIcon from '../../components/cardTech'
import ModalProjeto from '../../components/modal'
function Home() {

  const [selecionarTexto, setSelecionarTexto] = useState('contato');

  const [exibirModal, setExibirModal] = useState(false)

  function modalAbrir() {
    setExibirModal(true)
  }

  function modalFechar() {
    setExibirModal(false)
  }



  return (
    <main className='main-home'>
      <ModalProjeto exibir={exibirModal} fechar={modalFechar} />

      <section className='container-home flexbox-row '>
        {selecionarTexto === 'default' &&
          <article className='container-about-me naoSelecionavel fontd-quicksan'  >
            <span>about me</span>
            <p>
              <h1>Meu nome é  Luan Reinhold, </h1>Sou formado em: Técnico em informática onde aprendi
              a aplicar soluções através de páginas web. Busco sempre evoluir como desenvolvedor fullstack através de estudos e projetos. Atualmente estou no 1 período em Análise e desenvolvimento de sistemas,
              onde procuro oportunidade como trainee/estagiario.
            </p>
          </article>
        }

        {selecionarTexto === 'tecnologia' &&
          <section className='container-tecnologias fontd-quicksan '>
            <div>
              <p style={{ 'color': 'white' }}>Sãos estas tecnologias e ferramentas que uso ao desenvolver aplicações</p>
            </div>
            <div className='flexboxrow'>
              <CardIcon imagem='./images/javascript.svg' nome='Sass' />
              <CardIcon imagem='./images/nodejs-plain-wordmark.svg' nome='Javascript' />
              <CardIcon imagem='./images/react-original.svg' nome='React' />
              <CardIcon imagem='./images/mysql-original.svg' nome='Mysql' />
            </div>
            <div className='flexboxrow'>
              <CardIcon imagem='./images/html.svg' nome='Html' />
              <CardIcon imagem='./images/css3-plain.svg' nome='Css' />
              <CardIcon imagem='./images/sass-original.svg' nome='Sass' />
              <CardIcon imagem='./images/sass-original.svg' nome='Sass' />
            </div>
          </section>
        }

        {selecionarTexto === 'projetos' &&
          <section className="container-projetos">
            <div onClick={modalAbrir} className="box-projeto">
              <div className="box-projeto-footer"><b>Store Games</b></div>
            </div>

            <div className="box-projeto">
              <div className="box-projeto-footer"> </div>
            </div>
          </section>
        }

        {selecionarTexto === 'contato' &&

          <section className="container-contatos flexboxrow fontd-quicksan">
            <div className="card-github">
              <a href="https://github.com/luanreinhold"><img src="./images/github-original-wordmark.svg" alt="github icon" /></a>
              <label>luanreinhold</label>
            </div>
            <div className="card-linkedin">
             <a href="https://www.linkedin.com/in/luanreinhold"><img src="./images/linkedin-plain-wordmark.svg" alt="linkedin icon" /></a> 
              <label>Luan Reinhold</label>
            </div>
            <div className="card-email">
              <img src="./images/icons8-gmail.svg" alt="github icon" />
              <label>luanreinhold@gmail.com</label>
            </div>
          </section>

        }
        <aside className='side-menu flexbox-column fontd-quicksan'>
          <ul style={{ "list-style": "none" }}>
            <li>Sobre mim</li>
            <li>Tecnologias que uso</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
        </aside>

      </section>
    </main>
  );
}

export default Home;
