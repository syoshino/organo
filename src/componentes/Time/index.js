import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }} >
                {props.nome}
            </h3>
            <div className='colaboradores'>
            {props.colaboradores.map(c => <Colaborador key={c.nome} nome={c.nome} corDeFundo={props.corPrimaria} cargo={c.cargo} imagem={c.imagem}></Colaborador>)
            }
            </div>
        </section>
    )
}



export default Time