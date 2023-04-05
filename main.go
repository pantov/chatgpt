package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"

	openai "github.com/sashabaranov/go-openai"
)

func main() {
	// Get the API key from the environment variable OPENAI_API_KEY

	//	apiKey := os.Getenv("OPENAI_API_KEY")
	apiKey := ""
	client := openai.NewClient(apiKey)

	http.Handle("/", http.FileServer(http.Dir("static")))
	http.HandleFunc("/chat", func(w http.ResponseWriter, r *http.Request) {
		var messages []openai.ChatCompletionMessage
		err := json.NewDecoder(r.Body).Decode(&messages)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		ans, shouldReturn := chatGPT(client, messages)
		if shouldReturn {
			http.Error(w, "ChatGPT error", http.StatusBadRequest)
			return
		}
		// Serialize the response as JSON and write it back to the client
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte(ans))
	})

	address := "localhost:80"
	log.Printf("Starting server, go to http://%s/ to try it out!", address)
	http.ListenAndServe(address, nil)
}

func chatGPT(client *openai.Client, messages []openai.ChatCompletionMessage) (string, bool) {
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model:    openai.GPT3Dot5Turbo,
			Messages: messages,
		},
	)

	if err != nil {
		log.Printf("ChatCompletion error: %v\n", err)
		return "", true
	}

	return resp.Choices[0].Message.Content, false
}
