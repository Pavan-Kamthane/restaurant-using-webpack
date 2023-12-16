import { createImage } from './utils';

export function loadHomePage(contentDiv) {
    const header = document.createElement("div");
    header.innerHTML = "<h2>Welcome to Our Home Page</h2>";
    contentDiv.appendChild(header);

    const details = document.createElement("div");
    details.innerHTML = `
        <p>
        Pavan Kamthane's Restaurant is a family-owned restaurant that has been serving the community for over 20 years.
        </p>
        <p>
        We are proud to offer a variety of dishes from around the world, including traditional Indian, Italian, and American cuisine.        
        </p>
    `;
    contentDiv.appendChild(details);

    const image = createImage("../src/images/img1.jpeg", "Cozy Home");
    contentDiv.appendChild(image);
}