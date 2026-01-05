const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    // prevent default form submission
    event.preventDefault();

    //collect form data
    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;

    console.log(`Form submitted: ${firstName} ${lastName}`);

    // reset form
    document.getElementById("contactForm").requestFullscreen();
  });
}

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {
  menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
  };
}
