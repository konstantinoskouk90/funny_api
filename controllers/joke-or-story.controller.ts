import { Context } from "koa";

export default class JokeOrStoryController {

  static getJoke = async (ctx: Context) => {
    ctx.body = {
      title: "Joke",
      content: "A guy goes in for a job interview and sits down with the boss. The boss asks him, “What do you think is your worst quality?” The man says “I’m probably too honest.” The boss says, “That’s not a bad thing, I think being honest is a good quality.” The man replies, “I don’t care about what you think!”",
    };

    ctx.status = 200;
  }

  static getStory = async (ctx: Context) => {
    ctx.body = {
      title: "Story",
      content: "One day, a man bought a five-thousand dollar Armani suit for work. On his way to the car the next morning, as he proudly displayed his fresh corporate armour, a pigeon swooped low and shat on his jacket. Though enraged, the man played some soothing jazz throughout his commute and arrived at work successfully flushed of his murderous foal rage."
    };

    ctx.status = 200;
  }
}
