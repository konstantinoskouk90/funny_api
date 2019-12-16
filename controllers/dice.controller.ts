import { Context } from "koa";

export default class DiceController {

  static get = async (ctx: Context) => {
    const imgPath = await DiceController.getImagePath();

    ctx.body = {
      title: "Dice Roll",
      content: `http://${ctx.request.host}/images/dice/${imgPath}`,
    };

    ctx.status = 200;
  }

  static async getImagePath(): Promise<string> {
    const dieOne = DiceController.getRandomNumber();
    const dieTwo = DiceController.getRandomNumber();

    return `dice-${dieOne}-${dieTwo}.png`;
  }

  static getRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}