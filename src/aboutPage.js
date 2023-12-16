// src/aboutPage.js

import { createImage } from './utils';

export function loadAboutPage(contentDiv) {
    const header = document.createElement("div");
    header.innerHTML = "<h2>About Our Restaurant</h2>";
    contentDiv.appendChild(header);

    const details = document.createElement("div");
    details.innerHTML = `
        <p>Explore the story behind My Restaurant. We take pride in our culinary journey, bringing you flavors from around the world.</p>
        <p>Join us in the celebration of diverse cuisines and the passion for exceptional dining.</p>
    `;
    contentDiv.appendChild(details);

    const image = createImage("../src/images/dish1.jpeg", "About Us");
    contentDiv.appendChild(image);
}
