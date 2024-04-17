import Header from '../../components/Header/index'
import { Helmet } from "react-helmet";
const About = () => {
    return(
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Header />

            <h1>About</h1>
        </>
    )
}
export default About