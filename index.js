import Firebase from './Firebase';

// Firebase does dumb things with timeouts,
// which causes warnings on Android. Ignore.
console.ignoredYellowBox = ['Setting a timer for a long period of time'];

/**
 * Send a message
 */
export const send = ({channel, sender, message}) => {
  return Firebase.database()
    .ref((channel || 'default').toLowerCase())
    .push({sender, message});
};

/**
 * Subscribe to message updates
 */
export const subscribe = (channel, callback) => {
  Firebase.database().ref(channel).on('value', snapshot => {
    const data = snapshot.val();
    const messages = [];
    for (const key in data) {
      messages.push({key, ...data[key]});
    }

    callback(messages);
  });
};
