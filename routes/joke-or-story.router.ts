import Router from "koa-router";

import JokeOrStoryController from "../controllers/joke-or-story.controller";

class JokeOrStoryRouter {

  router: Router;

  constructor() {
    this.init();

    this.getRoutes();
  }

  private init(): void {
    this.router = new Router({
      prefix: "/tell"
    });
  }

  private getRoutes(): void {
    this.router
      .get("/joke", JokeOrStoryController.getJoke)
      .get("/story", JokeOrStoryController.getStory);
  }
}

export default new JokeOrStoryRouter().router;