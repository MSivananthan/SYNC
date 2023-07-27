// JavaScript code for E-learning platform

let score = 0;
const totalQuestions = 2;

// Function to handle sign up form submission
function handleSignupForm(event) {
    event.preventDefault(); // Prevent form submission (default behavior)

    // Get form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // You can perform additional validation here before proceeding to the next page

    // Open a new page for document upload
    window.location.href = "document_upload.html";
}

// Function to handle document upload form submission
function handleDocumentUploadForm(event) {
    event.preventDefault(); // Prevent form submission (default behavior)

    // Get file input value (you can handle the uploaded file here)
    const documentFile = document.getElementById("document").files[0];

    // You can perform additional validation or upload processing here

    // Open a new page for online assessments
    window.location.href = "online_assessments.html";
}

// Function to handle online assessments submission
function submitAssessment() {
    // Get the selected values of each question (you can handle the assessment data here)
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');

    // Calculate the score based on the answers
    score = 0; // Reset score before calculating
    if (q1Answer && q2Answer) {
        if (q1Answer.value === "paris") {
            score += 1;
        }
        if (q2Answer.value === "Naredra Modi") {
            score += 1;
        }
    }

    // Open a new page for result display
    window.location.href = `assessment_result.html?score=${score}`;
}

// Add event listeners for form submissions
const signupForm = document.querySelector("#signup form");
signupForm.addEventListener("submit", handleSignupForm);

const documentUploadForm = document.querySelector("#upload form");
documentUploadForm.addEventListener("submit", handleDocumentUploadForm);
