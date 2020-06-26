import * as React from "react";
import UploadArticleContext from "Scripts/context/UploadArticleContext";
import styles from "Styles/pages/admin/UploadArticle.scss"

export interface Props { }
export interface State { }

class PreviewArticle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <UploadArticleContext.Consumer>
                {({article}) => {
                    return (
                        <div id={styles['preview-article']}>
                            <img className={styles['main-img']} src={article.mainImageUrl || ""}/>
                            <div style={{padding: "15px 10px"}}>
                                <h1>{article.name}</h1>
                                <div dangerouslySetInnerHTML={{__html: article.content}}></div>
                            </div>
                        </div>
                    )
                }}
            </UploadArticleContext.Consumer>
        )
    }
}

export default PreviewArticle;