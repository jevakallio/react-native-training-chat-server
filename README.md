# react-native-training-chat-server
A client library for a chat server to be used in React Native training

## API

### send({ channelName, sender, message })
Takes a single parameter with three properties: channel name, sender name and a message text. Returns a Promise.
```js
import { send } from 'react-native-training-chat-server';

send({
  channel: "ChannelName",
  sender: "Your Name",
  message: "Anything you'd like to say"
});
```

### subscribe(channelName, callback)
Callback is called every time new messages arrive to chat

```js
import { subscribe } from 'react-native-training-chat-server';

subscribe("ChannelName", messages => {
  messages.forEach(message => {
    console.log(`${message.sender}: ${message.message}`);
  })
});
```
