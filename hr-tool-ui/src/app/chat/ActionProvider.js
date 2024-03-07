class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
        // this.HF_API_TOKEN = process.env.HUGGINGFACE_TOKEN
        // this.model = "mistralai/Mixtral-8x7B-Instruct-v0.1"
    }
    
    greet = () => {
        const message = this.createChatBotMessage("Hey!");
        this.addMessageToState(message);
    }

    introduce = () => {
        const message = this.createChatBotMessage("I'm an AI bot for answering HR related questions");
        this.addMessageToState(message);
    }

    qna = async (input) => {
        const question_context = input.split("\\n\\n");
        const res = question_answer({inputs:{question:question_context[1],context:question_context[0]}})
                    .then((res) => res['answer'])

        const message = this.createChatBotMessage(res)
        this.addMessageToState(message)
    }

    ner = async (input) => {
        console.log("input ", input)
        const res = await named_entity_recognition({inputs:input})
                    .then((response) => response.map(r => r['word']))
        console.log("final res: ", res)
        const message = this.createChatBotMessage(res.join(" | "))
        this.addMessageToState(message)
    }

    dont_answer = () => {
        const message = this.createChatBotMessage("I don't understand. Stay tuned for my next update!");
        this.addMessageToState(message);

        // const res = await new HfInference(this.HF_API_TOKEN).conversational({
        //     model: this.model,
        //     inputs: q,
        // })
        
        // const models = ["deepset/roberta-base-squad2", "mistralai/Mixtral-8x7B-Instruct-v0.1", "facebook/bart-large-cnn"];
        // const url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"
        // const response = await fetch(url, {headers: {"Authorization": `Bearer ${HF_API_TOKEN}`}, method: "POST", data:sentence});
    }

    addMessageToState = (message) => {
        this.setStateFunc(prevState => ({...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

async function question_answer(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
            options: {wait_for_model: true}
        }
    );
    const result = await response.json();
    return result;
}

async function named_entity_recognition(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/dbmdz/bert-large-cased-finetuned-conll03-english",
        {
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
            options: {wait_for_model: true}
        }
    );
    const result = await response.json();
    console.log(result)
    return result;
}

export default ActionProvider;