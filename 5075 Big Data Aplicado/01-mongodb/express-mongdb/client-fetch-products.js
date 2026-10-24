
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:5000/api/v1/productos');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();