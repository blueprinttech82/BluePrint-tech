import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// ===============================
// PORTFOLIO
// ===============================

const portfolioGrid = document.querySelector("#portfolioGrid");

async function loadProjects() {

    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = `
        <p class="portfolio-loading">Loading projects...</p>
    `;

    try {

        const projectsQuery = query(
            collection(db, "projects"),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(projectsQuery);

        if (snapshot.empty) {

            portfolioGrid.innerHTML = `
                <p>No projects available yet.</p>
            `;

            return;
        }


        portfolioGrid.innerHTML = "";


        snapshot.forEach((doc) => {

            const project = doc.data();

            const card = document.createElement("div");

            card.className = "portfolio-card";

            card.innerHTML = `
                <img
                    src="${project.imageUrl}"
                    alt="${project.name}"
                    class="portfolio-image"
                >

                <div class="portfolio-content">

                    <span class="portfolio-category">
                        ${project.category || "Project"}
                    </span>

                    <h3>${project.name}</h3>

                    <p>
                        ${project.description || ""}
                    </p>

                </div>
            `;

            portfolioGrid.appendChild(card);

        });


    } catch (error) {

        console.error("Error loading projects:", error);

        portfolioGrid.innerHTML = `
            <p>
                Unable to load projects right now.
            </p>
        `;

    }

}


// Load projects
loadProjects();


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    });

              }
