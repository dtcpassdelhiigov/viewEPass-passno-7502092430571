
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const captchaInput = document.getElementById("captcha");
    const mobileNumberInput = document.getElementById("mobile-number");
    const refreshBtn = document.getElementById("refresh-btn");
    const captchaImage = document.getElementById("captchaImage");
    
    // Array of captcha image filenames
    const captchaImages = ["captcha1.png", "captcha2.png", "captcha3.png", "captcha4.png", "captcha5.png", "captcha6.png", "captcha7.png", "captcha8.png", "captcha9.png", "captcha10.png"];
    const captchaTexts = ["X0Db6Z", "Te6r6c", "EEqeMv","W3Mi5H","Djw21c", "j4nUcf", "wfDER0", "eivfGw", "7v21aL", "G3jU13"];
    let randomIndex; // Define randomIndex at a higher scope

// Step 2: Assign a random index value on page load or refresh
    window.onload = function() {
        randomIndex = Math.floor(Math.random() * captchaImages.length);
        captchaImage.src = captchaImages[randomIndex];
        console.log(randomIndex);
    };

    refreshBtn.addEventListener("click", function() {
        // Generate a random index to select a captcha image
        randomIndex = Math.floor(Math.random() * captchaImages.length);
        // Update the src of the captcha image with a new random captcha image
        captchaImage.src = captchaImages[randomIndex];
        console.log(randomIndex);
        console.log("randomIndex1");
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Check if the captcha field is empty
        if (!captchaInput.value) {
            alert("Please fill captcha");
            return; // Stop the function execution here
        }

        // Check if the mobile number field is empty
        if (!mobileNumberInput.value) {
            alert("Please fill your mobile.");
            return; // Stop the function execution here
        }
         
        // Check if the mobile number field is wrong
        if (mobileNumberInput.value !== "8595818420") {
            alert("mobile no. not registered With this passid .\nPlease try again");
            location.reload();
            return; // Stop the function execution here
        }
        
        // Check if the entered captcha is correct
        if (captchaInput.value !== captchaTexts[randomIndex]) {
            alert("Captcha validation failed. Please try again");
            location.reload();
            return; // Stop the function execution here
        }
        console.log(randomIndex);
        console.log("randomIndex2");
        
        // If all checks pass, submit the form (or do whatever is needed next)
        // form.submit(); // Uncomment this line if you want to submit the form after validation
        console.log("Form submitted"); // Placeholder action

        window.location.href = "pass.html";
    });

});