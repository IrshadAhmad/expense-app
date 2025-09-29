# Welcome to Your Expo App 👋

This is an [Expo](https://expo.dev) project created with:

```bash
npx create-expo-app mobile-app --template blank-typescript
```

---

## Install Required VS Code Extensions

Before moving forward, install the following VS Code extensions:

1. **Expo Tools** – Provides IntelliSense for configuration files and debugging capabilities.
2. **ES7+ React/Redux/React-Native Snippets** – Offers JavaScript and React/Redux snippets in ES7+ with Babel plugin support.

---

## Update Project Configuration

### 1. Update `package.json`

Change the app name:

```json
"name": "expense-app"
```

### 2. Update `app.json`

Modify the configuration as follows:

```json
{
  "expo": {
    "name": "ExpenseApp",
    "slug": "expenseapp",
    "scheme": "expenseapp"
  }
}
```

### 3. Run the Application

Start your Expo app with:

```bash
npx expo start
```

---

## Run on Mobile Devices

* **Android**

  1. Install the [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) app from Google Play.
  2. Run `npx expo start` and scan the QR code using Expo Go.

* **iOS**

  1. Install the [Expo Go](https://apps.apple.com/app/expo-go/id982107779) app from the App Store.
  2. Run `npx expo start` and scan the QR code with your iPhone’s camera to open in Expo Go.

---

## Join the Community

Join our community of developers creating universal apps:

* [Expo on GitHub](https://github.com/expo/expo) – View our open-source platform and contribute.
* [Discord Community](https://chat.expo.dev) – Chat with Expo users and ask questions.
