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
