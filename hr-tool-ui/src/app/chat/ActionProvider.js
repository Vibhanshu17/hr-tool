import { HfInference } from "@huggingface/inference";


class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
        this.HF_API_TOKEN = process.env.HUGGINGFACE_TOKEN
        this.model = "mistralai/Mixtral-8x7B-Instruct-v0.1"
    }
    
    reply = async (q) => { // q: query
        // const res = await new HfInference(this.HF_API_TOKEN).conversational({
        //     model: this.model,
        //     inputs: q,
        // })
        // console.log("await function completed!")
        // console.log("generated result: " + res)
        // console.log(res.generated_text)
        
        // this.addMessageToState(this.createChatBotMessage(res));

        // "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"
        const url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"

        // const response = await fetch(`https://api-inference.huggingface.co/models/${this.model}`, {headers: {"Authorization": `Bearer ${this.HF_API_TOKEN}`}, method: "POST", data:q});
        // const res = await response.json()
        // this.addMessageToState(this.createChatBotMessage(res))

    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend");
        this.addMessageToState(message);
    }

    introduce = () => {
        const message = this.createChatBotMessage("I'm an AI bot at your service");
        this.addMessageToState(message);
    }

    dont_answer = () => {
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