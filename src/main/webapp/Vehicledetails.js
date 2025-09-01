const vehicles = [
    {
    name: "Maruti Suzuki S-Presso",
    type: "Car",
    fuel: "Diesel",
    seats: 4,
    price: 3000,
    rating: 4,
    image1: "vehicles/car/Maruti Suzuki S-Presso/WhatsApp Image 2025-07-07 at 10.40.21_df600c5b.jpg",
    image2: "vehicles/car/Maruti Suzuki S-Presso/WhatsApp Image 2025-07-07 at 10.40.21_6952e0c0.jpg",
    image3: "vehicles/car/Maruti Suzuki S-Presso/WhatsApp Image 2025-07-07 at 10.40.19_ab18afc3.jpg",
    image4:"vehicles/car/Maruti Suzuki S-Presso/WhatsApp Image 2025-07-07 at 10.40.20_62aae512.jpg"
    },
  {
    name: "Aulto 800",
    type: "Car",
    fuel: "Petrol",
    seats: 4,
    price: 3500,
    rating: 4.3,
    image1: "vehicles/car/Aulto 800/ChatGPT Image Jul 7, 2025, 11_06_04 AM.png",
    image2: "vehicles/car/Aulto 800/WhatsApp Image 2025-07-07 at 10.41.25_80493dfd.jpg",
    image3: "vehicles/car/Aulto 800/WhatsApp Image 2025-07-07 at 10.41.24_d553f7d5.jpg",
    image4: "vehicles/car/Aulto 800/WhatsApp Image 2025-07-07 at 10.41.24_0618a35b.jpg"
  },
  
  {
    name: "Swift Dzire",
    type: "Car",
    fuel: "Petrol",
    seats: 4,
    price: 4000,
    rating: 4.5,
    image1: "vehicles/car/swift/ChatGPT Image Jul 5, 2025, 11_25_43 PM.png",
    image2: "vehicles/car/swift/ChatGPT Image Jul 5, 2025, 11_29_41 PM.png",
    image3: "vehicles/car/swift/ChatGPT Image Jul 5, 2025, 11_33_02 PM.png",
    image4: "vehicles/car/swift/ChatGPT Image Jul 5, 2025, 11_37_24 PM.png"
  },
  {
    name: "Baleno",
    type: "Car",
    fuel: "Petrol",
    seats: 5,
    price: 4000,
    rating: 4.5,
    image1: "vehicles/car/Baleno/front.jpeg",
    image2: "vehicles/car/Baleno/back.jpeg",
    image3: "vehicles/car/Baleno/front seat.jpeg",
    image4: "vehicles/car/Baleno/backseat.jpg"
  },
  {
    name: "Hyundai Exter",
    type: "Car",
    fuel: "Petrol",
    seats: 5,
    price: 4300,
    rating: 4.7,
    image1:"vehicles/car/hyundai exter/ChatGPT Image Jul 7, 2025, 11_51_37 AM.png",
    image2: "vehicles/car/hyundai exter/WhatsApp Image 2025-07-07 at 10.40.16_8afce869.jpg",
    image3: "vehicles/car/hyundai exter/WhatsApp Image 2025-07-07 at 10.40.18_8ffa0d30.jpg",
    image4: "vehicles/car/hyundai exter/WhatsApp Image 2025-07-07 at 10.40.17_77534cc2.jpg"
  },
  {
    name: "Thar",
    type: "Car",
    fuel: "Petrol",
    seats: 5,
    price: 4500,
    rating: 4.8,
    image1:"vehicles/car/Thar/front.jpg",
    image2: "vehicles/car/Thar/back.jpg",
    image3: "vehicles/car/Thar/left.jpg",
    image4: "vehicles/car/Thar/front.jpg"
  },
  {
    name: "BMW",
    type: "Car",
    fuel: "Petrol",
    seats: 5,
    price: 5000,
    rating: 5,
    image1:"vehicles/car/bmw/1.jpg",
    image2: "vehicles/car/bmw/2.jpg",
    image3: "vehicles/car/bmw/4.jpg",
    image4: "vehicles/car/bmw/3.jpg"
  },
  {
    name: "Splendor",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 500,
    rating: 4,
    image1: "vehicles/bike/splendor/ChatGPT Image Jul 7, 2025, 12_12_38 PM.png",
    image2: "vehicles/bike/splendor/ChatGPT Image Jul 7, 2025, 12_27_41 PM.png",
    image3: "vehicles/bike/splendor/ChatGPT Image Jul 7, 2025, 12_12_38 PM.png",
    image4: "vehicles/bike/splendor/ChatGPT Image Jul 7, 2025, 12_27_41 PM.png"
    },
  {
    name: "MT-15",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 1000,
    rating: 4.3,
    image1: "vehicles/bike/mt15/ChatGPT Image Jul 7, 2025, 12_33_23 PM.png",
    image2: "vehicles/bike/mt15/ChatGPT Image Jul 7, 2025, 12_38_25 PM.png",
    image3: "vehicles/bike/mt15/ChatGPT Image Jul 7, 2025, 12_33_23 PM.png",
    image4: "vehicles/bike/mt15/ChatGPT Image Jul 7, 2025, 12_38_25 PM.png"
    
  },
  
  {
    name: "Duke 390",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 1500,
    rating: 4.5,
    image1: "vehicles/bike/duke/Duke 1.jpg",
    image2: "vehicles/bike/duke/Duke 2.jpg",
    image3: "vehicles/bike/duke/Duke 1.jpg",
    image4: "vehicles/bike/duke/Duke 2.jpg"
  },
  {
    name: "Himlayan",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 2000,
    rating: 4.7,
    image1:"vehicles/bike/himalayan/Himalayan1.jpg",
    image2: "vehicles/bike/himalayan/Himalayan2.jpg",
    image3:"vehicles/bike/himalayan/Himalayan1.jpg",
    image4: "vehicles/bike/himalayan/Himalayan2.jpg"
  },
  {
    name: "Royal Enfield Classic",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 2500,
    rating: 4.8,
    image1: "vehicles/bike/royal/Royal1.jpg",
    image2: "vehicles/bike/royal/Royal2.jpg",
    image3: "vehicles/bike/royal/Royal1.jpg",
    image4: "vehicles/bike/royal/Royal2.jpg"
  },
  {
    name: "Z900",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 3000,
    rating: 4.9,
    image1: "vehicles/bike/Z900/z9001.jpg",
    image2: "vehicles/bike/Z900/back.jpg",
    image3: "vehicles/bike/Z900/z9001.jpg",
    image4: "vehicles/bike/Z900/back.jpg",
  },
  {
    name: "R1M",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 4000,
    rating: 4.8,
     image1: "vehicles/bike/R1m/r1m1.jpg",
    image2: "vehicles/bike/R1m/r1m2.jpg",
    image3: "vehicles/bike/R1m/r1m1.jpg",
    image4: "vehicles/bike/R1m/r1m2.jpg"
  },
  {
    name: "S1000RR",
    type: "Bike",
    fuel: "Petrol",
    seats: 2,
    price: 5000,
    rating: 4.8,
     image1: "vehicles/bike/S1000RR/1.jpg",
    image2: "vehicles/bike/S1000RR/2.jpg",
    image3: "vehicles/bike/S1000RR/1.jpg",
    image4: "vehicles/bike/S1000RR/2.jpg"
  }
  
  
];

