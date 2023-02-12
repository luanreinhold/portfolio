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

  const [statusArrow1, setStatusArrow1] = useState("arrow-invisible")
  const [statusArrow2, setStatusArrow2] = useState("arrow-invisible")
  const [statusArrow3, setStatusArrow3] = useState("arrow-invisible")
  const [statusArrow4, setStatusArrow4] = useState("arrow-invisible")

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

  function alterarTela(status) {

    setSelecionarTexto(status)
  }

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])

  function selecaoMenu() {

    if (selecionarTexto !== null || undefined) {
      setStatusArrow1('arrow-invisible')
      setStatusArrow2('arrow-invisible')
      setStatusArrow3('arrow-invisible')
      setStatusArrow4('arrow-invisible')

      if (selecionarTexto === 'default')
        setStatusArrow1('arrow-visible')

      if (selecionarTexto === 'tecnologia')
        setStatusArrow2('arrow-visible')

      if (selecionarTexto === 'projeto')
        setStatusArrow3('arrow-visible')


      if (selecionarTexto === 'contato')
        setStatusArrow4('arrow-visible')
    }

  }

  useEffect(() => {
    selecaoMenu()
  }, [selecionarTexto])


  return (
    <main className='main-home'>
      <ModalProjeto exibir={exibirModal} fechar={modalFechar} />
      <ModalSql exibir={exibirModalSql} fechar={modalFecharSql} />

      <section className='container-home flexbox-row '>
        {selecionarTexto === 'default' &&
          <article data-aos="fade" className='container-about-me naoSelecionavel fontd-quicksan'  >
            <div data-aos="slide-left">about me</div>
            <h1 data-aos="slide-right">Meu nome é  Luan Reinhold, </h1>
            <p data-aos="zoom-in-up">Possuo formação técnica em informática onde aprendi
              a desenvolver soluções através de tecnologias e ferramentas. <p>Busco sempre evoluir como desenvolvedor fullstack através de estudos e projetos. Atualmente estou cursando Análise e desenvolvimento de sistemas,
                onde procuro oportunidade como estágiario/trainee para adquirir cada vez mais conhecimentos.</p>
            </p>
          </article>
        }

        {selecionarTexto === 'tecnologia' &&
          <section className='container-tecnologias fontd-quicksan '>
            <div>
              <p data-aos="fade-down" style={{ 'color': 'white' }}>Tecnologias que possuo conhecimento:</p>
            </div>
            <div data-aos="slide-right" className='flexboxrow tecnologia-row1'>
              <CardIcon imagem='./images/javascript.svg' nome='Javascript' />
              <CardIcon imagem='./images/nodejs-plain-wordmark.svg' nome='Node' />
              <CardIcon imagem='./images/mysql-original.svg' nome='Mysql' />
              <CardIcon imagem='./images/mongodb-original.svg' nome='MongoDB' />
            </div>
            <div data-aos="slide-up" className='flexboxrow tecnologia-row2'>
              <CardIcon imagem='./images/html.svg' nome='Html' />
              <CardIcon imagem='./images/css3-plain.svg' nome='Css' />
              <CardIcon imagem='./images/sass-original.svg' nome='Sass' />
              <CardIcon imagem='./images/react-original.svg' nome='React' />
            </div>
          </section>
        }

        {selecionarTexto === 'projeto' &&
          <div>
            <p data-aos="slide-right" style={{ 'color': 'white', 'margin': '1rem' }} className="fontd-quicksan">Novos projetos em andamento...</p>
            <section data-aos="fade-up" className="container-projetos">
              <div onClick={modalAbrir} className="box-projeto">
                <img src="./images/storegames-icon.svg" alt="icon loja" />
                <div className="box-projeto-footer"><b>Store Games</b></div>
              </div>
              <div onClick={modalAbrirSql} className="box-projeto">
                <img id='mysql-icon' src="./images/mysql-original.svg" alt="" />
                <div className="box-projeto-footer"><b>Modelagens Mysql</b> </div>
              </div>
            </section>

          </div>
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
          <ul className='nav-list' style={{ "list-style": "none" }}>
            <div className="row-arrow"><img id={statusArrow1} src="./images/arrow-icon-arrows-sign-black-arrows-free-png.webp" alt="" /><li onClick={() => alterarTela('default')}>Sobre mim</li></div>
            <div className="row-arrow"><img id={statusArrow2} src="./images/arrow-icon-arrows-sign-black-arrows-free-png.webp" alt="" /><li onClick={() => alterarTela('tecnologia')}>Tecnologias</li></div>
            <div className="row-arrow"><img id={statusArrow3} src="./images/arrow-icon-arrows-sign-black-arrows-free-png.webp" alt="" /><li onClick={() => alterarTela('projeto')}>Projetos</li></div>
            <div className="row-arrow"><img id={statusArrow4} src="./images/arrow-icon-arrows-sign-black-arrows-free-png.webp" alt="" /><li onClick={() => alterarTela('contato')}>Contatos</li></div>
          </ul>
        </aside>

      </section>
    </main>
  );
}

export default Home;
