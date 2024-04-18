import style from './Section.css'
import foto from '../../assets/img/Keven-Ferraz.png'
import icon_git from '../../assets/icons/github.svg'
import icon_react from '../../assets/icons/react.svg'
import icon_js from '../../assets/icons/javascript.svg'
import icon_css from '../../assets/icons/css.svg'
import icon_html from '../../assets/icons/html.svg'
import icon_node from '../../assets/icons/node.svg'
const Section = () => {
    return(
        <>
         <section className={style.Section}>
            <div className="container-section">
                <div className="container-image">
                    
                    <div className="image">
                        <center><img src={foto} alt="Foto" className='foto'/></center>
                        <br/>
                        <button className="button">About-me&nbsp;&nbsp;&nbsp;&rarr;</button>
                    </div>
                </div>
                <div className="container-informations">
                    <div className="information-section">
                        <h2>Quem sou</h2>
                        
                        <h1>Keven Ferraz de Almeida</h1>
                            
                        <h3>Frontend Developer</h3>
                            
                        <p>Meu nome é Keven Ferraz de Almeida, sou dev frontend. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.
                        <br/>
                        Meu nome é Keven Ferraz de Almeida, sou dev frontend. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</p>
                        <div className="skills-icons">
                            <div className="icon-skills">
                               <center> <img align="center" alt="html" height="30" width="40" src={icon_html}/></center>
                            </div>
                            <div className="icon-skills">
                                <center><img align="center" alt="Css" height="30" width="40" src={icon_css}/></center>
                            </div>
                            <div className="icon-skills">
                               <center> <img align="center" alt="js" height="30" width="40" src={icon_js} /></center>
                            </div>
                            <div className="icon-skills">
                               <center> <img align="center" alt="Js" height="30" width="40" src={icon_react}/></center>
                            </div>
                            <div className="icon-skills">
                               <center> <img align="center" alt="node js" height="30" width="40" src={icon_node}/></center>
                            </div>
                            <div className="icon-skills">
                               <center> <img align="center" alt="github" height="30" width="40" src={icon_git}/></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Section