/* FUCSTYLE — contenu par défaut du site.
   Toutes ces données sont modifiables depuis le tableau de bord (/admin).
   Photos et textes repris à l'identique de fucstyle.fr. */
(function () {
  const U = 'https://fucstyle.fr/wp-content/uploads/';

  window.FUC_DEFAULTS = {
    version: 7,

    site: {
      logo: U + '2023/02/Design-sans-titre-47.png',
      mark: '',
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
      clips: [
        { id: 'uDvVj8N55mU', title: 'Vanille Pistache (feat Sakage)' },
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
      shopBanner: 'Sortie officielle le 12 décembre',
      shippingNote: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
      socials: {
        instagram: 'https://www.instagram.com/fucstyle/',
        youtube: 'https://www.youtube.com/@FUCSTYLE',
        spotify: 'https://open.spotify.com/intl-fr/artist/6pNwXQDJt1nMZTlasvWuIj',
        facebook: 'https://www.facebook.com/fucstyle/?locale=fr_FR',
        tiktok: 'https://www.tiktok.com/@fucstyle'
      },
      seoTitle: 'Fucstyle – Rappeur Lyonnais | Entre authenticité & indépendance',
      seoDescription: 'Fucstyle, l’homme aux plus de 120 freestyles, dévoile son premier album solo “69💯 Le🩸”. Plonge dans l’univers authentique du rappeur lyonnais.',
      credit: 'Designed by 404 Agency',
      creditUrl: 'https://www.instagram.com/404digital_agency'
    },

    shipping: { flat: 5.9, freeFrom: 60, countries: ['France', 'Belgique', 'Suisse', 'Luxembourg'] },

    products: [
      {
        id: 'p4155', slug: 'album-cd', name: 'Digipack 💿', category: 'Musique', type: 'CD',
        price: 12.9, compareAt: null, status: 'publie', preorder: true, featured: true, badge: 'Album',
        short: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
        description: 'Pré-commandez l’album CD “69💯 Le🩸” de Fucstyle en version digipack. Édition physique, design soigné et envoi rapide. Sortie officielle le 12 Décembre.',
        images: [U + '2025/10/Gemini_Generated_Image_r9ikqsr9ikqsr9ik.png'],
        sizes: [], colors: [], variants: [], stock: 362, lowStock: 10, sku: 'FUC-CD-69', weight: 0.12
      },
      {
        id: 'p4275', slug: 'casquette-f', name: 'Casquette F 🩸', category: 'Merch', type: 'Casquette',
        price: 16.9, compareAt: null, status: 'publie', preorder: true, featured: true, badge: '',
        short: 'La casquette officielle du Fucstyle ! Tu l’as vu sur ma tête, bientôt sur la tienne 🩸',
        description: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force!',
        images: [U + '2025/11/Gemini_Generated_Image_qgjlytqgjlytqgjl.png'],
        sizes: [], colors: [], variants: [], stock: 2, lowStock: 5, sku: 'FUC-CAP-F', weight: 0.15
      },
      {
        id: 'p-tshirt', slug: 't-shirt', name: 'T-shirt', category: 'Merch', type: 'T-shirt',
        price: 25, compareAt: null, status: 'publie', preorder: true, featured: true, badge: '',
        short: 'La pochette officielle réalisée par Soulgraff. Soutiens la cause et porte mes couleurs 🩸',
        description: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
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
        price: 75, compareAt: null, status: 'publie', preorder: true, featured: true, badge: '50 ex.',
        short: 'Toute la panoplie 🩸 (casquette + T-shirt + CD + vinyle collector blanc ou rouge selon disponibilité* + briquet, stickers et cadeaux surprises)',
        description: 'Seulement 50 exemplaires dédicacés ! Une chance 🍀 sur 50 de gagner : une pochette en plaque métallisée 45×45 cm pour sublimer ton salon*, et une à deux invitations d’office pour mon prochain concert ! Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
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
        price: 25, compareAt: null, status: 'publie', preorder: true, featured: true, badge: '',
        short: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
        description: 'Vinyle noir classique de Fucstyle. Pressage officiel, son haute qualité. Version standard disponible en précommande sur la boutique officielle.',
        images: [U + '2025/10/Vinyl-2.jpg'],
        sizes: [], colors: [], variants: [], stock: 156, lowStock: 10, sku: 'FUC-LP-NOIR', weight: 0.3
      },
      {
        id: 'p-vinyl-rouge', slug: 'vinyl-collector-rouge', name: 'Vinyl Collector rouge', category: 'Musique', type: 'Vinyle',
        price: 30, compareAt: null, status: 'publie', preorder: true, featured: true, badge: 'Série limitée',
        short: 'Série limitée.',
        description: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
        images: [U + '2025/10/Vinyl-1.jpg'],
        sizes: [], colors: [], variants: [], stock: 0, lowStock: 5, sku: 'FUC-LP-ROUGE', weight: 0.3
      },
      {
        id: 'p4039', slug: 'vinyl-collector-blanc', name: 'Vinyl Collector blanc', category: 'Musique', type: 'Vinyle',
        price: 30, compareAt: null, status: 'publie', preorder: true, featured: true, badge: 'Série limitée',
        short: 'Série limitée.',
        description: 'Tout est en précommande — envois à partir du 12 décembre. Merci pour la force !',
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
        id: 'a-69', slug: '69100-le-sang', title: '69💯 Le🩸', year: '2025', artist: 'Fucstyle', cover: U + '2025/10/Gemini_Generated_Image_r9ikqsr9ikqsr9ik.png',
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

    promos: [
      { code: 'ZINS10', type: 'percent', value: 10, active: true, uses: 0, note: 'Code pour la communauté' }
    ],

    orders: [] // rempli par la démo (voir store.js)
  };
})();
