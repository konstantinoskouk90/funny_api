import * as Router from "koa-router";

import PraiseController from "../controllers/praise.controller";

class PraiseRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/praise"
    });
  }

  private getRoutes(): void {
    this.router.get("/", PraiseController.get);
  }
}

export default new PraiseRouter().router;