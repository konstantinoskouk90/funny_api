import Router from "koa-router";

import WishController from "../controllers/wish.controller";

class WishRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/wish"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/happy-birthday", WishController.getHappyBirthday)
      .get("/merry-christmas", WishController.getMerryChristmas);
  }
}

export default new WishRouter().router;