import * as React from "react";
import Header from "Components/Header";
import styles from "Styles/DefaultLayout.scss";

export interface Props { }
export interface State { }

class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div id={styles.layout}>
                <div id={styles.container}>
                    <Header/>            
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;