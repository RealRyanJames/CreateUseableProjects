import { exec } from "node:child_process";

type Types = {
  command: string;
  args: string[];
  getCommandFromClient(): void;
};

enum OnError {
  NotFound = 404,
  Completed = 200,
}

function init() {
  let errLogged: OnError = OnError.NotFound;

  let command = "npm create vite@latest my-app -- --template react-ts";
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(`${err} Has Been Created: ${errLogged}`);
    }

    else if () {}
  });
}
