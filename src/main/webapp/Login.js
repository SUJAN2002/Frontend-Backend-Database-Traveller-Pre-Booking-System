
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});


function redirectToVehicledetails(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value.trim();

  if (email !== "" && password !== "") {
    window.location.href = "Vehicledetails.html";
  } else {
    alert("Please enter both email and password.");
  }
}


(function () {
  emailjs.init("5xRRau-0u9RrlgY4K"); 
})();


function handleSignin(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const password = form.querySelector('input[placeholder="Password"]').value.trim();

  if (name && email && password) {
    
    emailjs.sendForm("service_tu4xtxe", "template_6yh6g2j", form)
      .then(() => {
        alert("🎉 Account created sucessfully!");
        container.classList.remove("active");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Account created, but email failed to send.");
        container.classList.remove("active");
        form.reset();
      });
  } else {
    alert("Please fill in all fields.");
  }
}