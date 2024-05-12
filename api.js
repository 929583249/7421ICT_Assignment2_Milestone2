// api.js
export const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    return await response.json();
  };
  
  export const fetchProductsForCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return await response.json();
  };
  
  export const fetchProductDetails = async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await response.json();
  };
  