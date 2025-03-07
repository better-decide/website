// Fetch the JSON data
fetch('consulting-services.json')
  .then(response => response.json())  // Parse JSON data
  .then(data => {
    renderContent(data);
  })
  .catch(error => console.error('Error loading JSON data:', error));

// Function to render the content
function renderContent(data) {
    const sectionContainer = document.getElementById("consulting-section");

    // Loop through each section (individuals, businesses)
    data.forEach(section => {
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = section.section.charAt(0).toUpperCase() + section.section.slice(1); // Capitalize first letter of section name

        sectionContainer.appendChild(sectionTitle);

        // Create a list for each section
        const list = document.createElement("ul");

        section.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add("service-item");

            // Create the title with hover effect
            const title = document.createElement("span");
            title.classList.add("service-title");
            title.textContent = item.title;

            // Create the subtext, initially hidden
            const subtext = document.createElement("p");
            subtext.classList.add("service-subtext");
            subtext.textContent = item.subtext;
            subtext.style.display = "none";  // Initially hide subtext

            // Show subtext on hover over the title
            title.addEventListener("mouseover", () => {
                subtext.style.display = "block";
            });
            title.addEventListener("mouseout", () => {
                subtext.style.display = "none";
            });

            listItem.appendChild(title);
            listItem.appendChild(subtext);
            list.appendChild(listItem);
        });

        sectionContainer.appendChild(list);
    });
}
