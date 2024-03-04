class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend");
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setStateFunc(prevState => ({...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;