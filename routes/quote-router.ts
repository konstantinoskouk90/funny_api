import * as Router from "koa-router";

import QuoteController from "../controllers/quote-controller";

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
      .get("/billgates", QuoteController.getBillGates)
      .get("/donaldtrump", QuoteController.getDonaldTrump)
      .get("/kanyewest", QuoteController.getKanyeWest)
      .get("/kimkardashian", QuoteController.getKimKardashian)
      .get("/ladygaga", QuoteController.getLadyGaga)
      .get("/arnoldschwarzenegger", QuoteController.getArnoldSchwarzenegger);
  }
}

export default new QuoteRouter().router;