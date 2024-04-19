import { Helmet } from "react-helmet";
import Header from '../../components/Header/index'
import Footer from '../../components/Footer';
import Section from '../../components/Section-me';
import SectionProject from '../../components/Section-Projects'
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <Section />
            <SectionProject />
            <Footer />
        </>
    )
}
export default Home