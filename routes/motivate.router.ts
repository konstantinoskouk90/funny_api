import * as Router from "koa-router";

import MotivateController from "../controllers/motivate.controller";

class MotivateRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/motivate"
    });
  }

  private getRoutes(): void {
    this.router.get("/", MotivateController.get);
  }
}

export default new MotivateRouter().router;