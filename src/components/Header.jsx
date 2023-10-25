import '../styles/Header.css';
import './Left-menu.jsx';
import Left_menu from './Left-menu.jsx';
import Search from './Search.jsx';

function Header () {
    return (
        <header className="header">
       <Left_menu />
        <Search />        
      </header>
    )
}

export default Header;