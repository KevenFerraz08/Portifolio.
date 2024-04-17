import Header from '../../components/Header/index'
import Footer from '../../components/Footer';
import Section from '../../components/Section-me';
import { Helmet } from "react-helmet";
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <Section />
            <Footer />
        </>
    )
}
export default Home