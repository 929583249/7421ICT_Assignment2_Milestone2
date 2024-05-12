// components/ProductList.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const ProductList = ({ products, onProductSelect, onBack }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => onProductSelect(item)}
    >
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.productListContainer}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productList}
      />
      <TouchableOpacity onPress={onBack} style={styles.fixedBottomButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;
