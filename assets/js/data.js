/* FUCSTYLE — contenu par défaut du site.
   Toutes ces données sont modifiables depuis le tableau de bord (/admin).
   Photos et textes repris à l'identique de fucstyle.fr. */
(function () {
  const U = '/assets/uploads/';

  window.FUC_DEFAULTS = {
    version: 12,

    site: {
      logo: U + '2023/02/Design-sans-titre-47.png',
      mark: 'assets/img/69-le-sang.png',
      heroVideo: U + '2025/11/WhatsApp-Video-2025-11-14-at-01.32.13.mp4',
      heroVideoStart: 1,
      heroTitle: 'WE ARE MUSIC STUDIO',
      heroCta: 'Learn more',
      ticker: 'Album « 69💯 Le🩸 » dispo — boutique et clips',
      shopTitle: 'Dispo les zins',
      clipTitle: 'Dernier clip les zins',
      clipYoutube: 'uDvVj8N55mU',
      autoplayClip: true,
      clipName: 'Vanille Pistache (feat Sakage)',
      introTrack: '',
      introTitle: 'Vanille Pistache',
      introVideoOn: true,
      introVideo: 'assets/video/intro.mp4',
      introVideoPoster: 'assets/video/intro.jpg',
      introVideoMode: 'home',
      clipsV: 3,
      clips: [
        { id: 'uDvVj8N55mU', title: 'Vanille Pistache (feat Sakage)' },
        { id: 'P4RaRQGWOdg', title: 'Fatcap (feat Tapas Nocturne)' },
        { id: 'hWJVY4F6zps', title: 'Chaise Musical(e) (feat Aka Seul Two)' }
      ],
      bioPhoto: U + '2025/10/Fucstyle.jpg',
      bioTitle: 'FUCSTYLE',
      bioSubtitle: 'L’Essence du Flow Brut',
      bioText: '69💯 Le🩸, c’est l’aboutissement de plus de 120 freestyles. Un rendez-vous hebdomadaire : tous les dimanches, Fucstyle a su se réinventer en solo, en posant son micro partout dans la ville de Lyon.\n\nIl pousse la spontanéité de son écriture ✍️ pour mieux ressentir et retranscrire le monde qui l’entoure. Un freestyle, un thème, un décor… et c’est parti !',
      bioCta: 'Abonne-toi à ma nouvelle chaîne YouTube et suis moi sur mes réseaux !',
      spotifyArtist: '6pNwXQDJt1nMZTlasvWuIj',
      stats: [
        { value: '10', suffix: '+', label: 'Années d’expérience' },
        { value: '100', suffix: '+', label: 'Freestyles vidéos' },
        { value: '10', suffix: '+', label: 'Projets dispos' },
        { value: '10', suffix: 'K+', label: 'Followers' }
      ],
      indeTitle: 'RAP INDé',
      indeText: 'Fucstyle, c’est l’essence pure du rap underground. Il a forgé une identité sans concession. Membre du SnakeS Crew, il a imposé son énergie sur scène en partageant l’affiche avec Nekfeu, Sniper, Demi Portion, ainsi qu’avec des légendes comme The Beatnuts, Smif-N-Wessun et Dead Prez.\n\nFidèle à son art, à sa ville et à son univers, il brille sans artifices.\n\nIl accompagne Sakage sur scène et co-réalise les clips de ses deux succès (Prémices & Nuit Blanche).\n\nC’est donc naturellement qu’ils s’associent pour créer leur label en totale indépendance : Bercail Records.',
      bercailLogo: U + '2025/11/Bercail-Logotrans_1024.png',
      bercailUrl: 'https://bercailrecords.fr/',
      tiles: [
        { label: 'Shop', image: U + '2025/11/WhatsApp-Image-2025-11-11-at-17.49.11.jpeg', href: 'boutique.html' },
        { label: 'Booking', image: U + '2025/11/Gemini_Generated_Image_8z6o3s8z6o3s8z6o-Modifie.png', href: 'contact.html' },
        { label: 'Actus', image: U + '2025/11/Gemini_Generated_Image_bjtkpebjtkpebjtk.png', href: 'magazine.html' }
      ],
      aboutPhoto: U + '2025/10/Fucstyle-2.jpeg',
      aboutIntro: 'FUCSTYLE®, c’est pas un style, c’est une empreinte. Née à Lyon, forgée dans la rue, portée par le son.\n\nIndépendant, libre, brut. Toujours fidèle à la vibe.',
      aboutText: 'Fucstyle, c’est l’incarnation de l’authenticité dans le rap. Issu de l’underground, il a su s’imposer avec son flow brut et ses paroles sans filtre. Membre du collectif SnakeS Crew, il a toujours refusé de se plier aux règles du système. Ses projets, comme ‘Incessamment Sous Deux’, reflètent une véritable soif de liberté et une rage de créer. Ce n’est pas un artiste qui cherche la lumière, mais un rappeur qui façonne son propre chemin, fidèle à ses racines et à sa vérité éclectique.',
      clipsBanner: U + '2025/11/WhatsApp-Image-2025-11-11-at-17.39.22.jpeg',
      contactTitle: 'Une question, une idée, une collab ?',
      contactText: 'Laisse ton message ici, pas besoin de long discours. Que tu sois fan, artiste, ou juste curieux — on lit tout, on répond vrai.',
      contactImage: U + '2025/10/Design-sans-titre-2025-10-21T095327.749.jpg',
      email: 'fucstyler@gmail.com',
      shopBanner: 'L’album 69💯 Le🩸, le merch et les éditions collector. Envoi depuis Lyon.',
      shippingNote: 'Expédié depuis Lyon sous 48 h. Merci pour la force !',
      socials: {
        instagram: 'https://www.instagram.com/fucstyle/',
        youtube: 'https://www.youtube.com/@FUCSTYLE',
        spotify: 'https://open.spotify.com/intl-fr/artist/6pNwXQDJt1nMZTlasvWuIj',
        facebook: 'https://www.facebook.com/fucstyle/?locale=fr_FR',
        tiktok: 'https://www.tiktok.com/@fucstyle'
      },
      seoTitle: 'Fucstyle – Rappeur Lyonnais | Entre authenticité & indépendance',
      seoDescription: 'Fucstyle, l’homme aux plus de 120 freestyles, dévoile son premier album solo “69💯 Le🩸”. Plonge dans l’univers authentique du rappeur lyonnais.',
      credit: 'Site créé par 404 Agency MAMEN',
      creditUrl: 'https://www.instagram.com/404digital_agency'
    },

    shipping: {
      zones: [
        { id: 'fr', name: 'France métropolitaine', countries: ['France'], price: 5.9, freeFrom: 60, delay: '2 à 4 jours ouvrés' },
        { id: 'eu', name: 'Europe', countries: ['Belgique', 'Suisse', 'Luxembourg', 'Allemagne', 'Espagne', 'Italie', 'Pays-Bas', 'Portugal'], price: 12.9, freeFrom: 120, delay: '4 à 8 jours ouvrés' },
        { id: 'dom', name: 'DOM-TOM', countries: ['Guadeloupe', 'Martinique', 'Guyane', 'La Réunion', 'Mayotte'], price: 16.9, freeFrom: 0, delay: '7 à 12 jours ouvrés' },
        { id: 'monde', name: 'Reste du monde', countries: ['Canada', 'États-Unis', 'Maroc', 'Algérie', 'Tunisie', 'Sénégal', 'Côte d’Ivoire'], price: 22.9, freeFrom: 0, delay: '7 à 15 jours ouvrés' }
      ]
    },

    legal: {
      "cgv": "En passant commande sur **fucstyle.fr**, vous acceptez les conditions suivantes :\n\n## 1. Produits et Disponibilité\n\nLes produits sont proposés dans la limite des stocks disponibles. Nous nous réservons le droit de modifier ou de retirer des produits à tout moment, sans préavis.\n\n## 2. Prix et Paiement\n\nLes prix sont indiqués en euros (€) et sont susceptibles d’être modifiés à tout moment. Le paiement est exigé en totalité au moment de la commande. Les paiements se font par carte bancaire ou compte PayPal, via la plateforme sécurisée PayPal. Fucstyle n’a jamais accès à vos données bancaires.\n\n## 3. Livraison\n\nLes délais de livraison sont donnés à titre indicatif et nous ne sommes pas responsables des retards de livraison indépendants de notre volonté. Les frais de livraison sont à la charge du client et seront clairement indiqués avant la validation de la commande.\n\nUn email de confirmation d’expédition vous est envoyé avec le numéro de suivi. Les tarifs et délais par zone sont indiqués au moment de la commande.\n\n## 4. Retours et Remboursements\n\nLe détail est sur la page [Retours et remboursements](retours.html).\n\nConformément au droit de rétractation, les retours sont acceptés sous **14 jours** suivant la réception du produit, uniquement pour les articles non utilisés, non portés et dans leur emballage d’origine. Les frais de retour sont à la charge du client. Les remboursements se font sur le moyen de paiement initial dans un délai de 14 jours suivant la réception du retour.\n\n**Articles personnalisés ou en édition limitée** : Ces articles ne peuvent pas faire l’objet d’un droit de rétractation, sauf en cas de défaut de fabrication.\n\n## 5. Limitation de Responsabilité\n\nNous ne sommes pas responsables des dommages indirects ou consécutifs liés à l’utilisation des produits achetés. Notre responsabilité maximale est limitée au montant total de la commande.\n\n## 6. Propriété Intellectuelle\n\nTous les contenus présents sur fucstyle.fr (logos, visuels, textes, musiques) sont la propriété exclusive de Fucstyle et/ou de Bercail Records et sont protégés par les droits d’auteur. Toute reproduction non autorisée est interdite.\n\n## 7. Droit Applicable\n\nCes conditions sont régies par les lois françaises. Tout litige sera soumis à la juridiction exclusive des tribunaux de Toulouse.\n\n## 8. Contact\n\nPour toute question concernant votre commande ou ces conditions générales de vente, vous pouvez nous contacter via le [formulaire de contact](contact.html) ou à l’adresse [fucstyler@gmail.com](mailto:fucstyler@gmail.com).\n\n*Dernière mise à jour : novembre 2026*",
      "retours": "Tu as changé d’avis ou un article ne te va pas ? Voilà comment ça marche.\n\n## Délai\n\nTu as **14 jours** à partir de la réception de ta commande pour nous signaler un retour. C’est ton droit de rétractation, prévu par la loi.\n\n## Articles acceptés\n\n- Articles neufs, non portés, non lavés, dans leur emballage d’origine.\n- CD et vinyles encore sous blister.\n\n## Articles non repris\n\n- Articles personnalisés ou dédicacés (pack collector dédicacé notamment).\n- CD et vinyles dont le blister a été ouvert.\n- Articles abîmés après réception.\n\nUn article arrivé abîmé ou défectueux est toujours échangé ou remboursé : envoie-nous une photo dans les 48 h.\n\n## Comment faire\n\n1. Écris-nous à **fucstyler@gmail.com** avec ton numéro de commande (FS-…) et l’article concerné.\n2. On te répond avec l’adresse de retour.\n3. Renvoie le colis bien emballé. Les frais de retour sont à ta charge, sauf erreur de notre part ou article défectueux.\n\n## Remboursement\n\nLe remboursement est fait sur le moyen de paiement utilisé (carte ou PayPal), au plus tard **14 jours** après réception du retour. Les frais de livraison initiaux sont remboursés si tu retournes toute la commande.\n\n## Échange de taille\n\nPour un T-shirt ou un hoodie, on peut échanger la taille si elle est encore en stock. Précise-le dans ton email.",
      "confidentialite": "Chez **Fucstyle**, nous respectons votre vie privée et nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations.\n\n## 1. Responsable du Traitement des Données\n\n**Fucstyle / Bercail Records**\nSite web : fucstyle.fr\nEmail : fucstyler@gmail.com\n\n## 2. Données Collectées\n\nNous collectons les données personnelles suivantes lorsque vous passez commande ou naviguez sur notre site :\n\n### Données obligatoires pour traiter votre commande :\n\n- Nom et prénom\n- Adresse email\n- Adresse de livraison et de facturation\n- Numéro de téléphone\n- Informations de paiement (traitées de manière sécurisée par nos prestataires)\n\n### Données collectées automatiquement :\n\n- Adresse IP\n- Données de navigation (cookies)\n- Type de navigateur et appareil utilisé\n\n## 3. Finalités du Traitement\n\nVos données personnelles sont collectées pour les finalités suivantes :\n\n- **Gestion des commandes** : Traitement, préparation et expédition de vos commandes\n- **Service client** : Réponse à vos questions et gestion des retours\n- **Communication** : Envoi de confirmations de commande, suivi de livraison et notifications importantes\n- **Marketing** : Envoi de newsletters et offres promotionnelles (uniquement avec votre consentement)\n- **Amélioration du site** : Analyse statistique pour améliorer votre expérience utilisateur\n- **Obligations légales** : Respect des obligations comptables et fiscales\n\n## 4. Base Légale du Traitement\n\nLe traitement de vos données repose sur :\n\n- **L’exécution du contrat** : Pour traiter et livrer votre commande\n- **Votre consentement** : Pour l’envoi de communications marketing\n- **Nos intérêts légitimes** : Pour améliorer nos services et prévenir la fraude\n- **Obligations légales** : Pour respecter nos obligations fiscales et comptables\n\n## 5. Destinataires des Données\n\nVos données personnelles peuvent être partagées avec :\n\n- **Prestataires de paiement** : Pour sécuriser les transactions\n- **Transporteurs** : Pour assurer la livraison de vos commandes\n- **Prestataires techniques** : Pour l’hébergement et la maintenance du site\n- **Autorités légales** : En cas d’obligation légale ou de demande judiciaire\n\nNous ne vendons jamais vos données personnelles à des tiers.\n\n## 6. Durée de Conservation\n\n- **Données de commande** : 10 ans (obligations comptables)\n- **Données de compte client** : Jusqu’à 3 ans après la dernière activité\n- **Données marketing** : Jusqu’à votre désinscription ou 3 ans sans interaction\n- **Cookies** : Selon les durées spécifiées dans notre politique de cookies (13 mois maximum)\n\n## 7. Vos Droits\n\nConformément au RGPD, vous disposez des droits suivants :\n\n- **Droit d’accès** : Obtenir une copie de vos données personnelles\n- **Droit de rectification** : Corriger vos données inexactes ou incomplètes\n- **Droit à l’effacement** : Demander la suppression de vos données\n- **Droit à la limitation** : Limiter le traitement de vos données\n- **Droit d’opposition** : Vous opposer au traitement de vos données à des fins marketing\n- **Droit à la portabilité** : Recevoir vos données dans un format structuré\n- **Droit de retirer votre consentement** : À tout moment pour les traitements basés sur le consentement\n\nPour exercer vos droits, contactez-nous à : fucstyler@gmail.com\n\nVous disposez également du droit d’introduire une réclamation auprès de la CNIL (Commission Nationale de l’Informatique et des Libertés) : [www.cnil.fr](https://www.cnil.fr/)\n\n## 8. Sécurité des Données\n\nNous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre :\n\n- L’accès non autorisé\n- La perte, la destruction ou l’altération accidentelle\n- La divulgation ou l’utilisation illicite\n\nLes paiements sont sécurisés par protocole SSL et gérés par des prestataires certifiés PCI-DSS.\n\n## 9. Cookies\n\nNotre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement ou les paramètres de votre navigateur.\n\n**Types de cookies utilisés :**\n\n- **Cookies essentiels** : Nécessaires au fonctionnement du site\n- **Cookies analytiques** : Pour analyser l’utilisation du site (Google Analytics)\n- **Cookies marketing** : Pour personnaliser les publicités (si applicable)\n\n## 10. Transferts de Données Hors UE\n\nVos données peuvent être transférées vers des pays hors de l’Union Européenne uniquement si ces pays offrent un niveau de protection adéquat ou si des garanties appropriées sont mises en place (clauses contractuelles types).\n\n## 11. Modifications de la Politique\n\nNous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.\n\n## 12. Contact\n\nPour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :\n\n**Email** : fucstyler@gmail.com\n**Site web** : fucstyle.fr",
      "mentions": "## Éditeur du site\n\n**Fucstyle / Bercail Records**\nResponsable de la publication : [à compléter : nom et prénom]\nStatut : [à compléter : auto-entrepreneur, association, société…]\nSIRET : [à compléter]\nAdresse : [à compléter]\nEmail : fucstyler@gmail.com\n\n## Hébergement\n\nVercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com\n\n## Conception\n\nSite conçu et réalisé par **404 Agency**.\n\n## Propriété intellectuelle\n\nLes textes, visuels, logos, photos, vidéos et musiques présents sur ce site appartiennent à Fucstyle et/ou à Bercail Records, ou sont utilisés avec l’accord de leurs auteurs. Toute reproduction sans autorisation est interdite.\n\n## Paiement\n\nLes paiements sont traités par PayPal (Europe) S.à r.l. et Cie, S.C.A. Fucstyle ne conserve aucune donnée bancaire.\n\n## Données personnelles\n\nVoir la [politique de confidentialité](confidentialite.html)."
    },

    products: [
      {
        id: 'p4155', slug: 'album-cd', name: 'Digipack 💿', category: 'Musique', type: 'CD',
        price: 12.9, compareAt: null, status: 'publie', preorder: false, featured: true, badge: 'Album',
        short: 'Le premier album solo de Fucstyle en CD digipack. Merci pour la force !',
        description: 'L’album CD “69💯 Le🩸” de Fucstyle en version digipack. Édition physique, design soigné et envoi rapide.',
        images: [U + '2025/10/Gemini_Generated_Image_r9ikqsr9ikqsr9ik.png'],
        sizes: [], colors: [], variants: [], stock: 362, lowStock: 10, sku: 'FUC-CD-69', weight: 0.12
      },
      {
        id: 'p4275', slug: 'casquette-f', name: 'Casquette F 🩸', category: 'Merch', type: 'Casquette',
        price: 16.9, compareAt: null, status: 'publie', preorder: false, featured: true, badge: '',
        short: 'La casquette officielle du Fucstyle ! Tu l’as vu sur ma tête, bientôt sur la tienne 🩸',
        description: 'Broderie F sur le devant, goutte rouge sur le côté. Merci pour la force !',
        images: [U + '2025/11/Gemini_Generated_Image_qgjlytqgjlytqgjl.png'],
        sizes: [], colors: [], variants: [], stock: 2, lowStock: 5, sku: 'FUC-CAP-F', weight: 0.15
      },
      {
        id: 'p-tshirt', slug: 't-shirt', name: 'T-shirt', category: 'Merch', type: 'T-shirt',
        price: 25, compareAt: null, status: 'publie', preorder: false, featured: true, badge: '',
        short: 'La pochette officielle réalisée par Soulgraff. Soutiens la cause et porte mes couleurs 🩸',
        description: 'Le visuel de l’album 69💯 Le🩸 signé Soulgraff. Merci pour la force !',
        images: [U + '2025/11/WhatsApp-Image-2025-11-11-at-17.05.55.jpeg'],
        sizes: ['S', 'M', 'L', 'XL'], colors: [],
        variants: [
          { key: 'S', size: 'S', color: '', stock: 20 }, { key: 'M', size: 'M', color: '', stock: 30 },
          { key: 'L', size: 'L', color: '', stock: 30 }, { key: 'XL', size: 'XL', color: '', stock: 20 }
        ],
        stock: 0, lowStock: 5, sku: 'FUC-TS-69', weight: 0.2
      },
      {
        id: 'p-collector', slug: 'pack-ultra-collector', name: 'Pack Ultra Collector (50 exemplaires)', category: 'Collector', type: 'Pack',
        price: 75, compareAt: null, status: 'publie', preorder: false, featured: true, badge: '50 ex.',
        short: 'Toute la panoplie 🩸 (casquette + T-shirt + CD + vinyle collector blanc ou rouge selon disponibilité* + briquet, stickers et cadeaux surprises)',
        description: 'Seulement 50 exemplaires dédicacés ! Une chance 🍀 sur 50 de gagner : une pochette en plaque métallisée 45×45 cm pour sublimer ton salon*, et une à deux invitations d’office pour mon prochain concert ! Merci pour la force !',
        images: [U + '2025/11/WhatsApp-Image-2025-10-30-at-19.43.34.jpeg'],
        sizes: ['S', 'M', 'L', 'XL'], colors: ['Blanc', 'Rouge'],
        variants: [
          { key: 'S|Blanc', size: 'S', color: 'Blanc', stock: 2 }, { key: 'M|Blanc', size: 'M', color: 'Blanc', stock: 3 },
          { key: 'L|Blanc', size: 'L', color: 'Blanc', stock: 3 }, { key: 'XL|Blanc', size: 'XL', color: 'Blanc', stock: 2 },
          { key: 'S|Rouge', size: 'S', color: 'Rouge', stock: 2 }, { key: 'M|Rouge', size: 'M', color: 'Rouge', stock: 2 },
          { key: 'L|Rouge', size: 'L', color: 'Rouge', stock: 2 }, { key: 'XL|Rouge', size: 'XL', color: 'Rouge', stock: 2 }
        ],
        stock: 0, lowStock: 3, sku: 'FUC-PACK-50', weight: 1.2
      },
      {
        id: 'p4038', slug: 'vinyl', name: 'Vinyl', category: 'Musique', type: 'Vinyle',
        price: 25, compareAt: null, status: 'publie', preorder: false, featured: true, badge: '',
        short: 'L’album 69💯 Le🩸 en vinyle noir. Merci pour la force !',
        description: 'Vinyle noir classique de Fucstyle. Pressage officiel, son haute qualité. Version standard.',
        images: [U + '2025/10/Vinyl-2.jpg'],
        sizes: [], colors: [], variants: [], stock: 156, lowStock: 10, sku: 'FUC-LP-NOIR', weight: 0.3
      },
      {
        id: 'p-vinyl-rouge', slug: 'vinyl-collector-rouge', name: 'Vinyl Collector rouge', category: 'Musique', type: 'Vinyle',
        price: 30, compareAt: null, status: 'publie', preorder: false, featured: true, badge: 'Série limitée',
        short: 'Série limitée.',
        description: 'Vinyle collector, tirage limité. Merci pour la force !',
        images: [U + '2025/10/Vinyl-1.jpg'],
        sizes: [], colors: [], variants: [], stock: 0, lowStock: 5, sku: 'FUC-LP-ROUGE', weight: 0.3
      },
      {
        id: 'p4039', slug: 'vinyl-collector-blanc', name: 'Vinyl Collector blanc', category: 'Musique', type: 'Vinyle',
        price: 30, compareAt: null, status: 'publie', preorder: false, featured: true, badge: 'Série limitée',
        short: 'Série limitée.',
        description: 'Vinyle collector, tirage limité. Merci pour la force !',
        images: [U + '2025/10/Vinyl.jpg'],
        sizes: [], colors: [], variants: [], stock: 15, lowStock: 5, sku: 'FUC-LP-BLANC', weight: 0.3
      }
    ],

    freestyles: [
      { image: U + '2025/10/1-thatrickazz.jpg', url: 'https://www.instagram.com/reel/DPtOAynDI5P/' },
      { image: U + '2025/10/2-starfobar.jpg', url: 'https://www.instagram.com/reel/C7cAwZco3LT/' },
      { image: U + '2025/10/3-weed.jpg', url: 'https://www.instagram.com/reel/C8SCxfJoYjt/' },
      { image: U + '2025/10/4-GRATONS-scaled.jpg', url: 'https://www.instagram.com/reel/CuwgiVzIpZe/' },
      { image: U + '2025/10/5-paroles-tapas-finish-Couverture-scaled.jpg', url: 'https://www.instagram.com/reel/CxlAenpIxv4/' },
      { image: U + '2025/10/6mesaahhh-Couverture-scaled.jpg', url: 'https://www.instagram.com/reel/Csy70sJoL_s/' },
      { image: U + '2025/10/8-draft_cover-4.jpg', url: 'https://www.instagram.com/reel/C4VxIndIxqB/' },
      { image: U + '2025/10/7-chien-scaled.jpg', url: 'https://www.instagram.com/reel/CrGv7YvoQMf/' },
      { image: U + '2025/10/9-draft_cover-8.jpg', url: 'https://www.instagram.com/reel/DKpWHEyI3tC/' },
      { image: U + '2025/10/10-draft_cover-21.jpg', url: 'https://www.instagram.com/reel/C27GA9MI2ST/' }
    ],

    albums: [
      {
        id: 'a-69', slug: '69100-le-sang', title: '69💯 Le🩸', year: '2025', artist: 'Fucstyle', cover: '/assets/img/69-le-sang-cover.jpg',
        text: 'Premier album solo de Fucstyle, sorti le 12 décembre 2025. L’aboutissement de plus de 120 freestyles du dimanche.',
        links: [{ label: 'Spotify', url: 'https://open.spotify.com/intl-fr/artist/6pNwXQDJt1nMZTlasvWuIj' }, { label: 'Acheter le CD', url: 'produit.html?p=album-cd' }]
      },
      {
        id: 'a-venin', slug: 'le-venin', title: 'LE VENIN', year: '2013', artist: 'Snakes Crew', cover: U + '2025/10/album-1.jpg',
        text: 'Sorti en 2013, « Le Venin » est un album emblématique du Snakes Crew, le collectif lyonnais dans lequel Fucstyle a fait ses premières armes.\n\nAvec ses 22 titres, le projet pose clairement les fondations de l’identité du crew : une écriture brute, une énergie sombre, et une vision authentique de leur réalité.\n\nMusicalement, l’album navigue entre boom-bap modernisé, samples granuleux et sonorités froides. Les MCs livrent des textes directs, parfois crus, toujours sincères, avec cette intensité qui a marqué la scène locale de l’époque.\n\n« Le Venin » capture un moment important : celui où le crew transforme ses expériences, sa rage et sa cohésion en un projet dense, compact et profondément identitaire.\n\nLe titre symbolise parfaitement le contenu : un poison artistique qui reste, qui marque, qui imprime une trace durable dans la mémoire de la scène lyonnaise.\n\nUn album rare et fondateur, essentiel pour comprendre l’histoire et les racines du Snakes Crew.',
        links: [{ label: 'Spotify', url: 'https://open.spotify.com/intl-fr/album/1RyLGucO7Wvnbqm00VVhqJ' }]
      },
      {
        id: 'a-antidot', slug: 'lanti-dot', title: 'L’ANTI-DOT', year: '2015', artist: 'Snakes Crew', cover: U + '2025/10/album.jpg',
        text: '« L’Anti-Dot » est un projet percutant du SnakeS Crew, sorti le 31 mai 2015 sous le label Némésis Musique. Cet album marque une étape significative pour le collectif lyonnais : après des années d’efforts sur le terrain, de freestyles et de scènes, ils livrent un travail structuré et déterminé.\n\nComptant plusieurs morceaux percutants tels que “Rap de bâtard”, “La Grande Vie” ou “Y’a ceux qui parlent et ceux qui font”, l’album met en lumière la dualité entre parole et action, ambition et réalité brute.\n\nLes productions sont sincères, sans fioritures, avec une ambiance qui mêle urgence, introspection et fraternité de crew. « L’Anti-Dot » est un manifeste collectif : celui d’un groupe qui refuse de disparaître dans le paysage underground, qui s’affirme et pose ses marques.',
        links: [{ label: 'Bandcamp', url: 'https://nemesismusique.bandcamp.com/album/lanti-d-t' }, { label: 'Spotify', url: 'https://open.spotify.com/intl-fr/artist/6pNwXQDJt1nMZTlasvWuIj' }]
      },
      {
        id: 'a-is2', slug: 'incessamment-sous-2', title: 'INCESSAMENT SOUS 2', year: '2019', artist: 'Fucstyle', cover: U + '2025/10/album-2.jpg',
        text: '« Incessamment Sous Deux » est un projet solo de Fucstyle sorti en 2019.\n\nUn album court mais intense, composé de 9 titres pour moins de 25 minutes d’énergie pure. Ici, Fucstyle dévoile un rap brut, direct, sans maquillage, fidèle à son ADN et à sa vision de l’indépendance.\n\nLe projet oscille entre introspection et détermination : flows nerveux, punchlines franches, ambiances sombres et moments plus mélancoliques.\n\nOn y retrouve l’envie de s’affirmer, de tracer sa route, de tenir malgré la pression et les obstacles. Chaque morceau est pensé comme un instantané, un bout d’histoire, un fragment de sa vie posé avec sincérité.\n\nL’écriture est dense, les productions percutantes, et l’album fonctionne comme un manifeste : court, précis, et ancré dans une énergie réelle, loin des artifices.\n\n« Incessamment Sous Deux » capture un moment charnière dans le parcours de Fucstyle, où l’envie d’avancer et l’urgence de créer se mélangent.\n\nUn projet compact, authentique, qui montre l’artiste dans l’un de ses formats les plus naturels.',
        links: [{ label: 'Spotify', url: 'https://open.spotify.com/intl-fr/album/10TUBCWJz0Ly8c7eG4VRuE' }]
      },
      {
        id: 'a-vnmj', slug: 'venin-ne-meurt-jamais', title: 'VENIN NE MEURT JAMAIS', year: '', artist: 'Snakes Crew', cover: U + '2025/10/WhatsApp-Image-2025-11-11-at-16.16.04-scaled.jpeg',
        text: '« Venin Ne Meurt Jamais » est un projet du Snakes Crew, le collectif lyonnais qui a marqué les débuts de Fucstyle.\n\nCet album rassemble certains des morceaux les plus représentatifs de leur identité : un rap sombre, venimeux, brut et profondément ancré dans la réalité du terrain.\n\nÀ travers chaque track, le Snakes Crew impose une signature unique : des textes directs, une énergie nerveuse, des ambiances froides et une sincérité qui tranche avec les codes.\n\nC’est un projet authentique, né d’une époque où tout reposait sur la spontanéité, la réelle expérience de la rue et la volonté de laisser une trace durable.\n\nLe “venin” représente ici l’héritage artistique du crew : ce qui reste dans le corps, dans l’esprit et dans la scène lyonnaise. Même avec les années qui passent, la morsure ne disparaît jamais — elle continue de vibrer dans ces morceaux.',
        links: [{ label: 'Spotify', url: 'https://open.spotify.com/intl-fr/artist/6pNwXQDJt1nMZTlasvWuIj' }, { label: 'YouTube', url: 'https://www.youtube.com/@FUCSTYLE' }]
      }
    ],

    events: [
      { id: 'e4', date: '2026-09-06', title: '100 Heures de Rap Non-Stop — créneau Guinness World Records', venue: 'Freestyle Villette', city: 'Paris', url: 'https://www.telerama.fr/musique/les-100-heures-de-rap-non-stop-a-paris-un-record-battu-et-un-beau-moment-de-transmission-7032771.php', status: 'passe' },
      { id: 'e3', date: '2026-09-04', title: '100 Heures de Rap Non-Stop — cypher', venue: 'Freestyle Villette', city: 'Paris', url: '', status: 'passe' },
      { id: 'e1', date: '2026-05-23', title: 'Souls of Mischief + Fucstyle', venue: 'Le Périscope', city: 'Lyon 2e', url: 'https://www.periscope-lyon.com/concerts/souls-of-mischief/', status: 'passe' },
      { id: 'e2', date: '2026-01-10', title: 'Bienvenue au Fucstyle Store — soirée rap gratuite', venue: 'La Pavane', city: 'Villeurbanne', url: '', status: 'passe' }
    ],

    posts: [], // rempli par posts.js

    promotions: [
      { id: 'pr-25', name: 'Vendredi noir — 1 an du projet', type: 'percent', value: 25, scope: 'all', target: '', active: true, start: '', end: '', banner: true, bannerText: '🥷 VENDREDI NOIR 🥷 Le projet 69💯 Le🩸 // fête ses 1 an : −25% sur tout le site', bannerBg: '#cdc8be', bannerFg: '#0a0a0a', bannerDrop: '#c4001d', bannerV: 2 }
    ],

    imgMeta: {},

    layout: {},
    blocks: [],

    promos: [
      { code: 'ZINS10', type: 'percent', value: 10, active: true, uses: 0, note: 'Code pour la communauté' }
    ],

    orders: [] // rempli par la démo (voir store.js)
  };
})();
