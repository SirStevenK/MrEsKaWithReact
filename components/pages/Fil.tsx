import * as React from "react";
import Link from "next/link";
import Card from "Components/pages/partials/Card";
import styles from "Styles/partials/Fil.scss";

export interface Props {
    type: FilTypes,
    articles: ArticleAttributes[]
}
export interface State {
    articles: ArticleAttributes[]
}

class Fil extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            articles: this.props.articles
        }
    }

    render() {
        const articles = this.state.articles.slice().reverse();
        return (
            <div id={styles.fil}>
                {articles.map(article => {
                    return (
                        <div key={article.url} className={styles.item}>
                            <Card article={article}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Fil;