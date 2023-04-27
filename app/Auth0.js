/*import { createAuth0Client } from '@auth0/auth0-spa-js';*/
/*
let createAuth0Client = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async() => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0Client = await auth0.createAuth0Client({
        domain: config.domain,
        clientId: config.clientId
    });
};

const updateUI = async() => {
    const isAuthenticated = await auth0Client.isAuthenticated();

    document.getElementById("navLogout").disabled = !isAuthenticated;
    document.getElementById("navLogin").disabled = isAuthenticated;
};

const login = async() => {
    await auth0Client.loginWithRedirect({
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    });
};
window.onload = async() => {
    updateUI();

    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
        // show the gated content
        return;
    }
    // NEW - check for the code and state parameters
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {

        // Process the login state
        await auth0Client.handleRedirectCallback();

        updateUI();

        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, "/");
    }
};

window.onload = async() => {
    await configureClient();
    await updateUI();
};
const start = async() => {
    configureClient();
    updateUI();
}*/