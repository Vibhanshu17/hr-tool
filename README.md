# AI Crafter - Profile Selection Tool
My submission for `SCB Innovation Hackathon` (28th Feb - 8th March, 2024)
Problem Statement: Develop an innovative solution that integrates with popular professional networking platforms such as LinkedIn, job portals like naukri and Indeed, to automate the candidate screening process for a given job role and location. The solution should analyze candidate profiles, extract relevant information, and assign a comprehensive score to each candidate based on their qualifications, experience, and skills.

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

## Team:
**Vibhanshu Gupta** \t\t\t\t\t \t\t\t\t\t\t **Anshul Agrawal**
Development Engineer \t\t\t\t\t \t\t\t\t\t\t Development Engineer
IT-Projects CCIB TB Trade  \t\t\t\t\t    \t\t\t\t\t\t IT-Projects FCIO Finance
