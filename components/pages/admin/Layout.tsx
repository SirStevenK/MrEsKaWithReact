import * as React from "react";
import styles from "Styles/pages/admin/Layout.scss"

export interface Props { }
export interface State { }

class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div id={styles.layout}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;