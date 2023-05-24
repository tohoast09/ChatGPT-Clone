    const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");

    // Function to append a user message to the chat container
    function appendUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = message;
        chatContainer.appendChild(userMessage);
    }

    // Function to append an assistant message to the chat container
    function appendAssistantMessage(message) {
        const assistantMessage = document.createElement("div");
        assistantMessage.className = "assistant-message";
        assistantMessage.textContent = message;
        chatContainer.appendChild(assistantMessage);
    }

    // Function to send a user message and receive a response from the ChatGPT model
    function sendMessage() {
        const userMessage = userInput.value;
        appendUserMessage(userMessage);

        const requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
            temperature: 0.7
            })
    };

    // Send a request to the ChatGPT API to get the assistant's response
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        .then(response => response.json())
        .then(data => {
        const assistantMessage = data.choices[0].message.content;
        appendAssistantMessage(assistantMessage);
        })
        //console.log(error);
        .catch(error => console.log(error));

    userInput.value = "";
    }
