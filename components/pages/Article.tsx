import * as React from "react";
import UploadArticleContext from "Scripts/context/UploadArticleContext";
import styles from "Styles/partials/Article.scss"
import Layout from "Components/DefaultLayout";

export interface Props {
    article: ArticleAttributes
}
export interface State { }

class PreviewArticle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const article = this.props.article;
        return (
            <Layout>
                <div id={styles['article']}>
                    <img className={styles['main-img']} src={article.mainImageUrl || ""}/>
                    <div style={{padding: "15px 10px"}}>
                        <h1>{article.name}</h1>
                        <div dangerouslySetInnerHTML={{__html: article.content}}></div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PreviewArticle;