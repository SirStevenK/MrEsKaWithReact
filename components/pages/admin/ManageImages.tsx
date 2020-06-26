import * as React from "react";
import Layout from "Components/pages/admin/Layout";
import styles from "Styles/pages/admin/ManageImages.scss"
import BackButton from "./partials/BackButton";

export interface Props {
    images: ImageAttributes[]
}
export interface State {
    images: ImageAttributes[],
    imageSelected: ImageAttributes
}

class ManageImages extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            images: this.props.images,
            imageSelected: null
        }
    }

    deleteImage = (image: ImageAttributes) => {
        if (confirm(`Supprimer l'image ${image.name}`)) {
            fetch("/api/deleteImage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: image.name})
            })
            .then(this.getImagesList)
            .then(_ => {
                if (image.name == this.state.imageSelected.name) this.setState({imageSelected: null});
            })
        }
    }
    
    getImagesList = () => {
        fetch("/api/getImageList")
        .then(res => res.json())
        .then(res => this.setState({images: res.data}));
    }

    render() {
        const {images, imageSelected} = this.state;
        return (
            <Layout>
                <BackButton/>
                <div id={styles['manage-images']}>
                    <div className={styles.title}>Gestion des images</div>
                    <div className={styles['box-image']}>
                        {imageSelected && (
                            <>
                                <div className="name">{imageSelected.name}</div>
                                <img src={imageSelected.url}/>
                            </>
                        )}
                    </div>
                    <div className={styles['box-table']}>
                        <table>
                            <colgroup>
                                <col span={1} style={{width: "10%"}}/>
                                <col span={1} style={{width: "80%"}}/>
                                <col span={1} style={{width: "10%"}}/>
                            </colgroup>

                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th style={{textAlign: "center"}}>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {images.map((image, index) => {
                                    return (
                                        <tr key={index}>
                                            <td onClick={_ => this.setState({imageSelected: image})}>{index}</td>
                                            <td onClick={_ => this.setState({imageSelected: image})}>{image.name}</td>
                                            <td onClick={_ => this.deleteImage(image)} style={{textAlign: "center", color: "red"}}><i className="close icon" style={{marginBottom: "-2px", cursor: "pointer"}}/></td>
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

export default ManageImages;