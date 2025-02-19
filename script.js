// Select elements
const gallery = document.querySelector(".galllery");
const backBtn = document.getElementById("back_btn");
const nextBtn = document.getElementById("next_btn");

// Scroll amount (adjust as needed)
const scrollAmount = 900; // Matches gallery width

// Function to scroll the gallery to the right
function scrollNext() {
    gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

// Function to scroll the gallery to the left
function scrollBack() {
    gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

// Event listeners for buttons
nextBtn.addEventListener("click", scrollNext);
backBtn.addEventListener("click", scrollBack);


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") scrollNext();
    if (event.key === "ArrowLeft") scrollBack();
});
