import type * as Party from "partykit/server";

// A simple websocket server that
// responds to `ping` with `pong`

export default {
  onSocket(ws) {
    ws.addEventListener("message", async function (event) {
      if (event.data === "ping") {
        ws.send("pong");
        // await sleep(1000);
        // ws.close(1011, "some other reason");
      }
    });
  },
} satisfies Party.PartyKitServer;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
