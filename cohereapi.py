import cohere

co = cohere.Client('grqIE4jIdiHJz9llmB8SSzVHRyQ1TVtQMegrOx8u')

def coheresapi(prompt):
    response = co.generate(  
        model='xlarge',  
        prompt = prompt,  
        max_tokens=40,  
        temperature=0.6,  
        stop_sequences=["--"])

    drink_idea = response.generations[0].text
    print (drink_idea)

coheresapi("Tell me a joke about food.")
