// Select the 'h1, h2' element
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

// Select the element with class 'container'
let container = document.querySelector('.container');

// Toggle the 'newyear' class on the 'container' element 
// and the 'active' class on the 'h2' element when 'h2' is clicked
h2.onclick = function () {
    // Toggle the 'active' class on h1
    h1.classList.toggle('active');

    // Toggle between "Welcome" and "Bye Bye"
    if (h1.classList.contains('active')) {
        h1.innerHTML = "❈ Welcome ❈";
    } else {
        h1.innerHTML = "❀ Bye Bye ❀";
    }

    // Toggle the 'newyear' class on the container
    container.classList.toggle('newyear');

    // Toggle the 'active' class on h2 (the element clicked)
    this.classList.toggle('active');
};



// Get references to modal, open link, and close button
const modal = document.getElementById('modal');
const openModal = document.querySelector('.modelOpen');
const closeModal = document.querySelector('.close');

// Open the modal with fade-in effect
openModal.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    modal.classList.add('show'); // Add 'show' class to fade in
});

// Close the modal when the 'X' button is clicked
closeModal.addEventListener('click', function () {
    modal.classList.remove('show'); // Remove 'show' class to hide
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
