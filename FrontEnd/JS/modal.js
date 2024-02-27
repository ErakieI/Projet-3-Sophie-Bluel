const modal = document.querySelector("#modal")
const openModal = document.querySelector(".projetsModif a")
// Récuperation des images de l'API
function createArrayModal(works) {
    for (i = 0; i < works.length; i++) {
        const articlePhotos = document.querySelector(".articlePhotos");
        const figureModal = document.createElement("figureModal");
        const img = document.createElement("img");

        img.src = works[i].imageUrl;
        img.alt = works[i].title

        figureModal.appendChild(img);
        articlePhotos.appendChild(figureModal);
    }}

// Appel fetch API pour afficher les images
fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(data => {
    works = data;
    
    createArrayModal(works);
})

// Ouvrir la modal
openModal.addEventListener('click', () => {
    modal.style.display = "flex";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}) 

// Fermer la modal
document.addEventListener('click', (event) => {
    if (!modal.contains(event.target) && event.target !== openModal) {
        modal.style.display = "none";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});

