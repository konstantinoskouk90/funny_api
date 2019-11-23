import * as Router from "koa-router";

import InsultController from "../controllers/insult.controller";

class InsultRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/insult"
    });
  }

  private getRoutes(): void {
    this.router.get("/", InsultController.get);
  }
}

export default new InsultRouter().router;