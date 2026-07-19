import { question } from "readline-sync";
import {
  commandReact,
  commandVue,
  getUsersCommands,
  runCommandsArgs,
  type LoggedArgsProject,
} from "./Commads.Logger.js";

import { spawn } from "child_process";

enum OnError {
  NotFound = 404,
  Completed = 200,
}

function init() {
  let errLogged: OnError = OnError.NotFound;

  const q = question("Enter Project Type: ").toUpperCase();

  if (q.length > 1 && q.includes("/R")) {
    const commands = spawn("cmd", ["/c", commandReact]);
    commands.stdout.on("data", (data) => console.log("data: " + data));
    commands.on("close", (data) => console.log("err: " + data));
    console.log("Completed: " + OnError.Completed);
  } else {
    console.log("Completed: " + OnError.NotFound);
  }
  let quest: LoggedArgsProject = {
    projectName: q,
    args: ["React", "/Vue"],
    getOnlineCommands() {
      this.args.forEach((arg) => {
        console.log(arg);
      });
    },
  };

  console.log(getUsersCommands(quest));

  if (q.length > 1 && q.includes("/V")) {
    const commands = spawn("cmd", ["/c", commandVue]);
    commands.stdout.on("data", (data) => console.log("data: " + data));
    commands.on("close", (data) => console.log("err: " + data));
    console.log("Completed: " + OnError.Completed);
  } else {
    console.log("Completed: " + OnError.NotFound);
  }
  quest = {
    projectName: q,
    args: ["React", "/Vue"],
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
