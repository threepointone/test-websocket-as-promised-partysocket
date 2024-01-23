import WS from "ws";
import { WebSocket } from "partysocket";
import WebSocketAsPromised from "websocket-as-promised";

const wsp = new WebSocketAsPromised("ws://127.0.0.1:1999", {
  createWebSocket: (url) => new WebSocket(url, [], { WebSocket: WS }),
  extractMessageData: (event) => event.data,
});

wsp.onMessage.addListener((message) => console.log("message:", message));

// wsp.onError.addListener((err) => console.log("error:", err.error));
// wsp.onClose.addListener((closeEvt) =>
//   console.log("close:", closeEvt, closeEvt.code, closeEvt.reason)
// );

wsp
  .open()
  .then(() => wsp.send("ping"))
  .then(() => wsp.close())
  .catch((e) => console.error("caught error:", e));

// more code to test different events/apis

// wsp.onError.addListener((err) => console.log("error:", err.error));
// wsp.onClose.addListener((closeEvt) =>
//   console.log("close:", closeEvt, closeEvt.code, closeEvt.reason)
// );

// wait for WebSocket connection to open
// await wsp.open();

// send some data
// wsp.send("ping");

// wait for connection to close
// await wsp.close();
