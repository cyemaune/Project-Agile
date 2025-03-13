document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profile-button");
    const profileDropdown = document.getElementById("profileDropdown");

    function toggleProfileDropdown(event) {
        event.stopPropagation(); // Prevents event bubbling
        profileDropdown.style.display = (profileDropdown.style.display === "block") ? "none" : "block";
    }

    function closeDropdown(event) {
        if (!profileDropdown.contains(event.target) && !profileButton.contains(event.target)) {
            profileDropdown.style.display = "none";
        }
    }

    profileButton.addEventListener("click", toggleProfileDropdown);
    document.addEventListener("click", closeDropdown);
});

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".chat-input input");
    const sendButton = document.querySelector(".chat-input button");
    const messagesContainer = document.querySelector(".messages");

    function sendMessage() {
        const messageText = inputField.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", "sent");
            messageElement.innerHTML = `<p>${messageText}</p>`;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
            inputField.value = "";
        }
    }

    sendButton.addEventListener("click", sendMessage);

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});


