import { Context } from "koa";

export default class KaraokeController {

  static getPop = async (ctx: Context) => {
    ctx.body = {
      title: "Pop Music Karaoke",
      content: "When I'm not with you I lose my mind, give me a sign, hit me, baby, one more time."
    };

    ctx.status = 200;
  }

  static getRap = async (ctx: Context) => {
    ctx.body = {
      title: "Rap Music Karaoke",
      content: "Son, they shook, cause ain't no such things as halfway crooks."
    };

    ctx.status = 200;
  }
}