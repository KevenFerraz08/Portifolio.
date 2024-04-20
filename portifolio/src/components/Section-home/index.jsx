import styles from './Sectionhome.css'; // Verifique o caminho do arquivo CSS
import img1 from '../../assets/img/mancha.png'; // Verifique o caminho da imagem
import img2 from '../../assets/img/Programming-pana.svg'; // Verifique o caminho da imagem

const SectionHome = () => {
    return (
        <div className={styles.Sectionhome} id='Section-Home'>
            <div className="sectionhome-container">
                <div className="container-text">
                    <h1>Seja bem-vindo ao meu portfólio!</h1>
                    <p>
                        Aqui, você encontrará uma amostra do meu trabalho criativo e dedicado. Estou pronto para colaborar e transformar suas ideias em realidade.
                        <br/>
                        Vamos juntos criar um projeto que atenda às suas necessidades e supere suas expectativas. Vamos começar essa jornada juntos.
                    </p>
                </div>
                <div className="imagem-container">
                    <img src={img1} alt="mancha" className='img1'/>
                    <img src={img2} alt="imagem do dev" className='img2'/>
                </div>
            </div>
        </div>
    );
}

export default SectionHome; // Corrigido o nome do componente para PascalCase
