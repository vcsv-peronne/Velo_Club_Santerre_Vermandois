function updateCountdown(targetDateStr, elementId) {
    const now = new Date();
    const targetDate = new Date(targetDateStr);
    const diffTime = targetDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const display = document.getElementById(elementId);
    display.textContent = diffDays > 0 ? diffDays : "0";
}

// Exemple : événement le 23 novembre 2025
updateCountdown("2025-11-23", "days-left");
