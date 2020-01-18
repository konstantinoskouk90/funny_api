import Router from "koa-router";

import RandomController from "../controllers/random.controller";

class RandomRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/random"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/color", RandomController.getColor)
      .get("/fact", RandomController.getFact)
  }
}

export default new RandomRouter().router;