document.addEventListener("DOMContentLoaded", function () {
    const ratingButtons = document.querySelectorAll(".rating-btn");
    const submitButton = document.querySelector(".submit-btn");
    const card2 = document.querySelector(".card2");
    const card1 = document.querySelector(".card1");
    const selectedRatingSpan = document.getElementById("selected-rating");
    let selectedRating = null;
  
    ratingButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove selected class from all buttons
        ratingButtons.forEach((btn) => btn.classList.remove("selected"));
  
        // Add selected class to clicked button
        this.classList.add("selected");
  
        // Enable the submit button
        submitButton.disabled = false;
  
        // Store the selected rating
        selectedRating = this.getAttribute("data-rating");
      });
    });
  
    submitButton.addEventListener("click", function () {
      if (selectedRating) {
        card2.style.display = "block";
        card1.style.display = "none";
        selectedRatingSpan.textContent = selectedRating;
      }
    });
  });
  