// src/contactPage.js

export function loadContactPage(contentDiv) {
    const header = document.createElement("div");
    header.innerHTML = "<h2>Contact Us</h2>";
    contentDiv.appendChild(header);

    const details = document.createElement("div");
    details.innerHTML = `
        <p>Reach out to us for reservations, inquiries, or just to say hello! Our team is ready to assist you.</p>
        Email: <a href="mailto:pavankamthane4@gmail.com">pavankamthane4@gmail.com<br>
        <a href="https://github.com/Pavan-Kamthane" target="_blank">github</a>
        </p>
    `;
    contentDiv.appendChild(details);

    const map = document.createElement("div");
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0666201837325!2d-0.12892418385249194!3d51.507350269666984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876049aaf031a1d%3A0x7569a100c0ff53fa!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1636482443155!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    contentDiv.appendChild(map);
}
