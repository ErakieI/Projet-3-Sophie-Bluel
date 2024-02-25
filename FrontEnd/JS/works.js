fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
        // Vous pouvez utiliser les données ici
        console.log(data);
        const works = data;
        const gallery = document.querySelector(".gallery");

        for (i = 0; i < works.length; i++) {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figCaption = document.createElement("figCaption");

            img.src = works[i].imageUrl;
            img.alt = works[i].title
            figCaption.textContent = works[i].title;

            figure.appendChild(img);
            figure.appendChild(figCaption);
            gallery.appendChild(figure);
    }
    })
