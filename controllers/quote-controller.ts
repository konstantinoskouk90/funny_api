import { Context } from "koa";

export default class QuoteController {

  static getBillGates = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Bill Gates Quote",
      content: "I can understand wanting to have a million dollars... but once you get beyond that, I have to tell you, it's the same hamburger."
    };

    ctx.status = 200;
  }

  static getDonaldTrump = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Donald Trump Quote",
      content: "The beauty of me is that I am very rich."
    };

    ctx.status = 200;
  }

  static getKanyeWest = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Kanye West Quote",
      content: "Yo, Taylor, I'm really happy for you, I'ma let you finish, but Beyoncé had one of the best videos of all time! One of the best videos of all time!"
    };

    ctx.status = 200;
  }

  static getKimKardashian = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Kim Kardashian Quote",
      content: "I have to be in a relationship in order to be intimate. I'm not the one-night-stand kind of girl. Despite the rumors."
    };

    ctx.status = 200;
  }

  static getLadyGaga = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Lady Gaga Quote",
      content: "I've always been famous, it's just no one knew it yet."
    };

    ctx.status = 200;
  }

  static getArnoldSchwarzenegger = async (ctx: Context, next: Function) => {
    ctx.body = {
      title: "Arnold Schwarzenegger Quote",
      content: "I need your clothes, your boots and your motorcycle."
    };

    ctx.status = 200;
  }
}