// components/ShoppingCart.js
import React from 'react';
import { View, Text } from 'react-native';

const ShoppingCart = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your cart is empty</Text>
      {/* 这里可以添加显示购物车商品的逻辑 */}
    </View>
  );
};

export default ShoppingCart;
