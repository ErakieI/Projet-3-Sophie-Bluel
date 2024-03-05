const modalAjout = document.querySelector("#modalAjout");
const openModalAjout = document.querySelector("#ajoutPhoto");
const image = document.getElementById("preview-image");
const sendWorks = document.getElementById("sendWorks");
const categorySelect = document.getElementById("categoryForm");
const arrow = document.querySelector("i.fa-arrow-left");
const xmark = document.querySelector("i.fa-xmark");

// Ouvrir la modal
openModalAjout.addEventListener("click", () => {
  modalAjout.style.display = "flex";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  main.style.opacity = "0.6";
});

// Fermer la modal
document.addEventListener("click", (event) => {
  if (!modalAjout.contains(event.target) && event.target !== openModalAjout || event.target === arrow || event.target === xmark) {
    modalAjout.style.display = "none";
  }
});

// Visualisation img
document.getElementById("content").addEventListener("change", function () {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.display = "flex";
      document.querySelector(".fa-image").style.display = "none";
      document.querySelector('label[for="content"]').style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

// Envoi des travaux à l'API
sendWorks.addEventListener("click", (event) => {
  event.preventDefault();
  const titre = document.getElementById("title").value;
  const categorie = document.getElementById("categoryForm").value;
  const photo = document.querySelector("#content").files[0];
  const formData = new FormData();
  formData.append("title", titre);
  formData.append("category", categorie);
  formData.append("image", photo);
  let token = localStorage.getItem("token");

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Ressource créée avec succès :", response);
      } else {
        throw new Error("Erreur lors de la création de la ressource");
      }
    })
    .then((data) => {
      console.log("Ressource créée avec succès :", data);
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
});
