import './App.css';
//import CardRecomenda from './componentes/CardRecomenda';
import PesquisaContainer from './componentes/PesquisaContainer';
import UltimosLancamentos from './componentes/UltimosLancamentos';


function App() {
  return (
    <div className='App'>

      <PesquisaContainer></PesquisaContainer>
      <UltimosLancamentos></UltimosLancamentos>
      
    </div>
  );
}

export default App;