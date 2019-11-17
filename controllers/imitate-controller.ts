import { Context } from "koa";

export default class MessageController {

    static getBillGates = async (ctx: Context, next: Function) => {
        ctx.body = {
            title: 'Bill Gates Quote',
            content: "I can understand wanting to have a million dollars... but once you get beyond that, I have to tell you, it's the same hamburger."
        };

        ctx.status = 200;
    }

    static getDonaldTrump = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }

    static getKanyeWest = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }

    static getKimKardashian = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }

    static getLadyGaga = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }

    static getTerminator = async (ctx: Context, next: Function) => {
        ctx.body = {
            messages: [{
                title: 'First Message',
                content: 'This is the first message!'
            }]
        };

        ctx.status = 200;
    }
}