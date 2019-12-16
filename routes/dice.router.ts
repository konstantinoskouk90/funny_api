import Router from "koa-router";

import DiceController from "../controllers/dice.controller";

class DiceRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/dice"
    });
  }

  private getRoutes(): void {
    this.router.get("/", DiceController.get);
  }
}

export default new DiceRouter().router;