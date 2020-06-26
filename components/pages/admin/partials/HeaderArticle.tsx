import * as React from "react";
import UploadArticleContext from "Scripts/context/UploadArticleContext";
import styles from "Styles/pages/admin/UploadArticle.scss"
import { ALL_CATEGORY } from "Scripts/constants";

export interface Props {
    toggleEntries: () => void
}
export interface State { }

class HeaderArticle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <UploadArticleContext.Consumer>
                {({article, setAttribute}) => {
                    return (
                        <div id={styles['header-article']}>
                            <div>
                                <div>Category</div>
                                <div className={styles['list-button']}>
                                    {ALL_CATEGORY.map(category => {
                                        let label:string;
                                        if (category == 'Tutorial') label = "Tutoriel";
                                        else if (category == 'DevJV') label = "Développement JV";
                                        else if (category == 'AnalyseJV') label = "Analyse JV";
                                        else if (category == 'Creation') label = "Mes Créations";
                                        return <div key={category} className={`${styles['top-button']} ${(article.category == category) ? styles.selected : ""}`} onClick={_ => setAttribute('category', category)}>{label}</div>
                                    })}
                                </div>
                            </div>
                            <div>
                                <div>Titre</div>
                                <input type="text" value={article.name} onChange={e => setAttribute('name', e.currentTarget.value)}/>
                            </div>
                            <div>
                                <div>Url de l'article</div>
                                <div className={styles['pre-input']}>
                                    <div className="noselect">/articles/</div>
                                    <input type="text" value={article.url} onChange={e => setAttribute('url', e.currentTarget.value)}/>
                                </div>
                            </div>
                            <div>
                                <div>Lien Image</div>
                                <input type="text" value={article.mainImageUrl} onChange={e => setAttribute('mainImageUrl', e.currentTarget.value)}/>
                            </div>
                            <div>
                                <div>Description</div>
                                <textarea rows={2} value={article.description} onChange={e => setAttribute('description', e.currentTarget.value)}/>
                            </div>
                            <div>
                                <div className={`${styles['bottom-button']} ${styles.green}`} onClick={this.props.toggleEntries}>Continuer</div>
                            </div>
                        </div>
                    )
                }}
            </UploadArticleContext.Consumer>
        )
    }
}

export default HeaderArticle;