import { NextPageContext} from "next";
import Home from "Components/pages/Home";
import {getArticles} from "./index";
import Error from "../pages/_error";

const HomePage = ({type, articles}) => {
    if (type) return <Home type={type} articles={articles}/>;
    else return <Error statusCode={404}/>
}

export async function getServerSideProps({req, res}:NextPageContext) {
    const url = req.url;
    let type: FilTypes
    if (url == "/tutoriels") type = "Tutorial";
    else if (url == "/developpements") type = "DevJV";
    else if (url == "/analyses") type = "AnalyseJV";
    else if (url == "/creations") type = "Creation";
    else type = null;

    const articles = await getArticles(type);

    return {
        props: {
            type,
            articles
        }
    }
}

export default HomePage;