import { NextPageContext } from "next";
import ManageArticles from "Components/pages/admin/ManageArticles";
import fetchServerApi from "Scripts/fetchServerApi";

const ManageArticlesPage = ({articles}) => <ManageArticles articles={articles}/>

export async function getServerSideProps({req, res}:NextPageContext) {
    let articles = await fetchServerApi('getArticleList').then(res => res.json()).then(res => res.data);
    return {
        props: {
            articles
        }
    }
}

export default ManageArticlesPage;