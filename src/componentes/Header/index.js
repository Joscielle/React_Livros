import './estilo.css';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className='App-header'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>

      </header>
        
    )
}
export default Header;