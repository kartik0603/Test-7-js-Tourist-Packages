const packages = [
    { title: "Beach Paradise", price: 500, rating: 4.7, image: "https://via.placeholder.com/300x200.png?text=Beach+Paradise" },
    { title: "Mountain Adventure", price: 750, rating: 4.9, image: "https://via.placeholder.com/300x200.png?text=Mountain+Adventure" },
    { title: "City Tour", price: 300, rating: 4.5, image: "https://via.placeholder.com/300x200.png?text=City+Tour" },
    { title: "Desert Safari", price: 600, rating: 4.6, image: "https://via.placeholder.com/300x200.png?text=Desert+Safari" },
    { title: "Jungle Expedition", price: 700, rating: 4.8, image: "https://via.placeholder.com/300x200.png?text=Jungle+Expedition" },
    { title: "Historical Landmarks", price: 450, rating: 4.4, image: "https://via.placeholder.com/300x200.png?text=Historical+Landmarks" },
    { title: "Island Getaway", price: 850, rating: 4.9, image: "https://via.placeholder.com/300x200.png?text=Island+Getaway" },
    { title: "Cultural Experience", price: 550, rating: 4.5, image: "https://via.placeholder.com/300x200.png?text=Cultural+Experience" },
    { title: "Snowy Peaks", price: 800, rating: 4.7, image: "https://via.placeholder.com/300x200.png?text=Snowy+Peaks" },
    { title: "Countryside Escape", price: 400, rating: 4.3, image: "https://via.placeholder.com/300x200.png?text=Countryside+Escape" },
];

document.addEventListener("DOMContentLoaded", () => {
    const packageContainer = document.getElementById("packages");
    const sortSelect = document.getElementById("sort");

    const renderPackages = (packages) => {
        packageContainer.innerHTML = '';
        packages.forEach(pkg => {
            const packageElement = document.createElement("div");
            packageElement.className = "package";
            packageElement.innerHTML = `
                <img src="${pkg.image}" alt="${pkg.title}">
                <h2>${pkg.title}</h2>
                <p class="price">$${pkg.price}</p>
                <p class="rating">Rating: ${pkg.rating} &#9733;</p>
            `;
            packageContainer.appendChild(packageElement);
        });
    };

    const sortPackages = (criteria) => {
        const sortedPackages = [...packages].sort((a, b) => {
            if (criteria === 'title') {
                return a[criteria].localeCompare(b[criteria]);
            } else {
                return a[criteria] - b[criteria];
            }
        });
        renderPackages(sortedPackages);
    };

    sortSelect.addEventListener("change", (event) => {
        sortPackages(event.target.value);
    });

    renderPackages(packages);
});
