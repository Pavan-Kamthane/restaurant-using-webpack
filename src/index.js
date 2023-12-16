// src/index.js

import { loadHomePage } from './homePage';
import { loadAboutPage } from './aboutPage';
import { loadContactPage } from './contactPage';

document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    const homeTab = document.getElementById("home-tab");
    const aboutTab = document.getElementById("about-tab");
    const contactTab = document.getElementById("contact-tab");

    homeTab.addEventListener("click", () => {
        clearContentAndSetActive(homeTab);
        loadHomePage(contentDiv);
    });

    aboutTab.addEventListener("click", () => {
        clearContentAndSetActive(aboutTab);
        loadAboutPage(contentDiv);
    });

    contactTab.addEventListener("click", () => {
        clearContentAndSetActive(contactTab);
        loadContactPage(contentDiv);
    });

    // Load Home page by default
    loadHomePage(contentDiv);
});

function clearContentAndSetActive(activeTab) {
    // Clear content
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';

    // Remove active class from all tabs
    const tabs = document.querySelectorAll("nav a");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Set active class on the clicked tab
    activeTab.classList.add("active");
}
