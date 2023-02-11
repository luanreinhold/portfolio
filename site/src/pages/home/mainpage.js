import { useEffect, useState } from 'react'
import './index.scss';
import '../../common/common.scss'
import CardIcon from '../../components/cardTech'
import ModalProjeto from '../../components/modal'
import ModalSql from '../../components/modalSql'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {

  const [selecionarTexto, setSelecionarTexto] = useState('default');

  const [exibirModal, setExibirModal] = useState(false)
  const [exibirModalSql, setExibirModalSql] = useState(false)

  function modalAbrir() {
    setExibirModal(true)
  }

  function modalFechar() {
    setExibirModal(false)
  }

  function modalAbrirSql() {
    setExibirModalSql(true)
  }

  function modalFecharSql() {
    setExibirModalSql(false)
  }

  function alterarTela (status) {

    setSelecionarTexto(status)
  }

  useEffect(() => {
    AOS.init({ duration: 2500 })
}, [])


  return (
    <main className='main-home'>
      <ModalProjeto exibir={exibirModal} fechar={modalFechar} />
      <ModalSql exibir={exibirModalSql} fechar={modalFecharSql}/>

      <section className='container-home flexbox-row '>
        {selecionarTexto === 'default' &&
          <article data-aos="fade-up"  className='container-about-me naoSelecionavel fontd-quicksan'  >
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
              <p data-aos="fade-down" style={{ 'color': 'white' }}>Sãos estas tecnologias e ferramentas que uso ao desenvolver aplicações</p>
            </div>
            <div data-aos="fade-up"  className='flexboxrow'>
              <CardIcon imagem='./images/javascript.svg' nome='Javascript' />
              <CardIcon imagem='./images/nodejs-plain-wordmark.svg' nome='Node' />
              <CardIcon imagem='./images/react-original.svg' nome='React' />
              <CardIcon imagem='./images/mysql-original.svg' nome='Mysql' />
            </div>
            <div data-aos="fade-up" className='flexboxrow'>
              <CardIcon imagem='./images/html.svg' nome='Html' />
              <CardIcon imagem='./images/css3-plain.svg' nome='Css' />
              <CardIcon imagem='./images/sass-original.svg' nome='Sass' />
              <CardIcon imagem='./images/sass-original.svg' nome='Sass' />
            </div>
          </section>
        }

        {selecionarTexto === 'projeto' &&
          <section data-aos="fade" className="container-projetos">
            <div onClick={modalAbrir} className="box-projeto">
              <img src="./images/storegames-icon.svg" alt="icon loja" />
              <div className="box-projeto-footer"><b>Store Games</b></div>
            </div>

            <div onClick={modalAbrirSql} className="box-projeto">
              <img id='mysql-icon' src="./images/mysql-original.svg" alt="" />
              <div className="box-projeto-footer"><b>Modelagens Mysql</b> </div>
            </div>
          </section>
        }

        {selecionarTexto === 'contato' &&

          <section className="container-contatos flexboxrow fontd-quicksan">
            <div data-aos="fade-up" className="card-github">
              <a href="https://github.com/luanreinhold"><img src="./images/github-original-wordmark.svg" alt="github icon" /></a>
              <label>luanreinhold</label>
            </div>
            <div data-aos="fade-down" className="card-linkedin">
             <a href="https://www.linkedin.com/in/luanreinhold"><img src="./images/linkedin-plain-wordmark.svg" alt="linkedin icon" /></a> 
              <label>Luan Reinhold</label>
            </div>
            <div data-aos="fade-up" className="card-email">
              <img src="./images/icons8-gmail.svg" alt="github icon" />
              <label>luanreinhold@gmail.com</label>
            </div>
          </section>

        }
        <aside className='side-menu flexbox-column fontd-quicksan'>
          <ul style={{ "list-style": "none" }}>
            <li onClick={() => alterarTela('default')}>Sobre mim</li>
            <li onClick={() => alterarTela('tecnologia')}>Tecnologias que uso</li>
            <li onClick={() => alterarTela('projeto')}>Projetos</li>
            <li onClick={() => alterarTela('contato')}>Contatos</li>
          </ul>
        </aside>

      </section>
    </main>
  );
}

export default Home;
