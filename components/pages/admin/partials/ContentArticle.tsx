import * as React from "react";
import ReactQuill, {Quill} from 'react-quill';
import UploadArticleContext, {Props as UploadArticleContextProps} from "Scripts/context/UploadArticleContext";
import styles from "Styles/pages/admin/UploadArticle.scss"

let icons = Quill.import("ui/icons");
icons["image"] = '<i class="file image outline icon" aria-hidden="true"></i>';
icons["linkImage"] = '<i class="image outline icon" aria-hidden="true"></i>';

export interface Props {
    toggleEntries: () => void,
    togglePreview: () => void,
    submitArticle: () => void
}
export interface State { }

class ContentArticle extends React.Component<Props, State> {
    quill: ReactQuill = null;

    constructor(props: Props) {
        super(props);
    }

    handleChangeEditor = (content: string, setAttribute: UploadArticleContextProps['setAttribute']) => {
        setAttribute('content', content);
    }

    imageHandler = () => {
        var range = this.quill.getEditor().getSelection();
        var value = prompt('What is the image URL');
        if(value){
            this.quill.getEditor().insertEmbed(range.index, 'image', value, "user");
        }
    }

    render() {
        return (
            <UploadArticleContext.Consumer>
                {({article, setAttribute}) => {
                    return (
                        <div id={styles['content-article']}>
                            <div className={styles['editor-container']}>
                                <ReactQuill
                                    ref={(el) => this.quill = el}
                                    className={styles.editor}
                                    value={article.content}
                                    onChange={(content) => this.handleChangeEditor(content, setAttribute)}
                                    modules={{
                                        toolbar: {
                                            container: [['bold', 'italic', 'underline', 'strike'], [{ 'size': ['small', false, 'large', 'huge'] }], [{ 'color': [] }, { 'background': [] }], ['link', 'image'], ['clean']],
                                            handlers: {
                                                "image": this.imageHandler
                                            }
                                        }
                                    }}
                                />
                            </div>
                            <div className={styles['row-button']}>
                                <div className={`${styles['bottom-button']} ${styles.blue}`} onClick={this.props.toggleEntries}>Retour</div>
                                <div className={`${styles['bottom-button']} ${styles.orange}`} onClick={this.props.togglePreview}>Preview</div>
                                <div className={`${styles['bottom-button']} ${styles.green}`} onClick={this.props.submitArticle}>Envoyer</div>
                            </div>
                        </div>
                    )
                }}
            </UploadArticleContext.Consumer>
        )
    }
}

export default ContentArticle;