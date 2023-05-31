const galleryItems = [
  {
    id: 1,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/tibumana-waterfall-bali-island-indonesia_335224-356.jpg?size=626&ext=jpg&ga=GA1.2.2145288844.1685448878&semt=sph",
    alt: "Bali Waterfall",
    description: "This is a beautiful waterfall located in Bali, Indonesia.",
  },
  {
    id: 2,
    category: "animals",
    image:
      "https://img.freepik.com/premium-photo/portrait-beautiful-cute-orange-cat-photography_131346-3618.jpg?w=900",
    alt: "Cute Cat",
    description: "This is a cute orange cat posing for a photo.",
  },
  {
    id: 3,
    category: "cars",
    image:
      "https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?w=900&t=st=1685456403~exp=1685457003~hmac=d717abfdc27dbd21e905d3f3fc809ddc7bb070b4dd33e27403244e12a1f9ac7c",
    alt: "Blue Sedan",
    description: "This is cool blue sedan car.",
  },
  {
    id: 4,
    category: "nature",
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.2145288844.1685448878&semt=sph",
    alt: "Single Tree",
    description: "This is a beautiful Single Tree.",
  },
  {
    id: 5,
    category: "food",
    image:
      "https://img.freepik.com/free-photo/deep-fried-wonton-dark-surface_1150-43553.jpg?w=900&t=st=1685456076~exp=1685456676~hmac=2678bc1de33a261492a8902b332b22898e30c7865372a4419398baddc002f179",
    alt: "Fried Woonton",
    description: "This is a delicious plate of deep-fried wontons.",
  },
  {
    id: 6,
    category: "people",
    image:
      "https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377151.jpg?w=900&t=st=1685455844~exp=1685456444~hmac=d7a077985923df3551580a36fced5898b8983b5d5ffdd69027a5347c9b08f7bf",
    alt: "Working People",
    description:
      "This is a photo of people in an office analyzing and checking finance graphs.",
  },
  {
    id: 7,
    category: "sport",
    image:
      "https://img.freepik.com/free-photo/side-view-couple-training-outdoors_23-2150433254.jpg?w=900&t=st=1685455913~exp=1685456513~hmac=6f3d4fcf67670531b23ed11015f8ecf8e58b5519cccfd1d1f4d4f0a17a17ae3f",
    alt: "Couple Sport",
    description: "This is a photo of a couple training outdoors.",
  },
  {
    id: 8,
    category: "cars",
    image:
      "https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=900&t=st=1685456281~exp=1685456881~hmac=45970ad486098d0939aefe42a41bdd178ee814b5b91b30fa3cc8b9d4e990c7a2",
    alt: "Offroad Jeep",
    description: "This is a white offroad jeep parked in a scenic location.",
  },
  {
    id: 9,
    category: "food",
    image:
      "https://img.freepik.com/premium-photo/authentic-indonesian-shrimp-cuisine-is-very-delicious_11010-29.jpg?w=900",
    alt: "Fried Shrimp",
    description:
      "This is an authentic Indonesian shrimp cuisine that is very delicious.",
  },
  {
    id: 10,
    category: "cars",
    image:
      "https://img.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg?w=900&t=st=1685456624~exp=1685457224~hmac=6a283d36291326e5a444b04ed31d5ec317500cf6860c5840b636af30164e2f35",
    alt: "Red Sedan",
    description: "This is a red luxury sedan on the road.",
  },
  {
    id: 11,
    category: "sport",
    image:
      "https://img.freepik.com/premium-photo/young-people-runner-running-running-road-city-park_41380-393.jpg?w=900",
    alt: "Morning Runner",
    description:
      "This is a photo of a young runner running on a road in a city park.",
  },
  {
    id: 12,
    category: "animals",
    image:
      "https://img.freepik.com/premium-photo/portrait-golden-retriever-as-royal-pet_410516-39702.jpg?w=900",
    alt: "Golden Retriever",
    description: "This is a portrait of a golden retriever as a royal pet.",
  },
];

const galleryItemsContainer = document.getElementById("gallery-items");
const searchBox = document.getElementById("search-box");
const filterItems = document.querySelectorAll(".filter-item");

// Display all gallery items on page load
displayGalleryItems(galleryItems);

// Filter gallery items when a filter is clicked
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.getAttribute("data-filter");
    const filteredItems =
      category === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === category);
    displayGalleryItems(filteredItems);
    setActiveFilter(item);
  });
});

// Filter gallery items based on search input
searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.toLowerCase();
  const filteredItems = galleryItems.filter((item) =>
    item.alt.toLowerCase().includes(searchTerm)
  );
  displayGalleryItems(filteredItems);
});

// Display gallery items on the page
function displayGalleryItems(items) {
  galleryItemsContainer.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
      <div class="card">
        <img src="${item.image}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
          <h5 class="card-title text-center">${item.alt}</h5>
          <button type="button" class="btn btn-info btn-block view-details" data-id="${item.id}">View Details</button>
        </div>
      </div>
    `;
    galleryItemsContainer.appendChild(card);
  });

  // Add click event listener to the "View Details" buttons
  const viewDetailsButtons = document.querySelectorAll(".view-details");
  viewDetailsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.getAttribute("data-id");
      const selectedItem = galleryItems.find(
        (item) => item.id === parseInt(itemId)
      );
      if (selectedItem) {
        document.getElementById("modalImage").src = selectedItem.image;
        document.getElementById("modalImage").alt = selectedItem.alt;
        document.getElementById("modalDescription").textContent =
          selectedItem.description;
        $("#galleryModal").modal("show"); // Open the modal
      }
    });
  });
}

// Set active filter style
function setActiveFilter(item) {
  filterItems.forEach((filter) => filter.classList.remove("active"));
  item.classList.add("active");
}
