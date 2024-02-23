// Elements de connexion
const element = {
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    submit: document.querySelector("#btnConnexion"),
  };

const btnConnexion = document.getElementById("submit")
btnConnexion.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailForm = event.target.email.value;
    let passwordForm = event.target.password.value;
    
    let data = {
             email: emailForm,
             password: passwordForm
         };
    console.log(data);

    fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data) 
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('La requête a échoué');
      }      
      return response.json();
  })
  .then(data => {
      console.log(data);
      
      // Stocker le token JWT dans le stockage local ou dans un cookie
      localStorage.setItem('token', data.token);
  
      if (data) {
          // Redirection vers la page HTML Admin
          window.location.href = "Admin.html";
          console.log("Bienvenue, Sophie.");
      } else {
        document.getElementById('errorMessage').textContent = "Email ou mot de passe incorrect.";
      }
  })
  .catch(error => {
      console.error('Erreur lors de la requête :', error);
  });
})  




