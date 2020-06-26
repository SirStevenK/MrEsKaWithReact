import * as React from "react"
import Layout from "Components/pages/admin/Layout";
import styles from "Styles/pages/admin/Login.scss"

export interface Props { }
export interface State {
    login: string,
    password: string,
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            event.currentTarget.blur();
            this.connect();
        }
    }

    connect = () => {
        let {login, password} = this.state;

        fetch("/api/connect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({login, password})
        })
        .then(res => res.json())
        .then(res => {
            if (res.logged) window.location.href = "/admin/home";
            else this.setState({login: "", password: ""});
        })
    }
    render = () => {
        let {connect, setState, state: {login, password}} = this;
        return (
            <Layout>
                <div id={styles.login}>
                    <div className={styles.form}>
                        <div>
                            <div>Pseudo</div>
                            <input type="text" value={login} onChange={e => this.setState({login: e.currentTarget.value})} onKeyPress={this.handleKeyPress}/>
                        </div>
                        <div>
                            <div>Mot de passe</div>
                            <input type="password" value={password} onChange={e => this.setState({password: e.currentTarget.value})} onKeyPress={this.handleKeyPress}/>
                        </div>
                        <div><div className={styles.button} onClick={connect}>Connexion</div></div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Login;