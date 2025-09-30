# Tabs Navigation with Expo Router

This guide walks you through setting up **Tabs Navigation** using Expo Router’s file-based routing system, while keeping your root layout and entry screen intact.

---

## 📁 Directory Structure

Update your `app` folder to include a `(tabs)` group for tab-based navigation:

```
app/
  index.tsx               → Entry screen (redirects to tabs)
  _layout.tsx             → Root layout (Stack)
  (tabs)/                 → Tabs group
    _layout.tsx           → Tabs layout
    dashboard.tsx         → Dashboard tab
    analytics.tsx         → Analytics tab
    budget.tsx            → Redirect tab (navigates to Home)
```

---

## 🧭 Step 1: Create Tabs Layout

Create a layout file to define the tab navigator.

### 📂 `app/(tabs)/_layout.tsx`

```tsx
import React from 'react';
import { Tabs } from 'expo-router';

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#007AFF',
    }}
  >
    <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' }} />
    <Tabs.Screen name="analytics" options={{ title: 'Analytics' }} />
    <Tabs.Screen
      name="budget"
      options={{
        title: 'Budget',
        href: '/', // Redirects to Home
      }}
    />
  </Tabs>
);

export default TabsLayout;
```

---

## 📊 Dashboard Tab – `app/(tabs)/dashboard.tsx`

```tsx
import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Dashboard</Text>
  </View>
);

export default Dashboard;
```

---

## 📈 Analytics Tab – `app/(tabs)/analytics.tsx`

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Analytics = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20, marginVertical: 20 }}>Analytics Screen</Text>
    <Link href="/">Go to Home</Link>
  </View>
);

export default Analytics;
```

---

## 🔁 Budget Redirect – `app/(tabs)/budget.tsx`

```tsx
import React, { useEffect } from 'react';
import { router } from 'expo-router';

const Budget = () => {
  useEffect(() => {
    router.replace('/');
  }, []);

  return null;
};

export default Budget;
```

---

## 🧭 Step 2: Update Root Layout

Use your existing `app/_layout.tsx` to include the `(tabs)` group inside a stack navigator.

### 📂 `app/_layout.tsx`

```tsx
import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => (
  <Stack screenOptions={{ headerShown: false }} />
);

export default RootLayout;
```

---

## 🏠 Redirect from Home – `app/index.tsx`

```tsx
import React from 'react';
import { Redirect } from 'expo-router';

const Index = () => <Redirect href="/(tabs)/dashboard" />;

export default Index;
```

---

## ✅ Result

- `/` → Redirects to `/dashboard` tab
- `/dashboard` → Dashboard tab
- `/analytics` → Analytics tab
- `/budget` → Redirects to Home (`/`)
- Tabs are visible on initial load
- Navigation between tabs is handled via `<Link href="/(tabs)/route" />`
- Tab styling is configured in `(tabs)/_layout.tsx`

---

## 🤝 Join the Community

- 📚 [Expo Router Docs](https://expo.github.io/router/docs)  
- 🛠 [Expo GitHub](https://github.com/expo/expo)  
- 💬 [Expo Discord](https://chat.expo.dev)