import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoTrasparent.png'
import styles from './Header.css'

const Header = () => {
    return (
        <header className={styles.Header}>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <ul>
                    <li><Link to="/" className={styles.NavLink}>Home</Link></li>
                    <li><Link to="/Projects" className={styles.NavLink}>Projects</Link></li>
                    <li><Link to="/Contact" className={styles.NavLink}>Contact</Link></li>
                    <li><Link to="/About" className={styles.NavLink}>About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;