import './Home.css';
//import CardRecomenda from './componentes/CardRecomenda';
import PesquisaContainer from '../componentes/PesquisaContainer';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import { Route, Routes } from 'react-router-dom';
import Favoritos from './Favoritos';


function Home() {
  return (
    <div className='Home'>

      <PesquisaContainer></PesquisaContainer>
      <UltimosLancamentos></UltimosLancamentos>
            
    </div>
  );
}

export default Home;