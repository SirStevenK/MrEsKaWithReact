import * as React from "react";
import Layout from "Components/pages/admin/Layout";
import styles from "Styles/pages/admin/Home.scss"
import Link from "next/link";

export interface Props { }
export interface State { }

class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div id={styles.home}>
                    <div className={styles.title}>Bienvenue Mr. EsKa</div>
                    <Link href="/admin/uploadarticle"><div className={`${styles['button-nav']} ${styles['green']}`}>Poster un article</div></Link>
                    <Link href="/admin/uploadimage"><div className={`${styles['button-nav']} ${styles['red']}`}>Poster une image</div></Link>
                    <Link href="/admin/managearticles"><div className={`${styles['button-nav']} ${styles['blue']}`}>Gestion des articles</div></Link>
                    <Link href="/admin/manageimages"><div className={`${styles['button-nav']} ${styles['orange']}`}>Gestion des images</div></Link>
                </div>
            </Layout>
        )
    }
}

export default Home;