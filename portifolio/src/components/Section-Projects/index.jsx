import style from './SectionProjects.css' 
import { Link } from 'react-router-dom'
const SectionProject = () => {
    return (
        <>
            <section className={style.SectionProject} id='Section-project'> 
                <div className="container">
                    <div className="container-my-work">
                       <div className="my-work">
                       <h1>My personal projects and work</h1>
                        <p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
                        The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.</p>

                        <Link className="button-next">Ver mais</Link>
                       </div>
                    </div>
                    <div className="conteiner-project-cards">
                        <div className="project-card">

                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default SectionProject
