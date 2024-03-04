import os
import requests
# import openai 

############################## HUGGING FACE ##############################
# huggingFace_token = "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"
HUGGINFACE_TOKEN = os.getenv("HUGGINFACE_TOKEN")
embedding_url = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"
# embedding_url = "https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2"

def generate_embedding_hf(text: str) -> list[float]:
    response = requests.post(
        embedding_url,
        headers={"Authorization": f"Bearer {HUGGINFACE_TOKEN}"},
        json={"inputs": text}
    )
    if response.status_code != 200:
        raise ValueError(f"Request failed with status code {response.status_code}: {response.text}")
    return response.json()
# print(generate_embedding("good movies to watch"))


################################# OPENAI #################################
# OpenAI api key
# openai.api_key = ""

# def generate_embedding_openai(text: str) -> list[float]:
#     response = openai.Embedding.create(
#         model = "text-embedding-ada-002",
#         input = text
#     )
#     return response['data'][0]['embedding']