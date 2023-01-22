import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// firebase stuff?
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwLl9rQyhYDKECaatrUZf37Oc1SivACmc',
  authDomain: 'beerview-8d916.firebaseapp.com',
  projectId: 'beerview-8d916',
  storageBucket: 'beerview-8d916.appspot.com',
  messagingSenderId: '839195811979',
  appId: '1:839195811979:web:728d8081d3b03d12b6b48e',
  measurementId: 'G-V5F2ECHL4P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
