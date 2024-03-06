class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message){
        console.log(message);
        message = message.toLowerCase();

        // this.actionProvider.reply(message);
        if(message.includes("hello")){
            this.actionProvider.greet();
        }
        else if(message.includes("introduce")){
            this.actionProvider.introduce();
        }
        else{
            this.actionProvider.qna(message)
            // this.actionProvider.dont_answer();
        }
    }
}

export default MessageParser;