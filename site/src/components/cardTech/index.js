import './index.scss'

function CardTech (props) {

    return (
        <main>
            <section className="card-component">
                <img src={props.imagem} alt="icone" />
                <p>{props.nome}</p>
            </section>
        </main>

    )
}

export default CardTech;