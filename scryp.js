document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. BASE DE DATOS DE 40 PRODUCTOS ---
    const products = [
        // GRADUADOS (10)
        { id: 1, name: "Clásico Executive Black", cat: "graduados", price: 1199, desc: "Acetato negro con antirreflejante.", icon: "fa-glasses" },
        { id: 2, name: "Retro Round Carey", cat: "graduados", price: 1299, desc: "Estilo intelectual vintage.", icon: "fa-circle-dot" },
        { id: 3, name: "Metal Elegance Silver", cat: "graduados", price: 1499, desc: "Aleación de acero inoxidable.", icon: "fa-glasses" },
        { id: 4, name: "Square Office Pro", cat: "graduados", price: 1350, desc: "Ideal para largas jornadas de lectura.", icon: "fa-glasses" },
        { id: 5, name: "Titanium Flex Vision", cat: "graduados", price: 1899, desc: "Varillas flexibles de alta resistencia.", icon: "fa-glasses" },
        { id: 6, name: "Cat-Eye Intellectual", cat: "graduados", price: 1250, desc: "Diseño femenino sofisticado.", icon: "fa-glasses" },
        { id: 7, name: "Minimalist Semi-Rim", cat: "graduados", price: 1599, desc: "Sin marco inferior ultraligero.", icon: "fa-glasses" },
        { id: 8, name: "Vintage Aviator Optical", cat: "graduados", price: 1699, desc: "Estilo aviador adaptado a graduación.", icon: "fa-glasses" },
        { id: 9, name: "Smart Blue-Shield", cat: "graduados", price: 1799, desc: "Protección contra luz digital.", icon: "fa-glasses" },
        { id: 10, name: "Classic Havana Brown", cat: "graduados", price: 1150, desc: "Tono marrón clásico atemporal.", icon: "fa-glasses" },

        // LENTES DE SOL (10)
        { id: 11, name: "Solar Aviator Pro", cat: "sol", price: 1499, desc: "Polarizados con protección UV 400.", icon: "fa-sun" },
        { id: 12, name: "Sol Cat-Eye Glam", cat: "sol", price: 1399, desc: "Degradado oscuro sofisticado.", icon: "fa-umbrella-beach" },
        { id: 13, name: "Wayfarer Classic Sun", cat: "sol", price: 1299, desc: "El clásico solar indispensable.", icon: "fa-sun" },
        { id: 14, name: "Round Lennon Dark", cat: "sol", price: 1350, desc: "Lentes redondos estilo retro solar.", icon: "fa-sun" },
        { id: 15, name: "Mirror Shield Cyber", cat: "sol", price: 1699, desc: "Micas espejo de alta visibilidad.", icon: "fa-sun" },
        { id: 16, name: "Driver Polarized Gold", cat: "sol", price: 1899, desc: "Mejora el contraste al conducir.", icon: "fa-sun" },
        { id: 17, name: "Sunset Gradient Luxe", cat: "sol", price: 1599, desc: "Diseño oversize de lujo.", icon: "fa-sun" },
        { id: 18, name: "Urban Square Sun", cat: "sol", price: 1250, desc: "Armazón grueso estilo urbano.", icon: "fa-sun" },
        { id: 19, name: "Baja Beach Master", cat: "sol", price: 1450, desc: "Resistentes al agua salada y arena.", icon: "fa-sun" },
        { id: 20, name: "Eclipse Black Edition", cat: "sol", price: 1750, desc: "Protección solar total categoría 4.", icon: "fa-sun" },

        // MODERNOS (10)
        { id: 21, name: "Titanio Minimalista", cat: "modernos", price: 1899, desc: "Ultraligero sin marco superior.", icon: "fa-fire" },
        { id: 22, name: "Blue-Blocker Cyber", cat: "modernos", price: 1599, desc: "Filtro antifatiga para pantallas.", icon: "fa-bolt" },
        { id: 23, name: "Geo Hexagonal Trend", cat: "modernos", price: 1699, desc: "Diseño geométrico vanguardista.", icon: "fa-fire" },
        { id: 24, name: "Crystal Clear Frame", cat: "modernos", price: 1499, desc: "Armazón transparente de moda.", icon: "fa-fire" },
        { id: 25, name: "Neon Accent Street", cat: "modernos", price: 1399, desc: "Detalles modernos juveniles.", icon: "fa-fire" },
        { id: 26, name: "Double Bridge Modern", cat: "modernos", price: 1799, desc: "Doble puente metálico actual.", icon: "fa-fire" },
        { id: 27, name: "Matte Charcoal Pro", cat: "modernos", price: 1550, desc: "Acabado negro mate elegante.", icon: "fa-fire" },
        { id: 28, name: "Geometric Chic", cat: "modernos", price: 1650, desc: "Formas poligonales exclusivas.", icon: "fa-fire" },
        { id: 29, name: "Eco Wood Texture", cat: "modernos", price: 1450, desc: "Efecto madera ligera ecológica.", icon: "fa-fire" },
        { id: 30, name: "Urban Edge Future", cat: "modernos", price: 1850, desc: "Estética futurista minimalista.", icon: "fa-fire" },

        // DEPORTIVOS (10)
        { id: 31, name: "Sport X-Treme", cat: "deportivos", price: 1699, desc: "Policarbonato de alto impacto.", icon: "fa-shield-halved" },
        { id: 32, name: "Active Wrap-Around", cat: "deportivos", price: 1799, desc: "Ergonómico contra viento y polvo.", icon: "fa-person-biking" },
        { id: 33, name: "Runner Speed Polarized", cat: "deportivos", price: 1899, desc: "Ultra firmes para correr.", icon: "fa-person-running" },
        { id: 34, name: "Cyclist Pro Shield", cat: "deportivos", price: 1999, desc: "Mica panorámica para ciclismo.", icon: "fa-person-biking" },
        { id: 35, name: "Extreme Mountain Goggle", cat: "deportivos", price: 2199, desc: "Protección total en exteriores.", icon: "fa-shield-halved" },
        { id: 36, name: "Flexi-Sport Junior", cat: "deportivos", price: 1299, desc: "Flexibles irrompibles para acción.", icon: "fa-shield-halved" },
        { id: 37, name: "Hydro Water Sports", cat: "deportivos", price: 1750, desc: "Flotantes y con cinta de ajuste.", icon: "fa-shield-halved" },
        { id: 38, name: "Golf Vision Contrast", cat: "deportivos", price: 1850, desc: "Micas especiales para campo verde.", icon: "fa-shield-halved" },
        { id: 39, name: "Training Fit Master", cat: "deportivos", price: 1599, desc: "Sujeción de goma antideslizante.", icon: "fa-shield-halved" },
        { id: 40, name: "Action Hero Tactical", cat: "deportivos", price: 2099, desc: "Resistencia militar certificada.", icon: "fa-shield-halved" }
    ];

    const productGrid = document.getElementById('productGrid');

    // Renderizar los 40 productos con menús desplegables integrados
    const renderProducts = (filter = 'todos') => {
        productGrid.innerHTML = '';
        const filtered = filter === 'todos' ? products : products.filter(p => p.cat === filter);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.setAttribute('data-category', p.cat);
            card.innerHTML = `
                <div class="product-badge">${p.cat.toUpperCase()}</div>
                <div class="product-img"><i class="fa-solid ${p.icon}"></i></div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    
                    <!-- Menú desplegable de opciones para el cliente -->
                    <div class="product-options">
                        <label>Tipo de Tratamiento / Mica:</label>
                        <select class="mica-select" data-id="${p.id}">
                            <option value="Antirreflejante Estándar (Incluido)">Antirreflejante Estándar (Incluido)</option>
                            <option value="Filtro Luz Azul Anti-Fatiga (+$300)">Filtro Luz Azul Anti-Fatiga (+$300)</option>
                            <option value="Mica Fotocromática Oscurecible (+$550)">Mica Fotocromática Oscurecible (+$550)</option>
                        </select>
                    </div>

                    <div class="product-footer">
                        <span class="product-price">$${p.price.toLocaleString()} MXN</span>
                        <button class="btn-cart add-to-cart" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Agregar</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });

        attachCartEvents();
    };

    renderProducts('todos');

    // --- 2. CARRITO DE COMPRAS INTERACTIVO ---
    let cart = [];
    const cartOverlay = document.getElementById('cartOverlay');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

    const toggleCart = () => cartOverlay.classList.toggle('active');
    cartToggleBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);

    function attachCartEvents() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'));
                const product = products.find(p => p.id === id);
                
                // Obtener la opción seleccionada en el menú desplegable de ese producto
                const card = e.currentTarget.closest('.product-card');
                const selectElement = card.querySelector('.mica-select');
                const selectedOption = selectElement.value;
                
                // Calcular precio extra si eligió mica especial
                let extraPrice = 0;
                if (selectedOption.includes('+$300')) extraPrice = 300;
                if (selectedOption.includes('+$550')) extraPrice = 550;

                const finalPrice = product.price + extraPrice;

                cart.push({
                    name: product.name,
                    price: finalPrice,
                    option: selectedOption
                });

                updateCartUI();
                cartOverlay.classList.add('active');
            });
        });
    }

    const updateCartUI = () => {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío.</p>`;
            cartCount.textContent = '0';
            cartTotalPrice.textContent = '$0 MXN';
            return;
        }

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item-row');
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>${item.option}</p>
                    <span>$${item.price.toLocaleString()} MXN</span>
                </div>
                <button class="remove-item" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });

        cartCount.textContent = cart.length;
        cartTotalPrice.textContent = `$${total.toLocaleString()} MXN`;

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.getAttribute('data-index');
                cart.splice(idx, 1);
                updateCartUI();
            });
        });
    };

    // --- 3. PASARELA DE PAGO Y GENERACIÓN DE DATOS FALSOS ---
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutModal = document.getElementById('closeCheckoutModal');
    const shippingForm = document.getElementById('shippingForm');
    const checkoutStep1 = document.getElementById('checkoutStep1');
    const checkoutStep2 = document.getElementById('checkoutStep2');
    const ticketContent = document.getElementById('ticketContent');
    const finishDemoBtn = document.getElementById('finishDemoBtn');

    proceedCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Agrega al menos un producto al carrito.');
            return;
        }
        cartOverlay.classList.remove('active');
        checkoutStep1.style.display = 'block';
        checkoutStep2.style.display = 'none';
        checkoutModal.classList.add('active');
    });

    closeCheckoutModal.addEventListener('click', () => checkoutModal.classList.remove('active'));

    shippingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('payName').value;
        const address = document.getElementById('payAddress').value;
        const method = document.querySelector('input[name="paymentMethod"]:checked').value;
        
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        let ticketHTML = '';

        if (method === 'oxxo') {
            const fakeRef = '9876' + Math.floor(1000000000 + Math.random() * 9000000000);
            ticketHTML = `
                <h4><i class="fa-solid fa-store"></i> Ficha de Pago OXXO Pay</h4>
                <div class="ticket-detail"><span>Cliente:</span> <strong>${name}</strong></div>
                <div class="ticket-detail"><span>Monto a Pagar:</span> <strong style="color:var(--primary);">$${total.toLocaleString()} MXN</strong></div>
                <p style="font-size:0.85rem; margin: 0.8rem 0; color:var(--gray);">Acude a cualquier tienda OXXO y dicta los siguientes 14 dígitos al cajero:</p>
                <div class="barcode">${fakeRef}</div>
                <div class="ticket-detail"><span>Convenio OXXO:</span> <strong>748291</strong></div>
                <p style="font-size:0.8rem; text-align:center; color:var(--gray); margin-top:10px;">Comisión por pago en tienda: $15 MXN. Vigencia 48 hrs.</p>
            `;
        } else if (method === 'spei') {
            const fakeCLABE = '646180' + Math.floor(10000000000000 + Math.random() * 90000000000000);
            ticketHTML = `
                <h4><i class="fa-solid fa-building-columns"></i> Datos de Transferencia SPEI</h4>
                <div class="ticket-detail"><span>Beneficiario:</span> <strong>Óptica Visión Clara S.A. de C.V.</strong></div>
                <div class="ticket-detail"><span>Banco STP / SPID:</span> <strong>SISTEMA DE TRANSFERENCIAS</strong></div>
                <div class="ticket-detail"><span>CLABE Interbancaria:</span> <strong style="color:var(--primary);">${fakeCLABE}</strong></div>
                <div class="ticket-detail"><span>Importe Exacto:</span> <strong>$${total.toLocaleString()} MXN</strong></div>
                <div class="ticket-detail"><span>Concepto:</span> <strong>PEDIDO-${Math.floor(1000 + Math.random() * 9000)}</strong></div>
                <p style="font-size:0.8rem; text-align:center; color:var(--gray); margin-top:10px;">La confirmación se refleja en menos de 5 minutos.</p>
            `;
        } else if (method === 'tarjeta') {
            ticketHTML = `
                <h4><i class="fa-solid fa-circle-check" style="color:#16a34a;"></i> ¡Pago con Tarjeta Aprobado!</h4>
                <div class="ticket-detail"><span>Titular:</span> <strong>${name}</strong></div>
                <div class="ticket-detail"><span>Tarjeta terminada en:</span> <strong>•••• 4242</strong></div>
                <div class="ticket-detail"><span>Monto Cargado:</span> <strong style="color:var(--primary);">$${total.toLocaleString()} MXN</strong></div>
                <div class="ticket-detail"><span>Autorización Bancaria:</span> <strong>AUTH-#992817</strong></div>
                <p style="font-size:0.85rem; text-align:center; color:var(--gray); margin-top:15px;">Tu pedido será enviado a: <em>${address}</em></p>
            `;
        } else {
            ticketHTML = `
                <h4><i class="fa-brands fa-paypal" style="color:#0284c7;"></i> Autorizado vía PayPal</h4>
                <div class="ticket-detail"><span>Cuenta Vinculada:</span> <strong>${name.toLowerCase().replace(/\s+/g, '')}@gmail.com</strong></div>
                <div class="ticket-detail"><span>ID de Transacción:</span> <strong>PAYID-MX-${Math.floor(100000 + Math.random() * 900000)}</strong></div>
                <div class="ticket-detail"><span>Total Pagado:</span> <strong style="color:var(--primary);">$${total.toLocaleString()} MXN</strong></div>
                <p style="font-size:0.85rem; text-align:center; color:var(--gray); margin-top:15px;">Transacción protegida por políticas de PayPal.</p>
            `;
        }

        ticketContent.innerHTML = ticketHTML;
        checkoutStep1.style.display = 'none';
        checkoutStep2.style.display = 'block';
    });

    finishDemoBtn.addEventListener('click', () => {
        alert('¡Demostración completada con éxito! El carrito se reiniciará.');
        cart = [];
        updateCartUI();
        checkoutModal.classList.remove('active');
    });

    // --- 4. FILTROS DE CATEGORÍA ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryTriggers = document.querySelectorAll('.cat-link');

    const applyFilter = (cat) => {
        filterButtons.forEach(btn => {
            if(btn.getAttribute('data-filter') === cat) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        renderProducts(cat);
    };

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.getAttribute('data-filter')));
    });

    categoryTriggers.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-cat');
            applyFilter(cat);
            document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        });
    });

    console.log('E-commerce Pro con menús de selección y pasarela activa cargado.');
});