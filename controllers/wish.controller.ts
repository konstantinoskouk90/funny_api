import { Context } from "koa";

export default class WishController {

  static getHappyBirthday = async (ctx: Context) => {
    ctx.body = {
      title: "Happy Birthday Wish",
      content: `Happy Birthday! 🥳 May this special day bring you endless joy and tons of precious memories`,
    };

    ctx.status = 200;
  }

  static getMerryChristmas = async (ctx: Context) => {
    ctx.body = {
      title: "Merry Christmas Wish",
      content: `Merry Christmas! 🎄 May this season of giving be the start of your better life. Have a great and blessed holiday`,
    };

    ctx.status = 200;
  }
}
