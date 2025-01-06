
console.log("Welkom bij de JDM Auto's website!");

function showWelcomeMessage() {
    alert("Welkom op de JDM Auto's website! Ontdek meer over JDM-auto's.");
}

function linkClicked(linkName) {
    alert("Je hebt de link naar " + linkName + " aangeklikt!");
}

function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Vul alstublieft alle velden in.");
        return false;
    }

    alert("Bedankt voor je bericht, " + name + "!");
    return true;
}

window.onload = showWelcomeMessage;

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        linkClicked(this.textContent);
    });
});