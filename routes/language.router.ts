import Router from "koa-router";

import LanguageController from "../controllers/language.controller";

class LanguageRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/language"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/german", LanguageController.getGerman)
      .get("/greek", LanguageController.getGreek)
      .get("/latvian", LanguageController.getLatvian)
      .get("/lithuanian", LanguageController.getLithuanian)
      .get("/portuguese", LanguageController.getPortuguese)
      .get("/russian", LanguageController.getRussian);
  }
}

export default new LanguageRouter().router;
