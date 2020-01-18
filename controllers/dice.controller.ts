import { Context } from "koa";

export default class DiceController {

  static get = async (ctx: Context) => {
    const dice = await DiceController.getDice();
    
    const { one, two } = dice;

    ctx.body = {
      title: "Dice Roll",
      content: {
        text: `${one},${two}`,
        sum: `${one + two}`,
        link: `http://${ctx.request.host}/images/dice/dice-${one}-${two}.png`,
      }
    };

    ctx.status = 200;
  }

  static async getDice(): Promise<{ one: number; two: number }> {
    const one = DiceController.getRandomFirstNumber();
    const two = DiceController.getRandomSecondNumber(one);

    return { one, two };
  }

  static getRandomFirstNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  static getRandomSecondNumber(die: number): number {
    return Math.floor(Math.random() * die) + 1;
  }
}