function getBotResponse(input) {
    //greetings
    if (input == "hI") {
        return "Hey";
    } else if (input == "good") {
        return "That's Great!";
    } else if (input == "help") {
        return "NOT AVAILABLE";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}