class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message){
        console.log(message);
        const lowercase = message.toLowerCase();

        // this.actionProvider.reply(message);

        if(lowercase.includes("hello")){
            this.actionProvider.greet();
        }
        else if(message.includes("introduce")){
            this.actionProvider.introduce();
        }
        else{
            this.actionProvider.dont_answer();
        }


    }
}

export default MessageParser;