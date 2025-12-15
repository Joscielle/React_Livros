import './favoritos.css';
import { useEffect, useState } from 'react';
import {getFavoritos} from '../servicos/favoritos';
import AppContainer from '../componentes/AppContainer';
import Titulo from '../componentes/Titulo';
import ResultadoContainer from '../componentes/ResultadoContainer';
import Resultado from '../componentes/Resultado';
import livroImg from '../imagens/livro4.png';
import { deleteFavoritos } from '../servicos/favoritos';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
 
  async function fetchFavoritos(){
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI);
  }
  useEffect (() => {
    fetchFavoritos()
  }, [])

  async function deletarFavoritos(id) {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert(`Livro de id:${id} removido!`)
  }
   
  return(
    <AppContainer>

      <div>

        <Titulo>Aqui estão seus favoritos:</Titulo>

        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (

              <Resultado key={favorito.id} onClick={() => deletarFavoritos(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} alt='imagem do livro' />
              </Resultado>

            )) : null
          }

        </ResultadoContainer>

      </div>

    </AppContainer>
  );
  
}

export default Favoritos;