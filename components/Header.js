// components/Header.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

const Header = ({ title, isLoading }) => (
  <View style={styles.headerContainer}>
    {isLoading ? (
      <ActivityIndicator size="large" color="#FFFFFF" />
    ) : (
      <Text style={styles.headerTitle}>{title}</Text>
    )}
  </View>
);

export default Header;

