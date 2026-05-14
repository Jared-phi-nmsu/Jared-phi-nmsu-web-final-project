const greenTechProducts = [
{
    id: 1,
    title: 'Solar Roof Panels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum convallis nibh, tincidunt pretium diam iaculis nec. Nulla pulvinar, sapien et pharetra luctus, tortor dolor pharetra erat, quis sagittis ipsum. ',
    image: '../images/solar-panel.jpg',
    category: 'Energy'
},
{
    id: 2,
    title: 'Smart Home Battery',
    description: 'Nam eget diam sit amet nibh dignissim pellentesque vel gravida orci. Nullam id leo risus. Duis enim nisi, scelerisque eget enim pellentesque, molestie accumsan ipsum. Curabitur lobortis mauris eu cursus hendrerit.',
    image: '../images/home-battery.jpg',
    category: 'Storage'
},
{
    id: 3,
    title: 'EV Charging Station',
    description: 'Morbi sit amet finibus augue. Cras tempor orci quis risus scelerisque, sit amet efficitur magna dictum. Maecenas eu tempor mauris. Quisque lobortis sollicitudin neque, in sodales felis vehicula a. ',
    image: '../images/ev-charger.jpg',
    category: 'Mobility'
},
{
    id: 4,
    title: 'Commercial LED Retrofit',
    description: 'Nulla facilisi. Integer condimentum vulputate nulla eu tempus. Vestibulum ac turpis eu urna commodo rutrum a fermentum nulla. Vestibulum sem nisi, finibus sed viverra tempus, dignissim ac urna. Quisque sodales nisl ac maximus rhoncus. In eget faucibus quam, vel maximus lectus.',
    image: '../images/led-retrofit.jpg',
    category: 'Lighting'
},
{
    id: 5,
    title: 'Renewable Energy Consulting',
    description: 'Suspendisse et arcu egestas, sodales justo non, tincidunt sem. Phasellus ut commodo justo. Mauris ultricies fringilla elit vitae porttitor. Proin faucibus, dolor commodo vulputate molestie, turpis nisi vestibulum neque, eget mattis metus quam vel erat.',
    image: '../images/consulting.jpg',
    category: 'Services'
}
];

function createProductCard(product) {
return `
    <article class="productCard">
        <div class="productInfo">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <img src="${product.image}">
        </div>
        <span class="productCategory">${product.category}</span>
    </article>
`;
}

function renderProducts(products) {
    const container = document.getElementById('productList');
    container.innerHTML = products.map(createProductCard).join('');
}

function searchProducts(searchTerm) {
    const filteredProducts = greenTechProducts.filter(product => {
        return (product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(greenTechProducts);

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

});