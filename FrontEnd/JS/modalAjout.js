const modalAjout = document.querySelector("#modalAjout");
const openModalAjout = document.querySelector("#ajoutPhoto");
const image = document.getElementById("preview-image");
const title = document.getElementById("title");
const sendWorks = document.getElementById("sendWorks");
const categorySelect = document.getElementById("categoryForm");
let categoryValue;

// Ouvrir la modal
openModalAjout.addEventListener("click", () => {
  modalAjout.style.display = "flex";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  main.style.opacity = "0.6";
});

// Fermer la modal
document.addEventListener("click", (event) => {
  if (!modalAjout.contains(event.target) && event.target !== openModalAjout) {
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
  const categorySelect = document.getElementById("categoryForm");
  const selectedOption = categorySelect.options[categorySelect.selectedIndex];
  const dataId = selectedOption.getAttribute("data-id");

console.log(dataId);
  const formData = new FormData();
  formData.append("image", image.src);
  formData.append("title", title.value);
  formData.append("category", category);

  fetch("http://localhost:5678/api/works/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((data) => {
    console.log(data);
  });
});
