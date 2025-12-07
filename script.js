document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Récupération des éléments
    // ----------------------------
    const catalogueContainer = document.getElementById('catalogue-container');
    const noResults = document.getElementById('no-results');
    const detailView = document.getElementById('detail-view');
    const carDetailContainer = document.getElementById('car-detail-container');
    const backBtn = document.getElementById('back-to-catalogue');
    const homeView = document.getElementById('home-view');

    if (!catalogueContainer) return;

    // ----------------------------
    // MENU BURGER MOBILE
    // ----------------------------
 const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("open"); // menu glisse
    burger.classList.toggle("active"); // animation burger
});

document.querySelectorAll(".nav-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        burger.classList.remove("active");
    });
});


    // ----------------------------
    // BADGE COLOR
    // ----------------------------
    const createBadge = (statut) => {
        const classes = {
            "Disponible": "badge disponible",
            "Vendu": "badge vendu",
            "Nouvel arrivage": "badge nouvel-arrivage"
        };
        return `<span class="${classes[statut] || 'badge'}">${statut}</span>`;
    };

    // ----------------------------
    // RENDU DU CATALOGUE
    // ----------------------------
    const renderCatalogue = (list) => {
        catalogueContainer.innerHTML = '';

        if (!list || list.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        list.forEach(voiture => {
            const prix = typeof voiture.prix === 'number' ? formatCFA(voiture.prix) : 'N/A';
            const km = voiture.kilometrage !== null ? `${voiture.kilometrage.toLocaleString()} km` : 'N/A';

            const card = `
                <div class="car-card" data-id="${voiture.id}">
                    <div class="card-image">
                        <img src="${voiture.image}" alt="${voiture.marque} ${voiture.modele}">
                        ${createBadge(voiture.statut)}
                    </div>
                    <div class="card-content">
                        <h3>${voiture.marque} ${voiture.modele} (${voiture.annee})</h3>
                        <div class="price">${prix}</div>
                        <div class="details-link">Pour plus de détails, appuyez ici</div>
                        <div class="card-details">
                            <span><i data-lucide="activity"></i> ${km}</span>
                            <span><i data-lucide="zap"></i> ${voiture.energie}</span>
                            <span><i data-lucide="settings"></i> ${voiture.transmission}</span>
                        </div>
                    </div>
                </div>
            `;
            catalogueContainer.insertAdjacentHTML("beforeend", card);
        });

        if (window.lucide) lucide.createIcons();

        document.querySelectorAll('.car-card').forEach(card => {
            card.addEventListener('click', () => {
                const carId = Number(card.dataset.id);
                showCarDetail(carId);
            });
        });
    };

    // ----------------------------
    // AFFICHAGE DU DETAIL
    // ----------------------------
    const showCarDetail = (id) => {
        const v = voitures.find(item => item.id === id);
        if (!v) {
            console.error("Voiture introuvable ID :", id);
            return;
        }

        const mainImg = document.getElementById('main-detail-img');
        mainImg.src = v.images_details[0] || '';
        mainImg.alt = v.marque + ' ' + v.modele;

        const badge = document.getElementById('detail-badge');
        badge.textContent = v.statut || '';

        const thumbsContainer = document.getElementById('thumbs-container');
        thumbsContainer.innerHTML = '';
        v.images_details.forEach(src => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = v.marque + ' ' + v.modele;
            thumb.addEventListener('click', () => {
                mainImg.src = src;
            });
            thumbsContainer.appendChild(thumb);
        });

        document.getElementById('detail-title').textContent = `${v.marque} ${v.modele} (${v.annee})`;
        document.getElementById('detail-type').textContent = v.type;
        document.getElementById('detail-price').textContent = typeof v.prix === 'number' ? formatCFA(v.prix) : 'N/A';
        document.getElementById('detail-description').textContent = v.description || '';

        carDetailContainer.innerHTML = '';
        if (v.options_equipement && v.options_equipement.length > 0) {
            v.options_equipement.forEach(opt => {
                const span = document.createElement('span');
                span.textContent = opt;
                carDetailContainer.appendChild(span);
            });
        }

        homeView.style.display = "none";
        detailView.style.display = "block";

        backBtn.onclick = () => {
            detailView.style.display = "none";
            homeView.style.display = "block";
        };
    };

    // ----------------------------
    // CHARGEMENT INITIAL
    // ----------------------------
    renderCatalogue(voitures);

    // ----------------------------
    // BOUTON WHATSAPP FLOTTANT
    // ----------------------------
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/225779283551'; // Remplace par ton numéro
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'btn-whatsapp';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappBtn);

    // ----------------------------
    // FORMULAIRE CONTACT DYNAMIQUE
    // ----------------------------
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactSection.innerHTML = ''; // Supprime tout contenu existant

        // Titre H3
        const h3 = document.createElement('h3');
        h3.textContent = 'Contactez‑vous';
        h3.style.textAlign = 'center';
        h3.style.marginBottom = '20px';
        contactSection.appendChild(h3);

        // Formulaire
        const form = document.createElement('form');
        form.id = 'form';
        form.className = 'contact-form';
        form.innerHTML = `
            <input type="text" name="name" placeholder="Nom complet" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Téléphone">
            <textarea name="message" placeholder="Votre message" required></textarea>
            <button type="submit" class="btn-cta">Envoyer</button>
        `;
        contactSection.appendChild(form);

        const submitBtn = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            formData.append("access_key", "29103611-31cb-4c37-bd0b-13e8f9880368"); // Ta clé Web3Forms

            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Envoi...";
            submitBtn.disabled = true;

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Message envoyé avec succès !");
                    form.reset();
                } else {
                    alert("Erreur : " + data.message);
                }

            } catch (error) {
                alert("Une erreur est survenue. Réessayez.");
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

});
