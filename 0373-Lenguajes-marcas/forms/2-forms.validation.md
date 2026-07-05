# Validacion de formularios

```html
   <form id="simpleForm" action="#" method="POST">
        <!-- Name -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <!-- Email -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="age">Age (between 18 and 100):</label>
        <input type="number" id="age" name="age" min="18" max="100" required>

        <!-- Submit Button -->
        <button type="submit">Submit</button>
    </form>
```


```html
<form id="numberForm" onsubmit="return validateForm()">
        <!-- Age -->
        <label for="age">Age (between 18 and 100):</label>
        <input type="number" id="age" name="age" required>

        <!-- Error message -->
        <div id="error-message" class="error"></div>

        <!-- Submit Button -->
        <button type="submit">Submit</button>
    </form>

    <script>
        function validateForm() {
            var age = document.getElementById("age").value;
            var errorMessage = document.getElementById("error-message");
            errorMessage.textContent = ""; // Clear previous error messages

            // Validate age
            if (age < 18 || age > 100) {
                errorMessage.textContent = "Por favor, introduce una edad válida entre 18 y 100.";
                return false; // Prevent form submission
            }

            // If validation passes
            return true; // Allow form submission
        }
    </script>
```
