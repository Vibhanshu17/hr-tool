import { HfInference } from "@huggingface/inference";
// import fetch from "node-fetch";

async function question_answer(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
        // this.HF_API_TOKEN = process.env.HUGGINGFACE_TOKEN
        // this.model = "mistralai/Mixtral-8x7B-Instruct-v0.1"
    }
    
    greet = () => {
        const message = this.createChatBotMessage("Hello friend");
        this.addMessageToState(message);
    }
    
    introduce = () => {
        const message = this.createChatBotMessage("I'm an AI bot at your service");
        this.addMessageToState(message);
    }

    qna = async (input) => {
        const question_context = input.split("\\n\\n");
        console.log("question_context", question_context)
        const res = question_answer({inputs:{question:question_context[1],context:question_context[0]}})
        .then((res) => res['answer'])

        const message = this.createChatBotMessage(res)
        this.addMessageToState(message)
    }

    dont_answer = () => {
        // const res = await new HfInference(this.HF_API_TOKEN).conversational({
        //     model: this.model,
        //     inputs: q,
        // })
        
        // const models = ["deepset/roberta-base-squad2", "mistralai/Mixtral-8x7B-Instruct-v0.1", "facebook/bart-large-cnn"];
        // const url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"
        // const response = await fetch(url, {headers: {"Authorization": `Bearer ${HF_API_TOKEN}`}, method: "POST", data:sentence});

        const message = this.createChatBotMessage("I don't understand. Stay tuned for my next update!");
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setStateFunc(prevState => ({...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;