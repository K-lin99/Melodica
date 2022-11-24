import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-batws8djaxqyca7d.us.auth0.com"
        clientId="e0A4C9XJSRPKR5D6AIztT7pBv2wvlWnD"
        redirectUri={window.location.origin}>
        <App/>
    </Auth0Provider>
); 