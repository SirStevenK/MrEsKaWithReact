import * as React from "react";
import Layout from "Components/pages/admin/Layout";
import styles from "Styles/pages/admin/ManageArticles.scss"
import BackButton from "./partials/BackButton";
import Link from "next/link";

export interface Props {
    articles: ArticleAttributes[]
}
export interface State {
    articles: ArticleAttributes[]
}

class ManageArticles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            articles: this.props.articles,
        }
    }

    deleteArticle = (article: ArticleAttributes) => {
        if (confirm(`Supprimer l'article "${article.name}"`)) {
            fetch("/api/deleteArticle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({url: article.url})
            })
            .then(this.getArticleList)
        }
    }
    
    getArticleList = () => {
        fetch("/api/getArticleList")
        .then(res => res.json())
        .then(res => this.setState({articles: res.data}));
    }

    render() {
        const {articles} = this.state;
        return (
            <Layout>
                <BackButton/>
                <div id={styles['manage-articles']}>
                    <div className={styles.title}>Gestion des articles</div>
                    <div className={styles['box-table']}>
                        <table>
                            <colgroup>
                                <col span={1} style={{width: "10%"}}/>
                                <col span={1} style={{width: "40%"}}/>
                                <col span={1} style={{width: "40%"}}/>
                                <col span={1} style={{width: "10%"}}/>
                            </colgroup>

                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>URL</th>
                                    <th style={{textAlign: "center"}}>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{article.name}</td>
                                            <td><Link href={article.url}><a style={{textDecoration: "underline", color: "blue"}} target="_blank">{article.url}</a></Link></td>
                                            <td onClick={_ => this.deleteArticle(article)} style={{textAlign: "center", color: "red"}}><i className="close icon" style={{marginBottom: "-2px", cursor: "pointer"}}/></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ManageArticles;