import style from './Section.css'
import foto from '../../assets/img/Keven-Ferraz.png'
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
                            
                        <p>Meu nome é Keven Ferraz de Almeida, sou dev frontend. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</p>
                        <div className="skills-icon">

                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Section