// Funktion für "Zufrieden"-Button
function redirect() {
    window.location.href = "https://search.google.com/local/writereview?placeid=ChIJ3da1Yhs_v0cRJfYg4GDfggM";
}

// Funktion für "Verbesserungswürdig"-Button

 function sendFeedback() {
    try {
        // Versuch, das E-Mail-Programm zu öffnen
        const email = "kerpen@gs.provinzial.com";
        const subject = "Feedback: Verbesserungswürdig";
        const body = "Bitte teilen Sie uns mit, wie wir uns verbessern können.";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } catch (error) {
        // Wenn `mailto:` fehlschlägt, zeige das Formular
        showFeedbackForm();
    }
} 



// Alternative: Feedback-Formular anzeigen
function showFeedbackForm() {
    document.getElementById("feedback-form").style.display = "block";
}

// Formular-Daten senden (per JavaScript – optional)
function submitFeedback(event) {
    event.preventDefault(); // Verhindere Standard-Submit

    const feedback = document.getElementById("feedback").value;
    if (feedback.trim() === "") {
        alert("Bitte geben Sie Ihr Feedback ein.");
        return;
    }

    // Hier kannst du die Daten an einen Server senden (falls vorhanden)
    alert("Vielen Dank für Ihr Feedback!");
    document.getElementById("feedback-form").reset();
}
