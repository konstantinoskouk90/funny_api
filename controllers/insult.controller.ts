import { Context } from "koa";

export default class InsultController {

  static get = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Insulting Quote",
      content: "You are the reason God created the middle finger."
    };

    ctx.status = 200;
  }
}