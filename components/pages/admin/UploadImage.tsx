import * as React from "react";
import Layout from "Components/pages/admin/Layout";
import styles from "Styles/pages/admin/UploadImage.scss"
import BackButton from "Components/pages/admin/partials/BackButton";

export interface Props { }
export interface State {
    name: string,
    image: File
}

class UploadImage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            image: null
        }
    }

    onChangeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
        let input = e.currentTarget;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById("image")['src'] = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
            this.setState({image: input.files[0]});
        }
    }
    
    uploadImage = () => {
        const {name, image} = this.state;
        if (name && image) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            fetch("/api/uploadImage", {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.error == 1) alert("Une image possède déjà ce nom");
                else if (res.error == 2) alert("L'image n'a pas pu être enregistrée");
                else {
                    document.getElementById("image")['src'] = "";
                    document.getElementById("file")['value'] = "";
                    this.setState({name: "", image: null})
                }
            })
        }
    }

    render = () => {
        const {onChangeImage, uploadImage, state: {name, image}} = this;
        console.log(image);
        return (
            <Layout>
                <BackButton/>
                <div id={styles['upload-image']}>
                    <div>
                        <div className={styles.title}>Envoi d'images</div>
                    </div>
                    <input type="text" placeholder="Nom de l'image" value={name} onChange={e => this.setState({name: e.currentTarget.value})}/>
                    <img id="image" className={styles.image}/>
                    <label className={styles.select} htmlFor="file">Choisir une image</label>
                    <input id="file" type="file" accept="image/*" style={{display: "none"}} onChange={onChangeImage}/>
                    <div className={`${styles.confirm} ${(!name || !image) ? styles.disabled : ""}`} onClick={uploadImage}>Envoyer</div>
                </div>
            </Layout>
        )
    }
}

export default UploadImage;