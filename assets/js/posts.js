/* Magazine — articles par défaut (modifiables dans /admin > Magazine).
   Les articles presse sont des résumés rédigés pour le site, avec lien vers la source. */
(function () {
  const U = 'https://fucstyle.fr/wp-content/uploads/';
  window.FUC_DEFAULTS.posts = [
    {
      id: 'm-guinness', keyword: '100 heures de rap non-stop', slug: '100-heures-de-rap-non-stop-guinness',
      title: '100 heures de rap non-stop : Fucstyle dans le Guinness des records',
      excerpt: 'Du 2 au 6 septembre 2026, à Paris, Fucstyle a pris le micro au milieu de centaines de MCs pour un relais de rap homologué record du monde.',
      category: 'Scène', tags: ['Guinness World Records', 'Paris', 'Freestyle'],
      cover: U + '2025/10/1-thatrickazz.jpg',
      date: '2026-09-08', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Télérama', url: 'https://www.telerama.fr/musique/les-100-heures-de-rap-non-stop-a-paris-un-record-battu-et-un-beau-moment-de-transmission-7032771.php' },
      body: 'Début septembre 2026, le **Freestyle Villette** à Paris a accueilli **Les 100 Heures de Rap Non-Stop** : quatre jours et demi de micro ouvert, sans coupure, avec des centaines d’artistes, des DJ, des cyphers et des caméras. L’événement est porté par Pauline Raignault et son association.\n\n## Deux passages pour le 69100\n\nFucstyle faisait partie du line-up avec deux créneaux :\n\n- le **4 septembre à 18 h**, une heure de cypher,\n- le **6 septembre à 9 h**, dans la tentative officielle de record du monde.\n\n## Le record est tombé\n\nLe 6 septembre, **Guinness World Records** a homologué le record du **plus grand nombre de participants à un relais de rap** : 302 rappeurs qui se sont passé le micro à tour de rôle, quelques minutes chacun. Télérama a salué un moment simple, collectif et ouvert à tous les styles.\n\nPour un MC qui a bâti son public sur plus de 100 freestyles du dimanche, la scène était taillée sur mesure : écrire vite, poser juste, et tenir le rythme.\n\nLes extraits de ses passages sont sur [Instagram](https://www.instagram.com/fucstyle/).'
    },
    {
      id: 'm-clip-69100', keyword: 'clip 69100 Le Sang', slug: 'clip-69100-le-sang-mini-world',
      title: '« 69100 Le Sang » : le clip en miniature, tourné à Mini World',
      excerpt: 'Pour le clip du titre phare de l’album, Fucstyle se met en scène en figurine au milieu des maquettes de Mini World. Le Progrès raconte les coulisses.',
      category: 'Clips', tags: ['69100 Le Sang', 'Villeurbanne', 'Le Progrès'],
      cover: U + '2025/11/WhatsApp-Image-2025-11-11-at-17.39.22.jpeg',
      date: '2026-08-23', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Le Progrès', url: 'https://www.leprogres.fr/insolite/2026/08/23/quand-le-rappeur-villeurbannais-fucstyle-met-en-avant-le-territoire-dans-ses-clips' },
      body: 'Le titre phare de l’album méritait un clip à sa hauteur. Pour « 69100 Le Sang », Fucstyle a choisi un décor que tous les gones connaissent : **Mini World**, le parc de maquettes de l’agglo. Et pour habiter ces rues en modèle réduit, il a fait fabriquer sa propre figurine.\n\n## Un clip qui parle du territoire\n\nLe Progrès a consacré un article à ce tournage pas comme les autres. Le journal y rappelle que Jeff vit à Villeurbanne depuis près de 40 ans et qu’il continue de puiser dans son terroir pour écrire et filmer. Le code postal dans le titre, les lieux dans les images : tout ramène au 69100.\n\nInterrogé sur la figurine comme sur son parcours, il a une réponse toute trouvée : « Je me suis fait tout seul ! »\n\n## Toujours au studio\n\nL’article montre aussi Fucstyle dans son studio de Villeurbanne, où il peaufine encore ses morceaux comme à ses débuts dans les années 2000. Indépendant de bout en bout : l’écriture, l’enregistrement, les clips, la boutique.\n\nLe clip sort à la rentrée. En attendant, l’album est dispo en CD et en vinyle sur la boutique.'
    },
    {
      id: 'm-periscope', keyword: 'Souls of Mischief Lyon', slug: 'souls-of-mischief-periscope',
      title: 'Première partie de Souls of Mischief au Périscope',
      excerpt: 'Le 23 mai 2026, Fucstyle ouvrait pour les légendes d’Oakland, auteurs de « 93 ’Til Infinity », dans la salle lyonnaise du Périscope.',
      category: 'Scène', tags: ['Concert', 'Lyon', 'Souls of Mischief'],
      cover: U + '2025/10/Fucstyle.jpg',
      date: '2026-05-20', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Le Périscope', url: 'https://www.periscope-lyon.com/concerts/souls-of-mischief/' },
      body: 'Il y a des affiches qui ne se refusent pas. Le **23 mai 2026**, Fucstyle a assuré la première partie de **Souls of Mischief** au Périscope, rue Delandine (Lyon 2e).\n\n## Une date avec l’histoire du rap\n\nSouls of Mischief, c’est le groupe d’Oakland lié au collectif Hieroglyphics, et surtout l’album *93 ’Til Infinity*, sorti en 1993, l’année où sont aussi arrivés les premiers disques de Snoop Dogg, du Wu-Tang ou de The Roots. Un classique boom-bap aux samples jazz qui tourne encore partout.\n\n## Le 69100 en ouverture\n\nDans sa présentation de la soirée, le Périscope décrivait Fucstyle comme un rappeur issu de l’underground, au flow brut et aux textes sans filtre, membre du SnakeS Crew et auteur de *69100 le Sang*.\n\nUne suite logique pour un MC qui a déjà partagé la scène avec The Beatnuts, Smif-N-Wessun ou Dead Prez.'
    },
    {
      id: 'm-viva', keyword: 'rappeur villeurbannais', slug: 'portrait-viva-villeurbanne',
      title: 'Viva Villeurbanne dresse le portrait d’un rappeur 69100',
      excerpt: 'Le magazine de la Ville est allé à la rencontre de Jeff aux Gratte-Ciel, quelques semaines après la sortie de son premier album.',
      category: 'Presse', tags: ['Portrait', 'Villeurbanne', 'Viva'],
      cover: U + '2025/10/Fucstyle-2.jpeg',
      date: '2026-02-10', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Viva Villeurbanne', url: 'https://viva.villeurbanne.fr/l-essentiel/2026/fevrier/fucstyle-un-rappeur-local-estampille-69100' },
      body: 'En février 2026, **Viva**, le magazine de la ville de Villeurbanne, a consacré un portrait à Fucstyle, photographié aux Gratte-Ciel avec son album.\n\n## Des années de micro avant l’album\n\nL’article revient sur le chemin parcouru : plus d’une centaine de freestyles, des années à affûter son écriture, avant de sortir en décembre 2025 son premier album solo, *69100 Le sang*.\n\nJeff y raconte ses débuts au collège avec ses potes, la naissance du **Snakes Crew**, puis les années plus dures : le Covid, les amis qui raccrochent. Lui n’a jamais lâché.\n\n## Villeurbanne comme moteur\n\nLe quotidien, Lyon et Villeurbanne restent sa matière première. Ses freestyles hebdomadaires sur les réseaux lui ont valu une vraie reconnaissance locale, et son objectif reste le même : faire briller Villeurbanne.'
    },
    {
      id: 'm-pavane', keyword: 'soirée rap Villeurbanne', slug: 'fucstyle-store-la-pavane',
      title: 'Bienvenue au Fucstyle Store : soirée gratuite à La Pavane',
      excerpt: 'Le 10 janvier, Jeff invitait tous les amateurs de hip-hop à La Pavane, à Villeurbanne, pour une soirée rap gratuite avec classiques et objets collector.',
      category: 'Scène', tags: ['Soirée', 'Villeurbanne', 'Le Progrès'],
      cover: U + '2025/11/WhatsApp-Image-2025-11-11-at-17.49.11.jpeg',
      date: '2026-01-09', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Le Progrès', url: 'https://www.leprogres.fr/culture-loisirs/2026/01/09/soiree-rap-gratuite-a-la-pavane-ca-va-bouger-les-bons-mots-avec-fucstyle' },
      body: 'Un mois après la sortie de l’album, Fucstyle a transformé **La Pavane**, à Villeurbanne, en boutique éphémère le temps d’une soirée : **Bienvenue au Fucstyle Store**, le samedi 10 janvier 2026 à 19 h, entrée libre.\n\nAu programme : les morceaux du disque en live, des classiques, et les pièces collector du merch à récupérer sur place.\n\nLe Progrès avait relayé l’invitation, lancée à tous les fans de hip-hop et amateurs de bon son. Les absents peuvent se rattraper sur la boutique en ligne.'
    },
    {
      id: 'm-album', keyword: 'album 69100 Le Sang', slug: '69100-le-sang-premier-album-solo',
      title: '69💯 Le🩸 : le premier album solo est sorti',
      excerpt: '18 titres, une quarantaine de minutes, des beatmakers du coin et zéro intermédiaire. Retour sur un disque attendu depuis 120 freestyles.',
      category: 'Musique', tags: ['Album', '69100 Le Sang', 'Paperboys'],
      cover: U + '2025/10/Gemini_Generated_Image_r9ikqsr9ikqsr9ik.png',
      date: '2025-12-12', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Paperboys', url: 'https://paperboys.fr/fucstyle-6-9-100-dans-le-sang/' },
      body: 'Le 12 décembre 2025, **69💯 Le🩸** est sorti. C’est le premier album solo de Fucstyle, et l’aboutissement de plus de 120 freestyles postés chaque dimanche depuis février 2023.\n\n## Ce qu’en dit la presse\n\nLe média lyonnais **Paperboys** a chroniqué le disque : 18 titres pour une quarantaine de minutes, des productions signées par des beatmakers locaux, et une écriture qui mêle l’humour et le regard critique. Le site relève aussi les clins d’œil à la culture urbaine lyonnaise, du skate au graffiti.\n\nLe Progrès avait suivi la préparation de l’album en vidéo, en rappelant le rendez-vous du dimanche : un freestyle d’une minute, un thème, un décor.\n\n## Où l’acheter\n\nFucstyle a choisi de vendre en direct, sans passer par la grande distribution :\n\n- en CD digipack, vinyle noir ou vinyle collector sur la boutique du site,\n- chez les disquaires indépendants de la région lyonnaise,\n- en streaming sur toutes les plateformes.\n\nLa pochette est signée **Soulgraff**.'
    },
    {
      id: 'm-mobilite', keyword: 'rappeur lyonnais', slug: 'freestyle-engage-travaux-mobilite-lyon',
      title: 'Freestyle engagé : Fucstyle, rappeur lyonnais, dénonce les travaux et la mobilité à Lyon',
      excerpt: 'Le 8 juin 2025, il balance sur Instagram un nouveau freestyle engagé qui parle de mobilité douce, de travaux de circulation et du ras-le-bol de nombreux habitants.',
      category: 'Freestyle', tags: ['RAP', 'Lyon', 'Le Progrès'],
      cover: U + '2023/03/photo-1750094620.jpg',
      date: '2025-06-17', status: 'publie', author: 'fucstyle',
      source: { name: 'Le Progrès', url: 'https://www.leprogres.fr/insolite/2025/06/16/faut-pas-pousser-la-mobilite-douce-ca-fait-glousser-quand-le-rappeur-fucstyle-epingle-les-travaux-de-circulation-a-lyon' },
      body: 'Le **rappeur lyonnais Fucstyle** continue de faire bouger les lignes.\n\nLe 8 juin 2025, il balance sur Instagram un nouveau **freestyle engagé** qui parle de **mobilité douce**, de **travaux de circulation** et du ras-le-bol de nombreux habitants. Le texte, à la fois piquant et très ancré dans le quotidien lyonnais, attire rapidement l’attention… jusqu’à être repéré par le journal *Le Progrès*, qui lui consacre un article dans sa rubrique Société. Pour un artiste indépendant issu de la scène underground, c’est un vrai coup de projecteur local : le son ne se contente plus de tourner sur les réseaux, il devient un **sujet de débat** sur la façon dont la ville évolue.\n\n## Un freestyle né du terrain : Lyon, travaux, embouteillages et galères du quotidien\n\nLe point de départ, c’est simple : le **quotidien à Lyon**.\n\nFucstyle observe ce que tout le monde voit : des **pistes cyclables qui se multiplient**, des **axes en travaux**, des **bouchons**, des gens qui tournent longtemps pour se garer, et une impression générale que la transformation de la ville va plus vite que la capacité des habitants à la suivre.\n\nDans le freestyle, il parle de :\n\n- quartiers devenus **difficiles d’accès** aux heures de pointe,\n- **Presqu’île** qui semble peu à peu se vider de ses habitants au profit des touristes,\n- ce moment où, après de longues minutes à tourner dans son propre quartier, on finit par « perdre le Nord » mentalement.\n\nLe ton est **cash, imagé, parfois ironique**, fidèle au style de Fucstyle : il ne cherche pas la langue de bois. Il dépeint une ville où la volonté d’aller vers plus de mobilité douce se confronte à la **réalité de ceux qui travaillent, livrent, se déplacent ou font leurs courses**.\n\n## Fucstyle, Grégory Doucet et les choix de la Ville de Lyon\n\nAu cœur du texte, Fucstyle s’adresse aussi, de manière indirecte mais claire, au **maire de Lyon, Grégory Doucet**, figure centrale de la politique de mobilité de la ville.\n\nSans faire un discours technique, il met en lumière un ressenti partagé par beaucoup de Lyonnais :\n\n- la sensation que les **décisions sont prises d’en haut**,\n- le fait que les habitants sont souvent **informés après coup**,\n- l’impression que certains quartiers sont devenus de vrais parcours d’obstacles pour les automobilistes et les professionnels.\n\nLe freestyle ne se positionne pas comme un manifeste anti-vélo ou anti-écolo. Il met plutôt en lumière la **tension entre une vision de long terme** (ville plus verte, plus douce, plus durable) et les **galères immédiates** : embouteillages, chantiers, déviations, pertes de temps, complexité pour accéder à certains commerces.\n\nRésultat : le son devient **un miroir du ressenti populaire**, à mi-chemin entre coup de gueule, chronique de rue et commentaire social.\n\n## Soutien à Monsieur Spray : quand la politique de la ville touche les commerces\n\nDans l’article du *Progrès*, un exemple concret est mis en avant : la boutique **Monsieur Spray**, située avenue Félix-Faure, dans le 3ᵉ arrondissement de Lyon.\n\nLe propriétaire est **contraint de fermer**, impacté notamment par les transformations du quartier, les difficultés d’accès et la baisse de fréquentation.\n\nFucstyle choisit de le soutenir en l’intégrant directement à son freestyle. Il ne parle pas seulement de circulation en général, il montre comment ces choix urbains peuvent :\n\n- **faire baisser le trafic de clients**,\n- fragiliser les **petits commerces de quartier**,\n- laisser un sentiment d’abandon chez ceux qui essaient de vivre de leur activité.\n\nCe passage donne une **dimension très humaine** au texte : on quitte le débat abstrait sur « la ville de demain » pour revenir au **visage concret des décisions municipales** – celui d’un commerçant qui baisse le rideau.\n\n## Un rappeur ancré à Lyon, entre humour, punchlines et engagement\n\nCe freestyle n’est pas une première pour Fucstyle : l’article rappelle qu’il a l’habitude de publier régulièrement des **freestyles sur Instagram**, très connectés à l’actualité et au quotidien.\n\nCe qui fait la différence :\n\n- un **ancrage fort à Lyon**, dans ses quartiers, ses rues, ses commerces ;\n- une manière de **parler comme dans la vraie vie**, sans filtre, avec l’argot et l’énergie de la rue ;\n- un mélange d’**humour, de second degré et de punchlines** qui fait sourire tout en faisant réfléchir.\n\n## Et maintenant ?\n\nEn relayant ce son dans ses colonnes, *Le Progrès* montre que la **voix des artistes locaux** a toute sa place dans le débat public, et qu’un artiste indépendant comme Fucstyle peut, avec un simple texte posté sur les réseaux, déclencher une **conversation plus large** sur la manière dont la ville de Lyon est en train de changer.\n\nPour suivre la suite : écouter ses freestyles sur Instagram, rester à l’affût des prochains morceaux, et continuer à soutenir les artistes locaux qui mettent **des mots, du rythme et de la rage** sur le quotidien lyonnais.'
    },
    {
      id: 'm-snakes', keyword: 'Snakes Crew', slug: 'snakes-crew-les-racines',
      title: 'Snakes Crew : les racines du venin',
      excerpt: 'Avant le solo, il y a le crew. Retour sur le collectif villeurbannais où Jeff a fait ses armes, avec la rencontre publiée par Paperboys en 2019.',
      category: 'Histoire', tags: ['Snakes Crew', 'Paperboys', 'Némésis Musique'],
      cover: U + '2025/10/album-1.jpg',
      date: '2019-03-27', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Paperboys', url: 'https://paperboys.fr/rencontre-avec-le-snakes-crew/' },
      body: 'Si tu as traîné dans Lyon, tu as forcément croisé un sticker du **Snakes Crew** sur un poteau. Le groupe est né à Villeurbanne, autour de deux amis d’enfance : **Fricka** et **Jeff, alias Fucstyle**.\n\n## Le QG\n\nEn 2019, Paperboys était allé les rencontrer dans leur QG, la maison de Fricka, avec Arleckin et Alban, fondateur du label **Némésis Musique**. Une cuisine où sont passés pas mal de freestylers de la scène, et un home-studio à l’étage.\n\n## Du bricolage aux grosses scènes\n\nLe crew a commencé avec du matériel amateur, influencé par le rap entendu à la maison et par la West Coast, puis a monté en niveau, disque après disque : *Le Venin* (2013), *L’Anti-Dot* (2015), puis *Venin Ne Meurt Jamais*. Sur scène, ils ont partagé l’affiche avec Nekfeu, Sniper ou Demi Portion.\n\nC’est de là que vient l’énergie qu’on retrouve aujourd’hui dans chaque freestyle du dimanche.'
    },
    {
      id: 'm-sunday', keyword: 'freestyle du dimanche', slug: 'freestyle-sunday-le-rituel',
      title: 'Freestyle Sunday : un rendez-vous, chaque dimanche',
      excerpt: 'Depuis février 2023, un freestyle d’une minute tombe tous les dimanches. Un thème, un décor, et Lyon comme terrain de jeu.',
      category: 'Freestyle', tags: ['Freestyle', 'Instagram', 'Lyon'],
      cover: U + '2025/10/4-GRATONS-scaled.jpg',
      date: '2025-11-14', status: 'publie', author: 'Équipe Fucstyle',
      source: { name: 'Le Progrès (vidéo)', url: 'https://www.leprogres.fr/videos/apres-120-freestyle-hebdomadaires-le-rappeur-fucstyle-prepare-un-album-303rpv3' },
      body: 'Le principe n’a pas bougé depuis février 2023 : **chaque dimanche, un freestyle d’une minute** sur Instagram. Un thème, un décor, et c’est parti.\n\n## Lyon en décor\n\nLes gratons, les tacos, les travaux, le quartier, les potes : les sujets viennent de la rue et du quotidien. Les lieux aussi, puisque Fucstyle a posé son micro un peu partout dans la ville.\n\nLe freestyle des gratons, posté en juillet 2023, reste l’un des plus partagés : « Ça vient de Lyon comme les tacos et les gratons ! ». Une punchline devenue carte de visite.\n\n## 120 freestyles, un album\n\nLe Progrès est venu le filmer au moment où il passait le cap des 120 freestyles et préparait l’album. Ce rendez-vous a été le laboratoire de *69💯 Le🩸* : l’écriture spontanée, le second degré et les punchlines se sont affûtés semaine après semaine.\n\nTous les freestyles sont à retrouver sur [Instagram](https://www.instagram.com/fucstyle/) et sur la page d’accueil du site.'
    }
  ];
})();
