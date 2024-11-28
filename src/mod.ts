export {Command} from "./command.ts";
export * from "./command-group.ts";
export * from "./context.ts";

class CommandGroup {
    command() {
        return this;
    }

    addToScope() {
        return this;
    }

    setCommands() {
        return this;
    }
}

export const commands = () => () => ({})

export {CommandGroup};
