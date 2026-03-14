// Product Data
const categories = ["All", "Roses", "Tulips", "Sunflowers", "Mixed Bouquets", "Seasonal"];

const products = [
  {
    id: 1,
    name: "Classic Red Roses",
    description: "A timeless bouquet of 12 premium red roses",
    price: 49.99,
    category: "Roses",
    image: "https://imgs.search.brave.com/o_euphKraLdhp3q9SRtop7Jq4Guzx414OT-yVa9br54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy0zYnA1/dDQ2ei9pbWFnZXMv/c3RlbmNpbC82NDB4/NjQwL3Byb2R1Y3Rz/LzQ3Ny8xNzU3L2Ns/YXNzaWNfcmVkX3Jv/c2VfYm9xaWV0XzVf/Xzg3NzcyLjE2MjYw/ODk5ODAuanBnP2M9/Mg",
  },
  {
    id: 2,
    name: "Blush Pink Roses",
    description: "Delicate pink roses with eucalyptus accents",
    price: 54.99,
    category: "Roses",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "White Garden Roses",
    description: "Elegant white garden roses for any occasion",
    price: 59.99,
    category: "Roses",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Spring Tulip Bunch",
    description: "Bright and cheerful mixed color tulips",
    price: 34.99,
    category: "Tulips",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Purple Tulip Elegance",
    description: "Royal purple tulips wrapped in kraft paper",
    price: 39.99,
    category: "Tulips",
    image: "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    name: "Sunny Sunflower Bouquet",
    description: "Vibrant sunflowers to brighten your day",
    price: 44.99,
    category: "Sunflowers",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Sunflower & Daisy Mix",
    description: "Cheerful sunflowers paired with white daisies",
    price: 42.99,
    category: "Sunflowers",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Rustic Sunflower Wrap",
    description: "Sunflowers wrapped in burlap with twine",
    price: 38.99,
    category: "Sunflowers",
    image: "https://imgs.search.brave.com/92zSjBUHnaXsU3yJf9GIennAr1ohlEcuIMbnF36F7fo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxRVFYSG4rT2RM/LmpwZw",
  },
  {
    id: 9,
    name: "Garden Party Bouquet",
    description: "A lush mix of roses, lilies, and greenery",
    price: 64.99,
    category: "Mixed Bouquets",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&h=500&fit=crop",
  },
  {
    id: 10,
    name: "Wildflower Dream",
    description: "Free-spirited wildflowers in soft pastels",
    price: 46.99,
    category: "Mixed Bouquets",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&h=500&fit=crop",
  },
  {
    id: 11,
    name: "Countryside Mix",
    description: "Rustic charm with lavender and baby's breath",
    price: 52.99,
    category: "Mixed Bouquets",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&h=500&fit=crop",
  },
  {
    id: 12,
    name: "Winter Wonderland",
    description: "White roses, pine, and silver accents",
    price: 69.99,
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=500&h=500&fit=crop",
  },
  {
    id: 13,
    name: "Autumn Harvest",
    description: "Warm oranges, deep reds, and golden hues",
    price: 56.99,
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500&h=500&fit=crop",
  },
  {
    id: 14,
    name: "Summer Breeze",
    description: "Light and airy arrangement with peonies",
    price: 62.99,
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=500&h=500&fit=crop",
  },
  {
    id: 15,
    name: "Valentine's Special",
    description: "Luxurious red roses with chocolates",
    price: 79.99,
    category: "Seasonal",
    image: "https://imgs.search.brave.com/UJR6glj3EM7urfk_-m9442GIQrb6Ku8kLsX1LGUHewQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEwLzNk/Lzc5LzEwM2Q3OWE3/MzFiZTI3ZmZlODE3/MjZmMmRhNmYxMWQy/LmpwZw",
  },
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let mobileMenuOpen = false;

// Initialize Default User if none exists
if (users.length === 0) {
  users.push({ email: 'nittin@gmail.com', password: '2005' });
  localStorage.setItem('users', JSON.stringify(users));
}

// Utility to Update Auth UI
function updateAuthUI() {
  const desktopAuth = document.getElementById('nav-auth-desktop');
  const mobileAuth = document.getElementById('nav-auth-mobile');
  
  if (currentUser) {
    if (desktopAuth) {
      desktopAuth.textContent = 'Dashboard';
      desktopAuth.onclick = (e) => { e.preventDefault(); navigate('#/dashboard'); };
    }
    if (mobileAuth) {
      mobileAuth.textContent = 'Dashboard';
      mobileAuth.onclick = (e) => { e.preventDefault(); navigate('#/dashboard'); };
    }
  } else {
    if (desktopAuth) {
      desktopAuth.textContent = 'Login';
      desktopAuth.onclick = (e) => { e.preventDefault(); navigate('#/login'); };
    }
    if (mobileAuth) {
      mobileAuth.textContent = 'Login';
      mobileAuth.onclick = (e) => { e.preventDefault(); navigate('#/login'); };
    }
  }
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 bg-foreground text-background px-6 py-3 rounded-lg shadow-2xl z-50 fade-in flex items-center gap-3';
  toast.innerHTML = `<i data-lucide="check-circle" class="h-5 w-5 text-primary"></i> <span class="font-medium">${message}</span>`;
  document.body.appendChild(toast);
  lucide.createIcons();
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease-in-out';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderPage();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      renderPage();
    }
  }
}

