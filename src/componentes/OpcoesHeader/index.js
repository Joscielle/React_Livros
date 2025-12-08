import './estilo.css';
import { Link } from 'react-router-dom';
import Opcao from '../Opcao';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader(){
    return(
        
        <ul className='opcoes'>
            {textoOpcoes.map ((texto) =>(
                <Link to={`/${texto.toLowerCase()}`} style={{ textDecoration: "none" }}>
                    <Opcao><p>{texto}</p></Opcao>
                </Link>
            ) ) }

        </ul>   

    )
}

export default OpcoesHeader;