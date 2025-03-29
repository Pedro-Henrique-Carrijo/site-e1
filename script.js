(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Você tem certeza ?",
    "Serio mesmo??",
    "Pensa bem em...",
    "Por favorrrrrrr😭...",
    "Pensou bem mesmo ??",
    "Se você disser não eu vou ficar triste em...",
    "Muito triste...",
    "Muito Muito MUITO TRISTE...",
    "Ta bommm eu vou parar de perguntar...",
    "Brincadeira, fala sim por favorrrr ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
    yesButton.style.padding = `${currentSize / 2}px ${currentSize}px`;

    const currentWidth = gif.clientWidth;
    const newWidth = currentWidth * 0.85;
    gif.style.width = `${newWidth}px`;

    if (currentWidth < 50) {
        gif.style.display = "none";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
