import { Context } from "koa";

export default class PraiseController {

  static get = async (ctx: Context) => {
    ctx.body = {
      title: "Praising Quote",
      content: "Thank you for setting a great example for your coworkers!"
    };

    ctx.status = 200;
  }
}