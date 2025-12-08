import './estilo.css';
import logo from  '../../imagens/logo.svg';

function Logo(){
    return(
      
        <div className='logo'>
          <img src={logo} className='logo-img' alt='logo'></img>
          <p><strong>Joscielle</strong>Store</p>
        </div>
        
    )
} 

export default Logo
