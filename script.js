console.log("hello!");

// Define all the variables===========================

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");


// Use classList to remove the hidden class, so we are OPENING THE MODAL!!!

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

//   This eventListener runs the openModal function when the button is clicked!

  openModalBtn.addEventListener("click", openModal);

  //use classList to .add the "hidden" class name back to the X button

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };


//This eventListener runs the closeModalfunction when the X button is clicked
  closeModalBtn.addEventListener("click", closeModal);


  //This eventListener runs the closeModal function when the overlay is clicked
  overlay.addEventListener("click", closeModal);