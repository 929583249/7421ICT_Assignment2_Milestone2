// components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.items);
  const totalPrice = useSelector(state => state.totalPrice);
  const totalQuantity = useSelector(state => state.totalQuantity);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.title} - ${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => {
          item.quantity > 1 ? dispatch(decreaseQuantity(item.id)) : dispatch(removeFromCart(item.id));
        }} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your shopping cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Items: {totalQuantity}</Text>
      <Text style={styles.header}>Total Price: ${totalPrice.toFixed(2)}</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    flex: 1, // Ensure text does not overflow
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10, // Add space between text and buttons
  },
  button: {
    padding: 10, // Increase padding for easier tapping
    marginHorizontal: 5, // Add space between buttons
    backgroundColor: '#ddd', // Background color to make button more visible
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    fontSize: 18, // Larger font size for easier reading
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10, // Space around quantity text
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
  }
});

export default ShoppingCart;
