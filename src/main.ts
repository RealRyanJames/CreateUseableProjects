import { question } from "readline-sync";
import {
  commandReact,
  commandVue,
  getUsersCommands,
  type LoggedArgsProject,
} from "../Commands/Commads.Logger.js";

type ObjectLang = "React" | "Vue" | "Other";

type R = Record<ObjectLang, string>;

import { spawn } from "child_process";

enum OnError {
  NotFound = 404,
  Completed = 200,
}

let TypeAppCommand: R = {
  Vue: "/V",
  React: "/R",
  Other: String(""),
};

function init() {
  let errLogged: OnError = OnError.NotFound;

  const q = question("Enter Project Type: ").toUpperCase();

  if (q.length > 1 && q.includes(TypeAppCommand.React)) {
    const commands = spawn("cmd", ["/c", commandReact]);
    commands.stdout.on("data", (data) => console.log("data: " + data));
    commands.on("close", (data) => console.log("err: " + data));
    console.log("Completed: " + OnError.Completed);
  } else {
    console.log("Completed: " + OnError.NotFound);
  }
  let quest: LoggedArgsProject = {
    projectName: q,
    args: [TypeAppCommand.React, TypeAppCommand.Vue],
    getOnlineCommands() {
      this.args.forEach((arg) => {
        console.log(arg);
      });
    },
  };

  console.log(getUsersCommands(quest));

  if (q.length > 1 && q.includes(TypeAppCommand.Vue)) {
    const commands = spawn("cmd", ["/c", commandVue]);
    commands.stdout.on("data", (data) => console.log("data: " + data));
    commands.on("close", (data) => console.log("err: " + data));
    console.log("Completed: " + OnError.Completed);
  } else {
    console.log("Completed: " + OnError.NotFound);
  }
  quest = {
    projectName: q,
    args: [TypeAppCommand.React, TypeAppCommand.Vue],
    getOnlineCommands() {
      this.args.forEach((arg) => {
        console.log(arg);
      });
    },
  };

  quest.getOnlineCommands();
  console.log(getUsersCommands(quest));
}

init();
