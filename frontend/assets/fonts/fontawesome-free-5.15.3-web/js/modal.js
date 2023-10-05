const loginButton = document.getElementById("login-button");

// Get the modal element
const modal = document.querySelector(".modal--login");

// Function to show the modal
function showModal() {
    modal.style.display = "block";
}

// Add a click event listener to the login button
loginButton.addEventListener("click", showModal);

function closeModal(){
    modal.style.display="none";
}
document.getElementById("close-modal").addEventListener("click", closeModal);