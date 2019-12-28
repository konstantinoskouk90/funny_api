import Router from "koa-router";

import QuoteController from "../controllers/quote.controller";

class QuoteRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/quote"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/arnold-schwarzenegger", QuoteController.getArnoldSchwarzenegger)
      .get("/bill-gates", QuoteController.getBillGates)
      .get("/donald-trump", QuoteController.getDonaldTrump)
      .get("/kanye-west", QuoteController.getKanyeWest)
      .get("/kim-kardashian", QuoteController.getKimKardashian)
      .get("/lady-gaga", QuoteController.getLadyGaga);
  }
}

export default new QuoteRouter().router;