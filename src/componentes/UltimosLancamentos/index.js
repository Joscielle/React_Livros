import './estilo.css'
import UltimosLancamentosContainer from '../UltimosLancamentosContainer';
import Titulo from '../Titulo';
import { livros } from './dadosUltimoslancamentos';
import NovosLivrosContainer from '../NovosLivrosContainer';

function UltimosLancamentos() {

    return(
        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                <img src={livro.src} alt='livro'/>
                ))}
            </NovosLivrosContainer>
            
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;