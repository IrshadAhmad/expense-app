# Stack Navigation with Expo Router

This guide walks you through setting up **Stack Navigation** using Expo Router’s file-based routing system.

---

## 📁 Step 1: Create Route Files

Set up the following structure inside your `app` directory:

```
app/
  index.tsx       → Home screen
  details.tsx     → Details screen
  _layout.tsx     → Stack layout
```

### 🏠 `app/index.tsx`

```tsx
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
```

### 📄 `app/details.tsx`

```tsx
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
```

---

## 🧭 Step 2: Add Stack Navigation

Create a layout file to define your navigation stack.

### 📂 `app/_layout.tsx`

```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}
```

---

## Result

- `/` → renders `index.tsx`
- `/details` → renders `details.tsx`
- Navigation is handled via `<Link href="/details" />`
- Stack headers are styled using `screenOptions`

---

## Join the Community

- 📚 [Expo Router Docs](https://expo.github.io/router/docs)  
- 🛠 [Expo GitHub](https://github.com/expo/expo)  
- 💬 [Expo Discord](https://chat.expo.dev)
