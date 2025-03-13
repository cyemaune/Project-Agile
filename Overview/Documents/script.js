document.querySelector(".search-bar").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let documents = document.querySelectorAll(".document-card");

    documents.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(filter) ? "flex" : "none";
    });
});

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

// Popup functionality
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupTriggers = document.querySelectorAll(".popup-trigger");
    const closeButton = document.querySelector(".close-btn");
    const approveButton = document.querySelector(".approve-btn");
    let currentStatusElement = null;

    popupTriggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            popup.style.display = "block";
            currentStatusElement = this.closest(".document-card").querySelector(".status"); // Select status element
        });
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    approveButton.addEventListener("click", function () {
        if (currentStatusElement) {
            currentStatusElement.textContent = "Approved";
            currentStatusElement.classList.remove("pending");
            currentStatusElement.classList.add("approved");
        }
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

