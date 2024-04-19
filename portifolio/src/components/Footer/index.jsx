import React from 'react';
import style from './Footer.css'; 
import Logo from '../../assets/img/LogoTransparente2.png'

const Footer = () => {
    return (
        <>
        <footer className={style.Footer}>
            <div className='footer-container'>
                <div className='logo-space'>
                    <center><img src={Logo} alt="logo alternativa" className='logofoter'/></center>
                    <center><p>Clear code 2024</p></center>
                </div>
                <div className="information">
                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>
                    
                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>
                    
                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>

                    <ol>
                        <h3>conteudo</h3>
                        <li><a href="https://github.com/Kevenferraz39">Atividades</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Videos</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Conteudo</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Documentacao</a></li>
                        <li><a href="https://github.com/Kevenferraz39">Tags</a></li>
                    </ol>
                </div>
            </div><br/>
            <hr/><br/>
            <center><p>© Clear Code. Todos os direitos reservados.</p></center>
        </footer>
        </>
    );
};

export default Footer;
