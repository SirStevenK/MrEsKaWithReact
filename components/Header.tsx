import * as React from "react";
import styles from "Styles/Header.scss";
import Link from "next/link";

export interface Props { }
export interface State { }

class Header extends React.Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div id={styles.header}>
                <div className={styles.box}>
                    <div className={styles.top}>
                        <Link href='/'><img src="/images/logoEsKa.png"/></Link>
                        <div>Mr.EsKa</div>
                        <div>Expert en JavaScript</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.nav}>
                        <Link href='/tutoriels'><div className={`${styles['button-nav']} ${styles['green']}`}>Tutoriel</div></Link>
                        <Link href='/developpements'><div className={`${styles['button-nav']} ${styles['red']}`}>Développement JV</div></Link>
                        <Link href='/analyses'><div className={`${styles['button-nav']} ${styles['blue']}`}>Analyse JV</div></Link>
                        <Link href='/creations'><div className={`${styles['button-nav']} ${styles['orange']}`}>Mes Créations</div></Link>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.bottom}>
                        <Link href="/admin"><a><div>Admin</div></a></Link>
                        <a href="https://www.kongregate.com/accounts/IndieBaie/" target="_blank"><div>Kongregate</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;