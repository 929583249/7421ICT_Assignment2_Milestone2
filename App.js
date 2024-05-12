// App.js
import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import SplashScreen from './components/SplashScreen'; // 导入 SplashScreen 组件
import { ScrollView } from 'react-native';
import styles from './components/styles'; // 引入样式


export default function App() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const handleBackToHome = () => {
    setSelectedCategory(null);
    setProducts(null);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const Header = ({ title, isLoading }) => (
    <View style={styles.headerContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FFFFFF" />
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )}
    </View>
  );


  useEffect(() => {
    // SplashScreen 延迟
    const timer = setTimeout(() => {
      setLoading(false);
      fetchCategories();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const fetchCategories = async () => {
    setLoading(true); // 在获取分类时开始显示加载状态
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Fetching categories failed:', error);
    } finally {
      setLoading(false); // 无论获取成功与否，都结束加载状态
    }
  };
  const getPageTitle = () => {
    if (selectedCategory && !selectedProduct) {
      return selectedCategory;
    } else if (selectedProduct) {
      return 'Product Details';
    } else {
      return 'Fake Store';
    }
  };
  const fetchProductsForCategory = async (category) => {
    setLoading(true); // 在获取产品时开始显示加载状态
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setProducts(data);
      setSelectedCategory(category);
    } catch (error) {
      console.error('Fetching products failed:', error);
    } finally {
      setLoading(false); // 无论获取成功与否，都结束加载状态
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        setSelectedCategory(item);
        fetchProductsForCategory(item);
      }}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => fetchProductDetails(item.id)}
    >
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Price: {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const renderContent = () => {
    let pageTitle = getPageTitle();
    return (
      <View style={{ flex: 1 }}>
        {/* 传递 loading 状态给 Header 组件 */}
        <Header title={pageTitle} isLoading={loading} />
        {loading && !selectedCategory && !selectedProduct ? (
          <SplashScreen />
        ) : selectedProduct ? (
          renderProductDetails()
        ) : selectedCategory && products ? (
          renderProductList()
        ) : categories ? (
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.content}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  };
  
  
  
  const renderProductList = () => {
    return (
      <View style={styles.productListContainer}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          style={styles.productList}
        />
        {/* 固定在底部的返回按钮 */}
        <TouchableOpacity onPress={handleBackToHome} style={styles.fixedBottomButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const fetchProductDetails = async (productId) => {
    setLoading(true); // 在获取产品详情时开始显示加载状态
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Fetching product details failed:', error);
    } finally {
      setLoading(false); // 无论获取成功与否，都结束加载状态
    }
  };
  
  
  const renderProductDetails = () => {
    if (!selectedProduct) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
      <View style={styles.productDetailsContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image source={{ uri: selectedProduct.image }} style={styles.productDetailImage} />
          <Text style={styles.productDetailTitle}>{selectedProduct.title}</Text>
          <Text style={styles.productDetailPrice}>Price: {selectedProduct.price}</Text>
          <Text style={styles.productDetailDescription}>{selectedProduct.description}</Text>
          {/* 添加到购物车按钮 */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* 返回按钮 */}
        <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.fixedBackButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderContent()}
      <StatusBar style="auto" />
    </View>
  );
}
