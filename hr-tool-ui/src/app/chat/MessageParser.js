import { ThirtyFpsSelect } from "@mui/icons-material";

class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message){
        console.log(message);
        message = message.toLowerCase();

        // this.actionProvider.reply(message);
        if(message === "!hello"){
            this.actionProvider.greet();
        }
        else if(message === "!introduce"){
            this.actionProvider.introduce();
        }
        else if(message[0] === "?"){
            message = message.slice(1)
            this.actionProvider.qna(message)
            // this.actionProvider.dont_answer();
        }
        else if(message[0] === "#"){
            message = message.slice(1)
            this.actionProvider.ner(message)
        }
        else {
            this.actionProvider.dont_answer();
        }
    }
}

export default MessageParser;