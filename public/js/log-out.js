async function logOut() {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } 
    else {
      alert(response.statusText);
    }
  }
  
  document.querySelector("#logOut").addEventListener("click", logOut);