let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "To the best teacher in the world💖";
}) 
window.addEventListener("focus", () => {
    document.title = docTitle;
}) 