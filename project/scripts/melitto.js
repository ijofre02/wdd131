const CONTACT_KEY = "melitto-contact";
const FABRIC_KEY = "melitto-fabric-filter";

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const currentYearEl = document.querySelector("#currentYear");
const lastModifiedEl = document.querySelector("#lastModified");

/* ===== Footer ===== */
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
} /* El if es seguridad para no romper nada en caso que no se cargue */

if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

/* ===== Menu ===== */
function setMenu(isOpen) {
  navigation.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", `${isOpen}`);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

/* ===== Data ===== */
const products = [
  {
    name: "Stretchy fabric dress",
    category: "clothing",
    image: "stretchy-fabric-dress.webp",
    alt: "A handmade dress sewn from stretchy fabric",
    description: "A comfortable dress with plenty of stretch, sewn to your measurements."
  },
  {
    name: "Metano toy",
    category: "toys",
    image: "metano-toy.webp",
    alt: "A handmade plush toy",
    description: "A soft handmade toy, stuffed and stitched with care."
  },
  {
    name: "Dinosaur tail",
    category: "toys",
    image: "dinosaur-tail.webp",
    alt: "A handmade dinosaur tail for costumes",
    description: "A cosplay tail that is light enough to wear all day."
  },
  {
    name: "Kitchen kit",
    category: "accessories",
    image: "kitchenkit.webp",
    alt: "A handmade kitchen set",
    description: "A matching kitchen set for everyday cooking."
  },
  {
    name: "Kitchen apron",
    category: "accessories",
    image: "kitchen-apron.webp",
    alt: "A handmade kitchen apron",
    description: "An apron cut to protect your clothes while you cook."
  },
  {
    name: "Mate kit",
    category: "accessories",
    image: "matekit.webp",
    alt: "A handmade mate kit",
    description: "A set to carry everything you need for mate."
  },
  {
    name: "Mate cushion",
    category: "accessories",
    image: "mate-cushion.webp",
    alt: "A handmade cushion for mate",
    description: "A cushion made to keep your mate setup steady."
  },
  {
    name: "Yerba mate bag",
    category: "accessories",
    image: "yerba-mate-bag.webp",
    alt: "A handmade yerba mate bag",
    description: "A fabric bag to store and carry your yerba."
  },
  {
    name: "Pencil case",
    category: "accessories",
    image: "pencil-case.webp",
    alt: "A handmade pencil case",
    description: "A roomy pencil case for pens, pencils and small tools."
  },
  {
    name: "Chilean flag",
    category: "custom",
    image: "chile-flag.webp",
    alt: "A handmade Chilean flag",
    description: "A hand-sewn Chilean flag, made as a custom piece."
  },
  {
    name: "Chilean flag, second design",
    category: "custom",
    image: "chile-flag-two.webp",
    alt: "A second handmade Chilean flag design",
    description: "Another take on the Chilean flag, also made to order."
  }
];

const fabrics = [
  {
    name: "Colorful fabric",
    knit: false,
    image: "colorful-fabric.webp",
    alt: "A colorful patterned fabric",
    use: "Bags, cushions and aprons."
  },
  {
    name: "Marble fabric",
    knit: true,
    image: "marble-fabric.webp",
    alt: "A fabric with a marble pattern",
    use: "Dresses and fitted pieces."
  },
  {
    name: "Rainbow fabric",
    knit: true,
    image: "rainbow-fabric.webp",
    alt: "A rainbow-colored fabric",
    use: "Toys and costume accessories."
  },
  {
    name: "Heart fabric",
    knit: false,
    image: "heart-fabric.webp",
    alt: "A fabric printed with hearts",
    use: "Pencil cases and small accessories."
  }
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "clothing", label: "Clothing" },
  { key: "toys", label: "Toys" },
  { key: "accessories", label: "Accessories" },
  { key: "custom", label: "Custom" }
];

let currentFilter = "all";

/* ===== Gallery ===== */
function countProducts(key) {
  if (key === "all") {
    return products.length;
  }
  return products.filter((product) => product.category === key).length;
}

function renderFilters(filterBar) {
  filterBar.innerHTML = CATEGORIES.map((category) => `
    <button type="button" class="filter" data-filter="${category.key}" aria-pressed="${category.key === currentFilter}">
      ${category.label} (${countProducts(category.key)})
    </button>`).join("");
}

