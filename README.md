# React Native Web + React Native Skia Demo

A demo project to test the compatibility between React Native Web and React Native Skia using an Expo managed workflow.

The demo is hosted here: [react-native-web-skia-demo.netlify.app](https://react-native-web-skia-demo.netlify.app/)

An Android APK build is available for download here: [EAS Build - Android internal distribution build](https://expo.dev/accounts/gjtiquia/projects/react-native-web-skia-demo/builds/4f5dfac6-b47d-4ce5-848a-fb747cd1b98c)

## Instructions

### Setting up a Development Environment

Install all the required dependencies with the following command.

```bash
npm install
```

Start a development server with the following command.

```bash
npm start
```

Following the on-screen instructions, press "w" to open the app on the web.

To open the app on mobile, ensure your mobile has the Expo Go app installed and is connected to the same local network as the computer, then scan the QR code shown with the Expo Go app (Android) or the Camera App (iOS).

### Creating a Web App Build

Create a web app build with the following command.

```bash
npx expo export:web
```

This creates a production-ready static bundle in the web-build directory at the root of the project.

Serve the static bundle locally with the following command.

```bash
npx serve web-build
```

Follow the on-screen instructions to test locally how the app works in production.

Read [here](https://docs.expo.dev/distribution/publishing-websites/) for more documentation on creating web apps with Expo.

### Creating an Android APK Build with EAS Build

First follow the setup steps according to the [Expo documentation](https://docs.expo.dev/build/setup/).

Then run the following command

```bash
eas build -p android --profile development
```
