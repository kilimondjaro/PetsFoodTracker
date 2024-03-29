import 'dotenv/config';

export default {
  expo: {
    name: 'Pets Food Tracker',
    slug: 'PetsFoodTracker',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/shared/assets/icons/appIcon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './src/shared/assets/icons/appIcon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.kilimondjaro.petsfoodtracker',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      config: {
        firebase: {
          apiKey: process.env.FIREBASE_API_KEY,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
    },
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: process.env.EXPO_UPDATES_URL,
  },
};
