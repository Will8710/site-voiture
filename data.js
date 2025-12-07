// data.js

const voitures = [
    {
        id: 1,
        marque: 'Hyundai',
        modele: 'Tucson',
        annee: 2022,
        type: 'Importée - Corée',
        prix: 21000000,
        statut: 'Disponible',
        notes_statut: null,
        image: 'images/hyundai-tucson-front2.JPEG',
        images_details: [
            'images/hyundai-tucson-front1.JPEG',
            'images/hyundai-tucson-back.JPEG',
            'images/hyundai-tucson-int1.JPEG',
            'images/hyundai-tucson-int2.JPEG',
            'images/hyundai-tucson-profil.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 5,
        places: 5,
        kilometrage: null,
        sellerie: 'Cuir noir',
        options_equipement: [
            'Climatisation automatique bi-zone',
            'Toit simple',
            'Sièges chauffants et ventilés',
            'Caméra 360° avec sécurité routière',
            'Écran tactile multimédia',
            'Démarrage sans clé'
        ]
    },
    {
        id: 2,
        marque: 'Hyundai',
        modele: 'Kona',
        annee: '2019-2020',
        type: 'Occasion',
        prix: 11900000,
        statut: 'Disponible',
        notes_statut: null,
        image: 'images/Hyundai-Kona-front2.JPEG',
        images_details: [
            'images/Hyundai-Kona-front1.JPEG',
            'images/Hyundai-Kona-back2.JPEG',
            'images/Hyundai-Kona-back1.JPEG',
            'images/Hyundai-Kona-profil.JPEG',
            'images/Hyundai-Kona-int1.JPEG',
            'images/Hyundai-Kona-int2.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 5,
        places: 5,
        kilometrage: null,
        sellerie: 'Cuir noir blanc',
        options_equipement: [
            'Suspension adaptative',
            '4 Cylindres',
            'Climatisation origine',
            'Démarrage à clé',
            'Caméra de recul',
            'CarPlay & Android auto'
        ]
    },
    {
        id: 3,
        marque: 'Hyundai',
        modele: 'Santafe 3',
        annee: '2017-2018',
        type: 'Importée',
        prix: 8500000,
        statut: 'Nouvel arrivage',
        notes_statut: null,
        image: 'images/hyundai-santafe3-front2.JPEG',
        images_details: [
            'images/hyundai-santafe3-back.JPEG',
            'images/hyundai-santafe3-front1.JPEG',
            'images/hyundai-santafe3-int1.JPEG',
            'images/hyundai-santafe3-int2.JPEG',
            'images/hyundai-santafe3-profil.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 5,
        places: 7,
        kilometrage: 12000,
        sellerie: 'Cuir beige',
        options_equipement: [
            'Boîte Automatique',
            'Démarrage start', 
            'Climatisé',
            'Moteur V6',
            'Siège et coffre électrique',  
            'Emprunte déverrouillage',
            'Volant multifonction',
            'Jantes allures'
        ]
    },
    {
        id: 4,
        marque: 'Hyundai',
        modele: 'Fantafe',
        annee: 2017,
        type: 'Occasion',
        prix: 10500000,
        statut: 'Vendu',
        notes_statut: null,
        image: 'images/hyundai-santafe7-front2.JPEG',
        images_details: [
            'images/hyundai-santafe7-front1.JPEG',
            'images/hyundai-santafe7-back.JPEG',
            'images/hyundai-santafe7-profil.JPEG',
            'images/hyundai-santafe7-int1.JPEG',
            'images/hyundai-santafe7-int2.JPEG',
            'images/hyundai-santafe7-toit.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 4,
        places: 5,
        kilometrage: 57000,
        sellerie: 'Cuir noir',
        options_equipement: [
            'Full Option',
            'Climatisation origine',
            'Toit panoramique',
            'Siège électrique',
            'Emprunte verrouillage',
            '4 cylindre',
            'Démarrage Start/Stop',
            'Rétro éclairage',
            'Volant multifonctionel'
        ]
    },
    {
        id: 5,
        marque: 'Kia',
        modele: 'Telluride',
        annee: 2021,
        type: 'Importée',
        prix: 28500000,
        statut: 'Disponible',
        notes_statut: null,
        image: 'images/kia-telluride-front2.JPEG',
        images_details: [
            'images/kia-telluride-back1.JPEG',
            'images/kia-telluride-back2.JPEG',
            'images/kia-telluride-int1.JPEG',
            'images/kia-telluride-int2.JPEG',
            'images/kia-telluride-profil1.JPEG',
            'images/kia-telluride-profil2.JPEG',
            'images/kia-telluride-front1.JPEG',
            'images/kia-telluride-ecran.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 4,
        places: 7,
        kilometrage: null,
        sellerie: 'Cuir noir',
        options_equipement: [
            'Intérieur cuir',
            'Toit panoramique',
            'Full Option'
        ]
    },
    {
        id: 6,
        marque: 'Kia',
        modele: 'Sportage SUV 4X4',
        annee: 2021,
        type: 'Importée',
        prix: 16000000,
        statut: 'Disponible',
        notes_statut: 'Immatriculation en cours',
        image: 'images/kia-sportagesuv-front2.JPEG',
        images_details: [
            'images/kia-sportagesuv-front1.JPEG',
            'images/kia-sportagesuv-back1.JPEG',
            'images/kia-sportagesuv-back2.JPEG',
            'images/kia-sportagesuv-int1.JPEG',
            'images/kia-sportagesuv-int2.JPEG',
            'images/kia-sportagesuv-profil.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 4,
        places: 5,
        kilometrage: null,
        sellerie: 'Cuir noir',
        options_equipement: [
            'Intérieur cuir noir',
            'Full Option',
            '4 cylindres',
            'Volant multifonctionnel',
            'Climatisation origine'
        ]
    },
    {
        id: 7,
        marque: 'Mercedes Benz',
        modele: 'GLC 300 - 4 Matic',
        annee: 2021,
        type: 'Importée',
        prix: 35000000,
        statut: 'Disponible',
        notes_statut: 'Immatriculation en cours',
        image: 'images/mercedes-benz-glc300-front2.JPEG',
        images_details: [
            'images/mercedes-benz-glc300-front1.JPEG',
            'images/mercedes-benz-glc300-profil.JPEG',
            'images/mercedes-benz-glc300-back1.JPEG',
            'images/mercedes-benz-glc300-back2.JPEG',
            'images/mercedes-benz-glc300-int1.JPEG',
            'images/mercedes-benz-glc300-int2.JPEG'
        ],
        moteur: 'Essence',
        transmission: 'Automatique',
        energie: 'Essence',
        portes: 4,
        places: 5,
        kilometrage: 62000,
        sellerie: 'Cuir noir',
        options_equipement: [
            'Intérieur cuir noir',
            'Full Option',
            '4 cylindres',
            'Volant multifonctionnel',
            'Climatisation origine',
            'Démarrage start/stop',
            'Camera 360°'
        ]
    }
];

/**
 * Fonction utilitaire pour formater le prix en CFA
 */
const formatCFA = (price) => {
    if (typeof price !== 'number') return 'N/A';
    return price.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'XOF',
    }).replace('XOF', 'CFA');
};
