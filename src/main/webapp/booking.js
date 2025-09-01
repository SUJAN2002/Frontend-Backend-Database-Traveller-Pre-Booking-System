(function () {
  emailjs.init("vo-H1jO_zzRkW5OaQ"); // <- your EmailJS Public Key
})();

// Get vehicle name from URL
const params = new URLSearchParams(window.location.search);
const vehicle = params.get("vehicle") || "Vehicle Booking";

// On page load setup
window.onload = () => {
  document.getElementById("vehicleNameField").value = vehicle;
  document.getElementById("bookingForm").addEventListener("submit", handleBooking);
};

function handleBooking(e) {
  e.preventDefault();

  // Collect user input
  const name = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const pickup = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("location").value;
  const notes = document.getElementById("notes").value;

  // Basic validation
  if (!pickup || !returnDate) {
    alert("Please fill in pickup and return dates.");
    return;
  }

  // ---- CHECK IF VEHICLE ALREADY BOOKED FOR SAME DAY ----
  const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const overlap = existingBookings.find(
    (b) => b.vehicle === vehicle && b.pickup === pickup
  );

  if (overlap) {
    alert(
      `The ${vehicle} is already booked on ${pickup}. Please choose another date (e.g., tomorrow).`
    );
    return;
  }

  // Save booking locally (for demo purpose)
  existingBookings.push({ vehicle, pickup, returnDate });
  localStorage.setItem("bookings", JSON.stringify(existingBookings));

  // Build Email Message
  const message = `
Booking Confirmed
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Vehicle: ${vehicle}
Pickup: ${pickup}
Return: ${returnDate}
Address: ${address}
Notes: ${notes}
  `;

  document.getElementById("bookingMessage").value = message;

  // Show the correct loader (car or bike)
  const processingOverlay = document.getElementById("processingOverlay");
  const carLoader = document.getElementById("carLoader");
  const bikeLoader = document.getElementById("bikeLoader");
  carLoader.style.display = "none";
  bikeLoader.style.display = "none";

  const isBike = checkIfBike(vehicle.toLowerCase());
  if (isBike) {
    bikeLoader.style.display = "block";
  } else {
    carLoader.style.display = "block";
  }

  // Display loader
  processingOverlay.style.display = "flex";

  // Wait for animation, then send email
  setTimeout(() => {
    emailjs
      .sendForm(
        "service_2hfzvew", // Your service ID
        "template_ptpnijt", // Your template ID
        document.getElementById("bookingForm")
      )
      .then(() => {
        // Clear form and hide loader
        document.getElementById("bookingForm").reset();
        processingOverlay.style.display = "none";

        // Show success confirmation
        showConfirmationModal(name, vehicle, pickup, returnDate);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        processingOverlay.style.display = "none";
        alert("Booking confirmed, but email failed to send.");
      });
  }, 2500); // Loader animation delay
}

// Determine if the booked vehicle is a bike
function checkIfBike(text) {
  return (
    text.includes("bike") ||
    text.includes("splendor") ||
    text.includes("duke") ||
    text.includes("mt-15") ||
    text.includes("himalayan") ||
    text.includes("enfield") ||
    text.includes("z900") ||
    text.includes("r1m") ||
    text.includes("s1000rr")
  );
}

// Show booking confirmation modal
function showConfirmationModal(name, vehicle, pickup, returnDate) {
  const message = `Booking confirmed for ${vehicle} from ${pickup} to ${returnDate}, ${name}.`;
  document.getElementById("confirmationDetails").textContent = message;
  const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));
  modal.show();
}

// Redirect to vehicle page on modal close
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("modalCloseRedirect");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      window.location.href = "Vehicledetails.html";
    });
  }
});
