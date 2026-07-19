export const commandReact =
  "npm create vite@latest my-app -- --template react-ts";

export const commandVue = "npm create vue@latest";

export type LoggedArgsProject = {
  projectName: string;
  args: string[];
  getOnlineCommands: () => void;
};

export const getUsersCommands = (logger: LoggedArgsProject) => {
  if (typeof logger.args == "string" && logger.args == "React") {
    logger.projectName = commandReact;
  } else if (typeof logger.args == "string" && String(logger.args) == "Vue") {
    logger.projectName = commandVue;
  }

  return logger.projectName || logger.args;
};

export const runCommandsArgs: LoggedArgsProject = {
  projectName: String("Empty"),
  args: ["/ReactJS", "/VueJS"],
  getOnlineCommands() {
    this.args.forEach((arg) => {
      console.log(arg.toUpperCase());
    });
  },
};
