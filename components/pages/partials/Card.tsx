import * as React from "react";
import styles from "Styles/partials/Card.scss";
import Link from "next/link";

export interface Props {
    article: ArticleAttributes
}
export interface State { }

class Card extends React.Component<Props, State> {
    render() {
        let {article: {name, description, mainImageUrl, url}} = this.props;
        return (
            <Link href={url}>
                <div className={styles.card}>
                    <div className={styles.title}><h3>{name}</h3></div> 
                    <div className={styles.description}><p>{description}</p></div> 
                    <img className={styles.image} src={mainImageUrl}/>
                </div>
            </Link>
        )
    }
}

export default Card;