window.onload = function () {
  renderVehicles();
  document.getElementById("typeSelect").addEventListener("change", updateFilters);
  document.getElementById("priceRange").addEventListener("input", updateFilters);
  document.getElementById("searchInput").addEventListener("input", updateFilters);
  document.getElementById("bookingDate").addEventListener("change", updateFilters);
  document.getElementById("fuelSelect").addEventListener("change", updateFilters);
  document.getElementById("seatSelect").addEventListener("change", updateFilters);
  document.getElementById("ratingSelect").addEventListener("change", updateFilters);
};

function updateFilters() {
  const selectedType = document.getElementById("typeSelect").value;
  const selectedFuel = document.getElementById("fuelSelect").value;
  const selectedSeats = document.getElementById("seatSelect").value;
  const selectedRating = document.getElementById("ratingSelect").value;
  const price = document.getElementById("priceRange").value;
  const query = document.getElementById("searchInput").value.toLowerCase();

  document.getElementById("priceValue").innerText = "₹" + price;

  const filtered = vehicles.filter(v =>
    v.price <= price &&
    (v.name.toLowerCase().includes(query) || v.type.toLowerCase().includes(query))&&
    (selectedType === "" || v.type === selectedType) &&
    (selectedFuel === "" || v.fuel.toLowerCase() === selectedFuel.toLowerCase()) &&
    (selectedSeats === "" || v.seats === parseInt(selectedSeats)) &&
    (selectedRating === "" || v.rating >= parseFloat(selectedRating))
  );

  console.log(filtered);
  renderVehicles(filtered);
}

function renderVehicles(list = vehicles) {
  const container = document.getElementById("vehicleContainer");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<div class='text-danger'>No vehicles found for selected filters.</div>";
    return;
  }

  list.forEach((v, index) => {
    const html = `
      <div class="col-md-4">
        <div class="card vehicle-card shadow mb-4">

          <!-- Carousel -->
          <div id="carousel-${index}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${v.image1}" class="d-block w-100" alt="${v.name} 1">
              </div>
              <div class="carousel-item">
                <img src="${v.image2}" class="d-block w-100" alt="${v.name} 2">
              </div>
              <div class="carousel-item">
                <img src="${v.image3}" class="d-block w-100" alt="${v.name} 3">
              </div>
              <div class="carousel-item">
                <img src="${v.image4}" class="d-block w-100" alt="${v.name} 4">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <h5 class="card-title" style="color: orange;">${v.name}</h5>
            <p class="card-text">${v.type} • ${v.fuel} • ${v.seats} Seats</p>
            <p><strong>₹${v.price}/day</strong> • ⭐ ${v.rating}</p>
<a href="booking.html?vehicle=${encodeURIComponent(v.name)}"class="gradient-button">Book Now</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}