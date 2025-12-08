import Subtitulo from '../Subtitulo';
import Titulo from '../Titulo';
import './estilo.css'
import { useState } from 'react';
import { livros } from './dadosPesquiva';
import Resultado from '../Resultado';


function PesquisaContainer(){
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([]);
    
    return(
        <section className='section'>

            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu produto</Subtitulo>
            
            <input placeholder="Digite aqui o que deseja" 
            onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado));
                setLivrosPesquisados(resultadoPesquisa);
            }}
            />
                {livrosPesquisados.map ( livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt='livro'/>
                    </Resultado>

                    
                ))
                }
            
        </section>
                   
    )
    
}
export default PesquisaContainer;
