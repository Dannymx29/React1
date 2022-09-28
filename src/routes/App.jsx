import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../style/global.css';

const App = () => {
    return (
        <BrowserRouter>
        <switch>
            <Layout>
                <Route exact path="/" componet={Home} />
                <Route exact path="/login" componet={Login} />
                <Route exact path="/recovery-password" componet={RecoveryPassword}  />
                <Route componet="NotFound" />
            </Layout>
        </switch>
        </BrowserRouter>
    );
}

export default App;