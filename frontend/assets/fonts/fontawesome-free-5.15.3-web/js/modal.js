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

// ----------------------------------


const RegisterButton = document.getElementById("register-button");

const modalRegister = document.querySelector(".modal--register");

function showModalRegister() {
    modalRegister.style.display = "block";
}

RegisterButton.addEventListener("click", showModalRegister);

function closeModalRegister(){
    modalRegister.style.display="none";
}

document.getElementById("close-modal-register").addEventListener("click", closeModalRegister);