// Router and Rendering
function navigate(path) {
  window.location.hash = path;
  mobileMenuOpen = false;
  renderPage();
}

function checkAuthGuard(hash) {
  // Protect all routes except login and register
  const publicRoutes = ['#/login', '#/register'];
  if (!currentUser && !publicRoutes.includes(hash)) {
    return '#/login';
  }
  // Prevent logged in user from going to login/register
  if (currentUser && publicRoutes.includes(hash)) {
    return '#/';
  }
  return hash;
}

function renderPage() {
  let hash = window.location.hash || '#/';
  hash = checkAuthGuard(hash);
  
  // Ensure hash reflects the guarded route in the URL bar
  if (window.location.hash !== hash && hash === '#/login' && !currentUser) {
     window.location.hash = hash;
     return; // Hashchange event will re-trigger renderPage
  }
  if (window.location.hash !== hash && hash === '#/' && currentUser) {
     window.location.hash = hash;
     return;
  }

  const app = document.getElementById('app');
  const mobileMenu = document.getElementById('mobile-menu');

  // Close mobile menu on navigate
  if (mobileMenu) mobileMenu.classList.add('hidden');
  
  // Update Auth header states
  updateAuthUI();

  if (hash === '#/') renderHome(app);
  else if (hash === '#/shop') renderShop(app);
  else if (hash === '#/about') renderAbout(app);
  else if (hash === '#/login') renderLogin(app);
  else if (hash === '#/register') renderRegister(app);
  else if (hash === '#/dashboard') renderDashboard(app);
  else if (hash === '#/cart') renderCart(app);
  else renderNotFound(app);

  window.scrollTo(0, 0);
}

