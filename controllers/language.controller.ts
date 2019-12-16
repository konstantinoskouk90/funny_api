import { Context } from "koa";

export default class LanguageController {

  static getGerman = async (ctx: Context) => {
    ctx.body = {
      title: "German Language",
      content: "Du gehst mir auf den Keks."
    };

    ctx.status = 200;
  }

  static getGreek = async (ctx: Context) => {
    ctx.body = {
      title: "Greek Language",
      content: "Όταν λείπει η γάτα, χορεύουν τα ποντίκια."
    };

    ctx.status = 200;
  }

  static getLatvian = async (ctx: Context) => {
    ctx.body = {
      title: "Latvian Language",
      content: "Ābols no ābeles tālu nekrīt."
    };

    ctx.status = 200;
  }

  static getLithuanian = async (ctx: Context) => {
    ctx.body = {
      title: "Lithuanian Language",
      content: "Neperšokęs griovio nesakyk op."
    };

    ctx.status = 200;
  }

  static getPortuguese = async (ctx: Context) => {
    ctx.body = {
      title: "Portuguese Language",
      content: "Uma got de água no mar."
    };

    ctx.status = 200;
  }

  static getRussian = async (ctx: Context) => {
    ctx.body = {
      title: "Russian Language",
      content: "Алты́нного во́ра ве́шают, а полти́нного че́ствуют."
    };

    ctx.status = 200;
  }
}
