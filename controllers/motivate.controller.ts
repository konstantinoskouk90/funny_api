import { Context } from "koa";

export default class MotivateController {

  static get = async (ctx: Context) => {
    ctx.body = {
      title: "Motivational Quote",
      content: "Your limitation — it's only your imagination."
    };

    ctx.status = 200;
  }
}