function renderHome(container) {
  const featured = products.slice(0, 8);
  container.innerHTML = `
    <div class="fade-in">
      <section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1600&h=900&fit=crop')"></div>
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <h1 class="mb-4 text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-7xl">
            Fresh Flowers, <br><em>Delivered with Love</em>
          </h1>
          <p class="mb-8 text-lg text-white/90 drop-shadow">
            Hand-crafted bouquets for every occasion. From garden-fresh roses to seasonal arrangements.
          </p>
          <button onclick="navigate('#/shop')" class="rounded-lg bg-secondary px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-secondary/90 transition-colors">
            Shop Collection
          </button>
        </div>
      </section>

      <section class="container mx-auto px-4 py-16">
        <h2 class="mb-2 text-center text-3xl font-bold md:text-4xl">Featured Bouquets</h2>
        <p class="mb-10 text-center text-muted-foreground">Our most loved arrangements, handpicked for you</p>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${featured.map(p => renderProductCard(p)).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderProductCard(p) {
  return `
    <div class="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl flex flex-col h-full">
      <div class="relative aspect-square overflow-hidden bg-muted">
        <img src="${p.image}" alt="${p.name}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <div class="mb-1 text-xs font-medium text-primary uppercase tracking-wider">${p.category}</div>
        <h3 class="mb-1 text-lg font-semibold line-clamp-1">${p.name}</h3>
        <p class="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">${p.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <div class="text-xl font-bold text-foreground">$${p.price.toFixed(2)}</div>
          <button onclick="addToCart(${p.id})" class="rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2">
            <i data-lucide="plus" class="h-4 w-4"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderShop(container) {
  let currentCategory = 'All';

  function updateShopUI() {
    const filtered = currentCategory === 'All' ? products : products.filter(p => p.category === currentCategory);
    container.innerHTML = `
            <div class="fade-in container mx-auto px-4 py-8">
                <h1 class="text-4xl font-bold text-center mb-8">Our Collection</h1>
                
                <div class="flex flex-wrap justify-center gap-2 mb-12">
                    ${categories.map(cat => `
                        <button onclick="window.setCategory('${cat}')" class="px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentCategory === cat ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-muted/80'}">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    ${filtered.map(p => renderProductCard(p)).join('')}
                </div>
            </div>
        `;
  }

  window.setCategory = (cat) => {
    currentCategory = cat;
    updateShopUI();
  };

  updateShopUI();
}

function renderCart(container) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="fade-in container mx-auto px-4 py-32 text-center">
        <h2 class="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p class="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button onclick="navigate('#/shop')" class="rounded-lg bg-primary px-8 py-3 text-white hover:bg-primary/90 transition-colors">
          Browse Flowers
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold mb-10">Shopping Cart</h1>
      <div class="grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-6">
          ${cart.map(item => `
            <div class="flex items-center gap-4 p-4 border rounded-xl bg-card">
              <img src="${item.image}" alt="${item.name}" class="h-24 w-24 rounded-lg object-cover">
              <div class="flex-grow">
                <h3 class="font-bold text-lg">${item.name}</h3>
                <p class="text-muted-foreground text-sm">$${item.price.toFixed(2)}</p>
                <div class="flex items-center gap-3 mt-2">
                  <button onclick="updateQuantity(${item.id}, -1)" class="h-8 w-8 rounded border flex items-center justify-center hover:bg-muted">-</button>
                  <span class="font-medium">${item.quantity}</span>
                  <button onclick="updateQuantity(${item.id}, 1)" class="h-8 w-8 rounded border flex items-center justify-center hover:bg-muted">+</button>
                </div>
              </div>
              <div class="text-right">
                <p class="font-bold text-lg">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" class="text-destructive text-sm font-medium hover:underline mt-2">Remove</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="p-6 border rounded-xl bg-muted/30 h-fit">
          <h2 class="text-xl font-bold mb-6">Order Summary</h2>
          <div class="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span>Shipping</span>
            <span class="text-green-600 font-medium">Free</span>
          </div>
            <div class="border-t pt-4 mt-4">
            <div class="flex justify-between mb-6">
              <span class="text-xl font-bold">Total</span>
              <span class="text-xl font-bold">$${subtotal.toFixed(2)}</span>
            </div>
            <button onclick="checkout()" class="w-full rounded-lg bg-primary py-4 text-white font-bold hover:bg-primary/90 transition-colors shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Checkout Logic
window.checkout = function() {
  if (cart.length === 0) return;
  
  if (!currentUser) {
    alert("Please log in to proceed to checkout.");
    navigate('#/login');
    return;
  }

  const order = {
    id: Date.now(),
    userEmail: currentUser.email,
    date: new Date().toISOString(),
    items: [...cart],
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  // Clear cart
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  alert("Product Booked Successfully!");
  navigate('#/dashboard');
};

function renderAbout(container) {
  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-16 max-w-4xl">
      <h1 class="text-5xl font-bold text-center mb-12">Our Story</h1>
      <div class="space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p>Founded with a passion for nature's most beautiful creations, Petal & Bloom has been serving our community with hand-crafted floral arrangements since 2010.</p>
        <div class="grid md:grid-cols-2 gap-8 py-8 items-center">
          <img src="https://imgs.search.brave.com/2Pz55gW938SEJRHzGSwoHaw84ZZ9Cl0--uIn-yDfIjg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjE4/ODM3MTA2L3Bob3Rv/L2dhcmRlbmVyLXdp/dGgtZGlnaXRhbC10/YWJsZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5jb1JN/OTh1cm8yRkhMZ1U2/bzRsdWt6UUxNOEZp/VmZFWWliQjlUaWp5/c1E9" class="rounded-2xl shadow-xl" alt="Flower shop">
          <div>
            <h2 class="text-3xl font-bold text-foreground mb-4">Freshness Guaranteed</h2>
            <p>We source our flowers daily from local growers and international markets to ensure that every bouquet arrives at your door in peak condition.</p>
          </div>
        </div>
        <p>Our team of expert florists brings decades of experience to every arrangement. Whether you're celebrating a birthday, an anniversary, or just want to brighten someone's day, we have the perfect bouquet for you.</p>
      </div>
    </div>
  `;
}

function renderLogin(container) {
  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-20 flex justify-center">
      <div class="w-full max-w-md p-8 border rounded-2xl bg-card shadow-2xl">
        <h1 class="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        <form id="login-form" class="space-y-6">
          <div class="space-y-2">
            <label class="text-sm font-medium">Email Address</label>
            <input type="email" id="login-email" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="name@example.com">
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Password</label>
            <input type="password" id="login-password" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="••••••••">
          </div>
          <button type="submit" class="w-full rounded-lg bg-primary py-3 text-white font-bold hover:bg-primary/90 transition-colors shadow-lg">
            Sign In
          </button>
        </form>
        <p class="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account? <a href="#" onclick="navigate('#/register'); return false;" class="text-primary font-bold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  `;

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      navigate('#/');
    } else {
      alert("Invalid email or password");
    }
  });
}

function renderRegister(container) {
  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-20 flex justify-center">
      <div class="w-full max-w-md p-8 border rounded-2xl bg-card shadow-2xl">
        <h1 class="text-3xl font-bold text-center mb-8">Create Account</h1>
        <form id="register-form" class="space-y-6">
          <div class="space-y-2">
            <label class="text-sm font-medium">Email Address</label>
            <input type="email" id="reg-email" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="name@example.com">
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Password</label>
            <input type="password" id="reg-password" required minlength="4" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="••••••••">
          </div>
          <button type="submit" class="w-full rounded-lg bg-primary py-3 text-white font-bold hover:bg-primary/90 transition-colors shadow-lg">
            Register
          </button>
        </form>
        <p class="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <a href="#" onclick="navigate('#/login'); return false;" class="text-primary font-bold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  `;

  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert("Email is already registered. Please login.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate('#/login');
  });
}

function renderDashboard(container) {
  if (!currentUser) {
     navigate('#/login');
     return;
  }

  const userOrders = orders.filter(o => o.userEmail === currentUser.email).reverse();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-16">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
         <h1 class="text-4xl font-bold">My Dashboard</h1>
         <button onclick="logout()" class="px-6 py-2 rounded-lg bg-destructive text-white font-medium hover:bg-destructive/90 transition-colors">
            Logout
         </button>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="p-6 border rounded-xl bg-card shadow-sm flex items-center gap-4">
           <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <i data-lucide="user" class="h-6 w-6"></i>
           </div>
           <div>
             <p class="text-sm text-muted-foreground">Logged in as</p>
             <p class="text-lg font-bold">${currentUser.email}</p>
           </div>
        </div>
        <div class="p-6 border rounded-xl bg-card shadow-sm flex items-center gap-4">
           <div class="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <i data-lucide="shopping-bag" class="h-6 w-6"></i>
           </div>
           <div>
             <p class="text-sm text-muted-foreground">Items in Cart</p>
             <p class="text-lg font-bold">${cartItemCount}</p>
           </div>
        </div>
      </div>

      <div class="border rounded-xl bg-card shadow-sm overflow-hidden">
        <div class="p-6 border-b border-border bg-muted/20">
          <h2 class="text-2xl font-bold text-foreground">Recently Booked Products</h2>
        </div>
        <div class="p-6">
          ${userOrders.length === 0 ? 
            `<p class="text-muted-foreground text-center py-8">You haven't booked any products yet.</p>` : 
            `<div class="space-y-6">
              ${userOrders.map(order => `
                 <div class="border rounded-lg p-4 bg-muted/5">
                    <div class="flex justify-between items-center mb-4 pb-4 border-b">
                       <p class="text-sm text-muted-foreground">Order #${order.id}</p>
                       <p class="text-sm font-medium">${new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div class="space-y-3">
                      ${order.items.map(item => `
                         <div class="flex items-center gap-4">
                            <img src="${item.image}" alt="${item.name}" class="h-12 w-12 rounded object-cover border">
                            <div class="flex-grow">
                               <p class="font-medium text-sm">${item.name}</p>
                               <p class="text-xs text-muted-foreground">Qty: ${item.quantity}</p>
                            </div>
                            <p class="font-medium text-sm">$${(item.price * item.quantity).toFixed(2)}</p>
                         </div>
                      `).join('')}
                    </div>
                    <div class="mt-4 pt-4 border-t text-right">
                       <p class="text-sm text-muted-foreground">Order Total: <span class="text-lg font-bold text-foreground ml-2">$${order.total.toFixed(2)}</span></p>
                    </div>
                 </div>
              `).join('')}
             </div>`
          }
        </div>
      </div>
    </div>
  `;
}

window.logout = function() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  navigate('#/login');
};

function renderNotFound(container) {
  container.innerHTML = `
    <div class="fade-in container mx-auto px-4 py-32 text-center">
      <h1 class="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 class="text-3xl font-bold mb-8">Oops! Page not found</h2>
      <button onclick="navigate('#/')" class="rounded-lg bg-primary px-8 py-3 text-white hover:bg-primary/90 transition-colors">
        Return Home
      </button>
    </div>
  `;
}

// Initial Init
window.addEventListener('hashchange', renderPage);
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  updateCartCount();
});

// Mobile Menu Toggle
window.toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
};
