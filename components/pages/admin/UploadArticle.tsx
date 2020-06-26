import * as React from "react";
import Layout from "Components/pages/admin/Layout"
import styles from "Styles/pages/admin/UploadArticle.scss"
import HeaderArticle from "Components/pages/admin/partials/HeaderArticle";
import PreviewArticle from "Components/pages/admin/partials/PreviewArticle";
import UploadArticleContext from "Scripts/context/UploadArticleContext";
import ContentArticle from "./partials/ContentArticle";
import { isFilType } from "Scripts/check";
import BackButton from "./partials/BackButton";

export interface Props { }
export interface State {
    type: 'HEADER'|'CONTENT',
    article: ArticleAttributes,
    showPreview: boolean
}

class UploadArticle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            type: "HEADER",
            article: {
                category: "Tutorial",
                content: "<p>Test</p><p><strong>Test1</strong></p><p><strong><em>Test2</em></strong></p><p><strong><u>Test3</u></strong></p><p><em><u>Test4</u></em></p><p><strong><em><u>Test5</u></em></strong></p>",
                description: "",
                mainImageUrl: "/images/javascript.png",
                name: "Apprendre le javascript",
                url: "javascript"
            },
            showPreview: true
        }
    }

    toggleEntries = () => {
        const type = this.state.type;
        if (type == "CONTENT") this.setState({type: "HEADER"});
        else this.setState({type: "CONTENT"});
    }
    togglePreview = () => {
        this.setState({showPreview: !this.state.showPreview});
    }

    submitArticle = () => {
        fetch('/api/uploadArticle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({article: this.state.article})
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                if (res.error == 1) {
                    alert("L'URL est déjà utilisée");
                    this.setState({type: "HEADER"});
                }
                else alert("Erreur inconnue");
            }
            else {
                window.location.href = "/admin/home"
            }
        })
    }

    displayEntriesArticle = () => {
        const {toggleEntries, togglePreview, submitArticle, state: {type}} = this;
        if (type == "HEADER") return <HeaderArticle toggleEntries={toggleEntries}/>
        else return <ContentArticle toggleEntries={toggleEntries} togglePreview={togglePreview} submitArticle={submitArticle}/>
    }

    setAttribute = (attribute: keyof ArticleAttributes, content: string) => {
        let article = this.state.article;
        if (attribute == "category") {
            if (isFilType(content)) article[attribute] = content;
        }
        else article[attribute] = content;
        this.setState({article});
    }

    render = () => {
        const {setAttribute, state: {article, showPreview}} = this;

        return (
            <UploadArticleContext.Provider value={{article, setAttribute}}>
                <Layout>
                    <BackButton/>
                    <div id={styles['upload-article']}>
                        {this.displayEntriesArticle()}
                        {showPreview && <PreviewArticle/>}
                    </div>
                </Layout>
            </UploadArticleContext.Provider>
        )
    }
}

export default UploadArticle;