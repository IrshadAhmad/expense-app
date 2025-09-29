import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>Home</Text>
      <Link href="/details">Go to Details</Link>
    </View>
  );
};

export default Home;