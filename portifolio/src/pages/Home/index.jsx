import { Helmet } from "react-helmet";
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Section from '../../components/Section-me';
import SectionProject from '../../components/Section-Projects'
import SectionHome from '../../components/Section-home'
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <SectionHome />
            <Section />
            <SectionProject />
            <Footer />
        </>
    )
}
export default Home