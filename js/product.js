// Product Data
const productDetails = {
    screed: {
      title: "Screed",
      description: "A smooth, level surface for tile and stone installation, enabling superior moisture resistance in areas like bathrooms and pools."
    },
    waterproofing: {
      title: "Waterproofing",
      description: "Prevents water damage in both internal and external areas, ensuring the durability of your structures."
    },
    "tile-adhesive": {
      title: "Tile Adhesive",
      description: "High bonding thin-set adhesive for durable tile installation in residential and commercial settings."
    },
    "stone-adhesive": {
      title: "Stone Adhesive",
      description: "Non-sag adhesive for heavy service loads, suitable for premium natural stones."
    },
    "tile-joint-grouts": {
      title: "Tile Joint (Grouts)",
      description: "Prevents stains, water seepage, and promotes durability in tile installations."
    },
    // Add additional product descriptions here
  };
  
  // Modal Functionality
  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModalBtn = document.querySelector(".close-btn");
  
  document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
      const productKey = button.closest(".product-card").dataset.product;
      const product = productDetails[productKey];
      modalTitle.textContent = product.title;
      modalDescription.textContent = product.description;
      modal.style.display = "flex";
    });
  });
  
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  