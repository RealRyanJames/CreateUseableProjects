import { question } from "readline-sync";
import { commandReact, commandVue, getUsersCommands, } from "../Commands/Commads.Logger.js";
import { spawn } from "child_process";
var OnError;
(function (OnError) {
    OnError[OnError["NotFound"] = 404] = "NotFound";
    OnError[OnError["Completed"] = 200] = "Completed";
})(OnError || (OnError = {}));
let TypeAppCommand = {
    Vue: "/V",
    React: "/R",
    Other: String(""),
};
function init() {
    let errLogged = OnError.NotFound;
    const q = question("Enter Project Type: ").toUpperCase();
    if (q.length > 1 && q.includes(TypeAppCommand.React)) {
        const commands = spawn("cmd", ["/c", commandReact]);
        commands.stdout.on("data", (data) => console.log("data: " + data));
        commands.on("close", (data) => console.log("err: " + data));
        console.log("Completed: " + OnError.Completed);
    }
    else {
        console.log("Completed: " + OnError.NotFound);
    }
    let quest = {
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
    }
    else {
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
//# sourceMappingURL=main.js.map