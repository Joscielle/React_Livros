import './App.css';
import CardRecomenda from './componentes/CardRecomenda';
import './componentes/Header';
import Header from './componentes/Header';
import PesquisaContainer from './componentes/PesquisaContainer';
import UltimosLancamentos from './componentes/UltimosLancamentos';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <PesquisaContainer></PesquisaContainer>
      <UltimosLancamentos></UltimosLancamentos>
      <CardRecomenda>
        <div className="recomenda">
            {titulo}
        </div>
      </CardRecomenda>

    </div>
  );
}

export default App;