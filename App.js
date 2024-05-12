import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import ShoppingCart from './components/ShoppingCart';
import { fetchCategories, fetchProductsForCategory } from './api';

const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    const fetchedProducts = await fetchProductsForCategory(category);
    setProducts(fetchedProducts);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setProducts(null);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Products') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Shopping Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Products" children={() => <HomeScreen 
          loading={loading}
          selectedCategory={selectedCategory}
          products={products}
          selectedProduct={selectedProduct}
          categories={categories}
          handleCategorySelect={handleCategorySelect}
          handleBackToHome={handleBackToHome}
          setSelectedProduct={setSelectedProduct}
        />} />
        <Tab.Screen name="Shopping Cart" component={ShoppingCart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
