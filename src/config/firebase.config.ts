import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBqq7auj3sVOKGn7RUO06ws6LdTbgVbij0',
    authDomain: 'otp-app-9d17f.firebaseapp.com',
    projectId: 'otp-app-9d17f',
    storageBucket: 'otp-app-9d17f.firebasestorage.app',
    messagingSenderId: '734169912037',
    appId: '1:734169912037:web:8cc0da22c7c4726f4dfa0c',
    measurementId: 'G-Q80KFBWEMS',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
