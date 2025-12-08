import './estilo.css';
import sacola from '../../imagens/perfil.svg';
import perfil from '../../imagens/sacola.svg';

const icones = [ sacola, perfil];
function IconesHeader(){
    return(
        <ul className='icones'>
            {icones.map((icone) => (
                <li>
                    <img src={icone} alt='icone' className='icone'></img>
                </li>
            ))}
        </ul>
    )
}
export default IconesHeader;