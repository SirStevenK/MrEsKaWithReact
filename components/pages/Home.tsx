import * as React from "react";
import Layout from "Components/DefaultLayout";
import Fil from "./Fil";

export interface Props {
    type: FilTypes,
    articles: ArticleAttributes[]
}
export interface State { }

class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Fil type={this.props.type} articles={this.props.articles}/>
            </Layout>
        )
    }
}

export default Home;