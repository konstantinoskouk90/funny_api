import app from "../app";
import http from "http";

const port: number = 3000;

(() => {
  try {
    http.createServer(app.callback()).listen(port, () => {
      console.info(`Koa server listening on port ${port}`);
    });
  } catch (err) {
    console.error(`Unable to connect to the server!`, err);
  }
})();