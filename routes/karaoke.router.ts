import * as Router from "koa-router";

import KaraokeController from "../controllers/karaoke.controller";

class KaraokeRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/karaoke"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/pop", KaraokeController.getPop)
      .get("/rap", KaraokeController.getRap);
  }
}

export default new KaraokeRouter().router;