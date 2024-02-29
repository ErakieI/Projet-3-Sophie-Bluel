const modalAjout = document.querySelector("#modalAjout");
const openModalAjout = document.querySelector("#ajoutPhoto");


// Ouvrir la modal
openModalAjout.addEventListener("click", () => {
    modalAjout.style.display = "flex";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    main.style.opacity = "0.6";
  });
  
  // Fermer la modal
  document.addEventListener("click", (event) => {
    if (
      !modalAjout.contains(event.target) &&
      event.target !== openModalAjout
    ) {
      modalAjout.style.display = "none";
    }
})