import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader(){
    return(
        
        <ul className='opcoes'>
            { textoOpcoes.map((texto)=> (
                <li className='opcao' key={texto}>
                <p>{texto}</p>
                </li>
            ) ) }

        </ul>   

    )
}

export default OpcoesHeader;