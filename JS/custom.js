description = document.getElementById("description");
specifications = document.getElementById("specifications");
reviews = document.getElementById("reviews");

descriptionContent = document.getElementById("descriptionContent");
specificationsContent = document.getElementById("specificationsContent");
reviewsContent = document.getElementById("reviewsContent");

description.addEventListener("click", function() {
    descriptionContent.classList.remove("d-none");
    specificationsContent.classList.add("d-none");
    reviewsContent.classList.add("d-none");
});

specifications.addEventListener("click", function() {
    descriptionContent.classList.add("d-none");
    specificationsContent.classList.remove("d-none");
    reviewsContent.classList.add("d-none");
});

reviews.addEventListener("click", function() {
    descriptionContent.classList.add("d-none");
    specificationsContent.classList.add("d-none");
    reviewsContent.classList.remove("d-none");
});


const homepageButton = document.getElementById("homepage");
const myOverlay = document.getElementById("myOverlay");

homepageButton.addEventListener("mouseenter", function() {
    myOverlay.classList.remove("d-none");
});


