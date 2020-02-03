import { Context } from "koa";

export default class RandomController {

  static getColor = async (ctx: Context) => {
    ctx.body = {
      title: "Random Color",
      content: "Blue."
    };

    ctx.status = 200;
  }

  static getFact = async (ctx: Context) => {
    ctx.body = {
      title: "Random Fact",
      content: "You can hear a blue whale's heartbeat from two miles away."
    };

    ctx.status = 200;
  }
}
