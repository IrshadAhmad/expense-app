import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Details = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>Details</Text>
      <Link href="/">Go to Home</Link>
    </View>
  )
}

export default Details