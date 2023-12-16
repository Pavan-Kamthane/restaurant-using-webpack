// src/landingPage.js

import { createImage } from './utils'; // Create a utility function for creating images

export function loadLandingPage(contentDiv) {
    // Header
    const header = document.createElement("div");
    header.innerHTML = "<h2>Welcome to My Restaurant</h2>";
    contentDiv.appendChild(header);

    // Restaurant details
    const details = document.createElement("div");
    details.innerHTML = `
        <p>Discover the finest culinary experience at My Restaurant. Our chefs prepare exquisite dishes using the freshest ingredients.</p>
        <p>Explore our menu and contact us for reservations. We look forward to serving you!</p>
    `;
    contentDiv.appendChild(details);

    // Dummy images
    const image1 = createImage("../src/images/dish1.jpeg", "Delicious Dish 1");
    const image2 = createImage("../src/images/dish2.jpeg", "Delicious Dish 2");

    contentDiv.appendChild(image1);
    contentDiv.appendChild(image2);
}
