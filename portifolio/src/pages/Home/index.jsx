import Header from '../../components/Header/index'
import { Helmet } from "react-helmet";
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />

            <h1>home</h1>
        </>
    )
}
export default Home