+++
author = "Andrés García"
title = "Reconnect to websocket using a StreamBuilder on Flutter"
date = "2021-10-29"
description = "Reconnect to websocket using a StreamBuilder on Flutter"
slug = "Reconnect websocket StreamBuilder Flutter"
tags = [
  "Flutter",
  "Dart",
  "Websocket",
  "StreamBuilder",
]
categories = [
  "Flutter",
  "Dart",
  "Websocket",
  "StreamBuilder",
]
series = [
  "Flutter",
  "Dart"
]
aliases = [
  "Reconnect websocket StreamBuilder Flutter"
]
+++

# Reconnect to websocket using a StreamBuilder on Flutter

One way to reconnect to the WebSocket in a stable way is to use a StreamController to manage the stream of events and errors from the WebSocket, and then use a Timer to periodically check if the WebSocket connection is still active. Here's an example of how to do this:

```dart
StreamController controller = StreamController();
WebSocketChannel channel;

void initState() {
  super.initState();
  connectToWebSocket();
}

void connectToWebSocket() {
  channel = WebSocketChannel.connect(Uri.parse(websocketSource));
  channel.stream.listen(
    (event) {
      controller.add(event);
    },
    onError: (error) {
      controller.addError(error);
      reconnectToWebSocket();
    },
    onDone: () {
      controller.close();
      reconnectToWebSocket();
    },
  );
}

void reconnectToWebSocket() {
  Timer.periodic(Duration(seconds: 4), (timer) {
    if (channel.closeCode != null) {
      timer.cancel();
      connectToWebSocket();
    }
  });
}

@override
void dispose() {
  controller.close();
  channel.sink.close();
  super.dispose();
}

@override
Widget build(BuildContext context) {
  return StreamBuilder(
    stream: controller.stream,
    builder: (BuildContext context, AsyncSnapshot snapshot) {
      bool isWebsocketActive = false;
      if (snapshot.hasError) {
        return Text('Error: ${snapshot.error}');
      }
      if (snapshot.connectionState == ConnectionState.waiting) {
        return Text('Waiting for data...');
      }

      // Process snapshot data
      isWebsocketActive = true;
    },
  );
}
```

In this example, we create a StreamController to manage the stream of events and errors from the WebSocket. When the widget is initialized, we call the connectToWebSocket() function, which connects to the WebSocket and listens for events and errors. If the WebSocket connection is interrupted or closed, the onError and onDone callbacks are called, and we call the reconnectToWebSocket() function, which sets up a timer to periodically check if the WebSocket connection is still active. Once the timer detects that the connection is closed, it cancels itself and calls connectToWebSocket() to establish a new connection.

In the build method, we use a StreamBuilder to listen to the events and errors from the StreamController, and handle each case appropriately.

--

Thanks! However, I had to change some things for my use case. I deleted `controller.close()`, if not i got the error "Error: Bad state: Cannot add event after closing". Also i had to remove `onError: (error) {}` otherwise `onError` and `onDone` got executed after each other resulting in reconnecting twice. Also I swapped the periodic timer with an async function that has a delay in it (like my original reconnect function). The only thing which I don't understand is why checking `channel.closeCode != null` is triggering a `channel.stream` reconnect
