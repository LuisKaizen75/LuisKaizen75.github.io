const texts = ["Hi", "Hola", "أهلاً","Bonjour", "Ciao", "Hallo", "こんにちは"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const pauseTime = 1500;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById("typing-effect").textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
})();