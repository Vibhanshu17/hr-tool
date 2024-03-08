# AI Crafter - Profile Selection Tool
My submission for `SCB Innovation Hackathon` (28th Feb - 8th March, 2024)

**_Features_**
> * Scrape LinkedIn for profiles based on keywords
> * Store data in MongoDB database and query it
> * Run `all-MiniLM-L6-v2` model to generate embeddings
> * A Chatbot with QnA and NER options

**_Models_**
> * Vector Embedding:  `sentence-transformers/all-MiniLM-L6-v2`
> * QnA:               `deepset/roberta-base-squad2`
> * NER:               `dbmdz/bert-large-cased-finetuned-conll03-english`

### Back End:
This is a NextJS application. It also has a simple Flask backend with a few endpoints to run python code. 

### Front End:
It's essentially Tailwind CSS with one MUI accordion component
