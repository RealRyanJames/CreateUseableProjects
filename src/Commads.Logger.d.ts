export declare const commandReact = "npm create vite@latest my-app -- --template react-ts";
export declare const commandVue = "npm create vue@latest";
export type LoggedArgsProject = {
    projectName: string;
    args: string[];
    getOnlineCommands: () => void;
};
export declare const getUsersCommands: (logger: LoggedArgsProject) => string | string[];
export declare const runCommandsArgs: LoggedArgsProject;
//# sourceMappingURL=Commads.Logger.d.ts.map