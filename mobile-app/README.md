# Update the Application to Use Navigation

Let’s update the application to explore more about **routing in Expo**.

---

## Setting Up Expo Router (File-Based Routing)

### 1. Install Required Packages

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### 2. Update `package.json`

Set the entry point:

```json
"main": "expo-router/entry"
```

### 3. Update `app.json`

Add a custom scheme:

```json
"scheme": "your-app-scheme"
```

### 4. Install Web Support

```bash
npx expo install react-native-web react-dom
```

### 5. Update `app.json` for Web

```json
"web": {
  "bundler": "metro"
}
```

### 6. Configure Babel

Create `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

Install the required Babel packages:

```bash
npm install -D babel-preset-expo
```

### 7. Set Up Entry File

* Remove `App.tsx` from the root folder.
* Create a new `index.tsx` file with the following content:

```tsx
import { View, Text } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Home</Text>
    </View>
  );
};

export default Home;
```

---

## Join the Community

Be part of the Expo community of developers building universal apps:

* [Expo on GitHub](https://github.com/expo/expo) – Contribute to the open-source platform.
* [Expo Discord Community](https://chat.expo.dev) – Chat with developers and ask questions.
