import { NextPageContext } from "next";
import db from "Scripts/db";
import Error from "pages/_error";
import Article from "Components/pages/Article";

const ArticlePage = ({article}) => {
    if (article) return <Article article={article}/>;
    else return <Error statusCode={404}/>
}

export async function getServerSideProps({req, res}:NextPageContext) {
    const url = req.url;
    const url_article = url.substring(10);
    
    const article = db.getArticle(url);
    
    return {
        props: {
            article
        }
    }
}

export default ArticlePage;