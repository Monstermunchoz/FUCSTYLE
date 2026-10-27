# Fucstyle — nouveau site

Site du rappeur lyonnais Fucstyle : boutique, clips, magazine, tableau de bord.
Fait par 404 Agency.

## Ouvrir

- **Le site** : double-clic sur `index.html`.
- **Le tableau de bord** : `admin/index.html` — code d'accès par défaut **6969** (à changer dans Réglages).

## Le tableau de bord

| Rubrique | Ce qu'on y fait |
|---|---|
| Vue d'ensemble | Chiffre d'affaires, commandes, meilleures ventes, alertes stock |
| Produits | Fiche produit en pop-up avec aperçu en direct : photos, textes, tailles, couleurs, stock, prix, SEO, bouton **Générer la fiche** |
| Stock | Quantités par taille et couleur, export CSV |
| Commandes | Statuts (payée, en préparation, expédiée, livrée), suivi colis, annulation avec remise en stock |
| Clients | Tous les clients, total dépensé, bouton **Notifier** |
| Notifications | Message à un membre, à tous, aux acheteurs d'un produit, aux inactifs ; bandeau rouge sur le site |
| Codes promo | Pourcentage ou montant fixe |
| Magazine | Articles avec photos dans le texte, score SEO en direct, aperçu Google, plan d'article |
| Pages du site | Tous les textes et images (vidéo d'entrée, bio, chiffres, contact, réseaux) |
| Musique & scène | Clips YouTube, freestyles du dimanche, discographie, dates de concert |
| Messages | Formulaire de contact |
| Réglages | Livraison, code d'accès, sauvegarde / restauration |

## Avant la mise en ligne

Cette version fonctionne entièrement dans le navigateur : les changements faits dans le tableau de bord restent sur l'ordinateur qui les fait. Pour que Jeff gère le site depuis n'importe où et que les clients paient pour de vrai, il reste à brancher :

1. **Une base de données** (Supabase ou Firebase) : seul `assets/js/store.js` est à modifier.
2. **Le paiement** : Stripe ou PayPal Checkout sur `commande.html`.
3. **L'envoi d'emails** : Brevo ou Mailchimp pour les notifications en masse.
4. Supprimer les **commandes d'exemple** dans Réglages.

Les photos sont chargées depuis fucstyle.fr : garder l'ancien hébergement des images, ou les copier dans `assets/img`.

`src/` contient les modèles des pages ; les fichiers `.html` à la racine en sont générés.
