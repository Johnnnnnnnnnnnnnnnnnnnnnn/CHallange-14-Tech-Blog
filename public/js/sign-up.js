async function signUpHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && password) {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" }
        });
  
        if (response.ok) {
          document.location.replace("/dashboard");
        } 
        else {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
      } catch (error) {
        alert(error.message);
      }
    }
  }
  
  document.querySelector(".signUp-form").addEventListener("submit", signUpHandler);