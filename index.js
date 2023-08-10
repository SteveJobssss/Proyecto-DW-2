// Integración de APIs relacionadas

// API de búsqueda de productos
fetch('https://api.tiendadeportiva.com/products')
    .then(response => response.json())
    .then(data => {
        // Procesar los datos de los productos y mostrarlos en la página
    });

// API de carrito de compras
const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', () => {
    fetch('https://api.tiendadeportiva.com/cart/add', {
        method: 'POST',
        body: JSON.stringify({ productId: 'producto_id' }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            // Actualizar el carrito en la página con la respuesta de la API
        });
});

// API de envío de comentarios
const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(commentForm);
    fetch('https://api.tiendadeportiva.com/comments/add', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Mostrar un mensaje de confirmación al usuario
            commentForm.reset();
        });
});

// Requisitos funcionales (en los comentarios del código)
// 1. Mostrar productos destacados en "featured-products"
// 2. Mostrar lista de productos disponibles en "product-list"
// 3. Mostrar ofertas especiales en "special-offers"
// 4. Enviar comentarios a través de "comment-form"
// 5. Navegación en el encabezado para Inicio, Productos, Ofertas y Contacto
