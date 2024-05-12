import React, { useState, useEffect } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import styles from './components/styles';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { fetchCategories, fetchProductsForCategory, fetchProductDetails } from './api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      fetchCategories().then(setCategories).catch(console.error);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setProducts(null);
  };

  function getPageTitle() {
    if (selectedCategory && !selectedProduct) {
      return selectedCategory;
    } else if (selectedProduct) {
      return 'Product Details';
    } else {
      return 'Fake Store';
    }
  }

  const renderContent = () => {
    if (loading && !selectedCategory && !selectedProduct) {
      return <SplashScreen />;
    } else if (selectedProduct) {
      return <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
    } else if (selectedCategory && products) {
      return <ProductList products={products} onProductSelect={setSelectedProduct} onBack={handleBackToHome} />;
    } else if (categories) {
      return <CategoryList categories={categories} onCategorySelect={(category) => {
        setSelectedCategory(category);
        fetchProductsForCategory(category).then(setProducts).catch(console.error);
      }} />;
    }
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
  };
  

  return (
    <View style={styles.container}>
      <Header title={getPageTitle()} isLoading={loading} />
      {renderContent()}
      <StatusBar style="auto" />
    </View>
  );
}