function getVisibleProducts(sortValue) {
  const direction = sortValue === "za" ? -1 : 1;

  return products
    .filter((product) => {
      if (currentFilter === "all") {
        return true;
      }
      return product.category === currentFilter;
    })
    
    .sort((a, b) => a.name.localeCompare(b.name) * direction);
}

function productCard(product) {
  return `
    <li class="product-card">
      <img src="images/${product.image}" alt="${product.alt}" width="360" height="480" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </li>`;
}

function renderProducts(productList, sortValue) {
  const visible = getVisibleProducts(sortValue);

  productList.innerHTML = visible.length
    ? visible.map((product) => productCard(product)).join("")
    : `<li class="empty">No pieces found in this category.</li>`;
}

function initGallery(productList) {
  const filterBar = document.querySelector("#filters");
  const sortSelect = document.querySelector("#sort");

  /* melitto-gallery.html#toys opens the gallery already filtered */
  const hashFilter = window.location.hash.slice(1);
  if (CATEGORIES.some((category) => category.key === hashFilter)) {
    currentFilter = hashFilter;
  }

  /* Redraws the filter buttons and the product cards */
  const refresh = () => {
    renderFilters(filterBar);
    renderProducts(productList, sortSelect.value);
  };

  /* One listener on the container instead of one per button */
  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
      currentFilter = button.dataset.filter;
      refresh();
    }
  });

  sortSelect.addEventListener("change", refresh);
  refresh();
}

/* ===== Workshop ===== */
function renderFabrics(fabricList, choice) {
  const shown = fabrics.filter((fabric) => {
    if (choice === "all") {
      return true;
    }
    if (choice === "knit") {
      return fabric.knit;
    }
    return !fabric.knit;
  });

  fabricList.innerHTML = shown.map((fabric) => `
    <li class="product-card">
      <img src="images/${fabric.image}" alt="${fabric.alt}" width="360" height="480" loading="lazy">
      <h3>${fabric.name}</h3>
      <p>${fabric.knit ? "Knit fabric" : "Woven fabric"}. Best for: ${fabric.use}</p>
    </li>`).join("");
}

function initWorkshop(fabricList) {
  const fabricFilter = document.querySelector("#fabric-filter");
  const saved = localStorage.getItem(FABRIC_KEY);

  if (saved) {
    fabricFilter.value = saved;
  }

  fabricFilter.addEventListener("change", () => {
    localStorage.setItem(FABRIC_KEY, fabricFilter.value);
    renderFabrics(fabricList, fabricFilter.value);
  });

  renderFabrics(fabricList, fabricFilter.value);
}

/* ===== Contact ===== */
function initContact(contactForm) {
  const saved = JSON.parse(localStorage.getItem(CONTACT_KEY)) || {};
  const nameInput = document.querySelector("#fullName");
  const emailInput = document.querySelector("#email");
  const remember = document.querySelector("#remember");

  nameInput.value = saved.fullName || "";
  emailInput.value = saved.email || "";

  if (saved.fullName) {
    remember.checked = true;
  }

  contactForm.addEventListener("submit", () => {
    if (remember.checked) {
      localStorage.setItem(CONTACT_KEY, JSON.stringify({ fullName: nameInput.value, email: emailInput.value }));
    } else {
      localStorage.removeItem(CONTACT_KEY);
    }
  });
}

/* Fill  dinamicli the options */
function fillPieceOptions(pieceSelect) {
  const options = products
    .map((product) => `<option value="${product.name}">${product.name}</option>`)
    .join("");

  pieceSelect.innerHTML = `
    <option value="" disabled selected>Select a piece ...</option>
    ${options}
    <option value="Something else">Something else</option>`;
}


/* ===== Page setup: each block runs only on its own page ===== */
const productListEl = document.querySelector("#product-list");
const fabricListEl = document.querySelector("#fabric-list");
const contactFormEl = document.querySelector("#contact-form");
const pieceSelectEl = document.querySelector("#piece");

if (productListEl) {
  initGallery(productListEl);
}

if (fabricListEl) {
  initWorkshop(fabricListEl);
}

if (contactFormEl) {
  initContact(contactFormEl);
}

if (pieceSelectEl) {
  fillPieceOptions(pieceSelectEl);
}