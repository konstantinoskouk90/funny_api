import app from "../app";
import http from "http";

const port: number = 3000;

(() => {
  try {
    http.createServer(app.callback()).listen(port, () => {
      console.info(`Server listening on port ${port}..`);
    });
  } catch (err) {
    console.error(`Unable to connect to server!`, err);
  }
})();