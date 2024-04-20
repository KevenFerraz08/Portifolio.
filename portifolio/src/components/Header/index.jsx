import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoTransparente2.png';
import styles from './Header.css';
import icon_menu from '../../assets/icons/menu.png';

const Header = () => {
    return (
            <header className={styles.Header}>
                <nav>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/" className={styles.NavLink}><span>Home</span></Link>
                        </li>
                        <li>
                            <Link to="/Projects" className={styles.NavLink}><span>Projects</span></Link>
                        </li>
                        <li>
                            <Link to="/Contact" className={styles.NavLink}><span>Contact</span></Link>
                        </li>
                        <li>
                            <Link to="/About" className={styles.NavLink}><span>About</span></Link>
                        </li>
                    </ul> 
                </nav>
                <div className="nav-icons-container">
                    <img src={icon_menu} alt="menu" className="menu-button"/>
                </div>
            </header>
    );
};

export default Header;
