import * as React from "react";
import styles from "Styles/pages/admin/BackButton.scss";
import Link from "next/link";

export interface Props { }
export interface State { }

class BackButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Link href="/admin/home"><div className={styles['back-button']}>Retour au menu</div></Link>
        )
    }
}

export default BackButton;