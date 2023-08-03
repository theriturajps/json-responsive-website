function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + "....";
    }
    return description;
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("json-responsive-website/assets/content.json")
        .then(response => response.json())
        .then(data => {
            const contentContainer = document.getElementById("contentContainer");

            data.forEach(item => {
                const contentItem = document.createElement("div");
                contentItem.classList.add("content_item"); // Add the "content_item" class

                const thumbnailImg = document.createElement("img");
                thumbnailImg.classList.add("thumbnail_Img"); // Add the "thumbnail_Img" class
                thumbnailImg.src = item.thumbnail;
                thumbnailImg.alt = item.title;

                const title = document.createElement("p");
                title.classList.add("p_title"); // Add the "p_title" class
                title.textContent = item.title;

                const description = document.createElement("p");
                description.classList.add("p_description"); // Add the "p_description" class
                description.textContent = truncateDescription(item.description, 150);

                const downloadButtonsContainer = document.createElement("div");
                downloadButtonsContainer.classList.add("content_btn"); // Add the "content_btn" class

                item.downloadButtons.forEach(button => {
                    const downloadButton = document.createElement("a");
                    downloadButton.classList.add("a_btn"); // Add the "a_btn" class
                        downloadButton.href = button.link;
                        downloadButton.textContent = button.title;
                        downloadButton.setAttribute("download", "");
                        downloadButtonsContainer.appendChild(downloadButton);
                });

                contentItem.appendChild(thumbnailImg);
                contentItem.appendChild(title);
                contentItem.appendChild(description);
                contentItem.appendChild(downloadButtonsContainer);

                contentContainer.appendChild(contentItem);
            });
        })
        .catch(error => console.error("Error loading content:", error));
});
