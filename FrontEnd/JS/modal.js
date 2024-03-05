const modal = document.querySelector("#modal");
const openModal = document.querySelector(".projetsModif a");
const openModal2 = document.querySelector(".edition a");
const main = document.querySelector("#main");
const token = localStorage.getItem("token");

// Récuperation et suppression des images de l'API 
function createArrayModal(works) {
  for (let i = 0; i < works.length; i++) {
    const articlePhotos = document.querySelector(".articlePhotos");
    const figureModal = document.createElement("figureModal");
    const img = document.createElement("img");
    const trash = document.createElement("i");

    img.src = works[i].imageUrl;
    img.alt = works[i].title;
    figureModal.id = works[i].id;
    trash.className = "fa-solid fa-trash-can";

    figureModal.appendChild(img);
    figureModal.appendChild(trash);
    articlePhotos.appendChild(figureModal);

    // Suppression des élements
    trash.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const figureModal = event.target.parentElement;
      console.log(figureModal.id);
      fetch("http://localhost:5678/api/works/" + figureModal.id, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
        }
      });
    });
  }
}


// Appel fetch API pour afficher les images
fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    works = data;

    createArrayModal(works);
  });

// Ouvrir la modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  main.style.opacity = "0.6";
});
openModal2.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  main.style.opacity = "0.6";
});

// Fermer la modal
document.addEventListener("click", (event) => {
  if (
    !modal.contains(event.target) &&
    !modalAjout.contains(event.target) &&
    event.target !== openModal &&
    event.target !== openModal2 ||
    event.target === xmark
  ) {
    modal.style.display = "none";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    main.style.opacity = "";
  }
});
