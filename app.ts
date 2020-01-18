import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import serve from "koa-static";

import DiceRouter from "./routes/dice.router";
import InsultRouter from "./routes/insult.router";
import JokeOrStoryRouter from "./routes/joke-or-story.router";
import KaraokeRouter from "./routes/karaoke.router";
import LanguageRouter from "./routes/language.router";
import MotivateRouter from "./routes/motivate.router";
import PraiseRouter from "./routes/praise.router";
import RandomRouter from "./routes/random.router";
import QuoteRouter from "./routes/quote.router";
import WishRouter from "./routes/wish.router";

class App {

  app: Koa;

  constructor() {
    this.app = new Koa();

    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(json({ pretty: true, param: 'pretty' }));
    this.app.use(bodyParser());
    this.app.use(cors());
    this.app.use(serve(`${__dirname}/public`));
    this.app.use((ctx: Koa.Context, next: Function) => {
      ctx.set('Access-Control-Allow-Origin', '*');
      ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET');
      ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      next();
    });

    this.extendContext();
  }

  private routes(): void {
    this.app.use(DiceRouter.routes());
    this.app.use(InsultRouter.routes());
    this.app.use(JokeOrStoryRouter.routes());
    this.app.use(KaraokeRouter.routes());
    this.app.use(LanguageRouter.routes());
    this.app.use(MotivateRouter.routes());
    this.app.use(PraiseRouter.routes());
    this.app.use(RandomRouter.routes());
    this.app.use(QuoteRouter.routes());
    this.app.use(WishRouter.routes());
  }

  private extendContext(): void {
    this.app.context.rootUrl = __dirname;
  }
}

export default new App().app;