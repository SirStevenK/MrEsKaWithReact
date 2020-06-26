import Home from "Components/pages/Home";
import fetchServerApi from "Scripts/fetchServerApi";

export async function getArticles(type:FilTypes = null): Promise<ArticleAttributes[]> {
    let request:string = "getArticleList";
    if (type) request += `?type=${type}`
    return fetchServerApi(request)
    .then(res => res.json())
    .then(res => res.data);
}

export default ({articles}) => <Home type={"All"} articles={articles}/>

export async function getServerSideProps() {
    const articles = await getArticles();
    return {
        props: {
            articles
        }
    }
}