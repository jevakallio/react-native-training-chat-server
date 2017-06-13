import * as firebase from 'firebase';

// absolutely nothing to see here...
const config = {
  apiKey: 'AIzaSyC2wa64QkQv40MCjYUzqQ1haMf6yWsKdcE',
  authDomain: 'reactnativechatapp-6e850.firebaseapp.com',
  databaseURL: 'https://reactnativechatapp-6e850.firebaseio.com',
  projectId: 'reactnativechatapp-6e850',
  storageBucket: 'reactnativechatapp-6e850.appspot.com',
  messagingSenderId: '737284879259',
};

firebase.initializeApp(config);

export default firebase;
