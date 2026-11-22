# ROUTE NETTE — Dossier complet du jeu (pour avis et idées d’amélioration)

*Version du jeu : 2026-11-21.13 (v1.9.13) · Dossier généré le 22 novembre 2026 · Jouable : https://nicolas06061997.github.io/Route-Nette/*

---

## 0. Message pour toi, Gemini (à lire en premier)

Bonjour Gemini. Je suis le créateur de **Route Nette**, un jeu de gestion d’entreprise sur téléphone. Je ne suis pas développeur : le jeu a été entièrement codé par une IA (Claude) à partir de mes demandes, en ± 3 semaines et une centaine de mises à jour. Ce dossier contient **absolument tout** le jeu :

- **Partie A** (ce texte) : vue d’ensemble rédigée — concept, déroulement d’une partie, les 3 entreprises, la vie privée, tous les systèmes, l’interface, la technique, l’historique des retours de joueur et les points faibles connus.
- **Partie B** : le « journal de conception » complet (fichier `CLAUDE.md` du projet, ± 100 Ko) — chaque système avec ses formules, ses chiffres, ses noms de fonctions, et la raison de chaque changement.
- **Partie C** : **toutes les données du jeu** extraites automatiquement du code (machines, métiers, rôles, produits, fournisseurs, biens privés, succès, décisions, pays, concurrents…), sous forme de tableaux.
- **Partie D** : la structure de la sauvegarde d’une nouvelle partie.
- **Partie E** : l’index des ± 800 fonctions du code, classées par module, avec numéros de ligne.
- **En pièce jointe séparée (si je l’ai ajoutée)** : `index.html`, le code source complet (± 960 Ko, 5 336 lignes, un seul fichier).

### Ce que j’attends de toi
1. **Ton avis honnête de game designer** : qu’est-ce qui est fort, qu’est-ce qui est faible, qu’est-ce qui ennuie ou décourage un joueur ?
2. **Des idées d’amélioration concrètes et classées** (impact sur le plaisir de jeu ↔ effort), pour chacune des 3 entreprises, la vie privée, la carrière et la fin de partie.
3. **Les problèmes d’équilibre** que tu repères dans les chiffres (partie C) : trop facile, trop dur, inutile, trop rentable, incohérent avec la réalité belge.
4. **L’expérience du nouveau joueur** : les 10 premières minutes, les 2 premières heures. Comment le rendre plus accrocheur sans tutoriel lourd (j’ai fait retirer les astuces et le guide car ils me gênaient) ?
5. **L’ergonomie mobile** : trop de menus ? trop d’infos ? que simplifier ?
6. **La technique** (si tu lis le code) : bugs probables, risques de perte de sauvegarde, lenteurs, et comment organiser un fichier d’un million de caractères.
7. **Des idées nouvelles** : nouvelles entreprises, événements, mini-jeux, multijoueur, rétention (revenir chaque jour), monétisation éventuelle sans « pay-to-win ».

Merci de répondre **en français**, simplement, avec des listes courtes et une priorité claire (🔴 urgent / 🟠 important / 🟢 bonus). Chaque idée doit dire : *quoi*, *pourquoi*, *comment ça se joue*.

### Contraintes à respecter dans tes idées
- **Réalisme belge (Wallonie)** : prix réels 2026, impôts belges (IPP, ISOC, cotisations d’indépendant, précompte, TVA), lois réelles (marchés publics, agréation, droit du travail, titres-services, AFSCA…). C’est une marque de fabrique du jeu.
- **Jamais faire perdre la sauvegarde** d’un joueur (règle absolue).
- **Un seul fichier HTML**, pas de serveur (sauf futur multijoueur), joué surtout sur téléphone (Android et iPhone), installable (PWA).
- **Pas de copie d’un jeu existant** (noms, graphismes) : idées de mécaniques bienvenues, mais le jeu reste original.
- Le joueur ne veut **pas que tout soit automatique** : il aime déléguer, mais garder des décisions à prendre lui-même.

---

## 1. Le concept en une minute

**Route Nette** est un jeu de gestion (tycoon) **réaliste** : tu pars de **3 000 € d’économies** comme indépendant en Wallonie, tu fais des petits boulots chez des particuliers (tonte, haies, déchets, karcher…), tu achètes tes premières machines, tu engages tes premiers ouvriers, puis tu passes aux **marchés publics du SPW** (Service public de Wallonie : fauchage, balayage, marquage, déneigement, glissières, élagage…). Tu montes les classes d’agréation jusqu’à la classe 8 (marchés de plusieurs dizaines de millions), tu ouvres des filiales dans 10 pays d’Europe, tu rachètes des concurrents, tu entres en bourse… puis tu débloques **deux autres entreprises** (une **société de nettoyage** à 25 M€, une **chaîne de supermarchés** à 75 M€), le tout relié par une **holding** et une **vie privée** complète (maison, voitures, yachts, famille, bourse, casino, immobilier locatif).

- **Genre** : gestion / tycoon / simulation économique, temps réel avec pause et vitesses (1 jour de jeu = 4,5 s en vitesse normale ; ▶▶ et ▶▶▶).
- **Plateforme** : navigateur mobile, PWA installable, hors-ligne. Un seul fichier `index.html` (canvas 2D + HTML), police Nunito, aucune autre dépendance.
- **Public** : joueur adulte francophone belge, amateur de gestion « comme en vrai ».
- **Ton** : chaleureux, émojis partout, noms belges réalistes, humour discret (ouvrier légendaire « Jason Pougin »).
- **Progression longue** : la simulation de référence montre ± 65 % du jeu fini après 30 ans de jeu pour une grosse entreprise. Le jeu est « terminé » à 100 % (niveau 100 + 12 grands chantiers + tous les succès) mais on peut continuer.

### Le jeu en chiffres
| Élément | Nombre |
|---|---|
| Types de chantiers Route Nette | 73 (21 petits boulots privés + 52 marchés publics SPW) |
| Machines | 37 (+ gammes « neuve » et « haut de gamme » avec vrais modèles de marque) |
| Fonctions du personnel | 41 rôles (ouvriers, bureau, encadrement, direction) |
| Achats de la vie privée | 101 biens (voitures, maisons, immeubles, yachts, jets, collections, rénovation, démesure…) |
| Succès | 97 (Route Nette) + 35 (nettoyage) + 30 (magasins) |
| Niveaux de carrière | 100 (Route Nette), 50 (nettoyage), carrière magasins |
| Grands chantiers / contrats / projets | 12 + 8 + 8 |
| Décisions du patron (événements à choix) | 34 + 16 + 16 |
| Pays de filiales | 10 |
| Produits en magasin | 109 produits, 14 rayons, 12 fournisseurs, 7 formats de magasin, 15 services |
| Actions en bourse privée | 17 vraies entreprises (cours simulés) |
| Casinos | 11 (9 casinos belges + Monte-Carlo + Las Vegas), 9 jeux équitables |
| Code | ± 960 Ko, 5 336 lignes, ± 800 fonctions |

---

## 2. Déroulement d’une partie (parcours du joueur)

### Phase 1 — Le débutant (mois 0 à ± 12)
- Animation d’intro (lever du soleil, camionnette, balayeuse qui nettoie l’écran), menu : Histoire / Multijoueur (bientôt) / Options.
- On nomme son entreprise. On est seul (« Toi », le patron), 3 000 € en poche, 1 650 €/mois de vie privée à payer.
- **Inscription à la BCE** (Banque-Carrefour des Entreprises) obligatoire avant de facturer.
- Petits boulots privés (onglet 🧰 Boulots) : demandes de clients avec quantité, prix, matériel nécessaire. Facturés par demi-journée entamée. Demande limitée (on ne peut pas faire 50 tontes par jour).
- Achat du premier matériel (taille-haie, débroussailleuse, tondeuse, nettoyeur haute pression…), d’une remorque puis d’une camionnette.
- **Toucher le chantier à l’écran** = coup de main du patron (bonus de travail).
- Impôts réels : cotisations d’indépendant 20,5 % (min. 290 €/mois), IPP progressif.
- Prêt bancaire possible. Découvert autorisé. Calendrier réel : week-ends, jours fériés belges, congés du bâtiment, intempéries (pluie, orage, neige arrêtent ou ralentissent).
- Objectifs guidés (succès g0, g1… : « Inscris ton entreprise à la BCE », etc.).

### Phase 2 — La petite entreprise (± 12 à 24 mois)
- Premier ouvrier : candidats avec **CV belge généré** (âge, commune, parcours, diplômes, permis, langues, référence), **portrait SVG unique**, **entretien d’embauche** (impression juste 3 fois sur 4). Motivation et sérieux **cachés**.
- **Rapports de chantier** : un contremaître ou le patron observe les ouvriers → recadrer, avertissement écrit, licenciement avec préavis (statut unique), motif grave (3 jours ouvrables, sinon tribunal du travail), prime.
- **VCA*** (certification sécurité, 3 800 €), **RC**, passage possible en **SRL** (ISOC).
- **Premier marché public** vers 14 mois (test de référence).

### Phase 3 — Les marchés publics (onglet 🏛️ Marchés)
- Appels d’offres générés : pouvoir adjudicateur, procédure (faible montant < 30 000 €, négociée sans publication < 143 000 €, ouverte au-delà), **métré** avec postes et quantités, délai en jours ouvrables.
- **Sélection qualitative** (`spwReq`) : RC, VCA, agréation, effectif, matériel, références.
- **Offre au prix unitaire** : on choisit son coefficient (déboursés secs × coefficient ; marché ≈ 1,6).
- **PV d’ouverture des offres** face à des concurrents nommés avec styles (casseur de prix, qualité, spécialiste hiver, chasseur de têtes).
- **Offre anormalement basse**, attribution, **cautionnement 5 %** (garantie bancaire), exécution, **amende pour retard** (art. 86 RGE, R = 0,45 × M × n²/N²), réception provisoire, **contrôle qualité SPW** (bonus 1 % / réfaction 2 %), paiement à 30 jours (parfois en retard), **recours** au Conseil d’État avec avocat.
- **Agréation** classes 4 → 8 (seuils réels belges). Association momentanée, sous-traitance.

### Phase 4 — La PME qui délègue (± 15 à 100 personnes)
- **Personnel de bureau** : aide-comptable (Angélique Mawet), comptable, RH, secrétaire, métreur, gestionnaires de chantier, directeurs (technique, financier, commercial), chargée de clientèle (accepte les petits boulots), conducteur de travaux principal (répartit les équipes), responsable des offres (remet les offres seul), formateur, mécanicien, conseiller en prévention, QHSE, gestionnaire de flotte, juriste, assistante, gardiennage, recouvrement, communication, relations sociales, responsable hiver, acheteur de matériel (Thierry), responsable de l’organisation du bureau (Véronique, engage/licencie le bureau), responsable des équipes de terrain (Fabienne, engage/licencie les ouvriers chaque jour)…
- Chaque employé a un **effet mesuré** (statistiques sur sa fiche : jours, CA produit, coût, actions faites).
- **Équipes automatiques**, renforts sur les chantiers en retard, location de matériel (Boels/Loxam) quand une machine manque.
- **Intérim** (agence fictive « Wallintérim ») : commandes, délais, notation par la chargée de recrutement, CDI.
- **Dépôts** : chez soi, hangars loués, entrepôts à acheter (crédit pro), plusieurs dépôts, équipements (atelier, cuve de gasoil, aire de tri, station de lavage).
- **Vraie vie de l’entreprise** : usure des machines et pannes, contrôle technique, syndicats (éco-chèques, négociation, grève), accidents du travail (bonus-malus de l’assurance), procès (avocats 1 à 5 étoiles), contrôles fiscaux, urgences météo, grands événements (crise, flambée du gasoil, plan de relance, inflation, hiver extrême), indexation des salaires, contrats d’entretien annuels, publicité, décisions du patron (34 événements à choix), visites de chantier (mini-jeu : trouver 3 erreurs de sécurité en 15 s).

### Phase 5 — Le groupe (100 à 10 000+ personnes)
- **Innovation** (9 projets), **rachat de concurrents**, **entrée en bourse** (Euronext), **fondation**.
- **Filiales en Europe** (10 pays) : directeur choisi parmi 3 CV (prudent / ambitieux / économe), réputation locale, appels d’offres à l’étranger, ouvriers détachés, machines envoyées, décisions par pays, carte de l’Europe.
- **Rachat de l’agence d’intérim** (150 M€) et de ses agences régionales.
- **Mode « Géant »** dès 100 M€ : concessions PPP (E411, tram de Liège, Ring de Bruxelles…), rachat de groupes européens fictifs, industrie intégrée (carrière, centrale d’enrobés…), philanthropie, classement des fortunes belges.
- **Vente de l’entreprise** possible (via la holding = exonérée), puis relancer une nouvelle société.

### Phase 6 — Le multi-entreprises
- Page **« Mes entreprises »** (hub) : Route Nette (gratuite), **société de nettoyage** (25 M€), **chaîne de magasins** (75 M€), holding de groupe, vie privée, « Prochaine entreprise ».
- Même calendrier, même vie privée, argent séparé par société, holding qui fait remonter les dividendes.

### Faillite et seconde chance
- Sous −20 000 € (au-delà du découvert) : **réorganisation judiciaire** (2 fois max), puis **faillite** : nouvelle société avec 3 000 € (on garde références, CA cumulé, succès) ou tout recommencer.
- Anti-abus : le tribunal reprend les salaires excessifs que le patron s’est versés dans les 6 mois avant la faillite (période suspecte).

---

## 3. Les trois entreprises en détail

### 3.1 Route Nette — entretien des routes (entreprise principale)
- **Onglets** : 🦺 Chantiers (`rCh`), 🧰 Boulots (`rPb`), 🏛️ Marchés (`rAo`), 🚜 Matériel (`rEq`), 👷 Équipe (`rMt` : Terrain, Engager, Bureau, Intérim), 📊 Entreprise (`rBi` : Résumé, Argent, Société, Empire, Plus, Géant).
- **Boucle quotidienne** (`tick()` = 1 jour) : salaires courus, frais fixes, avancement de chaque chantier (puissance de l’équipe × efficacité × météo × matériel × bonus), factures et paiements avec délai, nouveaux appels d’offres et petits boulots, événements, décisions, objectifs, défis.
- **Calcul d’un chantier** : quantité totale ÷ (rate × ouvriers × efficacité × bonus). Efficacité d’un ouvrier `w.sk` 0,5-1,5 (2,0 pour Jason Pougin, l’ouvrier légendaire), motivation cachée, spécialités (permis C, conducteur d’engins, élagueur-grimpeur, paveur, peintre, signaleur, ramasseur…).
- **Prix publics** = déboursés secs × coefficient de vente (marge réaliste et mince comme dans le vrai secteur).
- **Scène animée** vue de côté en parallaxe : ciel et météo, 4 saisons, collines, éoliennes, forêt, route avec voitures, décor propre à chaque métier, véhicules détaillés (camionnette, tracteur, balayeuse, nacelle, hydrocureuse, flèche lumineuse…), ouvriers animés, oiseaux, papillons, feuilles, flaques, phares sous la pluie.

### 3.2 Société de nettoyage (2e entreprise, 25 M€)
- **Activités** : titres-services (aides-ménagères chez les particuliers ; titre 10,60 € + intervention régionale), contrats de bureaux / commerces / écoles / industrie (la nuit, prime 25 %) / hôpitaux, vitres, chantiers ponctuels (fin de chantier, après sinistre…), marchés publics (60 % prix / 40 % qualité).
- **Mécaniques** : heures vendues vs heures disponibles (couverture), qualité par contrat, satisfaction, plaintes, renouvellements disputés (s’aligner sur le concurrent ou perdre le client), clause d’indexation, absences (± 8 %, grippe en hiver), départs, marché du travail (candidats par semaine), politique salariale (barème / +5 % / +10 %), fatigue, pénalités de non-exécution, difficulté choisie (facile / normal / difficile).
- **Personnel** : aides-ménagères (CP 322.01), techniciennes (CP 121), laveurs de vitres, cheffes d’équipe, bureau (planificatrice, commercial, RH, qualité, agence titres-services, appels d’offres, comptable, directrice d’exploitation, prévention).
- **Progression** : locaux (maison → grand siège + 20 agences), carrière 50 niveaux, 8 grands contrats, concurrents à racheter, défis du mois, grands événements (télétravail, épidémie, pénurie de main-d’œuvre, boom de la construction), analyse « Où va l’argent ? ».
- **Décor** : rue de ville, un bâtiment par contrat, camionnettes au nom de la société, agents de nettoyage animés (tunique selon le métier).

### 3.3 Chaîne de magasins (3e entreprise, 75 M€)
- **Départ** : une supérette dans une ville wallonne. **109 produits** en 14 rayons (TVA 6 / 21 %), avec prix d’achat, colisage, durée de conservation, ventes de base, saisonnalité, sensibilité à la météo et élasticité au prix.
- **Achats** : 12 fournisseurs (prix, minimum de commande, frais de livraison, jours de livraison, délai, fiabilité, qualité, délai de paiement), commandes avec quantités conseillées, contrôle à la réception (manquants, casse, température), réserve et rayons, lots avec dates de péremption, anti-gaspi, dons à la banque alimentaire.
- **Ventes** : clients par jour × ville × jour de la semaine × satisfaction × réputation × prix ; capacité des caisses ; réassort ; vols et démarque inconnue ; inventaire ; folder promo ; événements commerciaux (Saint-Valentin, Pâques, barbecues, Halloween, Saint-Nicolas, fêtes…).
- **Contrôles AFSCA** (Smiley, chaîne du froid, amendes, fermeture).
- **Croissance** : 7 formats (épicerie → hypermarché), 15 services (boucherie, fromagerie, poissonnerie, traiteur, cave, fleurs, presse-Lotto, colis, café, bornes de recharge…), positionnement discount / classique / premium, achat des murs (crédit), sale & leaseback, rénovation, entrepôt central et camions, transferts de stock, concurrents (ouvertures près de chez toi, rachats), marque propre, drive et livraison, franchise, agence d’intérim, centres commerciaux (14 M€ → 650 M€).
- **Personnel** : caissières, réassort, étudiants, gérante (commande et réceptionne seule), acheteur, RH, responsable qualité, boucher ; syndicats CP 202, intérim, rapports, formations, procès.

---

## 4. La vie privée (page plein écran)
- **Compte privé séparé** de la société. Salaire du patron (indépendant = prélèvement ; SRL = rémunération avec charges, déductible), dividendes avec précompte (VVPR-bis 30/20/15 %), bonus de fin d’année, réserve de liquidation, voiture de société, pension complémentaire, compte courant du dirigeant.
- **Menu** : 🏡 Accueil (patrimoine, reste du mois, bonheur, budget, journal privé, fortune totale, réputation personnelle), 🗝️ Biens, 💶 Argent (salaire, placements, bourse, holding), 🛒 Boutique, 🎰 Loisirs.
- **Boutique (101 biens)** : voitures (Dacia → Bugatti), motos, immobilier (prix moyens notaires Wallonie), immeubles de rapport, logements à louer, maison à rénover et revendre, bateaux, yachts, jets, rénovation de la maison (panneaux solaires, pompe à chaleur… qui font économiser), famille et abonnements, vacances, collections dont la valeur varie, « démesure » (club de foot D1A, équipe cycliste WorldTour, écurie du Mans, gratte-ciel, voyage spatial).
- **Location** réaliste : bail de résidence principale, agence ou soi-même, certificat PEB, garantie locative, locataire au sérieux caché, impayés → mise en demeure → juge de paix → expulsion, indexation, préavis, location saisonnière, impôt sur les loyers. **Gestionnaire de locations** à engager (1 jour/semaine → temps plein + assistante).
- **Placements** : épargne, bon d’État, ETF, or, épargne-pension, **bourse** (17 actions réelles simulées : AB InBev, KBC, Colruyt, ASML, Apple… avec TOB, courtage, dividendes, taxe sur les plus-values), **casino équitable** (pas d’avantage de la maison, à la demande du joueur : roulette sans zéro, machines à sous, jackpot progressif, blackjack, baccara, vidéo poker, dés, keno, grattage, paris sportifs Jupiler Pro League).
- **Vie** : santé du patron (stress selon la taille de l’entreprise, burn-out = 30 jours d’arrêt), vacances, sport, bonheur, rencontre, mariage (contrat de mariage ou pas), divorce, enfants qui grandissent, études, qui rejoignent l’entreprise à 18 ans, héritage, événements de la vie (rentrée scolaire, chaudière, vétérinaire…).

---

## 5. La holding de groupe
- Une seule holding (page « Mes entreprises »), qui ne disparaît jamais (même après la vente d’une société).
- Apport des sociétés, dividendes société → holding exonérés (RDT), prêts intra-groupe (4 %), augmentations de capital, frais de gestion, salaire du dirigeant, remontée automatique (0-75 % du bénéfice), filet de sécurité (prêt automatique si une société est dans le rouge), dividende holding → privé avec précompte, ISOC de la holding.
- Placements (immeubles, bureaux loués à sa propre SRL, actions, start-ups à risque) et **10 PME wallonnes fictives** à racheter (25 / 51 / 100 %) : boulangerie, garage, transport, toitures, brasserie, logiciel, vétérinaires, photovoltaïque, maison de repos…
- Organigramme, valeur du groupe, courbe.

---

## 6. Carrière, défis et fin de partie
- **Carrière** niveau 1-100 avec titres, XP par chantier fini, défis du mois (3 au hasard), défi de l’année, série 🔥 de mois réussis (+10 % d’XP par mois, max +50 %), bonus de travail +1 % par 5 niveaux.
- **12 grands chantiers** (de « Abords du nouveau stade de Liège » 30 jours à des projets de 540 jours) avec personnel minimum et classe requise.
- **97 succès** pour Route Nette. % du jeu fini (`carPct()`), message « Félicitations, tu as fini le jeu ! » à 100 %.
- **Entre amis** (sans serveur) : lien de partage `#voir=…` qui résume ton entreprise, comparaison ▲▼, défis entre amis.
- **Multijoueur** : cahier des charges en 6 lots écrit, étape 1 (intro + menu) faite, le reste est sur une branche séparée, pas encore publié. Sauvegarde en ligne Firebase prévue.

---

## 7. Interface (mobile)
- **En-tête** : logo avec niveau, nom de l’entreprise, argent animé, cloche de notifications, bouton 🏢 « Mes entreprises », vitesse (pause / ▶ / ▶▶ / ▶▶▶), météo, date, jour férié.
- **Décor animé** en haut (canvas), **liste de cartes** en dessous, **barre d’onglets** en bas.
- Fenêtres modales du jeu (aucun `confirm()` du navigateur), messages (toasts), journal, confettis et pièces quand l’argent rentre.
- Listes par paquets (« Voir N de plus ») pour les très grosses parties.
- Tout en français, émojis comme icônes, police Nunito, thème vert.

## 8. Technique
- **Un seul fichier** `index.html` (± 960 Ko) : HTML + CSS + JavaScript « vanilla », canvas 2D. Service worker (`sw.js`) pour le hors-ligne, `version.json` pour annoncer les mises à jour, GitHub Pages pour l’hébergement.
- **Sauvegarde** dans `localStorage` (clé `routenette-save` + copies `bak`, `prev`, `rescue`, `trash`), compression LZ dans un Web Worker pour les grosses parties (> 350 000 caractères), migration des vieilles sauvegardes (`migrate()`, `SCHEMA`), code d’export/import, restauration de la copie d’avant.
- **Performances** mesurées : un jour de jeu ± 15-22 ms à 1 700 personnes ; caches par jour (`spwReq`, `has(r)`, ouvriers par id) ; redessin limité en vitesse rapide ; sauvegarde limitée à 1 écriture / 1,5 s.
- **Photos réelles** des biens et machines via l’API Wikipédia (miniatures Wikimedia Commons).
- **Tests** faits par l’IA : robots qui jouent plusieurs années, clics au hasard sur tous les boutons, vieilles sauvegardes, captures d’écran 360 px, mesures de performance.

---

## 9. Historique des retours du joueur (ce qui a déjà été corrigé)
Ces retours montrent ce qui a posé problème en jouant ; ils peuvent t’aider à repérer des faiblesses de fond :
1. « Une vraie entreprise survit » → rééquilibrage complet (coefficient de vente, marges, découvert).
2. « C’est trop dur » → aides à l’emploi réelles, chômage temporaire, location de matériel, plus de petits boulots.
3. « Pas tout automatique » → visites de chantier (mini-jeu), décisions du patron, coups de main en touchant l’écran.
4. Faille : se verser des milliards puis faire faillite → test de liquidité, reprise par le tribunal.
5. « Les cartes se coupent sur Samsung » → retrait des effets de flou CSS.
6. « Le décor est coupé en deux après avoir tourné le téléphone » → redimensionnement corrigé.
7. « 490 propositions de CDI en attente » → la chargée de recrutement signe elle-même.
8. « Je n’ai pas assez de chantiers à 350 personnes » → plus d’appels d’offres pour les grosses entreprises.
9. « Mémoire pleine, sauvegarde impossible » → compression de la sauvegarde.
10. « Chaque bouton s’exécute 2 fois » → bug `click()` dans les attributs HTML.
11. « Il me faut une seule holding » / « je devais repayer ma holding » → holding unique.
12. « Tu me dis d’engager mais 5 minutes après je fais faillite » → conseils d’embauche tenant compte de l’argent.
13. « Je fais souvent faillite » → crédit de caisse sur les factures à recevoir (le vrai problème : les clients paient après les salaires).
14. « Quand je quitte l’appli ça bug » → sauvegarde légère en quittant.
15. « Thierry (acheteur) ne fait rien » → règles d’achat refaites.
16. « Le jeu lague » (partie à 375 M€ de CA) → optimisations.
17. « Toutes les 2 secondes j’ai une fenêtre de marché public » → moins de fenêtres pour les grosses entreprises.
18. Guide et astuces retirés à la demande du joueur.

## 10. Points faibles et questions que je me pose (à challenger)
- **Complexité** : énormément de systèmes. Un nouveau joueur comprend-il quoi faire ? Faut-il un vrai fil conducteur (chapitres, scénario) ?
- **Automatisation** : avec Véronique (bureau), Fabienne (ouvriers), Benoît (équipes), Grégory (offres), Manon (petits boulots), Thierry (achats), Élodie (intérim)… l’entreprise tourne presque seule. Où est le jeu au milieu de partie ? Quelles décisions intéressantes reste-t-il ?
- **Milieu / fin de partie** : l’argent devient illimité (milliards). Les dépenses de prestige suffisent-elles ? Comment garder de la tension ?
- **2e et 3e entreprise** : débloquées très tard (25 M€ et 75 M€). Trop tard ? Assez différentes ? Elles ont moins de « vie » visuelle que Route Nette.
- **Lisibilité** : beaucoup de chiffres et de texte sur petit écran.
- **Rétention** : rien ne pousse à revenir chaque jour (pas de temps réel hors ligne, pas de récompense quotidienne).
- **Multijoueur** : quel multijoueur a du sens pour ce jeu (classement, marchés publics disputés entre amis, coopération, bourse commune) ?
- **Technique** : un seul fichier de 1 million de caractères écrit par IA ; risques de bugs cachés, difficulté à maintenir.
- **Équilibre** : marges réalistes (minces) → est-ce frustrant ? La simulation « robot » est-elle représentative d’un humain ?

---
*Les parties B à E suivent. Elles sont longues et techniques : elles servent de référence pour vérifier une idée ou un chiffre.*


# PARTIE B — Journal de conception complet (fichier CLAUDE.md du projet)

> Ce texte est la mémoire technique du projet : chaque système, ses formules, ses chiffres, ses noms de fonctions dans le code, et pourquoi il a été ajouté ou modifié. Il a été écrit au fil des mises à jour.

### (CLAUDE.md) Route Nette

Jeu mobile 2D (PWA) de gestion d'entreprise d'entretien des routes en Wallonie : on part de zéro, petits boulots, machines, ouvriers, puis marchés publics du SPW.
Un seul fichier `index.html` (canvas 2D, aucune dépendance sauf la police Google « Nunito »), publié par GitHub Pages depuis la branche `main`.
Projet indépendant : ne rien mélanger avec La Fine Crasse ni Krinkels Plan.

L'utilisateur parle français et n'est pas développeur : réponses courtes, en français, étape par étape.

### À chaque modification du jeu
1. Changer `APPV` (second `<script>` en bas de `index.html`) **et** `v` dans `version.json` (même valeur, format `AAAA-MM-JJ.n`, différente à chaque fois).
   Mettre dans `notes` de `version.json` une phrase courte : elle s'affiche dans « Nouvelle mise à jour disponible ».
   Le service worker est enregistré en `sw.js?v=APPV` : son cache (`routenette-<version>`) change tout seul.
2. Commit + push sur `main` ; GitHub Pages publie en 2-3 minutes.
3. Republier aussi la copie artifact Claude du jeu : https://claude.ai/artifact/QGzYwWfBzCyefzCMDbT4yV (même `index.html`).

### Sauvegarde : ne JAMAIS faire perdre la progression
- Clé `localStorage` `routenette-save` (+ copie `routenette-bak`). **Ne jamais renommer ces clés.**
- Nouveau champ dans l'état : l'ajouter dans `defaults()` ; `migrate()` complète les vieilles sauvegardes. Monter `SCHEMA` si une conversion est nécessaire et l'écrire dans `migrate()`.
- Ne jamais supprimer une clé de `EQ` ou `JOBS` sans prévoir le remboursement dans `migrate()`.
- Code de sauvegarde (export/import) dans l'onglet Entreprise.
- Sécurité des mises à jour : `load()` copie la sauvegarde brute dans `routenette-prev` à chaque ouverture (avant toute modification), essaie `SAVE`, puis `routenette-bak`, puis `routenette-prev` ; si `migrate()` plante, on charge quand même avec les valeurs par défaut ajoutées ; si rien n'est lisible, copie dans `routenette-rescue-<date>` et message 🛟 (jamais rien d'écrasé sans copie). Bouton « 🛟 Copie d'avant » (`restorePrev`) dans Réglages. « Mettre à jour » appelle `save()` avant de recharger. `navigator.storage.persist()` demande au navigateur de ne pas effacer les données. Nouveaux champs : toujours lus avec une valeur par défaut (`st.x||…`) pour que les vieilles parties marchent.

### Lancer
`python3 -m http.server 8000` puis `http://localhost:8000/`. Pas de build.

### Réalisme (Belgique)
- Prix HTVA du matériel relevés en 2026 (annonces truck1.be/.fr, machineseeker, hellopro, moniteurautomobile.be, ledenicheur) : nacelle 20 m occasion 20-45 k€, balayeuse compacte occasion 25-65 k€, hydrocureuse occasion 36-120 k€, Transit plateau 2019 ≈ 25 k€ HTVA, Stihl FS 461 ≈ 1 200 €.
- Salaires ouvriers : barème 2026 CP 145.04 parcs et jardins (cat. 1 = 16,00 €/h … cat. 5 = 18,87 €/h), coût employeur annuel ≈ brut × 1,68 réparti sur ± 236 jours prestés (manœuvre 225 €/jour) ; étudiants max 650 h/an (`w.hy`) ; employés selon salaires moyens belges (aide-comptable ≈ 3 000 € brut).
- Diesel 2,45 €/L TVAC (oct. 2026) → coûts `u` des machines selon la consommation réelle. Impôts : IPP progressif `ippYear()` (25/40/45/50 % + 7,5 % communal, quotité exemptée 10 910 €), cotisations d'indépendant 20,5 % (min. 890 €/trimestre, max. 5 103 €), ISOC 25 % (dirigeant payé < 45 000 €). Intérêts du découvert 9 %/an. Assurance accidents du travail ± 4 % de la masse salariale (jardins).
- Pouvoirs publics : délai unique de paiement de 30 jours depuis le 1/1/2025 (parfois en retard dans le jeu) ; cautionnement 5 % par garantie bancaire (commission ± 1,5 %).
- Marchés publics : faible montant < 30 000 €, procédure négociée sans publication < 143 000 €, procédure ouverte au-delà ; agréation (AR 26/09/1991, 8 classes ; l'AR du 14/04/2024 a été annulé par le Conseil d'État le 12/12/2025 : anciens montants rétablis. Dans le jeu `CLS[1]` = classe 4 ≤ 900 000 €, `CLS[2]` = classe 6 ≤ 2 730 000 €, `CLS[3]` = classe 7 ≤ 5 450 000 €, `CLS[4]` = classe 8 sans limite ; `clsMax()`) pour les travaux > 75 000 € ; amende pour retard art. 86 RGE R = 0,45 × M × n²/N² (max 5 %) ; cautionnement 5 % ; délais en jours ouvrables ; jours fériés belges et congés du bâtiment ; chômage intempéries.
- Personnel de bureau fixe : aide-comptable **Angélique Mawet** (nom demandé par l'utilisateur), comptable Marc Delvaux, RH Sophie Lambert, secrétaire Nadia Benali, métreur Olivier Gérard, directeurs Philippe Renard (technique), Isabelle Marchal (DAF), Thierry Collard (commercial).

### Structure du script principal
- **Données** : `EQ` (matériel, prix HTVA réalistes, `u` = coût par jour d'usage, `veh` = assurance), `ADM` (BCE, RC, VCA), `CLS` (agréation des entrepreneurs, seuils réels), `JOBS` (`p:1` = petit boulot privé, sinon marché SPW ; `rate` par ouvrier-jour, `pu` prix unitaire, `need` matériel, `pc` permis C, `vis` décor).
- **Simulation** : `tick()` = un jour (salaires, `fixedList()`, avancement, factures `st.inv` payées avec délai, appels d'offres, événements, objectifs `GOALS`).
- **Marchés publics** : `genTender` (pouvoir adjudicateur, procédure, métré `postes`, délai `N` en jours ouvrables), conditions `spwReq` (sélection qualitative), offre `bidUI`/`drawMetre` (prix unitaires), `openBids` (PV d'ouverture, concurrents `st.riv`), `decide` (offre anormalement basse, attribution).
- **Personnel** : `ROLES` (ouvriers, bureau, encadrement, direction), effets via `has(r)`, `mgmtCap()`, `offerCap()`, `payDelay()`.
- **Calendrier** : `dayKind`, `isWork`, `addWork` ; salaires cumulés `st.salAcc` payés le 1er du mois avec `fixedList()`.
- **Interface** : onglets `rCh`, `rPb`, `rAo`, `rEq`, `rMt`, `rBi` ; fenêtres `showModal`.
- **Scène** : `draw(t)` vue de côté en parallaxe (ciel/météo `WX`, saisons `PAL`, collines, éoliennes, route, voitures, décor par métier, véhicules `van`, `tractor`, `sweeper`, `nacelleTruck`, `hydroTruck`, `arrowTrailer`, ouvriers `worker`).
- Second `<script>` : version, mises à jour (`version.json`), installation (bouton, bandeau).
- **Rapports de chantier** : chaque ouvrier a une motivation cachée (`base`, `mot`). `observe()` (contremaître dans l'équipe, patron, gestionnaires de chantier) crée `st.reports` ; actions `rptAct()` : recadrer, avertissement écrit, licenciement avec préavis (`preavisW`, statut unique), motif grave (3 jours ouvrables, sinon tribunal du travail), prime.
- **CV et photos** : `avatar(w,taille)` dessine un portrait SVG unique (graine = nom), `cvOf(w)` génère un CV belge (âge, commune, parcours, diplômes, permis, langues, référence qui trahit parfois un ouvrier peu sérieux), `cvUI()` l'affiche, `interview()` = entretien d'embauche (impression juste 3 fois sur 4).
- **Économie réaliste** : départ avec 3 000 € d'économies, vie privée du patron 1 650 €/mois, `monthTax()` (cotisations d'indépendant 20,5 % min. 290 €/mois + impôt ; SRL et ISOC 20-25 % dès 120 000 € de CA ; machines amorties sur 5 ans via `st.mCapex`), VCA* 3 800 €, demande de petits boulots limitée. Vitesse : 1 jour = 4,5 s. Test de référence : en jouant seul, la camionnette et la VCA arrivent vers 12-14 mois (avec un prêt), le premier marché public vers 14 mois.
- **Argent** : toute variation de trésorerie passe par `mv(montant, libellé, catégorie)` (jamais `st.cash-=` directement) → relevé `st.mv`, bilan du mois `st.mon` / `st.lastMon` (affichés dans Entreprise, catégories `CATN`).
- **Effets visuels** (sans effet sur le jeu) : textures `TX` (asphalte, herbe), `shadow()`, roues qui tournent (`WROT`), phares sous la pluie (`HEAD`), forêt lointaine et brume, oiseaux, papillons, feuilles d'automne, flaques, rayons du soleil, étalonnage par saison ; pièces `coinPop()` quand l'argent rentre ; `confetti()` sur le canvas `#fx` ; compteur d'argent animé `cashFx()` ; animations d'entrée des cartes (classe `enter`) ; niveau autour du logo = objectifs atteints.
- **Dettes** : sous -20 000 €, `rescue()` = réorganisation judiciaire (dettes → crédit, compte à +5 000 €, réputation -10), 2 fois maximum ; la 3e fois, faillite (`st.over`) : `failUI()` propose `relaunch()` (nouvelle société avec 3 000 €, on garde références, CA, objectifs, efficacité du patron) ou de tout recommencer ; la fenêtre réapparaît au chargement.
- **Équilibre** (rééquilibré après retour du joueur « une vraie entreprise survit ») : prix publics = déboursés secs × `COEF` 1,45 (coefficient de vente du secteur) ; petits boulots facturés par demi-journée entamée ; charge d'encadrement `mgmtLoad()` (public = 1, privé = 1/3) ; découvert autorisé `overdraft()` = 20 000 € + 10 % du CA (max 150 000 €). Simulation de référence (bot, 4 ans, offres à 1,33) : CA ≈ 3 M€, 16 personnes, aucune réorganisation judiciaire, marges minces comme dans le vrai secteur.
- **Marchés ajoutés** (activités réelles du SPW : baux d'entretien, service d'hiver, abords, propreté) : curage de fossés (`op:'engin'`), nids de poule, marquages routiers (`dry`), épandage de fondants et déneigement (`allw`), pose de glissières, plantes invasives, abattage d'arbres dangereux (`gr` = élagueur-grimpeur), propreté des aires de repos. Machines ajoutées avec prix d'annonces : mini-pelle 5 t 22 750 €, benne 3,5 t 21 500 €, benne-grue 19 t 45 000 €, traceuse 28 000 €, enfonce-pieux 10 500 € ; saleuse + lame 28 000 € = estimation (aucun prix public trouvé). Métiers ajoutés : conducteur d'engins (CP 124 cat. III 20,45 €/h), élagueur-grimpeur, mécanicien, conseiller en prévention.
- **Statistiques du personnel** : `w.s` (jours sur chantier, chiffre d'affaires produit, coût) et compteurs `st.rs` par fonction (aide, gest, metreur, compta, rh, dirt, meca, prev, offres en plus) → `staffStat(w)` sur chaque fiche.
- **Vie privée** (onglet 🏡 Privé, `rPv`) : compte privé `st.priv` séparé de la société. Versements `pTransfer()` : indépendant = prélèvement sans impôt en plus (bénéfice déjà taxé) ; SRL = rémunération (± 45 % de charges, déductible) ou dividende (précompte 30 %). Catalogue `PRIV` (prix TVAC, coût mensuel `m`, TMC wallonne estimée, dépréciation `dep`) : voitures neuves et d'occasion, motos, immobilier (prix moyens notaires Wallonie 2025 : maison 270 790 €, appartement 206 297 € ; droits d'enregistrement 3 % habitation propre et unique, sinon 12,5 % ; crédit hypothécaire 80 % sur 25 ans à 3,3 %), bateaux et yachts (8-12 %/an de la valeur), luxe, vacances. `privMonth()` le 1er du mois ; être propriétaire ramène la vie privée de 1 650 à 850 € ; saisie par huissier sous -10 000 €.
- **Salaire du patron** : `pv().sal` (net/mois, 1 800 € par défaut) versé le 1er par `paySalary()` : indépendant = prélèvement ; SRL = coût brut net/0,55 (déductible), ISOC 20 % sur les 100 000 premiers € si ≥ 45 000 €/an. La vie de tous les jours (1 650 €, ou 850 € si propriétaire) est payée par le compte privé dans `privMonth()`, plus par la société.
- **Photos réelles** : `IMG` = titres d'articles Wikipédia (fr puis en) pour chaque bien privé et chaque machine (`eq_…`). Le téléphone appelle l'API MediaWiki `…wikipedia.org/w/api.php?action=query&prop=pageimages&origin=*` (CORS autorisé) et affiche la miniature Wikimedia Commons avec un lien 📷 vers l'article (auteur et licence). Cache `localStorage` `rn-img3` (échecs retentés après 24 h) ; bouton « ✕ Pas la bonne photo » (`rn-imghide`). Photos fausses retirées : flèche lumineuse, enfonce-pieux. Le serveur de développement n'a pas accès à Wikipédia.
- **Chiffre d'affaires** : `st.stats` = la société actuelle (remis à zéro par `relaunch()`), `st.career` = cumul des anciennes sociétés, `st.caY[année]` = CA par année ; la banque (`overdraft()`, `loanMax()`) regarde `caRecent()` (année en cours ou précédente). `st.found` = jour de création.
- **Tableau de bord en direct** (`dashCard()` en haut d'Entreprise) : production du mois `st.mProd` (valeur des travaux réalisés chaque jour), résultat du mois en direct `liveRes()`, courbe du compte `st.dHist` (jour par jour, 400 jours), barres mensuelles `st.mHist` (production + résultat, 36 mois).
- **Facilité (demande du joueur, sans tricher)** : vraies aides à l'emploi `aidList()`/`payAids()` (réduction ONSS premiers engagements, Impulsion -25 ans du Forem, montants arrondis) ; chômage temporaire pour manque de travail des ouvriers (`st.chomEco`, 12 €/jour, 4 semaines max puis 1 semaine de travail) ; location de matériel `RENT` (tarifs journaliers estimés type Boels/Loxam) quand la machine est prise ; mise en demeure 4 jours avant résiliation ; avertissement d'effectif dans l'offre ; `COEF` 1,6 ; plus de petits boulots ; concurrents un peu moins agressifs. Simulation (bot, 4 ans) : CA ≈ 5 M€, plus de pénalités SPW.
- **Équipes automatiques** (`st.autoStaff`, activé par défaut) : `autoStaff()` chaque jour ouvrable relance les chantiers en pause (équipe vide) et commence les chantiers en attente dès que `pickFor(c)` trouve une équipe valide (`crewOk`), marchés publics en premier ; matériel loué si besoin.
- **Chargée de clientèle et planning** (`plan`, Manon Lecocq, ± 3 900 €/mois) : `autoAccept()` chaque jour ouvrable accepte les petits boulots faisables (matériel possédé), les plus rentables par jour d'abord, tant que `freeCount()` le permet ; stats `st.rs.plan` / `planv`.
- **Renforts** : `autoStaff()` envoie aussi les ouvriers libres sur les marchés publics en retard ou trop lents (`need(c)` > 0, max 12 par chantier). Montant d'un lot plafonné par type (`VMAX` dans `genTender`), équipe conseillée `nRef` ≤ 8.
- **Conducteur de travaux principal** (`cond`, Benoît Gillard) : `condRebalance()` déplace des ouvriers des petits boulots et des chantiers en avance (`lateBy(c)` < -5) vers les marchés publics en retard ; +10 % sur les chantiers publics en retard.
- **Responsable des offres** (`offre`, Grégory Lemaire) : `autoBid()` remet les offres quand `spwReq` est rempli et que l'effectif suffit, au coefficient `st.offCoef` (1,25 à 1,55, réglable dans Marchés).
- **Vie privée étendue** : immobilier locatif (`c:'loc'`, loyers moyens wallons, droits 12,5 %, 5 % de mois sans locataire), famille et abonnements (`keep` = non revendable, `sub` = résiliable, `once` = dépense unique), placements `INV` dans `privInvest()` (épargne ± 1,5 %, ETF ± 7 % avec volatilité, or ± 5 %, épargne-pension max 1 050 €/an avec 30 % rendus en janvier).
- Avec `cond` ou `offre`, plus de fenêtre « Marché attribué » ; avec `cond`, plus de fenêtre « Réception provisoire » : un message dans le journal à la place, le chantier démarre via `autoStaff()`.
- **Vie privée v2** : `rPv()` en 3 parties `pvSec` (🏡 Ma vie : carte `pvh` avec logement, niveau de vie `LVL` selon `pvWorth()`, famille/garage/loisirs/biens loués en émojis, budget `pvBudget()` (mêmes postes que `privMonth()`), journal privé `V.ev` via `pEv()`, biens groupés `PGRP`/`ownCard()` ; 💶 Argent : salaire, versements, placements ; 🛒 Acheter : catégories en pastilles `.chips`). Location des logements : `P.hr` (loyer moyen), `pRent(id)` → `o.lou`, locataire trouvé après 30 jours (`o.louFrom`, `o.louOk`), récupération par préavis de 6 mois (`o.louEnd`, bail de résidence principale) ; `ownsHome()`/`myHome()` ignorent les logements loués ; `rentOf(o)` avec indexation 2 %/an (`o.ix`). Événements de la vie `lifeEvents()` au 1er du mois (rentrée scolaire, fêtes, entretien voiture/chaudière, vétérinaire, pannes chez le locataire…). Mariage mémorisé `V.wed`. Clé de la VW Golf neuve = `vwgolf` (`golf` = club de golf, doublon corrigé).
- **Confirmations** : plus aucun `confirm()` du navigateur. `ask(texte, siOui, {ic, ok, danger, img})` ouvre une fenêtre du jeu (1re ligne = titre, « libellé : valeur » = ligne de tableau, ⚠️ = encadré orange) ; les fonctions concernées se rappellent elles-mêmes avec un argument `ok` (`pBuy(k,loan,ok)`, `pSell`, `pRent`, `fire(id,ok)` en 2 étapes, `sell`, `primeTeam`, `rptAct(id,a,ok)`, `restart(1)`).
- **Locaux de l'entreprise** (`SITES`, `st.site` via `siteK()`, carte `siteCard()` en haut de 🚜 Matériel, fenêtre `siteUI()`, `moveSite(k,loan,ok)`) : chez soi (2 véhicules), hangars loués (1 250 / 3 400 €/mois), entrepôts à acheter (345 k€, 980 k€, 2,45 M€ ; droits 12,5 % + notaire = 14 % ; crédit professionnel 80 % sur 15 ans à 4,2 % `st.siteLoan`, capital remboursé non déductible via `siteMonth()` ; amortissement du bâtiment 3 %/an sur 70 % du prix dans `monthTax()` ; +2 %/an de valeur `siteVal()`). Véhicules au-delà de la place : parking 350 €/véhicule (chez soi) ou 220 €. Équipement `sfx()` : atelier -8 % usure, cuve de gasoil -7 %, aire de tri -25 % décharge, station de lavage +1 réputation par chantier. Bureaux inclus (`off`) = plus de « Location des bureaux ». Vieilles sauvegardes : `siteK()` choisit home / h1 / h2 selon le nombre de véhicules (même coût qu'avant). Dessin du dépôt agrandi selon les locaux.
- **Publicité** (`ADS`, `st.ads`, `adCard()` en bas de 🧰 Boulots, `adToggle`) : site internet, lettrage, Google Ads, toutes-boîtes ; `adBoost()` augmente les demandes de petits boulots dans `tick()`.
- **Formateur interne** (`form`, Jean-Luc Dethier, mi-temps 140 €/jour) : `trainOne()` tous les 150-180 jours (`st.formNext`) forme l'ouvrier le moins formé (pas le patron ni les étudiants) : certificat dans `w.cert` (liste `CERTS`), efficacité `w.sk` +0,06 (max 1,5), motivation +0,15 ; après 2 formations un `man` (cat. 1) devient `qual` (cat. 3) avec le coût journalier d'un qualifié. Certificats affichés sur la fiche (`staffStat`), compteur `st.rs.form`.
- **Prix immobiliers vérifiés (nov. 2026)** : notaire.be 2025 (appartement wallon 206 297 €, maison 269 551 € sur 9 mois), loyers Federia (Wallonie 879 € en 2025, 910 € en 2026 ; appartement 2 ch. 850 €, maison 3 ch. 1 000 €), kot LLN ± 480 €/mois (+ taxe kot 325 €/an dans `m`), garage ± 27 000 € (21 864 € en 2019 + hausse) / 85 €. Rendements bruts ± 4,5-6 %, comme en vrai.
- **Plusieurs dépôts** : `st.xs` (via `xs()`) = dépôts en plus `{id,n,k,d,loan}` à côté du dépôt principal `st.site`. `addSite(k,loan,ok)` (louer ou acheter, crédit possible), `dropSite(id,ok)` (vendre à 97 % de `xVal(x)` moins le crédit, ou fin de bail = 3 mois de loyer). Places totales `siteCap()`, parking `parkRate()`, bureaux `hasOff()`, équipements `sfx()` = union de tous les dépôts ; loyers, charges et crédits de chaque dépôt dans `fixedList()`, crédits dans `siteMonth()`/`loanStep()`, amortissement dans `monthTax()`.
- **Filiales en Europe** (`EU`, `st.fil` via `fil()`, carte `euCard()` dans 📊 Entreprise, fenêtre `euUI()`) : conditions `euReq()` (SRL, CA ≥ 1,5 M€ sur un an, réputation ≥ 60, DAF). `euOpen(k)` coûte `setup` (320 k€ Pologne → 650 k€ Allemagne ; 12 % gardés en caisse de la filiale). `euMonth()` le 1er du mois : CA = `pot` × démarrage (8 % → 100 % en 18 mois) × saison × hasard ±20 % (+ événements ±35 %), résultat = CA × (1 − `var`) − `fix`, impôt local `tax` (IS 2025), pertes comblées par la société belge (« Apport en capital »). `euDiv` rapatrie la caisse (dividende exonéré : directive mère-filiale + RDT, via `st.mCapex`), `euUp` niveau 2-3 (coût 70 % × niveau du départ, CA ×1,7 puis ×2,5, frais ×1,45 puis ×2), `euSell` = 5 ans de bénéfice (min. 25 % de l'investi) + caisse. Simulation : rentable vers la 3e-4e année, investissement total remboursé après ± 6-7 ans.
- **Fenêtre des dépôts** : `siteUI(mode)` avec onglets `siteMode` « ➕ Ajouter un dépôt » (`addSite`, indique combien de véhicules dehors chaque dépôt range) et « 🔁 Déménager » (`moveSite`).
- **Répartition des véhicules** : `siteAlloc()` remplit le dépôt principal puis les dépôts en plus (les plus grands d'abord) ; `out` = garés dehors. Affiché par dépôt dans `siteCard()` (« 6 / 6 · plein »).
- **Confettis** : `confetti()` ne part pas en vitesse ▶▶▶ (sauf fenêtre ouverte), pas s'il en reste à l'écran, max 1 fois / 8 s (`confT`), 160 max, et le canvas `#fx` n'est redimensionné que si la taille change (sinon l'image « sautait »).
- **Filiales** : `euUp` seulement après 18 mois (démarrage 100 %) ; chaque filiale affiche son bénéfice prévu à pleine vitesse après impôt.
- **Fin de partie** (carte `empireCard()` en haut d'Entreprise) : valeur du groupe `grpValue()` ; innovation `INNO`/`st.ino` (`inoGo`, `inoTick`, `ino(k)` ; effets dans `inoWork()`, `eqc`, décharge, `offerCap`, offres `vt`, école = `trainOne('Ton centre de formation')` tous les 60-90 j) ; rachats de concurrents `acquire(n)` (prix ± 0,45 × CA `RCA`, `st.grp`, bénéfices mensuels dans `grpMonth()`, nouveaux grands concurrents `ENTR` si moins de 2 grands) ; bourse `ipoGo`/`ipoSell` (Euronext, 25 % vendus, frais 6 %, taxe belge 10 % sur les plus-values 2026, cotation 30 000 €/mois, garder 51 %) ; fondation `fondGive` (réduction d'impôt 45 % plafonnée) ; succès `succUI()` = `GOALS` (30 objectifs, g16-g29 de fin de partie, `st.big3` = marché > 3 M€ gagné). Classes 7-8 : marchés jusqu'à ± 14 M€ (lots ×4 / ×10), équipe conseillée jusqu'à 40 (`nRef`), renforts jusqu'à `nRef`. Luxe ajouté : Bugatti, jets Phenom 300E et G700, club de D1B, île en Grèce, villa Cap-Ferrat (louable), yacht 80 m, château viticole et immeuble de bureaux loués ; niveaux de vie jusqu'à « Milliardaire ». `relaunch()` vide groupe, innovations, filiales, dépôts, bourse.
- **Entre amis** (`friendsCard()` dans Entreprise) : pas de serveur. `snap()` résume l'entreprise (identifiant `st.uid`), `myLink()` = adresse du jeu + `#voir=<base64url>` ; `shareMe()` (partage du téléphone, WhatsApp ou copie). À l'ouverture d'un lien, `friendHash()` (après « Jouer », ou après le nom de l'entreprise via `pendFr`) ajoute l'ami dans `st.friends` (sauvegardé avec la partie) et affiche `friendUI()` (comparaison ▲▼). « Coller un lien » (`pasteFriend`) pour le jeu installé sur iPhone (stockage séparé de Safari). Données reçues nettoyées par `b64d()` et affichées avec `esc()`.
- **Fluidité** : `tick()` appelle `renderTick()` : en vitesse ▶▶ / ▶▶▶ la liste n'est redessinée que toutes les 0,8 / 1,5 s (`render(true)` = en-tête seulement). Portraits mis en cache (`AVC`, `avatar()` → `avatar0()`). Mesure (120 personnes, PC) : un jour de jeu 3-6 ms sans affichage.
- **Vie privée = page à part** (`#priv` plein écran au-dessus du jeu, z-index 30) : en-tête `pHead()` (← Entreprise = `privClose()`, argent de la société en court, compte privé), décor `pScene()` (saison, maison, résidences secondaires, famille, voitures, bateaux sur le lac, avions qui passent), contenu `#ppane`, menu du bas `#ptabs` (Ma vie, Mes biens, Argent, Acheter via `pvGo(k)` → `pvSec`). `tab('pv')` mémorise `prevTab`. `render()` écrit dans `#ppane` quand `curTab==='pv'`. Classe `body.pvmode` cache les animations d'argent de l'entreprise.
- **Séparation entreprise / vie privée** : tout ce qui est privé va dans le journal privé `pEv()` (40 lignes, plus dans `st.log`) ; la fondation est dans 💶 Argent de la vie privée ; la bourse reste dans l'entreprise (l'argent touché est aussi noté dans le journal privé).
- **Mise à jour automatique** : sur l’écran « Jouer » (`!playing`), si `version.json` annonce une autre version, `chkV()` recharge le jeu une seule fois (`sessionStorage` `rn-auto`) ; en cours de partie, bannière « Nouvelle mise à jour disponible » comme avant.
- **Messages** : `toastMsg(t)` (réponse à un bouton) s'affiche toujours ; `toastMsg(t,1)` (événements du journal, bilans) suit le réglage 💬. Innovation : projets en parallèle `inoMax()` = 2 + (classe − 1), bouton grisé avec la raison.
- **Affichage Android** : pas de `backdrop-filter` sur les cartes ni sur le fond des fenêtres (cartes qui se coupaient/superposaient en faisant défiler sur certains Samsung) ; `#modal .box` en `translateZ(0)` + `overscroll-behavior:contain`.
- **Taille du décor** : `draw()` vérifie à chaque image que `cv.clientWidth/Height` = `CW/CH` (sinon `rs()`), remet la transformation et l'opacité ; `ResizeObserver` + `orientationchange` ; en plein écran, `screen.orientation.lock('portrait')` (Android). Avant : décor coupé en deux après avoir tourné le téléphone ou passé en plein écran.
- **Carrière (tout en temps du jeu, pas de vrai calendrier — demande du joueur)** : compteurs `ck(k)` dans `st.ck` (prod, done, jobs, won, bid, days, hire, prime, pv). Défis du mois du jeu `dqGen()` (3 défis `DQT`, clé `gmKey()`), défi de l'année `st.wq` (`gyKey()`), vérifiés par `dqTick()` à chaque jour ; série 🔥 de mois réussis (+10 % d'XP par mois, max +50 %). `crr()` = `st.car` (niveau 1-100, `xpNeed(l)=200+1,5·l²`, titres `TITLES`, bonus `carBonus()` +1 %/5 niveaux dans `inoWork`). XP : chantier fini 3 (privé) / 10 (public), défis `dqX()=40+3·niveau`, grands chantiers. 12 grands chantiers `MEGA` (durée en jours du jeu 30 → 540, personnel minimum `w`, classe, niveau ; `megaGo`, `megaTick`). `careerUI()` (logo ou bouton « 🎖️ Niv. »), carte `dqCard()` en haut de Chantiers, `goalCard()` montre l'objectif de carrière après les succès, `carPct()` = % du jeu fini. 70 succès (`GOALS` g0-g29 + h1-h41). Simulation (grosse entreprise, bot) : 65 % fini après 30 ans de jeu. Attention : la fonction de dessin `car(x,y,…)` existe déjà → la carrière s'appelle `crr()`.
- **Matériel et métiers ajoutés** : 15 machines (aspirateur de feuilles, rogneuse, rouleau, tondeuse autoportée, désherbeur à eau chaude, chargeuse, fourgon 9 places, hydroseeder, bras télescopique, camions TMA, laveuse, grande balayeuse, épandeur 26 t, laveur de tunnels, marquage thermoplastique ; prix estimés d'annonces), groupe « 🚛 Camions spéciaux » dans `EQG`, `RENT` ; 12 marchés SPW (désherbage alternatif, dessouchage, talus hauts, bassins d'orage, trottoirs, hydroseeding, lavage de voiries, accotements d'autoroute sous TMA, tunnels, marquage autoroutier, service d'hiver autoroutier, balayage aspirant) avec `VMAX` ; 5 petits boulots (grands terrains, souches, désherbage, aspiration de feuilles, allée en gravier).
- **Encore plus de métiers** (52 marchés publics, 21 petits boulots, 37 machines) : égouts, grilles, tags, affichage sauvage, potelets, panneaux, clôtures à gibier, ronds-points, plantations, haies au lamier, batraciens, RAVeL, abribus, poubelles de covoiturage, nettoyage après accidents, feuilles en voirie, pontage, gabions, accotements, purge de rochers, cours d'eau, fauchage d'autoroute sous TMA, dépôts de sel, traversées PMR ; petits boulots : gouttières, clôture, haie, abattage d'arbre, parking de supermarché, déneigement de parking, graffitis, potager.
- **Fin du jeu** : quand `carPct()` atteint 100 % (niveau 100, 12 grands chantiers, tous les succès), `dqTick()` note `st.fin` et affiche `finUI()` « Félicitations, tu as fini le jeu ! » une seule fois ; on continue à jouer ; carte cliquable dans `careerUI()` pour revoir le message.
- **Ce que le patron fait lui-même** (demande du joueur : pas tout automatique) : visites de chantier `visitUI(id)` = mini-jeu (trouver 3 erreurs de sécurité `VPB` parmi 12 cases en 15 s, `visTap`, `visitEnd`) → +4 % de travail par erreur trouvée pendant 15 jours (`c.vf`, `c.vb` dans `boost`), motivation, réputation si parfait ; une visite par chantier tous les 15 jours (`c.vd`). Décisions du patron `DECT` (augmentation, facture contestée, panne, journaliste, sponsoring, vol, orage, riverain, formation, gasoil prépayé, stagiaire, contrôle de l'inspection du travail lié aux visites, kermesse) : `decTick()` (± 3,5 % par jour ouvrable, max 3 en attente, 45 jours pour répondre sinon choix par défaut `def`), `decAct(id,i)`, carte `decCard()` dans Chantiers (badge sur l'onglet). Coups de main = toucher le chantier à l'écran (déjà existant, compteur `ck('tap')`, astuce affichée). Défis `visit`, `visit3`, `dec`, `tap` ; succès h42-h44.
- **Anti-abus du salaire (faille trouvée par un joueur : se verser des milliards puis faire faillite)** : test de liquidité `canPay()` = trésorerie − `reserve()` (3 mois de frais fixes + salaires) pour `pTransfer` et pour un salaire > 15 000 €/mois ; salaire max 100 000 €/mois (`setSal`). Versements notés dans `pv().outs` (`outLog`). `clawback()` au début de `rescue()` (réorganisation ou faillite) : SRL = le tribunal reprend sur le compte privé les versements extra et la part de salaire > 10 000 € des 183 derniers jours (période suspecte, CDE art. XX.111-112) ; indépendant en personne physique = le compte privé paie les dettes (patrimoine confondu). Si ça suffit, pas de réorganisation.
- **Gammes de qualité du matériel** : `TIERS` 2 = neuve (prix ×1,8, +10 % de travail, usure −10 %), 3 = haut de gamme (×3, +20 %, −20 %), comptées dans `st.tq[k]` (sous-ensemble de `st.eq[k]`) ; `buyTier(t,tr,ok)`, `tierShare(k,f)` (part pondérée), `qualWork(J)` dans `boost`, usure dans `eqc`, valeur `eqVal(k)` (amortissement, valeur du groupe) ; `sell()` revend d'abord le standard. Le matériel standard reste.
- **Vie privée ajoutée** : catégorie `reno` « 🔨 Ma maison » (solaire, pompe à chaleur, isolation, châssis, batterie, borne, cuisine, véranda, jacuzzi, home cinéma, domotique ; `m` négatif = économies, montrées en entrée dans `pvBudget()`), voitures Audi Q8 e-tron, Volvo XC90, Porsche Taycan, Mercedes Classe S, Audi A6 d'occasion, vélo électrique (prix estimés).
- **Photos** : seulement des articles Wikipédia dont l'image principale montre l'objet lui-même (modèles de voitures, machines précises). Retirées car risquées (logo, village, autre machine) : yacht 80 m, club de foot, villa Cap-Ferrat, château viticole, laveuse, marquage, hydroseeder, bras télescopique. Le serveur de cette session n'a pas accès à Wikipédia : impossible de vérifier les images depuis ici.
- **Vrais modèles de marque** pour les gammes : `TM[k][2|3] = [nom, prix HTVA approximatif]` (Stihl HS 82 R / HSA 140 R, BR 700 / BR 800 C-E, FS 491 / FS 561, Honda HRH 536 / Toro TurfMaster, MS 400 / Husqvarna 572 XP, Kärcher HDS 8/18 / 13/20, Weber / Ammann, Humbaur / Ifor Williams, Billy Goat / Trilo, Stihl GH 370 / Vermeer, Timberwolf / Jensen, Transit / Sprinter, Daily / Sprinter benne, DAF / Mercedes Arocs, Klubb / Ruthmann, John Deere 6120M / Fendt 516, Kubota KX057 / Volvo ECR58, Bobcat S70 / Kubota R085, Kubota F3090 / John Deere 1580, Hako / Bucher, Scania / Mercedes) ; `tierName(k,tr)`, `tierPrice(k,tr)` ; les autres machines gardent « neuve » / « haut de gamme » (prix × 1,8 / × 3).
- **Bourse privée** (menu du bas de la vie privée « 📈 Bourse », `rBourse()`) : `STK` = 17 vraies entreprises cotées (belges : AB InBev, KBC, Colruyt, AvH, Elia, D'Ieteren, UCB, Proximus ; secteur : Vinci, Eiffage, Bouygues/Colas, Holcim, Deere, Kubota, Volvo ; ASML, Apple) avec cours de départ approximatifs `p`, volatilité `v`, rendement `d`, dividende `y` versé le mois `m`. Cours simulés chaque jour ouvrable `mkDay()` (marche aléatoire + rares krachs/euphories, `st.mk`, 130 points d'historique, `sparkS`), dividendes `mkMonth()` (précompte 30 %). Achats/ventes `stkBuy`/`stkSell` dans `pv().stk` : TOB 0,35 % (max 1 600 €) + courtage 0,1 % (min 2 €), taxe 10 % sur les plus-values réalisées au-delà de 10 000 €/an (`V.cg[année]`). Comptée dans `pvWorth()`.
- **Casino privé** (menu du bas « 🎰 Casino », `rCasino()`, Casino de Spa) : argent du compte privé, mises 10 € → 100 000 € (`casBet`). Roulette européenne 37 cases (`roulSpin`, rouge/noir/pair/impair ×2, douzaines ×3, numéro ×36), machine à sous (`slotSpin`, `SLOT`/`SLOTPAY`, ± 92 % redistribués, mesuré 91,8 %), blackjack (`bjStart`/`bjHit`/`bjStop`, banque tire jusqu'à 17, blackjack 3:2). Bilan `pv().cas`. Sur cette page, `renderTick()` ne redessine que l'en-tête (pas de coupure des animations). Message : interdit aux moins de 21 ans en Belgique, aide (gamingcommission.be).
- **Casino équitable (demande du joueur : « c'est le casino ou c'est moi », pas d'avantage de la maison)** : roulette sans zéro (36 cases, `RI(1,36)`, ×2 / ×3 / ×36 = 100 %), machine à sous 🍒 ×7 (retour mesuré ± 100 %), blackjack : égalité = mise + 50 % (retour ± 100 % en jouant simplement, ± 101 % en jouant bien ; simulation `bjn.js` : 3:2 sans bonus = 95-97 %).
- **Casino complet** (`rCasino()`, tout équitable ± 100 %) : 11 casinos `CASI` (les 9 casinos belges agréés : Spa, Namur, Dinant, Chaudfontaine, Bruxelles, Ostende, Blankenberge, Middelkerke, Knokke ≥ 500 k€ de patrimoine, Monte-Carlo ≥ 5 M€, Las Vegas ≥ 50 M€ ; mise max par casino), salon VIP (mises ≥ 1 M€ si patrimoine ≥ 2 M€, `vip()`). Jeux : roulette sans zéro, 3 machines `MACH` (fruits 100,4 %, diamants 99,9 %, jackpot progressif 94 % + 6 % de chaque mise dans la cagnotte `st.jack`, 👑👑👑 = cagnotte × min(1, mise/1 000)), blackjack (égalité = mise + 50 %), baccara (vraies règles de la 3e carte, joueur ×2,03 / banque ×1,97 / égalité ×10,5 ; mesuré 100 %), vidéo poker Jacks or Better 9/6 (`vpEval`, ± 99,5 % bien joué), dés (petit/grand ×2, triple ×36), keno 5 sur 40 (3 ×5, 4 ×43, 5 ×500 = 100 %), grattage `SCR` (100 %). Message affiché gardé dans `casLast`. Calculs : `fair.js` dans le brouillon.
- **Vraie vie (grosse mise à jour)** : usure `st.wear[k]` (0-100, +0,35 par jour d'usage ÷ nombre d'unités, moins avec gamme et mécanicien qui la réduit chaque jour) dans `wearUse()` ; au-delà de 70 %, pannes sur chantier (réparation 3-8 % du prix, chantier arrêté `c.pz`) ; `revise(t)` dans 🚜 Matériel (barre d'usure) ; conseil du comptable ; contrôle technique annuel dans `fixedList()`. Urgences météo `wxUrgent()` (orage/neige/pluie → marché urgent +30 %, `t.wxu`). Syndicats `unionTick()` : éco-chèques 250 €/ouvrier le 15 décembre (CP 145.04), négociation tous les 2 ans (décision `syndic` : +2 %, prime 300 €, refus → grève `st.strike` qui arrête les marchés publics). Accidents `accidentTick()` (ouvrier absent `w.off`, exclu de `freeW` et des équipes ; moins avec prévention et visites). Contrôle qualité du SPW `spwCheck()` en fin de marché public (bonus 1 % / réfaction 2 %). Sous-traitance `subK()` (30 % fait tout de suite, +8 %). Association momentanée `amGo()` (classe juste en dessous, grand groupe partenaire exclu des offres, travail et prix ÷ 2, `c.am`). Santé du patron `hp()`/`healthMonth()` (stress selon la taille, vacances +30, sport, burn-out = 30 jours d'arrêt), `bossF()`, voyages (achat « Vacances » → `V.away`, −10 % de travail sans conducteur ni gestionnaire, `awayF()`). Famille `familyMonth()` : rencontre (`V.cpl`, nécessaire pour le mariage), enfants qui grandissent et rejoignent l'entreprise à 18 ans. Collections `c:'coll'` (valeur `o.vm` qui varie chaque mois `collMonth()`). Paris sportifs Jupiler Pro League dans le casino (`parisGen`, `parisBet`, cotes = 1/probabilité). Défis entre amis `chalGo()` (`st.chal`, production depuis le lancement, `snap().prodT`).
- **Procès après un accident** (`lawOpen` dans `accidentTick`) : seulement si au moins 2 fautes de sécurité (machine usée > 70 %, pas de visite depuis 30 jours, pas de conseiller en prévention dès 15 personnes, pas de chef d'équipe/patron sur le chantier) et 30 % de chance ; réclamation 8-40 k€ × (1 + 0,25 × fautes). Carte « ⚖️ Justice » dans Chantiers (`lawCard`), 45 jours pour répondre : arrangement à l'amiable (50 %) ou avocat (3-8 k€, jugement 3-6 mois, chance de gagner 0,8 − 0,15 × fautes ; perdu = réclamation + 8 % de frais + amende pénale sociale 800-8 000 €, réputation −4) ; sans réponse = jugement par défaut (×1,2, 10 % de chance). `lawTick()`. Base légale : loi sur les accidents du travail, art. 46 (faute grave de l'employeur en matière de bien-être).
- **Assurances** (`insCard()` dans 📊 Entreprise) : accidents du travail obligatoire avec bonus-malus `st.atR` (4 % au départ, +0,3 point par accident, −0,2 point par année sans accident, −1 point avec conseiller en prévention, 2-8 % ; `atRate()`). Au choix `INS` (`st.ins`, `insTog`, `insOn`, primes dans `fixedList()`) : protection juridique (paie avocat et frais de procédure), bris de machines (1,2 %/an de la valeur du parc, pannes → franchise 250 €), vol et incendie (sans elle, le matériel volé est racheté au prix plein), revenu garanti du patron (2 500 € pendant un burn-out), hospitalisation du personnel (30 €/pers./mois : motivation, absences après accident −30 %).
- **Employés qui évitent les problèmes** : `qhse` (Antoine Lambotte, 300 €/j : visites automatiques des chantiers publics tous les 15 jours, accidents −30 %, contrôles SPW +0,2, plus de reproche « pas de visite » dans les procès), `flotte` (Marc Pirotte, 270 €/j : révision automatique dès 60 % d'usure, pannes ÷ 2), `juriste` (Me Caroline Leroy, 370 €/j, dès 10 personnes : pas d'avocat à payer, +0,2 de chance de gagner, prend les procès en charge avant le délai), `assist` (Julie Collin, 190 €/j : santé +3/mois, répond aux décisions oubliées par le meilleur choix), `gardien` (société de gardiennage, 210 €/j : 80 % de vols en moins). Stats `st.rs` qhse, flotte, jur/jurv, assist, gard.
- **Avocats** : `LAWY` (8 avocats, `lv` 1-5 étoiles, `sp` spécialités social/penal/mp/fiscal/commercial, `fee`), `lawBonus(k,kind)`, `lawChoose(kind,base,titre,cb)` (modale, option gratuite « Ma juriste » si `has('juriste')`), `lawPick`, `lawN(k)`. Utilisés par les procès d'accident (`lawAct` → 'social'), les contrôles fiscaux `taxAudit()` (SRL, le 10 du mois, kind 'fisc') et les recours marchés publics `recEligible`/`recUI`/`st.rec` (gagné → `awardMe(t)`, extrait de `decide()`). Bouton recours dans Marchés → Mes offres.
- **Jason Pougin** : ouvrier légendaire `jasonW()` (`ramas`, `w.leg=1` → efficacité max 200 % au lieu de 150 % via `Math.min(w.leg?2:1.5,…)`). Apparaît dans les candidats (`refreshCand`, 5 % par semaine, à une place au hasard), même s’il est déjà engagé : on peut en avoir plusieurs. `st.jp=3` : migration qui le retire de l’équipe des anciennes versions (ajouté automatiquement avant).
- **Ramasseur de déchets** : rôle `ramas` (+15 % sur p_dechets, dechets, poubelles, aires ; aussi dans les candidats). Jason Pougin est `ramas` (`st.jp=2` ; migration depuis `st.jp=1`).
- **Gestionnaire du parc matériel et des achats** (`achat`, Thierry Wauters, 265 €/j) : `achatNeed()` chaque jour (achète les machines sans location possible qui bloquent un chantier en attente), `achatTick()` le lundi (achète une machine louée ≥ 6 jours en 2 semaines `st.rentD` si `canPay()` > 1,5 × prix ; remplace une machine usée ≥ 85 % : reprise 55 % × (1 − usure/200) + achat neuf ; revend une machine en double inutilisée depuis 120 jours `st.useD`), carburant/fournitures −5 % ; stats `st.rs` ach/achr/achs/achv.
- **Intérim** (onglet 👷 Équipe → 🦺 Intérim, `rIt()`) : intérimaires = ouvriers de `st.workers` avec `w.it` `{d, end, idle, prop}` ; exclus de `ownW()`, `payroll()`, `fieldOwn()` (syndicats, primes d'équipe, formations, aides, maladie), inclus dans `field()`/`freeW` (équipes). Agence fictive `ITNAME` « Wallintérim ». Coût `itRate(r)` = coût employeur × `ITK` 1,2 (≈ brut × 2), ou × `ITOWN` 0,85 avec sa propre agence ; facturé chaque lundi via `st.itAcc` ; pas de chômage temporaire, intempéries non facturées, accidents payés par l'agence (pas de bonus-malus). Commandes `itOrder(r,n,dur,by)` → `st.itq` (délai `itDelay` : 1-2 j / ± 1 sem. / 2-4 sem., ÷ 2 avec sa propre agence ; max `itCap()` 300, puis 1 000 + 400 par bureau ; refus pendant une grève), arrivée `itArrive()` (efficacité −15 %), `itDaily()` : facture du lundi, retour auto après 3 jours ouvrables sans chantier (`st.itAuto`), fin de mission. `itBack`, `itBackAll`, `itHire` (CDI ; indemnité de reprise 20 jours si < 90 jours et agence externe). Rapports : un intérimaire est renvoyé à l'agence au lieu d'être licencié.
- **Benoît commande l'intérim** : `itCond()` (si `cond`, `st.itCondOn`, budget `st.itMax` 30 par défaut) commande chauffeurs/conducteurs d'engins/manœuvres pour les chantiers en attente sans équipe valide et les marchés publics en retard.
- **Chargée de recrutement** (`recru`, Élodie Masson, 250 €/j) : `recruTick()` note les intérimaires `itStars(w)` (efficacité × sérieux caché, visible après 12 jours sur chantier ; sans elle `itFeel()` = impression floue), renvoie 1-2 ★ (remplaçant commandé), propose un CDI (`w.it.prop`) à 4-5 ★ après 30 jours. Mode auto `st.recAuto` : si des intérimaires travaillent depuis 40 jours ouvrables (`st.itS`, sans ouvrier maison libre), chaque lundi elle engage les meilleurs (max 1 par 10 intérimaires occupés) ou un candidat, et rend un intérimaire.
- **Chef du personnel** (`chefp`, Patrick Hennen, 260 €/j) : `chefpTick()` traite les rapports : prime 250 € aux bons, recadrage puis avertissement écrit, intérimaires renvoyés à l'agence, licenciements seulement signalés (`r.sig`). Sévérité `st.cpSev` d/n/s.
- **Rachat de l'agence** : `AGN` (siège Namur 150 M€ dès 200 employés, puis Liège, Charleroi, Luxembourg, Bruxelles, Flandre 30-80 M€), `itBuy(k)`, `st.itAg {d,ks,tot}`, `itMonth()` le 1er : intérimaires placés `pl` × 300 € × jours × 4 % de marge × saison (hiver +15 %, été −15 %), `itAgYear()`, `itAgVal()` dans `grpValue()`. `st.itComp=0` : on refuse les concurrents (−20 % de bénéfice, offres des concurrents ×1,04 dans `openBids`). Succès h45-h48. `relaunch()` vide l'agence. Simulation : rentabilisée en ± 12 ans.
- **Onglet Entreprise en sous-onglets** (`biTab` : res / arg / soc / emp / plus, `seg(...,'biTab')`) : 🏠 Résumé = `bizSum()` (santé 🟢/🟠/🔴 selon compte, `liveRes()`, dernier mois `st.mHist` et mois de frais couverts ; chiffres clés ; ce qui rentre / sort ce mois depuis `st.mon` ; `adviceCard()` en « À faire maintenant » ; prochaine classe avec barre de progression et bouton `upCls()`) ; 💶 Argent = `dashCard`, `monNow`, `bilanCard`, frais fixes, impôts, banque, `releve` ; 🏛️ Société = fiche de la société, démarches, agréation, `insCard` ; 🏆 Empire = `empireCard`, `euCard`, `friendsCard` ; ⚙️ Plus = réglages, journal, objectifs.
- **7 nouveaux métiers** (demande du joueur) : bureau `recouv` (Sandrine Delhaye, 245 €/j : dans `invoice()` le retard au-delà de 30 jours `v.late` est réduit de 70 % ; au paiement, intérêts 12 %/an sur le retard restant + 40 € forfaitaires ; stats recd/reci), `comm` (Laura Bertrand, 230 €/j : +1 réputation/mois dans `rolesMonth()`, `adBoost()` ×1,3, reportage télé toujours réussi +5), `rsoc` (Christian Dumont, 255 €/j, dès 10 pers. : négociation syndicale automatique à +1 % sans grève dans `unionTick()`, motivation +0,03/mois), `hiver` (Bernard Delvigne, 260 €/j : urgences météo `wxUrgent()` 15 % au lieu de 6 %, +15 % sur `HIVJ`). Ouvriers (aussi dans `refreshCand`, diplômes `DIPL`) : `signal` (232 €/j : accidents ÷ 2 sur son chantier, +10 % sur `AUTJ`), `paveur` (262 €/j : +15 % sur `PAVJ`), `peintre` (255 €/j : +20 % sur `MARQJ`, +0,15 au contrôle SPW). Bonus d'équipe `specB(c,crew)` multiplié dans la puissance `pw` de `tick()`.
- **Filiales v2** (demande du joueur : plus de gameplay) : directeur choisi parmi 3 CV `euGen(k)` (noms locaux `EUNM`) à la création (`euOpen` → modale → `euCreate(k,i)`) ; types `EUDT` : prudent (CA ×0,95, mauvais coups ÷ 2, +1 réputation/mois), ambitieux (CA ×1,2, démarrage 12 mois, mauvais coups ×1,8, 4 %/mois de « contrat trop risqué » = 1,5 mois de frais), économe (frais ×0,8, CA ×0,92), `n` = directeur d'origine des vieilles sauvegardes (aucun effet) ; compétence `dir.sk` 0,9-1,15. Changer de directeur `euDirUI`/`euSwap` (indemnités 1,5 mois de frais, CA −15 % pendant 2 mois `F.tr`). Réputation locale `F.rl` (0-100, 35 au départ, 40 par défaut) : CA × (0,9 + rl/500). Part de marché `euShare()` = CA des 12 derniers mois `F.rvh` / `EUMKT`. Effets `F.mods` [{rv,fix,n,t}] (mois restants) et `F.fixP` (permanent). Décisions par pays `EUDEC` (2 par pays + 3 communes, ajoutées à `DECT` avec `ok:false`) : 20 %/mois par filiale après 2 mois, 1 à la fois (`d.f` = pays), aussi dans la carte des décisions. Interface : `euCard()` = carte de l'Europe `euMap()` (SVG, positions `EUPOS`, pastille ! si décision) + une ligne par filiale ; `euFiche(k)` = fiche (décision à prendre, chiffres, réputation, courbe `spark`, effets, directeur, argent, actions). Succès h49-h51.
- **Filiales v3** : appels d'offres à l'étranger `euTenderTick(k,F)` dans `euMonth()` (35 %/mois après 3 mois si < 3 contrats ; noms `EUTN`, valeur `pot` × 1,5-4 × niveau, 6-18 mois, ouverture après 28 jours) ; prix au choix `EUCO` 90-120 % (`euBid`), chance `euWin()` = 0,85 − (prix − 0,9) × 2,2 + (réputation − 50)/300 ; sans réponse le directeur choisit (prudent 110 %, ambitieux 95 %, économe 115 %) ; contrats `F.ct` {r (CA/mois), co (coût = 85 % du prix estimé), n} ; `ck('euwon')`. Détachement `w.det = pays` (`euSend`, `euBack`, max 20 : exclus de `freeW`, pas de chômage temporaire, CA +3 % chacun (max +30 %), démarrage plus rapide, indemnités 45 €/jour payées par la filiale) ; machines envoyées `euMach`/`euMachUI` (`st.eq` −1, `F.mach`, `F.mlist`, +3 % chacune, max 10). Pays débloqués dès 3 filiales (`lock:3`) : Suisse, Italie, Autriche, Royaume-Uni (+ `EUNM`, `EUMKT`, `EUPOS`, décisions). Holding `st.hold` (`holdGo`, dès 4 filiales, 250 000 € + 6 000 €/mois) : remontée automatique des bénéfices, frais des filiales −5 %, `holdVal()` = 15 % de la valeur des filiales dans `grpValue()`. Succès h52-h54. Simulation (7 filiales, 3 ans) : ± 31 appels d'offres gagnés, investissement remboursé en ± 6 ans.
- **Grande mise à jour « vie du jeu »** (fonctions appelées le 1er du mois par `rolesMonth()`) : indexation automatique des salaires `indexTick()` (1er janvier, +1,8 à 3,2 %, +3,5 % pendant l'événement inflation ; `st.idx` multiplie `mkW`, `hireRole`, `itRate` ; ouvriers et candidats indexés ; prix du marché × `pIdx()` = 90 % de l'indexation dans `genTender` (`trueUnit`, postes) et `genJob`). Grands événements `BIGEV` (`st.bigEv {k,end}`, 3 %/mois après 1 an) : crise (appels d'offres ×0,5, petits boulots ×0,7), gasoil (carburant ×1,4), relance (appels ×1,6, prix +8 %), inflation, hiver extrême (neige 32 % en hiver dans `weather()`) via `evF(x)`/`evOn(k)`, carte `bigEvCard()` dans Résumé. Contrats d'entretien annuels : offres `st.aco` (`acOffer()` le lundi, réputation ≥ 25, ≥ 5 chantiers finis, max 1 + ouvriers/2 contrats), contrats `st.acn` {j, cl, q, per, end, sat} : `acMonth()` crée un passage (contrat privé `c.ac`) par mois en saison ; satisfaction +4 fini à temps, −10 en retard, −20 résilié, −15 sans matériel ; renouvellement selon la satisfaction (+2 %) ; carte `acCard()` en haut de 🧰 Boulots. Concurrents : `rivP(r)` donne un patron `RBOSS` et un style `RSTY` (casseur ×0,96, qualité ×1,03, hiver ×0,93 sur `HIVJ` dans `openBids`, chasseur de têtes) via `rivH()` ; `rivMonth()` : débauchage (décision `riv_poach`), rachat d'un petit concurrent en janvier ; `rankCard()` (classement par `rivCA()`) dans Empire. Pas de guide ni d'astuces (retirés à la demande du joueur ; `st.tips` des vieilles sauvegardes est simplement ignoré). Centre de notifications : cloche `#bell` dans l'en-tête, `notifs()`/`notifUI()` (décisions, procès, mises en demeure, propositions d'Élodie, rapports graves, appels d'offres des filiales, offres de contrats, Jason Pougin). Intérimaires en gilet bleu (`vest`). Décor par pays `euScene(k)` dans `euFiche`. Succès h55-h56. Bot 10 ans : aucune erreur, ± 0,2 ms/jour ; 421 personnes : simulation ± 2 ms/jour, onglet Terrain ± 60 ms à dessiner.
- **Vie privée v3** (demande du joueur : plus logique, meilleurs boutons) : accueil `pvHome(net,worth)` en haut de 🏡 Ma vie (3 tuiles `.pvtiles` patrimoine / reste du mois / bonheur `pvHappy()`, carte rouge si budget négatif avec bouton « Mettre mon salaire à X € » = `setSal()` et lien vers la location, courbe du patrimoine `pv().wh` remplie chaque mois par `pvWorthTick()` dans `rolesMonth()`), détail du budget repliable (`details`). 🗝️ Biens = `pBiens(own)` (tuiles valeur / coût / loyers, une ligne par bien avec valeur et gain/perte) → fiche `pBien(id)` (tableau acheté / vaut / coûte / loyer / crédit, gros boutons « Vendre · tu reçois X € », louer/récupérer, résilier ; photo seulement si déjà chargée). 🛒 Boutique = `pShop(net)` (cartes compactes, miniature `pThumb()` → `pPhoto()` en grand, filtre `pvAff` « Ce que je peux m'offrir », tri `pvSort`, « Après l'achat il te restera X €/mois » avec et sans crédit, bouton « Il manque X € » ou « Acheter · prix », crédit avec apport et mensualité `mortPay`). `ownCard()` n'est plus utilisée.
- **Vie privée v4** (`pvPayMore()` dans 💶 Argent, `rHold()` = page `pvSec='hold'`, `pvMonth4()` le 1er du mois) : salaire max `salMax()` = max(100 000, 40 % du résultat des 12 derniers mois ÷ 12) ; dividendes VVPR-bis `vvpr()` (30 % la 1re année de la SRL, 20 % la 2e, 15 % ensuite ; `st.srlD` = jour de passage en SRL, vieilles parties = 15 %) dans `pTransfer` ; conseil du comptable (salaire 2 100 € net = 45 000 €/an brut) ; bonus de fin d'année `bonusGo()` (10 % du résultat de l'an passé, 1 fois/an, `V.bonY`) ; réserve de liquidation `st.liq` (`liqPut` : 10 % de cotisation, `liqOut` après 3 ans : 5 %) ; voiture de société `V.vsoc` (la SRL paie les frais des voitures, 80 % reviennent au privé) ; pension complémentaire `V.ag`/`V.agT` (+2,5 %/an, récupérable −10 %, `agOut`). Holding personnelle `V.ph {cash, inv[], mg, tot}` (`phGo` 20 000 €, `phDiv` dividende SRL → holding sans impôt, frais de gestion `mg` (75 % gardés), placements `HINV` : immeuble, bureaux loués à sa propre SRL (loyer payé par la société), actions, PME, start-ups (60 % perdu, 30 % ×1-3, 10 % ×10-30 après 3-7 ans) ; `phSell`, `phOut` (précompte 30 %), `phTrans` transmission à un enfant ≥ 18 ans → `V.trans`, santé +2/mois) ; `phVal()` et `agT` dans `pvWorth()`. Vie : bonheur `V.hap` (< 40 → patron ×0,92 dans `bossF`), héritage, divorce si bonheur < 35 (sans contrat de mariage `V.cm` via `cmGo` : moitié du compte, des placements et de la trésorerie de la holding), études des enfants 18-22 ans (7 500 €/an en septembre), diplôme à 23 ans. Menu du bas : Accueil, Biens, Argent (Bourse et holding dedans), Boutique, Loisirs (casino). Succès h57-h59.
- **Vie privée v5** (`pvMonth5()` le 1er du mois) : compte courant du dirigeant `V.cc` (`ccMove`, `ccPayBack`, `ccCard()` dans Argent ; > 0 = tu as prêté à ta SRL, 5 %/an, précompte 30 % ; < 0 = avance de la SRL, 6 %/an ; catégorie `loan`) ; réputation personnelle `V.rp` (`PREP` : gala 50 000 €, mécène 25 000 €, conférence UWE 3 000 €, télé gratuite 1×/an, ratée 20 % sans `comm` ; tire `st.rep` vers le haut, −0,8/mois ; `repCard()` dans Accueil) ; bon d'État belge `INV.obl` (2,8 %/an ; `invMove` crée la clé si absente) ; maison à rénover `PRIV.flip` (145 000 €, `flipGo` : 60 000 €, 4 mois, `o.rw` → `o.rv`, valeur × 1,75 dans `pValue`) ; maladie 2 %/mois ; vente de l'entreprise `sellCo()` (90 % de `grpValue()`, dès 1,1 M€ ; via la holding exonérée sinon 10 % au-delà d'1 M€ ; compte courant soldé ; puis `relaunch()`) ; fortune totale `fortuneCard()` (privé + holding + société) dans Accueil. Succès h60-h62.
- **Mise à jour milliardaire** (sous-onglet `biTab='mega'` « 🌐 Géant » d'Entreprise, visible dès `megaOpen()` = groupe ≥ 100 M€ ou 100 M€ en caisse ; `rMega()`, `st.mega {c,g,i,gift,gk,last}` via `mg()`, `megaMonth()` le 1er du mois, `megaVal()` dans `grpValue()`) : concessions PPP `CONC` (E411, tram de Liège, tunnel à péage de Namur ±25 %, Ring de Bruxelles, port d'Anvers ; 300 M€ → 2,2 Md€, 20-35 ans, redevance `p × y / 12`, classe 8 requise, rendues à l'État à la fin) ; rachat de groupes européens fictifs `GIANT` (0,8 → 6 Md€, bénéfice 7,5-9 %/an ±15 %, revendables au prix) ; industrie `INDUS` (`indOn(k)` : carrière −15 % décharge, centrale d'enrobés −8 % carburant/usure, usine de panneaux +10 %, dépôt de sel +10 % hiver, garage −15 % usure + ventes mensuelles) ; philanthropie `GIFTS` (50 M€ → 1 Md€, compte privé, réputation personnelle et `st.rep`, `st.fond`) ; classement des fortunes belges fictives `RICH` (`richRank()` : privé + holding + groupe). Boutique privée : catégorie `ult` « 🌌 Démesure » (club de D1A, équipe cycliste WorldTour en abonnement, écurie du Mans, jet long-courrier, gratte-ciel à Bruxelles louable 5,5 M€/mois, voyage spatial) + collection de maîtres flamands ; chaque bien `ult` donne +0,6 de réputation personnelle/mois. Succès h63-h67.
- **Onglet Géant réorganisé** : sous-onglets `megaSec` (`ov` aperçu, `c` concessions, `g` rachats, `i` industrie, `p` dons) via `seg(...,'megaSec')` ; aperçu = ce que tu possèdes (`mOwned()`, trié par revenu, ligne cliquable vers sa section), suggestion (meilleure rentabilité payable, sinon la moins chère), top 5 des fortunes + ta place et l'écart avec le suivant ; cartes `mCard(t,k)` (grille `.mgrid` prix / rapporte / rentabilisé ou durée, bandeau vert si possédé avec total déjà gagné et bouton Revendre, sinon bouton `mBtn` « Acheter · prix », « Il manque X € » ou cadenas classe 8) ; possédés en premier puis par prix.
- **Plus de chantiers pour les grosses entreprises** (problème signalé par le joueur à 350 personnes) : marchés publics ouverts en même temps `tenderCap()` = min(80, 10 + 3 × classe + personnel/15) (avant : 10), générés à ± 1,1 × cap/10 par jour ; offres en parallèle `offerCap()` + 1 par 20 personnes ; petits boulots jusqu'à 3 + 3 × min(30, ouvriers) et des tirages en plus (1 par 40 ouvriers). Carte `workCard()` (en haut de 🦺 Chantiers et 🏛️ Marchés) : occupation des ouvriers (barre rouge/orange/verte), chantiers en cours (+ en attente), marchés ouverts / cap, offres / cap, conseil. Simulation 350 ouvriers, classe 8, Grégory : occupation 5-16 % → 96-100 % dès le 4e mois, production ± 7-8,6 M€/mois, résultat ± 1,5-2,7 M€/mois.
- **Élodie signe elle-même** (retour du joueur : 490 propositions en attente) : les propositions `w.it.prop` sont créées dès 4-5 ★ et 30 jours (plus de condition `st.itS`) ; si `st.recAuto` (activé par défaut), chaque lundi elle signe les meilleures, max 5 % des intérimaires par semaine (au moins 5), tant que `canPay()` > 3 mois de salaire ; bouton « ✍️ Signer les N CDI d'un coup » `itHireAll()` (confirmation avec coût par jour intérim vs CDI, indemnités de reprise, note : avec sa propre agence l'intérim est un peu moins cher que le CDI) ; s'arrête quand la société doit garder ses 3 mois de charges.
- **Élodie seulement si besoin** : `itNeed()` = au plus 10 % (min 2) de tes ouvriers maison sans chantier et au moins 2 intérimaires sur un chantier ; la signature automatique du lundi ne se fait que si `itNeed().ok` et seulement pour les intérimaires sur un chantier (`itBusySet()`). Message dans la carte des propositions : ✅ besoin, ou ⏸ « Élodie attend : X ouvriers sans chantier » ; `itHireAll()` avertit aussi s'il n'y a pas de besoin.
- **Fluidité des grosses parties** (mesuré sur une partie de 650 → 1 700 personnes, 126 chantiers) : `tick()` = enveloppe (`TICKING=1`, `WBI`/`GESTC`/`SPWC` vidés) qui appelle `tick0()` puis une seule `save()` et `renderTick()` ; pendant un jour, `render()` et `save()` ne font rien (avant : 6 redessins et 10 sauvegardes par jour). `save(force)` limitée à 1 écriture toutes les 1,5 s (`savePend`, rattrapage toutes les 2 s, `save(1)` sur pagehide/visibilité/« Mettre à jour », `NOSAVE` après « Tout effacer »). `spwReq()` mis en cache par tender pendant un jour ou un affichage (`SPWC`). `wById()` (Map des ouvriers, vidée à chaque jour/affichage) pour les équipes dans `tick0`, `lateBy`, `autoStaff`, accidents, contrôles SPW ; `observe()` garde la liste des gestionnaires pendant le jour. `autoAccept()` réutilise une seule liste d'ouvriers libres (`acceptJob(id,FW)`, sans message à chaque boulot). `autoBid()` calcule l'effectif occupé une seule fois. Sons limités à 1 toutes les 120 ms (`sndT`). Listes par paquets `PG`/`pgN`/`pgBtn` (« Voir N de plus ») : chantiers 25 (sélectionné, en attente/pause d'abord), petits boulots 20, marchés 20, mes offres 20, ouvriers 25, bureau 20, intérimaires 40. Résultat : Terrain 215 → 14 ms, Chantiers 56 → 15 ms, jour de jeu 72 → ± 16 ms (650 pers.) et ± 15-22 ms à 1 700 personnes.
- **Grand test (nov. 2026)** : clics au hasard sur tous les boutons (nouvelle partie, grosse partie), scénarios (vente avec ou sans holding, faillite, conglomérat, filiales, intérim, tous les biens privés), vieille sauvegarde, affichage 360 px, robot 6 ans : aucune erreur. Corrigé : `relaunch()` vide aussi `st.mega`, `tq`, `wear`, `useD`, `rentD`, grève, décisions, procès, recours, réserves de liquidation (avant, les concessions/usines restaient après la vente) ; `flipGo` refusé si la maison est louée, `pRent` pendant les travaux ; `stkBuy` achète le maximum possible si les frais dépassent, boutons +1 M / +10 M € ; `save()` : si la mémoire est pleine, supprime le cache photos `rn-img3` et `routenette-bak` puis réessaie, sinon message ⚠️ une fois (`saveErr`).
- **« Tout effacer » corrigé** : `restart(1)` supprimait `SAVE` et `BAK` mais pas `routenette-prev`, que `load()` rechargeait aussitôt (rien n'était remis à zéro). Maintenant la partie est copiée dans `routenette-trash` (jamais relue par `load()`), puis `SAVE`, `BAK` et `PREV` sont supprimées avant de recharger.
- **Version 1.0 (jeu terminé, nov. 2026)** : demande du joueur de finir ce jeu avant d'en commencer un autre. Audit : code mort retiré (`ownCard`), conseil de salaire faux avant la BCE (`pvHome` montre « ⏳ Pas encore de salaire » si `!st.adm.bce`), rachats de concurrents avec le même CA que le classement (`acCA(r)` = `rivCA(rivP(r))` au lieu de `RCA[r.sz]`), écran d'accueil « Version 1.0 · APPV », README complet. Tous les succès sont atteignables. Tests : clics au hasard, scénarios, vieille sauvegarde, captures de tous les écrans et fenêtres.
- **2e entreprise : société de nettoyage (v1.1, nov. 2026)** — demande du joueur : page d'accueil avec les entreprises, la 1re gratuite, la 2e à 25 M€ payés avec le compte privé, création de zéro avec un capital choisi, même vie privée. Tout est dans `st.cl` (même sauvegarde, rien à migrer : `st.cl` absent = pas créée ; `st.clUnlock=1` = 25 M€ payés, gardé après une faillite). Même calendrier : `tick()` appelle `clTick()` après `tick0()`.
  - Pages plein écran comme la vie privée : `#hub` (`curTab='hub'`, `rHub()` : cartes Route Nette / nettoyage verrouillé avec barre de progression / vie privée / « Prochaine entreprise ») et `#clean` (`curTab='cl'`, `clHead()`, vitesse `clSpeed()` sur le décor `clDraw()` dans `loop()`, onglets `clTabs()` → `clSec` home/cli/pub/team/mat/soc, contenu `rCl()`). Bouton 🏢 `#hubb` dans l'en-tête de Route Nette ; « Jouer » ouvre l'accueil si la partie est déjà commencée (BCE faite). `toastMsg(t,1)` (messages de Route Nette) est masqué sur ces pages ; `clLog(t,1)` utilise `toastMsg(t,2)`.
  - Argent séparé : `clMv(a,l,cat)` (jamais `st.cash`), résultat mensuel `C.pl` → `C.lastPl`, CA mensuel `C.caM`, `clCa12()`, factures `C.inv` (payées 25-45 j, −10 j avec comptable), salaires courus `C.salAcc` payés le 1er (`clMonth()`), frais `clFixedL()`, ISOC 25 % avec pertes reportées et amortissement du matériel sur 5 ans, découvert `clOver()` (25 000 € + 10 % du CA, 9 %/an), prêt `clLoan` (5,5 %/an, 2 %/mois), test de liquidité `clCanPay()` (3 mois de charges), dividende `clDiv` (précompte 30/20/15 % VVPR-bis selon l'âge), apport `clApport` / remboursement `clBack` (compte courant `C.cc`). Cessation de paiement 2 mois sous le découvert → `clCrisisUI()` (apport, prêt, plus tard, faillite `clBankrupt()` : SRL, privé protégé). `clVal()` ajouté dans `fortuneCard()` et `richRank()`.
  - Chiffres (estimations 2026, vérifiés en partie) : titre-service wallon 10,60 € (1/7/2026) + intervention régionale ± 17 € (`CL_TSP`, `CL_TSR`, `clTSV()`), aides-ménagères CP 322.01 ± 14,75 €/h (coût ×1,30, 88 % des heures facturables à cause des trajets), techniciennes CP 121 cat. 1A ± 17,02 €/h (×1,42), laveurs de vitres 19,60 €/h, cheffes 19,40 €/h ; prix du marché 32-39 €/h selon le type (`CLK`), ponctuels 38-60 €/h (`CLP`), matériel `CLE` (prix d'annonces estimés). Indexation +2 % en janvier (`C.idx`, prix des contrats aussi).
  - Jeu : titres-services agrégés (`C.ts {n,h,wait,wh,sat,acc,cov}`, demandes saturées vers 25 000 clients, départs 1,5 %/mois + manque d'heures), contrats de bureaux `C.ctr` (heures = m² × fréquence ÷ productivité ; couverture `C.cov` = heures dispo ÷ vendues ; qualité `c.q` selon couverture, cheffes 1/15, contrôleuse qualité, matériel de base, machine dédiée `clMach(c)` / `CLK.eq` ; satisfaction < 35 pendant 10 jours = préavis), chantiers ponctuels `C.job` (camionnette + machine), devis `clQuote(id,niveau)` (−10 % / marché / +10 %, réponse en 3-8 jours), marchés publics `C.ten` (`clTenGen`, conditions `clTenReq` : CA 35 %, personnel 30 %, ISO pour > 1 M€/an et hôpitaux ; attribution 60 prix / 40 qualité `clQualScore()` ; pas d'agréation pour les services). Personnel : `C.staff` (absences 2-15 j ≈ 8 %, départs ≈ 3 %/mois selon la motivation), candidats `clCandGen()` le lundi, personnel de bureau `C.off` (`CLO` : planificatrice, commercial = devis auto, RH = recrutement auto le lundi (heures vendues toujours couvertes, croissance seulement s'il y a de l'argent), qualité, agence titres-services, appels d'offres = offres auto, comptable, directrice d'exploitation obligatoire > 150 pers.). Démarches `CLA` (BCE, ONSS, RC + AT, agrément titres-services 90 jours, ISO 9001, écolabel). 20 succès `CLG`.
  - Équilibre (robot parfait, capital 100 000 €) : ± 170 pers. après 1 an, ± 1 000 après 3 ans, ± 5 000 après 8 ans ; marges 1-5 % les premières années puis ± 10 % (pas de salaire du patron) ; absences 5-9 %. Une société mal gérée (trop de bureau, trop de devis acceptés sans personnel) perd de l'argent.
- **Nettoyage v2 (v1.2, nov. 2026)** — demande du joueur : « pousser presque tout », garder le style de Route Nette.
  - **Même mise en page que Route Nette** (plus de page bleue `#clean`) : quand `curTab==='cl'`, `render()` appelle `clRender()` qui remplit l'en-tête de Route Nette (`#lt`, `#lvl` = niveau de carrière, `#tname`, `#tsub`, `#cash` sans animation `shownCash=null`, cloche = `clNotifs()`), les pastilles `#hud` (jour : week-end / férié seulement, pas de congés du bâtiment), cache `#tabs` et montre `#cltabs` (même style `nav`), et écrit `rCl()` dans `#pane`. Retour à Route Nette : `render()` remet `#tabs`. Cloche → `clNotifUI()`, logo → `clCareerUI()`. Décor `clDraw(t)` sur le même canvas `cv`/`g` avec les mêmes outils (ciel `SKY`, `clouds`, `hills`, `house`, `van`, `car`, `worker` via `cleaner()` : tunique bleue / rose titres-services / verte vitres, serpillière, chariot, perche) : ville au loin, rue avec un bâtiment par contrat (`clBuilding`, enseigne, hôpital avec croix), trottoir, camionnettes au nom de la société, pluie/neige. `#hub` en vert comme le jeu.
  - Nouveautés (`clFix(C)` complète les vieilles sociétés) : **locaux** `CLSITE` (maison 6 pers. → grand siège + 20 agences ; loyer dans `clFixedL`, `clMove`, trop petit = −8 % d'efficacité `clCrowd()`) ; **carrière** `C.car` (niveau 1-50, `clXP`, `clXpN(l)=150+1,2·l²`, titres `CLTIT`) et **8 grands contrats** `CLMEGA` (`clMegaGo`, `clMegaTick`, `clCareerUI`) ; **concurrents** `C.riv` (`clRivGen`, styles `CLSTY`, CA qui évolue, noms dans les marchés publics, classement `clRankCard()`, **rachat** `clAcq` dès 50 pers. à 0,5 × CA : personnel (CCT 32 bis), clients titres-services et contrats repris) ; **décisions du patron** `CLDEC` (16, `clDecTick` 2,5 %/jour ouvrable, max 3, 30 jours, pas deux fois la même en 6 mois `C.decL`, choix par défaut doux) ; **plaintes** `C.comp` (selon la qualité, repasser gratuitement / geste −5 % / ignorer, la contrôleuse qualité les traite) ; **rapports** sur le personnel `C.rpt` (absences répétées `w.nab`, démotivation → entretien / avertissement / licenciement) ; **fiche personne** `clCV` (+/−5 h, prime 200 €, formation 450 € → efficacité, sérieux et motivation visibles après 30 jours) ; **fiche contrat** `clCtrUI` (visite de contrôle mini-jeu `clVisit` 3 erreurs en 15 s → satisfaction +4/erreur, qualité +2/erreur pendant 15 j ; renfort +10 % d'heures offertes ; renégocier +3 % ; résilier) ; **horaires** `c.sh` (industrie la nuit : prime 25 % dans `C.accF.prime`) ; **accidents du travail** `clAccTick` (assurance AT `C.at` bonus-malus, −0,2 pt/an ; conseiller en prévention `CLO.prev` −40 %) ; grippe en hiver (absences ×1,6), printemps (+ ponctuels), août (grands nettoyages d'écoles) ; 35 succès.
  - Équilibre refait (robot parfait) : prix du marché 35-42 €/h, RH jusqu'à 15 % de recrutement par semaine, commercial qui ne signe que ce que l'équipe peut faire → ± 120 pers. après 1 an, ± 950 après 3 ans, ± 4 350 après 7 ans ; marges 1-5 % puis ± 10 %.
- **Nettoyage v3 « défi » (v1.3, nov. 2026)** — demande du joueur : plus jouable, du vrai défi.
  - Difficulté choisie à la création `C.diff` (`CLDIFF` f/n/d via `clDf()` : prix du marché ×1,05/1/0,97, absences ×0,8/1/1,15, candidats ×1,4/1/0,75, agressivité des concurrents `ren` ×0,6/1/1,3 ; vieilles sociétés = normal).
  - Politique salariale `C.payP` (`CLPAY`, `clSetPay` : barème / +5 % / +10 % → coût `clWage`, motivation, départs, absences, candidats ; baisser = −0,2 de motivation). Coût réel d'une heure `clHourCost()` (absences comprises) affiché partout.
  - Marché du travail : candidats disponibles par semaine `C.lp` (`clPoolWeek()` le lundi selon taille, réputation, salaire, difficulté, pénurie) ; la RH (`clAutoHire`, `clHA`) et la liste de candidats en dépendent ; annonces `CLADS` (Forem gratuit 7 j, agence 450 € 3 j, salon 1 500 € 14 j → `C.adq`, `clAdTick`).
  - Fatigue : couverture < 90 % → motivation en baisse (bureaux et titres-services) ; absences × (1,3 − 0,4 × motivation).
  - Contrats : clause d'indexation `c.ix` (65 % des contrats privés, tous les publics) ; en janvier seuls ceux-là suivent les salaires (+2 %) → renégocier les autres. Marge par heure affichée (`prix − clHourCost()`, ×1,25 la nuit) sur chaque contrat et chaque devis.
  - Renouvellements disputés : à l'échéance, un contrat privé (satisfaction ≥ 60) est remis en concurrence (`clRenew` → `C.ren`, carte `clRenCard()` : s'aligner sur l'offre du concurrent, garder son prix avec une chance selon la satisfaction, laisser partir ; 10 jours, sinon garder) ; ≥ 88 de satisfaction : parfois renouvelé sans appel d'offres.
  - Marchés publics : pénalités de non-exécution si moins de 95 % des heures faites sur le mois (`c.cvs/c.cvn`, jusqu'à 15 % de la facture).
  - Défis du mois `CLDQ` (3 au hasard, `clDqGen`/`clDqTick`/`clDqMonth`, compteurs `C.mq` via `clMq()`, XP 40 + 3 × niveau, série 🔥 `C.dqS` +10 %/mois max +50 %), carte `clDqCard()` dans Accueil.
  - Grands événements `CLBIG` (`C.big`, 3 %/mois après 1 an : télétravail −15 % d'heures bureaux/commerces, épidémie absences ×1,8 + désinfection, pénurie de main-d'œuvre candidats ÷2, boom de la construction fins de chantier).
  - Analyse « Où va l'argent ? » `clAnCard()` dans Société : facturé et marge par activité (bureaux, titres-services, ponctuels/vitres), heures payées non vendues, absences, bureau, frais fixes (`C.an` jour par jour via `clAnDay` ÷ 21,7 jours ouvrables → `C.lastAn` le 1er) + conseil.
  - RH : laveurs de vitres seulement s'il y a ± 12 h/jour de vitres en attente.
  - Équilibre (robot prudent : bureau engagé tard) : pertes pendant la forte croissance (on paie les recrues avant qu'elles rapportent), puis en régime stable ± 3-7 % de marge en normal, ± 0-4 % en difficile.
- **Holding de groupe (v1.4, nov. 2026)** — demande du joueur : une vraie holding sur la page « Mes entreprises » (pas dans la vie privée), réaliste et utile. Bug signalé (« je devais repayer ma holding ») : il y avait 2 holdings (personnelle dans la vie privée, européenne des filiales `st.hold` remise à zéro par `relaunch()` après une vente). Maintenant une seule holding de groupe qui ne disparaît jamais.
  - Données : **`pv().ph`** (même objet que l'ancienne holding personnelle → rien à migrer), complété par `hFix(H)` / `hH()` : `name`, `own {rn,cl}` (sociétés apportées, apport en nature ; vieilles parties : Route Nette si SRL), `loan {rn,cl}` (prêts intra-groupe 4 %/an), `cap {rn,cl}` (augmentations de capital), `mf {rn,cl}` (frais de gestion/mois, ancien `mg` repris), `auto {rn,cl}` (remontée automatique 0-75 % du bénéfice), `sal` (salaire net du dirigeant payé par la holding), `pool` (filet de sécurité), `part[]` (participations dans des PME), `offers[]`, `hist[]` (valeur du groupe), `pl`/`lastPl`/`loss` (résultat, impôt), `log[]`, `divIn`. `phVal()` = trésorerie + placements + participations + prêts.
  - Création `hCreateUI()`/`hCreate(cap)` sur la page d'accueil (`hubHoldCard()`) : 2 500 € de notaire + capital choisi (compte privé), au moins une SRL ; `phGo()` y renvoie. Page `rHold2()` dans `#hub` (`hubSec='hold'`, sous-onglets `hSec` : grp / flux / inv / part / plus) ; la page holding de la vie privée (`rHold`) renvoie vers la page d'accueil.
  - Groupe : organigramme `hOrg()` (toi → holding → sociétés → PME), valeur du groupe `hGroupVal()` et courbe, fiche de chaque société (compte, résultat, valeur, prêt, capital, frais, maximum remontable), `hApport(k)`.
  - Argent : dividende société → holding `hUp(k,a)` (0 %, RDT, limité par `canPay()`/`clCanPay()` via `hMax`) ; quand la holding possède la société, `pTransfer(…,'div')` et `clDiv` y remontent aussi ; remontée automatique mensuelle ; prêts `hLend`/`hCall` (intérêts payés le 1er par la société, déductibles) ; augmentation de capital `hCapital` ; frais de gestion (déductibles pour la société, taxés dans la holding) ; salaire du dirigeant (coût brut net/0,55 ; ≥ 2 100 € net → ISOC 20 % sur les 100 000 premiers €/an) ; dividende holding → privé `hOut` (précompte 30/20/15 % VVPR-bis selon l'âge de la holding `hVvpr()`) ; filet de sécurité `hPoolDay()` chaque jour (société dans le rouge → prêt automatique) et dans `rescue()` (évite la réorganisation judiciaire de Route Nette).
  - Mois `hMonth()` dans `rolesMonth()` : frais de gestion, intérêts, remontée auto, salaire, frais 480 €/mois (+ taxe sur comptes-titres 0,15 % au-delà d'1 M€ d'actions), participations (valeur ± croissance et volatilité, coups durs/bonnes nouvelles, dividende en juin exonéré, majorité +10 %), opportunités `hOffers()` (décote 10-22 %, 45 jours), ISOC de la holding avec pertes reportées, historique. Les placements `HINV` restent gérés par `phMonth()`.
  - PME `HPART` (10 entreprises wallonnes inventées : boulangerie, garage, transport, toitures, agence immobilière, brasserie, logiciel, vétérinaires, photovoltaïque, maison de repos) : rachat 25 % / 51 % / 100 % `hBuyPart` (prix ± valeur × part, décote minorité −10 %, prime de contrôle +10 %, frais 1,5 % + 15 000 €), revente `hSellPart` (plus-value exonérée).
  - Ouvrir la 2e entreprise avec la holding : `clUnlock` propose holding ou compte privé, `clCreate(cap,'h')` (la société appartient à la holding). Vendre : `sellCo` (Route Nette, par la holding si elle la possède : prêt remboursé par l'acheteur) et `hSellCl` (société de nettoyage, exonérée par la holding sinon 10 % au-delà d'1 M€). `relaunch()` et `clBankrupt()` : prêt perdu, société plus possédée.
  - Succès h57/h58 renommés « Crée ta holding » / « Ta holding vaut 10 millions € ».
- **Une seule holding + biens loués (nov. 2026)** — retour du joueur : « il faut qu'une holding » et « on ne peut pas mettre en location les bâtiments de la vie privée ». (1) Plus de holding européenne à acheter : `euHoldAuto()` crée `st.hold={…,auto:1}` gratuitement (pas de frais de 6 000 €/mois) dès que la holding de groupe possède Route Nette et qu'il y a une filiale ; `euCard()` renvoie vers la holding de groupe ; les vieilles parties qui avaient acheté la holding européenne la gardent. Succès h53 renommé « Fais gérer tes filiales par une holding ». (2) Les biens `c:'loc'` (`P.rent` : appartements, kot, maison, garage, immeuble, cellule, bureaux, château viticole) étaient déjà loués automatiquement (loyers dans `privMonth()`) mais la fiche affichait « Loyer possible » sans bouton : maintenant « Loyer reçu · ✅ loué » + encadré « Déjà en location » dans `pBien`, et « 🔑 loué · + loyer » dans `pBiens`. Les logements `P.hr` gardent le bouton « Mettre en location ».
- **3e entreprise : chaîne de magasins (v1.5, lot 1, nov. 2026)** — cahier des charges : Claude Doc https://claude.ai/artifact/DtqEd4HF6Dc7v9uqQCTvF1 (6 lots ; le joueur veut « tout », aussi poussé que Route Nette). Tout dans `st.shop` (absent = pas créée ; `st.shUnlock=1` = 75 M€ payés, `SH_PRICE`). Page comme le nettoyage (`curTab='sh'`, `shRender()` dans l'en-tête de Route Nette, `#cltabs`, `rSh()` avec `shSec` home/stock/cmd/four/mag/team/soc, décor `shDraw()`, cloche `shNotifs()`/`shNotifUI()`), carte `hubShopCard()` dans `rHub`, `shUnlock(ok,by)` holding ou privé → `shCreateUI()`/`shCreate(cap)` (ville `SHTOWN`, capital, `H.own.sh` si payé par la holding). Données : rayons `SHR` (TVA), produits `SHPD` → `SHP` (achat HT, colis `pk`, conservation `life`, ventes/jour, saison, météo, élasticité), fournisseurs `SHF` (8 : grossiste, centrale, marché matinal, laiterie, boulangerie, brasseur, boucherie, surgelés), types de magasin `SHT`, rôles `SHRL`. Magasin `s.stock[p]={sh,rs,lots:[[q,exp]]}`. Commandes `shNewOrder`/`shOrderUI` (`shDraft`, jours `shDelDays`, `shSuggest` = besoin jusqu'à la livraison suivante + stock de sécurité `S.safe`, `shIncoming`, `shExp` selon le jour de la semaine `SHWD`), `shSend`, `shArrive` (manquants, casse, température), `shReceive(id,'ctrl'|'all')` (facture TVAC, `tvaD`). `shTick()` dans `tick()` : factures, livraisons le matin (la gérante réceptionne si `S.auto.rec`), péremption, ventes `shSellDay` (clients × ville × jour × satisfaction × réputation × prix, caisse 40 clients/h, réassort `shRestock` matin + journée + soir, coût des marchandises compté à la vente, vol 1,2 %), commandes auto de la gérante (`S.auto.ord`), candidats le lundi ; `shMonth()` : salaires, `shFixedL()`, TVA nette, découvert, prêt `shLoan`, ISOC 25 % avec pertes reportées, indexation. `shMv(a,l,cat)` (jamais `st.cash`), `shCanPay()`, `shVal()` (dans `fortuneCard`, `richRank`, holding), `shDiv` → holding si elle possède le magasin, crise `shCrisisUI`/`shBankrupt`, succès `SHG`. Holding rendue générique : `HKS=['rn','cl','sh']`, `hEnt(k)` (cash, mv, max, val, res). Équilibre (robot, supérette à Namur, 6 personnes) : CA ± 130-165 k€ HT/mois, marge 0,5-5 % comme dans le vrai commerce alimentaire. Lots suivants : promotions/folder, inventaire, AFSCA, plusieurs magasins, entrepôt, camions, concurrents, carrière, marque propre, intérim, rapports, syndicats, assurances, e-commerce, franchise.
- **Chaîne de magasins, lots 2 à 6 (v1.6, nov. 2026)** — choix faits par Claude (le joueur : « fais tes propres choix »). Module après le lot 1, données complétées par `shFix2(S)` (appelé dans `shTick` et les écrans : vieilles chaînes sans rien à migrer). Gestion fine : folder `shFolder()` (8 produits −15 % pendant 7 jours, +8 % de clients, 450 €/magasin), commandes permanentes `S.recF` → `shRecOrder()` (sans gérante), inventaire `shInvent()` (démarque inconnue `s.thAcc`, vols × `shThF(s)` qui monte si pas d'inventaire), anti-gaspi `S.agp` → `shGaspi()` (la veille de la date, moitié du lot à −50 %), banque alimentaire `S.don`, AFSCA `shAfsca(s)` (pertes, chaîne du froid `coldRisk`, Smiley, responsable qualité → favorable / remarques / amende / fermeture 3 jours `s.closed`), décisions `SHDEC` (`shDecTick` 2,5 %/jour, max 2, 20 jours, `def`), coût moyen d'achat par produit `k.ac` (coût des ventes réel, fournisseur moins cher = plus de marge). Chaîne : `shOpenUI()`/`shOpenGo()` (aménagement `SHFIT`, 30 jours de travaux, villes en plus dans `SHTOWN`), entrepôt `shWhGo` + camions `shTruck` (achats −4 % via `shWhF()` si 1 camion / 4 magasins), transferts `shBalance()`, concurrents `S.comp` (`SHCN`, ouvertures près de tes magasins = `shTmp(s,f,jours,n)` effet temporaire sur les clients, rachat `shCompBuy` à 0,4 × CA avec le personnel, classement `shRank()`). Carrière : `S.car` (`shXP`, `shXpN(l)=300+60·l²`, `SHTIT`, XP = ventes ÷ 1 700 + défis + projets), défis du mois `SHDQ` (`shDqTick`, `S.mq`, série `S.dqS`), projets `SHPRJ` (`S.prj` → `S.pj` : LED, Smiley, self-scan, caméras, solaire, étiquettes électroniques, zéro gaspi, prévention, appli, frais), grands projets `SHMEGA` (`S.mg`). Personnel : rôles `acheteur`, `rh` (`shRhAuto` : rapports et recrutement le lundi selon `shNeed(s)`), `qual`, `boucher` (+15 % boucherie) ; absences, accidents (assurance AT `S.at` bonus-malus), écarts de caisse, rapports `S.rpt` (`shRptAct` entretien / avertissement / licenciement), formations `shTrain`, intérim `shItOrder` (`w.it`, coût × `shItK()` 1,4 ou 1,12 avec sa propre agence, `shItHire` CDI), syndicats CP 202 (éco-chèques en décembre, négociation tous les 2 ans dès 50 pers., grève = magasins fermés, `S.wB`), licenciement contesté `shFireLaw`, procès `S.law` (`shLawAct` amiable / avocat), assurances `SHINS` (protection juridique, perte d'exploitation). Développement : marque propre `S.mdd` (coût −7 % sur `SHMDD`), drive / livraison `S.ec`, franchise `S.frOn`/`S.fr`/`S.frOff` (40 000 € d'entrée + 4 % ou 7 % avec l'entrepôt), agence Retail Intérim `S.itAg` (18 M€, ± 140 000 €/mois). Frais en plus `shFixed2(L)` (AT, AFSCA, entrepôt, camions, drive, siège dès 3 magasins…), frais de fonctionnement 4 % du CA, amortissement des investissements sur 5 ans (`shCap`, `S.capR`). Analyse par rayon `S.an`/`S.lastAn` (`shAn`). Onglet 🚀 Groupe `shGrp()` (`shGrpSec` mag/car/conc/dev). Les commandes automatiques gardent la commande que le joueur prépare (`shDraft` sauvegardé). Robot parfait : 37 magasins et ± 10 M€ de CA/mois après 6 ans, marge ± 7 %.
- **Sauvegarde compressée (v1.7, nov. 2026)** — bug du joueur : « Sauvegarde impossible : mémoire pleine » (partie à 8 000+ personnes, SAVE + PREV + BAK non compressés > quota ± 5 Mo). Les clés ne changent pas : une valeur qui commence par `LZP`='LZS1' est compressée (`LZmk()` = LZ façon lz-string, UTF-16 15 bits, ± 7-15× plus petite ; `LZ.z`/`LZ.u`, base64 `LZ.zb`/`LZ.ub`). Lecture toujours par `rdS(k)` (load, restorePrev). `save()` : partie < `LZMIN` (350 000 caractères) = JSON comme avant ; au-delà, compression dans un Web Worker (`lzW()`, `lzSend`, `lzDone`, numéros `lzSeq`/`lzWr` pour qu'une vieille compression n'écrase jamais une plus récente), au plus toutes les 4 s ; `save(1)` (fermeture, mise à jour) compresse tout de suite. `lzCompact()` 4 s après l'ouverture compresse les vieilles copies (PREV, BAK, trash, rescue) sans rien supprimer. `saveFull()` = ancien secours (cache photos, BAK). Code d'export `RNZ1…` (compressé base64, ± 8× plus court) ; `importGo` lit les deux formats. Firebase (sauvegarde en ligne, multi) : à faire quand le joueur aura créé son projet Firebase.
- **Boutons exécutés 2 fois (corrigé v1.7)** : dans un `onclick="…"`, `click()` désignait la méthode `click()` du bouton lui-même (portée des attributs HTML), donc chaque bouton se relançait une fois : les interrupteurs (`st.shop.sec=st.shop.sec?0:1`, agent de sécurité) revenaient à leur état. Le son s'appelle maintenant `clk()` (`click` reste un alias pour le code JS normal). **Ne jamais écrire `click()` dans un attribut HTML.**
- **Magasins v2 (v1.7)** — demande : « pousse 50× le magasin, louer un plus gros magasin ». Formats `SHRK` (épicerie, gare, supérette, supérette de ville, supermarché, grand supermarché niv. 12, hypermarché niv. 18 ; `SHFIT`, caisses `SHLN` → capacité caisse = min(heures, caisses × 12-14 h) × 40). Fiche magasin `shMag2()` (onglet 🏪 Magasin) : résultat du magasin (`s.pm` → `s.lastPm`, `shStoreMonth`), déménager dans plus grand `shUpgrade(k)` (21 jours), murs `shBuyBld(loan)` (1 500 €/m² × ville, +14 % de frais, crédit 80 % sur 15 ans 4,2 % `s.bl`, précompte, +2 %/an `shBldV`) et `shSellBld` (sale & leaseback, loyer +5 %), loyer `shRent(s)` selon la ville, 15 services `SHDEP` (fournil, boucherie, fromagerie, poissonnerie, traiteur, cave, fleurs, presse-Lotto, colis, distributeur, café, parking, bornes, lavage, parapharmacie ; `min` format, `c`, `m`/mois, `ray` multiplicateurs, `rev` € par client via `shSvcDay`, bonus clients plafonné à +18 %), horaires `s.hr` long et dimanche `s.sun` (`SHWD[0]=.62`, primes), positionnement `SHPOS` (discount / classique / premium, `shPosP`), équipement (caisses `s.ck`, frigos `s.frx`, réserve `s.rsx` → `shCapS(s)`), rénovation `s.reno` 1-5 (baisse tous les 3 ans), céder un magasin `shCloseStore`. 4 nouveaux rayons liés à un service (`SHR[r].dep` : po, tr, cv, fs ; produits préfixés `x…`, `shHas(s,p)`, `shRup(s)`), 4 fournisseurs (`mar`, `cav`, `cui`, `flo`). Événements `shEvt()` (Saint-Valentin, Pâques, fête des mères, barbecues, rentrée, Halloween, Toussaint, Saint-Nicolas, fêtes) dans la demande et les quantités conseillées (`shExp`), carte `shEvtCard()`. Centres commerciaux `SHMALL` (14 M€ → 650 M€, niv. 15-38, loyers 4,8-6,5 %, occupation, bonus avec un grand magasin dans la ville) dans 🚀 Groupe → 🏙️ Immo (`shImmo`). Décor : façade plus large selon le format, icônes des services. Robot parfait 8 ans : 66 magasins, 61 M€/mois, 1er du classement ; joueur simple (1 supérette) : marge −1 à +2 %.
- **Animation de lancement et menu (v1.8, nov. 2026)** — étape 1 du cahier des charges multijoueur (Claude Doc https://claude.ai/artifact/7G76FU81kUhgJpUFEWb1XU). `#intro` (z-index 50, canvas `#introc`) : `introRun(force)` dessine ± 6 s (nuit → lever du soleil, panneau, flèche lumineuse, camionnette, ouvrier qui balaie, balayeuse qui « nettoie » l'écran, titre + 3 notes), version courte (depuis 3,4 s) si déjà vue aujourd'hui (`rn-intro` = date), désactivable (`rn-intro-off`), bouton « Passer » / toucher l'écran → `introEnd()` ; `body.introon` cache les bandeaux #ins/#upd pendant l'intro. Écran d'accueil = menu : ▶️ Histoire (`#play`, comme avant), 🌐 Multijoueur « Bientôt » (`mpSoon()`), ⚙️ Options (`optUI()` : son, messages, intro, revoir l'intro, sauvegarde, charger, copie d'avant, mises à jour). Le multijoueur (lots 2-6) se développe sur une branche séparée et **ne doit pas être publié** sur `main` tant que le joueur ne l'a pas demandé.
- **Location des logements privés refaite (v1.9, nov. 2026)** — demande du joueur : « 0 bug, clair, comme dans la vraie vie ». `o.lou=1` = bien réservé à la location ; dossier `o.lz` (anciennes parties converties par `louFix(o)` : `louFrom`/`louOk`/`louEnd`/`ix` → `lz`). Bail de résidence principale (biens `P.hr` sans `hrn`) : `louSetup(id,m,lv)` (gestion `louM` 🏢 agence = 1 mois + TVA par nouveau locataire et 8 % du loyer, locataires vérifiés / 🙋 moi-même ; loyer −10 % / marché `louMkt(o)` (P.hr × `st.idx`, ×1,5 si rénové) / +10 % ; délai `louDelay`), `louStart` (certificat PEB 250 € une fois `o.peb`), locataire `louTen` (nom, sérieux caché `q`, garantie 2 mois), `louDay()` chaque jour dans `tick0` (signature, départ, jugement), `louMonth(o)` le 1er via `privInvest` (loyer au prorata le 1er mois, indexation à la date anniversaire 2 % ou 3,5 % pendant l'inflation, impayés → mise en demeure / juge de paix `louJuge` 750 €, 3-5 mois, expulsion ; l'agence le fait seule ; grosses réparations 8 %/mois ; le locataire part de lui-même ± 2 %/mois avec 3 mois de préavis), `louEnd` (état des lieux, garantie locative, puis nouvelle recherche ou bien libre), `louAct(id,a,ok)` (cancel, lower, back = congé 6 mois occupation personnelle ou « ne pas relouer », reloue, md, juge, mgmt, sstop). Location saisonnière (`P.hrn` : chalet, côte, Cap-Ferrat, château) : revenus selon la saison `LOU_SEA` −20 % de commission et ménage, arrêt en 1 mois. Charges du propriétaire `pCharge(o)` (35 % de `P.m` avec locataire, 50 % vide, 100 % en saisonnier), `louFee`, `louTaxM` (impôt ± 10 % de `P.hr` par mois loué, cumulé dans `V.rtxA`, payé en septembre de l'année suivante par `louTaxTick`), `louNet`. Loyers groupés dans une ligne du journal (`louAcc`). Fiche du bien : `louCard(o)` ; liste : `louStat(o)` ; vente d'un bien loué −8 % (`pSellVal`). Droits d'enregistrement à 3 % seulement si tu ne possèdes aucun autre logement (`c:'home'`). Les panne « chez ton locataire » de `lifeEvents()` sont maintenant dans `louMonth`. Les immeubles de rapport `P.rent` (c:'loc') ne changent pas.
- **Gestionnaire des locations privées (v1.9.1)** — demande du joueur. `pv().gl {n,sk,tr,d,auto}` : employé payé par le compte privé (`glCost()` = `GLT[tr].c` × `st.idx`, dans `privMonth()` et `pvBudget()`). Contrats `GLT` : 1 jour/sem. (4 biens, 800 €), mi-temps (10, 1 950 €), temps plein (30, 3 900 €), + assistante (∞, 7 400 €). `glUI(t)` (carte en haut de 🗝️ Biens), 3 candidats `glCands()` renouvelés tous les 30 jours (compétence `sk` 0,85-1,2 : délai ÷ sk, locataires plus sérieux), `glHire(i,ok)` reprend les biens loués par l'agence ou par toi (jusqu'à `glCap()`), `glTier`, `glFire` (préavis 1 mois + 1/an, max 6, biens rendus à l'agence). Mode de gestion `z.m='gl'` : pas de commission, impayés gérés seul (comme l'agence), réparations −15 %, saisonnier 12 % au lieu de 20 % (`louSaiC()`). `glAuto()` le lundi (si `auto`) met en location les biens vides sauf ta maison, un bien acheté il y a < 14 jours ou un bien que tu as repris (`o.glNo`, effacé quand tu le reloues). `louStart0(o,m,lv)` = mise en location sans interface. `glSave()` = frais d'agence évités ; avertissement s'il coûte plus qu'il ne rapporte. Changer de gestion d'un bien loué : pastilles `louAct(id,'mg_gl'|'mg_ag'|'mg_moi')`.
- **Gestionnaire + immeubles de rapport (v1.9.2)** : le même gestionnaire `gl` gère aussi les biens `P.rent` (`c:'loc'`) via `o.gm=1` : `pCharge` retire les frais d'agence (8 % du loyer) des charges, vide 2 % au lieu de 5 % des mois, compté dans `glN()` (`glU(o)` = `P.u`, immeuble de 4 appartements = 4). `glHire` et `glAuto` (si `auto`) les reprennent dans la limite du contrat ; `glBld(id,on)` (carte `glBldCard` dans la fiche du bien) ; rendu à l'agence = `o.glNo` (plus repris automatiquement) ; `glFire` efface `gm`.
- **Fluidité des magasins + contrôle complet (v1.9.3, 15 nov. 2026)** — demande du joueur : vérifier bugs et ralentissements, corriger sans changer le jeu. Tests (robots qui cliquent partout, grosse partie 7 ans, 252 fonctions de boutons vérifiées) : aucune erreur. Corrigé : collection `maitres` sans `vol`/`dr` → `o.vm` devenait NaN (valeur figée) ; `collMonth()` protégé. Magasins (40 magasins : `shTick` 26 → 9 ms, sauvegarde −45 %) : `shAutoOrder()` = enveloppe de `shAutoOrder0()` avec `SHPEND` (commandes en cours, lue par `shIncoming`) et `SHBC` (cache de `shBest` → `shBest0`, vidé après chaque `shSend`) ; les commandes reçues (`st==='done'`) perdent leurs `lines` (jamais relues). Listes par paquets : équipe des magasins (`sht`, 30), chantiers ponctuels du nettoyage (`clj`, 30), factures fournisseurs (60 premières). Vérifié avec `Math.random` fixé (et `coinPop`/`confetti`/`toastMsg` neutralisés, car ils tirent du hasard selon le temps réel) : résultats strictement identiques avant/après. Reste lent sur une partie géante : sauvegarde forcée à la fermeture (± 1 s sur PC).
- **Bureau trié par besoin ET par argent (v1.9.4, 21 nov. 2026)** — retour du joueur : « tu me dis d'engager mais 5 minutes après je fais faillite ». `bureauPrio()` donne une note de besoin par poste (encadrement saturé, petits boulots en attente, retards, rapports, usure…) et renvoie `[rôle, raison si conseillé, payable, raison d'utilité]`. Tri par besoin uniquement (retour du joueur : « je ne t'ai pas demandé de tout bloquer ») : les 3 premiers ont « ⭐ Besoin maintenant », l'argent est seulement affiché. Payable (affiché, jamais bloquant) : `roleAfford(r)` = bénéfice moyen des 3 derniers mois `bureauMoney()` (`st.mHist`, moins les salaires des embauches des 62 derniers jours, pas encore dans les bilans) + `roleGain(r)` (gestionnaire si encadrement saturé 20 % de la production, comptable 250 €, directeur technique 6 %, conducteur si retards 5 %) − `roleCost(r)` (coût indexé `st.idx`) ≥ 0 avec au moins 2 mois de salaire sur le compte (`st.cash`, avant : `canPay()` qui bloquait Véronique quand la réserve de 3 mois était à 0), ou `canPay()` ≥ 12 mois. Carte « 💶 Ton argent » en haut des postes, « ✅/⚠️ Après l'embauche, ton entreprise gagnerait / perdrait ± X €/mois », et avertissement rouge dans le CV avant d'engager. Rien n'est bloqué : le joueur peut toujours engager.
- **Responsable de l'organisation du bureau (v1.9.5, 21 nov. 2026)** — demande du joueur : quelqu'un qui engage et licencie le personnel de bureau selon les besoins. Rôle `orga` (Véronique Lemmens, 260 €/j). `orgaTick()` chaque lundi (dans `tick0`, après `refreshCand`) : réglage `st.orgaMode` ('all' engager et licencier / 'hire' seulement engager / 'off'), une seule action par semaine. Embauche : poste avec besoin ≥ 55 et raison dans `bureauPrio()` (notes gardées dans `BPS`/`BPW`), payable (`roleAfford`), pas renvoyé par elle il y a moins de 120 jours (`st.orgF`). Départ (préavis payé, `preavisCost`) : poste inactif — compteurs `st.rs` du rôle inchangés depuis 120 jours (`ORGC`, `st.orgS`, formateur 240 j) ou gestionnaires en trop 8 semaines (`st.orgG` : capacité − 3 − charge ≥ 1,5) — ou, si l'entreprise perd de l'argent (`bureauMoney().avg` < 0), le poste le moins utile (note < 35, ≥ 90 jours). Jamais les postes obligatoires `orgReq()` (directeurs de la classe actuelle ou de la suivante quand elle est proche, aide-comptable dès 6, prévention dès 15, elle-même). Statut en direct `orgStatus()` (ce qu'elle fera lundi ou pourquoi elle attend) et journal `st.orgL` dans la carte `orgaCard()` en haut de 🏢 Bureau ; stats `st.rs.orgh`/`orgf`. Directeurs dans `bureauPrio()` : « obligatoire » seulement si la classe suivante est proche (classe ≥ 1, 70 % de l'effectif, 50 % du CA), texte avec le vrai nom de la classe.
- **Responsable des équipes de terrain (v1.9.6, 21 nov. 2026)** — demande du joueur : quelqu'un qui engage des ouvriers quand il en manque et les licencie quand il n'y a plus de travail ou qu'ils sont à perte. Rôle `terr` (Fabienne Henrotte, `cat:'enc'`, 270 €/j), aussi dans `bureauPrio()` (≥ 15 ouvriers) et surveillé par Véronique (`ORGC.terr` = terh/terf/tern). `terrTick()` chaque lundi après `orgaTick()` (donc après `refreshCand`) ; réglage `st.terMode` all/hire/off ; carte `terCard()` en haut de 👷 Terrain et de 🙋 Engager avec statut `terStatus()` et journal `st.terL`. **Besoin** `terNeed()` : chantiers en attente/en pause sans équipe (en comptant les ouvriers libres et les spécialités permis C / conducteur d'engins / élagueur), marchés publics en retard (2 par chantier), petits boulots faisables refusés faute de monde (pas si l'encadrement est saturé `R.sat` : charge > capacité + 1). **Embauche** : candidats de la semaine `TERRK` (pas d'étudiant, pas de mauvaise référence `cvOf(w).lz`), meilleur `sk/day`, spécialistes d'abord, max `floor(ouvriers/10)` (1 à 6) par semaine, seulement si 2 mois de salaire sur le compte (pas de condition de bénéfice : un ouvrier rapporte plus qu'il ne coûte). **Mesures** `terSnap()` : trimestre glissant `w.pf` → `w.pq` {rev, cost, days} et inactivité `w.id0` ; tout est remis à zéro si Fabienne a été absente plus d'une semaine (sinon fausses « 117 semaines sans chantier »). `terP(w)` = production par jour travaillé, `terQ(w)` = production ÷ salaire journalier. **Départs** (≥ 90 jours d'ancienneté, une semaine sans embauche, max `floor(ouvriers/25)` ≥ 1) : sans chantier ≥ 60 jours seulement si rien ne manque, pas en hiver (sauf pertes), en gardant une réserve d'ouvriers libres (max(2, 15 %)) et jamais s'il y a des petits boulots faisables non acceptés sans Manon ; ou produit < 50 % de la médiane de l'équipe ET ne couvre pas son salaire ; ou, si l'entreprise perd de l'argent, le moins rentable qui ne couvre pas son salaire (< 75 % de la médiane). Jamais `terSafe` (patron, Jason, intérimaires, détachés, accidentés, enfants, étudiants) ni le dernier chauffeur / conducteur d'engins / élagueur utile (`needSpec`). Une règle fixe « < 1,15 × salaire » a été essayée et abandonnée : les petits boulots courts et l'encadrement saturé baissent toute l'équipe, et les spécialistes mieux payés semblaient à tort moins rentables. Tests : croissance 2 → 40-50 ouvriers sans licenciements en boucle ; sureffectif 25 ouvriers → les paresseux (24-32 % de la production des collègues) partent d'abord.
- **Fabienne en continu et sans plafond (v1.9.7, 21 nov. 2026)** — demande du joueur : « elle gère juste les ouvriers, elle engage et vire, en continu, même un million de personnes si c'est bon pour l'entreprise, c'est elle la cheffe ». `terrTick()` tourne **chaque jour ouvrable** dans `tick0`, juste avant `autoStaff()` (les nouveaux partent tout de suite sur chantier) ; plus de plafond d'embauches ni de départs. Si les CV de la semaine ne suffisent pas, elle recrute directement (`mkW`, meilleur `sk/day` parmi 3-5 profils sans mauvaise référence) ; embauche faite sans passer par `hire()` (même effet : `ck('hire')`, `mot`, `hd`, `age`). Plus de limite liée à l'encadrement (`R.sat` supprimé). Petits boulots : on compte tous les ouvriers manquants (somme des `minW` − ouvriers libres), mais seulement si le manque dure depuis 3 jours ouvrables (`st.terSS`) et que ≥ 85 % des ouvriers maison travaillent déjà (`R.occ`) — sinon elle engageait un permanent pour chaque boulot de 2 jours (55 ouvriers et pertes en 5 mois). Chantiers en attente et marchés en retard : tout de suite. Seule condition financière : 2 mois de salaire sur le compte par embauche. Véronique ne la renvoie jamais (`orgReq` inclut `terr`). Correction de `bureauMoney()` : seuls les nouveaux employés de bureau (pas les ouvriers, qui produisent dès le 1er jour) sont retirés de la moyenne (avant : −158 000 €/mois affichés pour −8 000 € réels pendant une forte croissance). Tests : 2 → 70-110 ouvriers en 2 ans avec des saisons (embauches au printemps/été, départs des inactifs ensuite), compte 75 000 € → ± 1 M€ ; grosse partie jusqu'à 7 755 personnes sans erreur.
- **Chiffres de Fabienne (v1.9.8)** : `terStats()` dans `terCard()` = tuiles en direct (ouvriers maison maintenant, sur un chantier, sans chantier + au chômage temporaire, absents/détachés/intérim, engagés et renvoyés ce mois-ci `st.terM {k:gmKey(),h,f}` via `terM()`, et depuis le début `st.rs.terh`/`terf`).
- **Moins de faillites (v1.9.9, 21 nov. 2026)** — retour du joueur : « je fais souvent faillite ». Simulations (joueur robot, 4 ans) : 1 réorganisation dès le premier hiver dans presque toutes les parties, même sans Véronique ni Fabienne : l'entreprise travaille mais les factures (jusqu'à 51 000 € dus par les clients) arrivent après les salaires. **Crédit de caisse sur créances** : `overdraft()` = `odBase()` (20 000 € + 10 % du CA, max 150 000 €) + `odRec()` (50 % des factures à recevoir hors cautionnements, max 2 M€), expliqué dans la carte Banque ; Fabienne n'utilise que `odBase()`. Résultat : 0 réorganisation sur 4 parties sans elles (avant : 1 par partie). **Fabienne** : argent libre `terMoney()` = compte − salaires dus `st.salAcc` − `fixedM()` + 30 % de `odBase()`, 1,5 mois de salaire par embauche (avant : 18 ouvriers engagés puis le 1er du mois → faillite) ; petits boulots seulement si le manque dure ≥ 5 jours ouvrables, occupation moyenne `st.terOcc` (moyenne glissante 10 jours) ≥ 90 % et au plus 10 % d'ouvriers en plus par semaine (`st.terWk`) — avant : 10 embauches en juillet, 15 ouvriers sans travail en août ; un ouvrier engagé depuis moins de 3 mois peut partir après 5 semaines sans chantier (`fresh`). **Véronique** : bureau ≤ 30 % de la production moyenne (`officeOk`, `officeCost()`, sauf postes obligatoires) dans `roleAfford` ; si l'entreprise perd de l'argent et que le bureau dépasse 35 % de la production, elle se sépare du moins utile même s'il a une bonne note. **Avertissement** `costWarn(r,nm)` dans les cartes de Véronique et Fabienne et `costWarnMonth()` (journal, le 1er du mois) quand leur salaire dépasse 12 % de la production et que l'entreprise perd de l'argent ; descriptions « conseillée à partir d'une quinzaine de personnes ». Constat : avec 10 ouvriers et seulement des petits boulots, Véronique + Fabienne (± 11 600 €/mois) font perdre de l'argent ; sans elles, +80 000 à +420 000 € en 4 ans.
- **Quitter l'appli sans blocage (v1.9.10)** — retour du joueur : « quand j'essaie de la quitter ça bug ». Avant : `visibilitychange` et `pagehide` faisaient chacun `save(1)` (compression synchrone des grosses parties ± 0,2 s sur PC par sauvegarde, donc plusieurs secondes sur téléphone) + un `render()`. Maintenant `saveQuit()` : une seule fois par 5 s, petite partie = écriture directe, grosse partie = compression dans le Web Worker (`lzSend`, repli sur `save(1)` sans worker) ; pas de redessin en partant (fait au retour). Mesure : 14 ms bloquées en quittant une partie de 8 000 personnes, sauvegarde bien écrite.
- **Thierry achète vraiment (v1.9.11)** — retour du joueur : « il ne fait rien ». Avant, chaque achat demandait `canPay()` (trésorerie − 3 mois de charges) > prix, presque toujours 0. Maintenant argent libre `achMoney()` = compte − salaires dus − `fixedM()` + 30 % de `odBase()`, achat si ≥ 1,1 × prix (`achOk`). `achWants()` (chaque jour, max 3 achats) : machine impossible à louer qui bloque un chantier en attente, machines qui manquent seules pour remettre offre à un marché ouvert (coût ≤ 60 % de `t.est`), machine qui manque seule pour ≥ 3 petits boulots en attente ou prix ≤ 1,5 × leur valeur. Le lundi : machines louées ≥ 6 jours en 2 semaines, remplacement dès 85 % d'usure, revente des doublons inutilisés 120 jours. Réglage `st.achMode` all/buy/off, carte `achCard()` en haut de 🚜 Matériel (statut `achStatus()`, compteurs ach/achr/achs, investi `st.rs.achi`, carburant `achv`, journal `st.achL` via `achLog`).
- **Fluidité des très grosses parties (v1.9.12)** — retour du joueur : « le jeu commence à être lent et à laguer » (CA 375 M€, 980 factures). Mesuré (1 300 pers.) : (1) le rattrapage `setInterval` appelait `save(1)` toutes les 2 s → compression LZ **sur l'écran principal** (≈ 750 ms / 5 s sur PC) ; maintenant `save(2)` = rattrapage « doux » qui passe par le Web Worker (`soft`), `save(1)` reste synchrone pour quitter / mettre à jour / exporter. (2) `has(r)` en cache (`HASC`, Set des rôles, recalculé si `st.workers` change de longueur ou d'objet, vidé à chaque jour/affichage et après une promotion `w.r='qual'`). (3) `spwReq0` lit l'équipe de terrain une seule fois (`spwF()`/`SPWF`, vidé comme `SPWC`). (4) `needSpec` de Fabienne : compteurs calculés une fois (avant O(n²)). (5) `draw`/`clDraw`/`shDraw` ne lisent `cv.clientWidth` que toutes les 30 images (`RSF`) : la lecture forçait un recalcul de la page à chaque image ; resize/orientation/ResizeObserver appellent toujours `rs()`. Résultat : 47 → 55 images/s, pire image 260 → 127 ms, `tick0` 26 → 16 ms.
- **Moins de fenêtres pour les grosses entreprises (v1.9.13)** — retour du joueur : « toutes les deux secondes j'ai le marché public qui s'affiche, je sais plus jouer ». `quietPub()` = 3 marchés publics ou plus dans `st.contracts` : alors « Réception provisoire » et « Marché attribué » vont seulement dans le journal (comme avec `cond`), et les bulles « 📂 Ouverture des offres », « 💶 Paiement reçu », « ❌ Marché attribué à … » et « 🎉 Marché gagné » ne s'affichent plus (`log(t,false)`). Les petites entreprises gardent les fenêtres.


# PARTIE C — Toutes les données du jeu (extraites automatiquement du code)

Chaque tableau = une constante du fichier `index.html`, lue dans le jeu en marche. `ƒ` = fonction (condition ou effet calculé dans le code).


## `EQ` — Matériel de Route Nette (n=nom, p=prix HTVA €, u=coût par jour d’usage €, veh=véhicule assuré) (37 éléments)

| clé | n | ic | p | u | veh |
|---|---|---|---|---|---|
| taillehaie | Taille-haie thermique pro | ✂️ | 620 | 5 |  |
| souffleur | Souffleur à dos pro | 🍃 | 690 | 5 |  |
| debrou | Débroussailleuse pro (type FS 461) | 🪚 | 1150 | 8 |  |
| tondeuse | Tondeuse pro tractée | 🌱 | 1290 | 6 |  |
| remorque | Remorque 750 kg | 🛒 | 1450 | 3 |  |
| signal | Signalisation de chantier (panneaux, cônes, barrières) | 🚧 | 2400 | 3 |  |
| karcher | Nettoyeur haute pression eau chaude | 💦 | 4300 | 29 |  |
| fleche | Remorque flèche lumineuse (FLR) | ⚠️ | 12500 | 6 | l |
| broyeur | Broyeur de branches tractable | 🪵 | 13900 | 39 |  |
| van | Camionnette plateau Transit (occasion 2019) | 🚐 | 22500 | 36 | l |
| nacelle | Camion nacelle 20 m (occasion) | 🏗️ | 38000 | 52 | l |
| balayeuse | Balayeuse compacte (occasion) | 🧹 | 45000 | 105 | h |
| tracteur | Tracteur 120 ch (occasion) + épareuse neuve | 🚜 | 84000 | 168 | a |
| hydro | Hydrocureuse combinée (occasion 2014) | 🚛 | 96000 | 145 | h |
| trons | Tronçonneuse pro | 🪓 | 950 | 6 |  |
| plaque | Plaque vibrante 90 kg | 🧱 | 1600 | 4 |  |
| batteuse | Enfonce-pieux hydraulique (pour mini-pelle) | 🔩 | 10500 | 15 |  |
| benne | Camion benne 3,5 t (Iveco Daily, occasion) | 🛻 | 21500 | 38 | l |
| pelle | Mini-pelle 5 t (occasion 2018) | 🦾 | 22750 | 72 |  |
| traceuse | Machine de marquage routier (traceuse autotractée) | 〰️ | 28000 | 40 |  |
| saleuse | Saleuse + lame de déneigement (pour camion 19 t) | 🧂 | 28000 | 20 |  |
| benne19 | Camion benne-grue 19 t (occasion 2015) | 🚚 | 45000 | 107 | h |
| aspifeuilles | Aspirateur de feuilles tracté | 🍂 | 7800 | 18 |  |
| rogneuse | Rogneuse de souches pro | 🪵 | 9800 | 22 |  |
| rouleau | Rouleau vibrant 2,5 t (occasion) | 🛞 | 17500 | 25 |  |
| tondap | Tondeuse autoportée frontale pro (occasion) | 🚜 | 18500 | 30 |  |
| desherb | Désherbeur à eau chaude sur remorque (sans pesticides) | ♨️ | 26000 | 38 |  |
| chargeuse | Chargeuse compacte sur pneus (occasion) | 🏗️ | 29000 | 48 |  |
| fourgon | Fourgon 9 places pour les équipes (occasion) | 🚐 | 31000 | 30 | l |
| hydroseed | Hydroseeder 3 000 L sur remorque (enherbement) | 🌱 | 34000 | 40 |  |
| telesc | Faucheuse débroussailleuse à bras télescopique 7 m | 🦾 | 39000 | 55 |  |
| tma | Camion TMA atténuateur de chocs (occasion) | 🛑 | 92000 | 60 | h |
| laveuse | Camion laveuse de voirie 16 t (occasion) | 🚿 | 118000 | 130 | h |
| balaygr | Grande balayeuse aspiratrice 6 m³ sur porteur (occasion) | 🧹 | 125000 | 140 | h |
| epandeur | Camion épandeur 26 t avec saleuse intégrée (occasion) | 🧂 | 145000 | 120 | h |
| tunnel | Camion laveur de tunnels à brosses (occasion) | 🚇 | 165000 | 150 | h |
| marqauto | Camion de marquage thermoplastique (occasion) | 〰️ | 215000 | 170 | h |


## `JOBS` — Métiers / chantiers de Route Nette (p:1 = petit boulot privé ; sinon marché SPW ; rate = unités par ouvrier-jour ; pu = prix unitaire ; need = matériel ; minW = ouvriers min. ; pc = permis C) (73 éléments)

| clé | p | n | ic | un | rate | pu | need | minW | vis | tool | ac | mo | pc | mach | main | q0 | nat | ex | op | dry | allw | gr |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| p_dechets | 1 | Ramassage de déchets | 🗑️ | sacs | 10 | 40 | [] | 1 | dechets | pince | #7bd88f |  |  |  |  |  |  |  |  |  |  |  |
| p_tonte | 1 | Tonte de pelouse | 🌱 | m² | 2500 | 0.19 | ["tondeuse"] | 1 | lawn | tondeuse | #8be05a | [4, 10] |  |  |  |  |  |  |  |  |  |  |
| p_haie | 1 | Taille de haies | ✂️ | m | 70 | 7.2 | ["taillehaie"] | 1 | hedge | haie | #4fc06a |  |  |  |  |  |  |  |  |  |  |  |
| p_debrous | 1 | Débroussaillage de terrain | 🌿 | m² | 600 | 0.8 | ["debrou"] | 1 | bush | debrou | #55b24a | [3, 11] |  |  |  |  |  |  |  |  |  |  |
| p_feuilles | 1 | Ramassage des feuilles | 🍂 | m² | 2000 | 0.22 | ["souffleur"] | 1 | leaves | souffleur | #e39a3b | [10, 12] |  |  |  |  |  |  |  |  |  |  |
| p_karcher | 1 | Nettoyage de cour et terrasse | 💦 | m² | 100 | 5 | ["karcher"] | 1 | paving | lance | #5fc3ff |  |  |  |  |  |  |  |  |  |  |  |
| p_verts | 1 | Évacuation de déchets verts | 🪵 | m³ | 8 | 60 | ["remorque"] | 1 | branches |  | #b5894f |  |  |  |  |  |  |  |  |  |  |  |
| p_grandpel | 1 | Tonte de grands terrains (parcs, terrains de foot) | ⚽ | m² | 9000 | 0.09 | ["tondap"] | 1 | lawn | tondeuse | #8be05a | [4, 10] |  |  |  |  |  |  |  |  |  |  |
| p_souches | 1 | Rognage de souches | 🪵 | souches | 10 | 85 | ["rogneuse"] | 1 | trees | scie | #8a5a2b |  |  |  |  |  |  |  |  |  |  |  |
| p_desherb | 1 | Désherbage d’allées sans produits | ♨️ | m² | 600 | 1.1 | ["desherb"] | 1 | paving | lance | #9fd36a | [4, 10] |  |  |  |  |  |  |  |  |  |  |
| p_aspi | 1 | Aspiration des feuilles dans un grand parc | 🍂 | m² | 8000 | 0.08 | ["aspifeuilles", "van"] | 1 | leaves | souffleur | #e39a3b | [10, 12] |  |  |  |  |  |  |  |  |  |  |
| p_allee | 1 | Pose d’une allée en gravier stabilisé | 🧱 | m² | 25 | 38 | ["plaque", "benne"] | 2 | paving | pelle | #c9b48a |  |  |  |  |  |  |  |  |  |  |  |
| p_gouttieres | 1 | Nettoyage de gouttières | 🏠 | m | 60 | 4.5 | [] | 1 | leaves | pince | #a9b8c8 |  |  |  |  |  |  |  |  |  |  |  |
| p_cloture | 1 | Pose d’une clôture de jardin | 🚧 | m | 25 | 32 | ["plaque"] | 2 | rail | pelle | #9bb07a |  |  |  |  |  |  |  |  |  |  |  |
| p_plant | 1 | Plantation d’une haie | 🌿 | m | 30 | 22 | ["van"] | 1 | hedge | pelle | #4fc06a | [10, 4] |  |  |  |  |  |  |  |  |  |  |
| p_arbre | 1 | Abattage d’un arbre dans un jardin | 🪓 | arbres | 2 | 450 | ["trons", "broyeur"] | 2 | trees | scie | #8a5a2b |  |  |  |  |  |  |  |  |  |  |  |
| p_parking | 1 | Balayage d’un parking de supermarché | 🛒 | m² | 15000 | 0.035 | ["balayeuse"] | 1 | sweep |  | #ffd23f |  | 1 | balayeuse |  |  |  |  |  |  |  |  |
| p_selpk | 1 | Déneigement d’un parking d’entreprise | 🧂 | m² | 20000 | 0.05 | ["benne19", "saleuse"] | 1 | snow |  | #bfe3ff | [12, 2] | 1 | benne19 |  |  |  |  |  |  |  |  |
| p_graff | 1 | Enlèvement de graffitis sur une façade | 🎨 | m² | 40 | 14 | ["karcher"] | 1 | paving | lance | #c78bd9 |  |  |  |  |  |  |  |  |  |  |  |
| p_potager | 1 | Création d’un potager | 🥕 | m² | 60 | 3.5 | [] | 1 | bush | pelle | #d9a066 | [3, 6] |  |  |  |  |  |  |  |  |  |  |
| p_neige | 1 | Déneigement de trottoirs | ❄️ | m² | 300 | 1.45 | [] | 1 | snow | pelle | #bfe3ff | [12, 2] |  |  |  |  |  |  |  |  |  |  |
| dechets |  | Ramassage des déchets le long des routes | 🗑️ | km | 2 | 255 | ["van", "signal"] | 2 | dechets | pince | #7bd88f |  |  |  | Ramassage manuel des déchets sur accotements et talus | 8 | services | {"d": "Évacuation et mise en CET des déchets", "u": "t", "k": 0.12, "pu": 160, "c": 128} |  |  |  |  |
| panneaux |  | Nettoyage des panneaux de signalisation | 🪧 | pièces | 16 | 23 | ["van", "karcher", "signal"] | 2 | signs | lance | #4fb3ff |  |  |  | Nettoyage haute pression de panneaux de signalisation | 80 | services |  |  |  |  |  |
| glissieres |  | Nettoyage des glissières de sécurité | 🛣️ | km | 0.8 | 460 | ["van", "karcher", "signal", "fleche"] | 2 | rail | lance | #a9b8c8 |  |  |  | Nettoyage des glissières de sécurité (une face) | 4 | services |  |  |  |  |  |
| debrous |  | Débroussaillage des talus | 🌿 | km | 0.35 | 1480 | ["van", "debrou", "signal"] | 2 | bush | debrou | #55b24a | [3, 10] |  |  | Débroussaillage manuel des talus et dépendances | 3 | travaux | {"d": "Évacuation des déchets verts", "u": "t", "k": 3, "pu": 52, "c": 40} |  |  |  |  |
| fauchage |  | Fauchage des accotements | 🌾 | km | 8 | 92 | ["tracteur", "fleche", "signal"] | 2 | grass |  | #c7d94f | [5, 10] | 1 | tracteur | Fauchage mécanique des accotements et fossés | 40 | services |  |  |  |  |  |
| balayage |  | Balayage des filets d'eau | 🧹 | km | 9 | 62 | ["balayeuse", "fleche"] | 2 | sweep |  | #ffd23f |  | 1 | balayeuse | Balayage mécanique des filets d'eau | 40 | services | {"d": "Évacuation des balayures", "u": "t", "k": 0.3, "pu": 145, "c": 118} |  |  |  |  |
| elagage |  | Élagage des arbres d'alignement | 🌳 | arbres | 5 | 88 | ["nacelle", "broyeur", "fleche", "signal"] | 3 | trees |  | #3fa34d | [10, 3] | 1 | nacelle | Élagage d'arbres d'alignement en nacelle | 30 | travaux | {"d": "Broyage et évacuation des branches", "u": "m³", "k": 1.5, "pu": 30, "c": 16} |  |  |  |  |
| avaloirs |  | Curage des avaloirs | 🕳️ | pièces | 25 | 19 | ["hydro", "fleche", "signal"] | 2 | drains |  | #e8742c |  | 1 | hydro | Curage d'avaloirs et chambres de visite | 120 | travaux | {"d": "Évacuation et traitement des boues", "u": "t", "k": 0.08, "pu": 185, "c": 150} |  |  |  |  |
| fosses |  | Curage des fossés | 🚜 | m | 150 | 4 | ["pelle", "benne", "signal"] | 2 | drains |  | #9b7b4f |  |  | pelle | Curage de fossés à la mini-pelle et reprofilage | 400 | travaux | {"d": "Évacuation des terres de curage (CET classe 3)", "u": "t", "k": 0.3, "pu": 28, "c": 22} | engin |  |  |  |
| nids |  | Réparation de nids de poule (bail d’entretien) | 🕳️ | m² | 15 | 40 | ["benne", "plaque", "signal", "fleche"] | 2 | sweep | pelle | #6f7680 |  |  |  | Réparation localisée de revêtement hydrocarboné | 40 | travaux | {"d": "Fourniture d’enrobé à chaud", "u": "t", "k": 0.1, "pu": 125, "c": 95} |  |  |  |  |
| marquage |  | Marquages routiers | 〰️ | m² | 400 | 3 | ["traceuse", "van", "signal", "fleche"] | 2 | sweep |  | #f4f4f4 | [4, 10] |  |  | Marquages routiers en peinture (lignes et flèches) | 500 | travaux | {"d": "Fourniture de peinture de marquage", "u": "m²", "k": 1, "pu": 2.1, "c": 1.6} |  | 1 |  |  |
| deneig |  | Épandage de fondants et déneigement | 🧂 | km | 40 | 6 | ["benne19", "saleuse"] | 1 | snow |  | #bfe3ff | [11, 3] | 1 | benne19 | Circuits d’épandage et de déneigement (service d’hiver) | 200 | services |  |  |  | 1 |  |
| glis_pose |  | Pose de glissières de sécurité | 🛡️ | m | 40 | 20 | ["pelle", "batteuse", "benne", "signal", "fleche"] | 3 | rail |  | #c9d1da |  |  | pelle | Fourniture et pose de glissières de sécurité | 100 | travaux | {"d": "Fourniture des glissières (lisses, poteaux)", "u": "m", "k": 1, "pu": 42, "c": 34} | engin |  |  |  |
| invasives |  | Gestion des plantes invasives | 🌱 | m² | 150 | 2 | ["van", "debrou", "signal"] | 2 | bush | debrou | #7ac943 | [5, 9] |  |  | Arrachage et fauche de la renouée du Japon et de la berce du Caucase | 1000 | services | {"d": "Évacuation en filière agréée", "u": "t", "k": 0.01, "pu": 170, "c": 140} |  |  |  |  |
| abattage |  | Abattage d’arbres dangereux | 🪓 | arbres | 2 | 400 | ["nacelle", "trons", "broyeur", "benne", "signal", "fleche"] | 3 | trees | scie | #8a5a2b | [10, 3] |  | nacelle | Abattage, démontage et dessouchage d’arbres dangereux | 8 | travaux | {"d": "Évacuation et valorisation du bois", "u": "m³", "k": 2.5, "pu": 20, "c": 10} |  |  |  | 1 |
| desherbspw |  | Désherbage alternatif des trottoirs et îlots | ♨️ | m² | 900 | 0.9 | ["desherb", "van", "signal"] | 2 | paving | lance | #9fd36a | [4, 10] |  |  | Désherbage à l’eau chaude des trottoirs, îlots et bordures (sans pesticides) | 2000 | services |  |  |  |  |  |
| souches |  | Dessouchage d’arbres abattus | 🪵 | souches | 8 | 95 | ["rogneuse", "benne", "signal"] | 2 | trees | scie | #8a5a2b |  |  |  | Rognage des souches et remise en état du sol | 20 | travaux | {"d": "Évacuation des copeaux", "u": "m³", "k": 0.4, "pu": 28, "c": 22} |  |  |  |  |
| talus |  | Fauchage des talus hauts (bras télescopique) | ⛰️ | km | 3 | 260 | ["tracteur", "telesc", "fleche", "signal"] | 2 | grass |  | #a8c94f | [5, 10] | 1 | tracteur | Fauchage-débroussaillage des talus hauts au bras télescopique | 15 | services |  |  |  |  |  |
| bassins |  | Curage des bassins d’orage | 💧 | m³ | 60 | 14 | ["pelle", "chargeuse", "benne19", "signal"] | 3 | drains |  | #5f8fb0 |  |  | pelle | Curage des bassins d’orage et de décantation | 200 | travaux | {"d": "Évacuation et traitement des boues de curage", "u": "t", "k": 0.9, "pu": 38, "c": 30} | engin |  |  |  |
| trottoirs |  | Réfection de trottoirs et accotements | 🧱 | m² | 40 | 32 | ["benne", "plaque", "rouleau", "signal"] | 3 | paving | pelle | #b8a07a |  |  |  | Réfection de trottoirs et d’accotements stabilisés | 150 | travaux | {"d": "Fourniture de matériaux (empierrement, gravier stabilisé)", "u": "t", "k": 0.15, "pu": 32, "c": 25} |  |  |  |  |
| enherb |  | Enherbement de talus (hydroseeding) | 🌱 | m² | 2500 | 0.7 | ["hydroseed", "van", "signal"] | 2 | grass |  | #7ac943 | [3, 10] |  |  | Enherbement de talus par projection hydraulique | 3000 | travaux | {"d": "Fourniture de semences, engrais et mulch", "u": "m²", "k": 1, "pu": 0.35, "c": 0.27} |  |  |  |  |
| lavage |  | Lavage des voiries et des places | 🚿 | km | 12 | 75 | ["laveuse", "fleche"] | 1 | sweep |  | #6fc8ff |  | 1 | balayeuse | Lavage mécanique des voiries, places et pistes cyclables | 30 | services |  |  |  |  |  |
| autoroute |  | Entretien des accotements d’autoroute (sous TMA) | 🛣️ | km | 4 | 520 | ["tma", "van", "debrou", "signal"] | 3 | bush | debrou | #55b24a | [3, 10] | 1 |  | Débroussaillage et propreté des accotements d’autoroute sous protection d’un TMA | 20 | services | {"d": "Évacuation des déchets et déchets verts", "u": "t", "k": 0.4, "pu": 150, "c": 120} |  |  |  |  |
| tunnels |  | Lavage des tunnels routiers | 🚇 | m | 900 | 3.2 | ["tunnel", "tma", "fleche"] | 3 | signs | lance | #9aa7b3 |  | 1 |  | Lavage des parois, luminaires et panneaux des tunnels | 2000 | services |  |  |  |  |  |
| marq_auto |  | Marquages autoroutiers (thermoplastique) | 〰️ | m² | 1200 | 6 | ["marqauto", "tma", "signal"] | 3 | sweep |  | #f4f4f4 | [4, 10] | 1 |  | Marquages en thermoplastique sur autoroutes et voies rapides | 2000 | travaux | {"d": "Fourniture de thermoplastique et de billes de verre", "u": "m²", "k": 1, "pu": 4.2, "c": 3.3} |  | 1 |  |  |
| deneig_auto |  | Service d’hiver autoroutier | ❄️ | km | 90 | 7 | ["epandeur"] | 1 | snow |  | #bfe3ff | [11, 3] | 1 | benne19 | Circuits d’épandage et de raclage sur autoroutes (astreinte 24 h/24) | 300 | services |  |  |  | 1 |  |
| balay_auto |  | Balayage aspirant des autoroutes et ronds-points | 🧹 | km | 18 | 70 | ["balaygr", "tma"] | 2 | sweep |  | #ffd23f |  | 1 | balayeuse | Balayage aspirant des bandes d’arrêt d’urgence et ronds-points | 60 | services | {"d": "Évacuation des balayures", "u": "t", "k": 0.3, "pu": 145, "c": 118} |  |  |  |  |
| egouts |  | Curage des égouts et collecteurs | 🕳️ | m | 120 | 6 | ["hydro", "fleche", "signal"] | 2 | drains |  | #8a7a5a |  | 1 | hydro | Curage hydrodynamique des égouts et collecteurs | 400 | travaux | {"d": "Évacuation et traitement des boues", "u": "t", "k": 0.02, "pu": 185, "c": 150} |  |  |  |  |
| grilles |  | Nettoyage des grilles et caniveaux | 🧽 | pièces | 35 | 9 | ["van", "karcher", "signal"] | 2 | drains | lance | #7a9ab0 |  |  |  | Débouchage et nettoyage des grilles, caniveaux et filets d’eau | 150 | services |  |  |  |  |  |
| tags |  | Enlèvement de tags et graffitis sur les ouvrages | 🎨 | m² | 25 | 18 | ["van", "karcher", "signal"] | 2 | signs | lance | #c78bd9 |  |  |  | Effacement de graffitis sur ponts, murs et panneaux | 150 | services |  |  |  |  |  |
| affiches |  | Enlèvement de l’affichage sauvage | 📄 | pièces | 40 | 6 | ["van"] | 1 | signs | pince | #e0c070 |  |  |  | Enlèvement des affiches et panneaux publicitaires illégaux | 150 | services |  |  |  |  |  |
| bornes |  | Remplacement de potelets et bornes kilométriques | 📍 | pièces | 12 | 65 | ["benne", "plaque", "signal"] | 2 | rail | pelle | #d9d9d9 |  |  |  | Fourniture et pose de potelets, balises et bornes | 40 | travaux | {"d": "Fourniture des potelets et balises", "u": "pièces", "k": 1, "pu": 48, "c": 38} |  |  |  |  |
| panneaux_pose |  | Pose et remplacement de panneaux de signalisation | 🪧 | pièces | 8 | 90 | ["benne", "signal", "fleche"] | 2 | signs | pelle | #4fb3ff |  |  |  | Fourniture et pose de panneaux de signalisation verticale | 30 | travaux | {"d": "Fourniture des panneaux et supports", "u": "pièces", "k": 1, "pu": 160, "c": 128} |  |  |  |  |
| cloture |  | Pose de clôtures à gibier le long des autoroutes | 🦌 | m | 120 | 9 | ["pelle", "batteuse", "benne", "signal"] | 3 | rail |  | #9bb07a |  |  | pelle | Fourniture et pose de clôture grillagée anti-gibier | 500 | travaux | {"d": "Fourniture du grillage et des piquets", "u": "m", "k": 1, "pu": 11, "c": 8.5} | engin |  |  |  |
| ronds |  | Entretien paysager des ronds-points | 🌺 | ronds-points | 1 | 420 | ["van", "tondeuse", "taillehaie", "signal"] | 2 | lawn | tondeuse | #ff8ab0 | [3, 11] |  |  | Tonte, taille et désherbage des ronds-points et îlots fleuris | 12 | services |  |  |  |  |  |
| plantations |  | Plantation d’arbres d’alignement | 🌳 | arbres | 6 | 120 | ["pelle", "benne", "signal"] | 2 | trees | pelle | #3fa34d | [11, 3] |  | pelle | Fourniture et plantation d’arbres tiges avec tuteurs | 30 | travaux | {"d": "Fourniture des arbres, tuteurs et terre", "u": "arbres", "k": 1, "pu": 180, "c": 145} | engin |  |  |  |
| haies_spw |  | Taille des haies le long des routes | 🌿 | km | 5 | 180 | ["tracteur", "fleche", "signal"] | 2 | hedge |  | #4fc06a | [9, 3] | 1 | tracteur | Taille mécanique des haies au lamier | 20 | services |  |  |  |  |  |
| batraciens |  | Barrières de migration des batraciens | 🐸 | m | 150 | 4 | ["van", "signal"] | 2 | bush | pelle | #7ac943 | [2, 4] |  |  | Pose et relevé quotidien des barrières à batraciens (crapauds) | 400 | services |  |  |  |  |  |
| ravel |  | Entretien des pistes cyclables RAVeL | 🚲 | km | 4 | 160 | ["van", "tondeuse", "souffleur"] | 2 | lawn | souffleur | #8be05a | [3, 11] |  |  | Tonte des abords, soufflage et propreté du RAVeL | 20 | services |  |  |  |  |  |
| abribus |  | Nettoyage des abribus et du mobilier urbain | 🚏 | pièces | 14 | 28 | ["van", "karcher"] | 1 | signs | lance | #7fc8ff |  |  |  | Lavage des abribus, bancs, poubelles et barrières | 80 | services |  |  |  |  |  |
| poubelles |  | Vidange des poubelles des parkings de covoiturage | 🚮 | passages | 8 | 45 | ["van"] | 1 | dechets | pince | #7bd88f |  |  |  | Vidange des poubelles et propreté des parkings de covoiturage | 80 | services | {"d": "Évacuation des déchets", "u": "t", "k": 0.02, "pu": 160, "c": 128} |  |  |  |  |
| accident |  | Nettoyage après accidents (hydrocarbures) | 🚨 | interventions | 2 | 650 | ["van", "karcher", "signal", "fleche"] | 2 | sweep | lance | #ff5d57 |  |  |  | Interventions de nettoyage de chaussée après accidents (absorbant, balayage) | 15 | services | {"d": "Absorbant et traitement des déchets pollués", "u": "t", "k": 0.2, "pu": 320, "c": 260} |  |  | 1 |  |
| feuillesspw |  | Ramassage des feuilles en voirie | 🍂 | km | 6 | 95 | ["aspifeuilles", "van", "signal"] | 2 | leaves | souffleur | #e39a3b | [10, 12] |  |  | Aspiration et évacuation des feuilles mortes en voirie | 30 | services | {"d": "Évacuation en centre de compostage", "u": "t", "k": 0.5, "pu": 45, "c": 36} |  |  |  |  |
| pontage |  | Colmatage des fissures (pontage) | 🖤 | m | 400 | 3 | ["benne", "signal", "fleche"] | 2 | sweep | pelle | #444 | [4, 10] |  |  | Pontage des fissures du revêtement au bitume chaud | 1500 | travaux | {"d": "Fourniture de produit de pontage", "u": "m", "k": 1, "pu": 1.2, "c": 0.9} |  | 1 |  |  |
| gabions |  | Murs en gabions sur talus instables | 🪨 | m³ | 6 | 95 | ["pelle", "chargeuse", "benne", "signal"] | 3 | rail |  | #9a9a8a |  |  | pelle | Construction de murs de soutènement en gabions | 40 | travaux | {"d": "Fourniture des cages et des pierres", "u": "m³", "k": 1, "pu": 85, "c": 68} | engin |  |  |  |
| bermes |  | Reprofilage des accotements | 🛤️ | km | 1 | 2400 | ["chargeuse", "rouleau", "benne19", "signal", "fleche"] | 3 | paving | pelle | #b8a07a |  |  | benne19 | Rechargement et reprofilage des accotements en empierrement | 5 | travaux | {"d": "Fourniture d’empierrement", "u": "t", "k": 120, "pu": 22, "c": 17} |  |  |  |  |
| falaises |  | Purge de rochers et filets de protection | ⛰️ | m² | 40 | 28 | ["nacelle", "van", "signal", "fleche"] | 3 | trees |  | #8a8a8a |  |  | nacelle | Purge de rochers instables et pose de filets le long des routes de la Meuse | 300 | travaux | {"d": "Fourniture des filets et ancrages", "u": "m²", "k": 1, "pu": 24, "c": 19} |  |  |  | 1 |
| ruisseaux |  | Curage de petits cours d’eau | 🏞️ | m | 90 | 7 | ["pelle", "benne", "signal"] | 2 | drains |  | #4fa3c8 | [6, 10] |  | pelle | Curage et entretien des cours d’eau non navigables le long des routes | 300 | travaux | {"d": "Évacuation des sédiments", "u": "t", "k": 0.4, "pu": 28, "c": 22} | engin |  |  |  |
| epareuse_auto |  | Fauchage des autoroutes (sous TMA) | 🌾 | km | 7 | 140 | ["tracteur", "tma", "signal"] | 2 | grass |  | #c7d94f | [5, 10] | 1 | tracteur | Fauchage des bandes et talus d’autoroute sous protection TMA | 40 | services |  |  |  |  |  |
| depots_sel |  | Gestion des dépôts de sel du SPW | 🧂 | t | 300 | 4 | ["chargeuse"] | 1 | snow |  | #e6eef5 | [10, 3] |  |  | Chargement, réception et rangement du sel de déneigement dans les dépôts | 2000 | services |  |  |  |  |  |
| pmr |  | Mise aux normes PMR des traversées | ♿ | traversées | 1.5 | 950 | ["benne", "plaque", "rouleau", "signal"] | 3 | paving | pelle | #6fa8dc |  |  |  | Abaissement de bordures et pose de dalles podotactiles | 15 | travaux | {"d": "Fourniture de dalles podotactiles et bordures", "u": "traversées", "k": 1, "pu": 420, "c": 340} |  |  |  |  |
| aires |  | Propreté des aires de repos | 🚻 | passages | 6 | 60 | ["van"] | 1 | dechets | pince | #7bd88f |  |  |  | Nettoyage des aires de repos (poubelles, abords, sanitaires) | 60 | services | {"d": "Évacuation des déchets collectés", "u": "t", "k": 0.02, "pu": 160, "c": 128} |  |  |  |  |


## `ROLES` — Fonctions du personnel (cat = ouv/bur/enc/dir ; day = coût employeur par jour €) (41 éléments)

| clé | n | ic | cat | day | sk | d | pc | who | multi | need |
|---|---|---|---|---|---|---|---|---|---|---|
| boss | Patron | ⭐ | ouv | 0 |  |  |  |  |  |  |
| etu | Étudiant jobiste | 🎒 | ouv | 132 | [0.6, 0.8] | Pas cher (cotisation de solidarité réduite), mais moins efficace. Maximum 650 heures par an : la règle belge des jobistes. |  |  |  |  |
| man | Ouvrier jardinier (cat. 1) | 👷 | ouv | 225 | [0.85, 1.05] |  |  |  |  |  |
| qual | Ouvrier jardinier qualifié (cat. 3) | 👷 | ouv | 246 | [1.05, 1.25] |  |  |  |  |  |
| ramas | Ramasseur de déchets (propreté publique) | 🗑️ | ouv | 222 | [0.85, 1.05] | Spécialiste de la propreté : +15 % sur le ramassage de déchets, les poubelles et les aires de repos. |  |  |  |  |
| chauf | Chauffeur poids lourd (permis C) | 🚛 | ouv | 265 | [0.95, 1.2] |  | 1 |  |  |  |
| signal | Signaleur de chantier (sécurité routière) | 🚧 | ouv | 232 | [0.85, 1.05] | Place et surveille la signalisation au bord de la route : 50 % d’accidents en moins sur son chantier, +10 % sur les chantiers d’autoroute. |  |  |  |  |
| paveur | Paveur (CP 124) | 🧱 | ouv | 262 | [0.95, 1.2] | +15 % sur les trottoirs, les traversées PMR, le pontage et les allées. |  |  |  |  |
| peintre | Peintre en marquage routier | 🎨 | ouv | 255 | [0.9, 1.15] | +20 % sur les marquages routiers et autoroutiers, et de meilleurs contrôles du SPW sur ces chantiers. |  |  |  |  |
| chef | Contremaître / chef d'équipe | 🦺 | ouv | 291 | [1.15, 1.35] | Dans une équipe : +15 % de travail et moins de remarques du SPW. |  |  |  |  |
| aide | Aide-comptable | 🧮 | bur | 183 |  | Factures envoyées à temps : tu es payé 10 jours plus vite. Indispensable dès 6 personnes. |  | Angélique Mawet |  |  |
| secr | Secrétaire | ☎️ | bur | 172 |  | Prépare les dossiers : +3 offres en même temps. |  | Nadia Benali |  |  |
| compta | Comptable | 📒 | bur | 232 |  | Remplace la fiduciaire (250 €/mois) et la banque te prête 50 % de plus. |  | Marc Delvaux |  |  |
| rh | Gestionnaire RH | 🤝 | bur | 238 |  | Deux fois plus de candidats chaque semaine, et de meilleurs profils. |  | Sophie Lambert |  |  |
| metreur | Métreur-deviseur | 📐 | bur | 238 |  | Calcule ton prix de revient exact pour chaque marché. +2 offres en même temps. |  | Olivier Gérard |  |  |
| gest | Gestionnaire de chantier | 📋 | enc | 265 |  | Suit 3 chantiers de plus en même temps. |  |  | 1 |  |
| dirt | Directeur technique | 🛠️ | dir | 370 |  | +8 % de travail sur tous les chantiers. Obligatoire pour la classe 2. |  | Philippe Renard |  | 10 |
| daf | Directeur administratif et financier | 💼 | dir | 398 |  | La banque prête 2 fois plus. Obligatoire pour la classe 2. |  | Isabelle Marchal |  | 10 |
| engin | Conducteur d'engins (cat. III, CP 124) | 🦾 | ouv | 287 | [1, 1.25] | Obligatoire pour la mini-pelle (curage de fossés, pose de glissières). |  |  |  |  |
| grimp | Élagueur-grimpeur (certificat ETW) | 🧗 | ouv | 274 | [1.05, 1.3] | Obligatoire pour l'abattage d'arbres dangereux. +10 % en élagage. |  |  |  |  |
| meca | Mécanicien d'atelier | 🔧 | enc | 255 |  | Répare au dépôt : 60 % de pannes en moins, usure des machines -10 %. |  | Didier Hubert | 0 |  |
| prev | Conseiller en prévention (niveau II) | ⛑️ | enc | 300 |  | Sécurité au travail : assurance accidents du travail à 3 % au lieu de 4 %, moins d’accidents. |  | Laurence Dethier |  | 15 |
| cond | Conducteur de travaux principal | 🗺️ | enc | 300 |  | Surveille tous les chantiers : déplace les ouvriers des petits boulots et des chantiers en avance vers les marchés publics en retard. Les chantiers en retard avancent 10 % plus vite. |  | Benoît Gillard |  |  |
| offre | Responsable des offres (marchés publics) | 📑 | bur | 320 |  | Lit les avis de marché et remet lui-même les offres quand ton entreprise remplit les conditions et a assez de monde, au coefficient de prix que tu choisis. |  | Grégory Lemaire |  |  |
| qhse | Responsable QHSE (qualité, sécurité, environnement) | 🦺 | enc | 300 |  | Fait les visites de chantier à ta place sur les marchés publics (tous les 15 jours), 30 % d’accidents en moins et de meilleurs contrôles du SPW. |  | Antoine Lambotte |  |  |
| flotte | Chef d’atelier – gestionnaire de flotte | 🔧 | enc | 270 |  | Fait réviser lui-même les machines avant qu’elles tombent en panne (dès 60 % d’usure) et divise les pannes par deux. |  | Marc Pirotte |  |  |
| juriste | Juriste d’entreprise | ⚖️ | bur | 370 |  | Défend l’entreprise en cas de procès (pas d’avocat à payer, bien plus de chances de gagner) et ne laisse jamais passer un délai. |  | Me Caroline Leroy |  | 10 |
| assist | Assistante de direction | 🗂️ | bur | 190 |  | Gère ton agenda : moins de stress pour toi, et elle répond aux décisions oubliées par le meilleur choix au lieu du choix par défaut. |  | Julie Collin |  |  |
| achat | Gestionnaire du parc matériel et des achats | 🛒 | enc | 265 |  | Achète les machines qui manquent pour démarrer un chantier et celles que tu loues souvent, remplace les machines usées (dès 85 %) par des neuves avec reprise, revend celles qui ne servent plus et négocie le carburant … |  | Thierry Wauters |  |  |
| gardien | Agent de gardiennage (société agréée) | 🛡️ | enc | 210 |  | Surveille le dépôt la nuit : 80 % de vols en moins. |  | Gardiennage Meuse Sécurité (contrat) |  |  |
| form | Formateur interne (mi-temps) | 🎓 | bur | 140 |  | Tous les 5 à 6 mois, il forme un de tes ouvriers (le moins formé d’abord) : +6 % d’efficacité et un certificat. Après 2 formations, un ouvrier de cat. 1 devient qualifié (cat. 3) — mais son salaire augmente aussi. |  | Jean-Luc Dethier |  |  |
| plan | Chargée de clientèle et planning | 📞 | bur | 180 |  | Répond aux clients et accepte elle-même les petits boulots rentables dès qu’une équipe est libre (le matériel doit être à toi). |  | Manon Lecocq |  |  |
| orga | Responsable de l’organisation (bureau) | 🧭 | bur | 260 |  | Conseillée à partir d’une quinzaine de personnes (son salaire est lourd pour une petite entreprise). Engage elle-même le personnel de bureau dont tu as vraiment besoin (seulement si l’entreprise peut le payer) et se s… |  | Véronique Lemmens |  |  |
| terr | Responsable des équipes de terrain | 🧑‍🏭 | enc | 270 |  | Conseillée à partir d’une quinzaine d’ouvriers (son salaire est lourd pour une petite entreprise). Tous les jours, engage elle-même autant d’ouvriers qu’il en faut (chantiers sans équipe, retards, petits boulots refus… |  | Fabienne Henrotte |  |  |
| recru | Chargée de recrutement | 🎯 | bur | 250 |  | Note tes intérimaires (1 à 5 étoiles), te propose d’engager en CDI les meilleurs, renvoie à l’agence ceux qui ne sont pas sérieux, et recrute des ouvriers quand tu as besoin d’intérimaires depuis longtemps. |  | Élodie Masson |  |  |
| chefp | Chef du personnel | 👔 | bur | 260 |  | S’occupe des rapports de chantier à ta place : primes aux ouvriers qui travaillent très bien, recadrages et avertissements écrits aux autres. Il te signale les licenciements sans décider seul. |  | Patrick Hennen |  |  |
| recouv | Responsable du recouvrement | 💰 | bur | 245 |  | Relance les clients qui paient en retard : les factures en retard arrivent bien plus vite, et elle réclame les intérêts de retard et l’indemnité forfaitaire de 40 € (loi belge sur les retards de paiement). |  | Sandrine Delhaye |  |  |
| comm | Chargé de communication | 📰 | bur | 230 |  | Réseaux sociaux, site, presse : +1 de réputation chaque mois, publicité 30 % plus efficace, et les reportages à la télé se passent toujours bien. |  | Laura Bertrand |  |  |
| rsoc | Responsable des relations sociales | 🤝 | bur | 255 |  | Négocie avec les syndicats à ta place : accord à +1 % au lieu de +2 %, jamais de grève. Les ouvriers sont un peu plus motivés chaque mois. |  | Christian Dumont |  | 10 |
| hiver | Coordinateur du service d’hiver | ❄️ | enc | 260 |  | Surveille la météo et prépare les saleuses : 2,5 fois plus de marchés urgents (neige, orage, pluie) et +15 % sur le déneigement et les dépôts de sel. |  | Bernard Delvigne |  |  |
| dirc | Directeur commercial | 📈 | dir | 370 |  | Plus d’invitations aux marchés, +3 offres en même temps, meilleure note technique. |  | Thierry Collard |  | 10 |


## `PRIV` — Boutique de la vie privée (c = catégorie ; p = prix TVAC ; m = coût mensuel ; tmc = taxe de mise en circulation ; dep = dépréciation/an ; rent/hr = loyer) (101 éléments)

| clé | c | n | ic | p | m | tmc | dep | col | sub | vol | dr | needHome | home | hr | flip | hrn | once | rent | u | keep |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| sandero | car | Dacia Sandero (neuve) | 🚗 | 13490 | 210 | 62 | 0.15 | #c8312b |  |  |  |  |  |  |  |  |  |  |  |  |
| vwgolf | car | Volkswagen Golf (neuve) | 🚗 | 32500 | 300 | 250 | 0.15 | #2f62c9 |  |  |  |  |  |  |  |  |  |  |  |  |
| modely | car | Tesla Model Y (neuve, électrique) | ⚡ | 45990 | 260 | 62 | 0.17 | #eceff2 |  |  |  |  |  |  |  |  |  |  |  |  |
| x5 | car | BMW X5 (neuve) | 🚙 | 95000 | 650 | 2500 | 0.16 | #2b2d31 |  |  |  |  |  |  |  |  |  |  |  |  |
| rangerover | car | Range Rover (neuf) | 🚙 | 135000 | 900 | 5000 | 0.16 | #3d5a3d |  |  |  |  |  |  |  |  |  |  |  |  |
| p911 | car | Porsche 911 Carrera (neuve) | 🏎️ | 142000 | 900 | 5000 | 0.08 | #e0a224 |  |  |  |  |  |  |  |  |  |  |  |  |
| classeg | car | Mercedes Classe G (neuve) | 🚙 | 175000 | 1100 | 9000 | 0.07 | #1c1c1c |  |  |  |  |  |  |  |  |  |  |  |  |
| urus | car | Lamborghini Urus (neuve) | 🏎️ | 265000 | 1700 | 9000 | 0.12 | #f2c230 |  |  |  |  |  |  |  |  |  |  |  |  |
| ferrari | car | Ferrari 296 GTB (neuve) | 🏎️ | 290000 | 1800 | 9000 | 0.08 | #d01f1f |  |  |  |  |  |  |  |  |  |  |  |  |
| cullinan | car | Rolls-Royce Cullinan (neuve) | 👑 | 420000 | 2500 | 9000 | 0.12 | #6a3fb5 |  |  |  |  |  |  |  |  |  |  |  |  |
| q8 | car | Audi Q8 e-tron (neuve, électrique) | ⚡ | 85000 | 420 | 62 | 0.16 | #3a3f46 |  |  |  |  |  |  |  |  |  |  |  |  |
| xc90 | car | Volvo XC90 hybride rechargeable (neuve) | 🚙 | 92000 | 520 | 62 | 0.15 | #e6e9ec |  |  |  |  |  |  |  |  |  |  |  |  |
| taycan | car | Porsche Taycan (neuve, électrique) | ⚡ | 115000 | 520 | 62 | 0.16 | #5a8fd8 |  |  |  |  |  |  |  |  |  |  |  |  |
| classes | car | Mercedes Classe S (neuve) | 🚘 | 130000 | 800 | 5000 | 0.15 | #1c1c1c |  |  |  |  |  |  |  |  |  |  |  |  |
| o_a6 | occ | Audi A6 Avant 2021 (occasion) | 🚗 | 34000 | 380 | 250 | 0.1 | #5a5f66 |  |  |  |  |  |  |  |  |  |  |  |  |
| o_golf | occ | Volkswagen Golf 2019 (occasion, 90 000 km) | 🚗 | 16500 | 260 | 62 | 0.1 | #8c939b |  |  |  |  |  |  |  |  |  |  |  |  |
| o_m3 | occ | Tesla Model 3 2021 (occasion) | ⚡ | 24500 | 230 | 62 | 0.12 | #eceff2 |  |  |  |  |  |  |  |  |  |  |  |  |
| o_s3 | occ | BMW Série 3 2020 (occasion) | 🚗 | 26000 | 330 | 120 | 0.1 | #2b2d31 |  |  |  |  |  |  |  |  |  |  |  |  |
| o_hilux | occ | Toyota Hilux 2020 (occasion) | 🛻 | 31000 | 380 | 400 | 0.08 | #eceff2 |  |  |  |  |  |  |  |  |  |  |  |  |
| o_911 | occ | Porsche 911 (997) 2010 (occasion) | 🏎️ | 56000 | 700 | 62 | 0 | #2a9a5a |  |  |  |  |  |  |  |  |  |  |  |  |
| o_g | occ | Mercedes Classe G 2015 (occasion) | 🚙 | 85000 | 950 | 62 | 0.05 | #1c1c1c |  |  |  |  |  |  |  |  |  |  |  |  |
| mt07 | moto | Yamaha MT-07 (neuve) | 🏍️ | 8499 | 70 | 62 | 0.12 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| gs | moto | BMW R 1300 GS (neuve) | 🏍️ | 23500 | 110 | 62 | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| harley | moto | Harley-Davidson Fat Boy (neuve) | 🏍️ | 26500 | 120 | 62 | 0.08 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| campingcar | moto | Camping-car (neuf) | 🚐 | 78000 | 380 | 2500 | 0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| quad | moto | Quad (neuf) | 🏁 | 11000 | 60 | 62 | 0.12 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| velo | ult | Équipe cycliste professionnelle (WorldTour) à ton nom | 🚴 | 5000000 | 2500000 |  |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |
| coll_2cv | coll | Citroën 2CV restaurée (1970) | 🚙 | 18000 | 25 |  | 0 |  |  | 0.08 | 0.02 |  |  |  |  |  |  |  |  |  |
| coll_bd | coll | BD rares (Tintin et Spirou en éditions originales) | 📚 | 15000 | 5 |  | 0 |  |  | 0.1 | 0.03 |  |  |  |  |  |  |  |  |  |
| coll_magritte | coll | Lithographie signée de Magritte | 🖼️ | 25000 | 10 |  | 0 |  |  | 0.12 | 0.04 |  |  |  |  |  |  |  |  |  |
| coll_petrus | coll | Caisse de 6 bouteilles de Pétrus | 🍷 | 30000 | 15 |  | 0 |  |  | 0.1 | 0.04 |  |  |  |  |  |  |  |  |  |
| coll_daytona | coll | Rolex Daytona (occasion) | ⌚ | 35000 | 10 |  | 0 |  |  | 0.12 | 0.03 |  |  |  |  |  |  |  |  |  |
| coll_nautilus | coll | Patek Philippe Nautilus 5711 | ⌚ | 120000 | 30 |  | 0 |  |  | 0.15 | 0.03 |  |  |  |  |  |  |  |  |  |
| coll_typee | coll | Jaguar Type E (1963) | 🏎️ | 130000 | 120 |  | 0 |  |  | 0.1 | 0.03 |  |  |  |  |  |  |  |  |  |
| coll_herge | coll | Dessin original d’Hergé (Tintin) | 🎨 | 250000 | 60 |  | 0 |  |  | 0.15 | 0.05 |  |  |  |  |  |  |  |  |  |
| coll_rs | coll | Porsche 911 Carrera RS 2.7 (1973) | 🏎️ | 650000 | 300 |  | 0 |  |  | 0.12 | 0.04 |  |  |  |  |  |  |  |  |  |
| coll_300sl | coll | Mercedes 300 SL « Papillon » (1957) | 🚘 | 1300000 | 500 |  | 0 |  |  | 0.12 | 0.04 |  |  |  |  |  |  |  |  |  |
| solaire | reno | Panneaux solaires 4 kWc (± 10 panneaux) | ☀️ | 7500 | -55 |  | 0.04 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| pac | reno | Pompe à chaleur air-eau (prime wallonne déduite) | ♨️ | 14000 | -75 |  | 0.05 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| isol | reno | Isolation de la toiture (prime déduite) | 🏠 | 9000 | -40 |  | 0.02 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| chassis | reno | Châssis triple vitrage | 🪟 | 16000 | -30 |  | 0.02 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| batterie | reno | Batterie domestique 10 kWh | 🔋 | 7000 | -20 |  | 0.07 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| borne | reno | Borne de recharge pour voiture électrique | 🔌 | 1600 | -15 |  | 0.05 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| cuisine | reno | Cuisine équipée sur mesure | 🍳 | 18000 | 0 |  | 0.04 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| veranda | reno | Véranda de 20 m² | 🌞 | 28000 | 25 |  | -0.01 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| jacuzzi | reno | Jacuzzi extérieur | 🛁 | 9500 | 45 |  | 0.08 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| cinema | reno | Salle de home cinéma | 🎬 | 15000 | 10 |  | 0.1 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| domotique | reno | Domotique et alarme | 🛡️ | 6500 | 20 |  | 0.1 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| appart | home | Appartement en Wallonie (prix moyen) | 🏢 | 206300 | 420 |  | -0.03 |  |  |  |  |  | 1 | 850 |  |  |  |  |  |  |
| flip | home | Maison à rénover (Charleroi, gros travaux) | 🏚️ | 145000 | 180 |  | -0.02 |  |  |  |  |  |  | 650 | 1 |  |  |  |  |  |
| maison | home | Maison en Wallonie (prix moyen 2025) | 🏠 | 269550 | 520 |  | -0.04 |  |  |  |  |  | 1 | 1000 |  |  |  |  |  |  |
| villa | home | Villa 4 façades avec jardin | 🏡 | 480000 | 850 |  | -0.04 |  |  |  |  |  | 1 | 1650 |  |  |  |  |  |  |
| maitre | home | Maison de maître rénovée | 🏛️ | 690000 | 1100 |  | -0.03 |  |  |  |  |  | 1 | 2100 |  |  |  |  |  |  |
| chateau | home | Château en Wallonie (à entretenir) | 🏰 | 1950000 | 6500 |  | -0.02 |  |  |  |  |  | 1 | 5500 |  | location pour événements et séminaires |  |  |  |  |
| chalet | home | Chalet dans les Ardennes (seconde résidence) | 🛖 | 225000 | 380 |  | -0.03 |  |  |  |  |  |  | 1150 |  | gîte de vacances, moyenne sur l’année |  |  |  |  |
| cote | home | Appartement vue mer à la Côte belge | 🌊 | 650000 | 700 |  | -0.03 |  |  |  |  |  |  | 1700 |  | location saisonnière, moyenne sur l’année |  |  |  |  |
| zodiac | boat | Semi-rigide 5 m + remorque | 🚤 | 26000 | 220 |  | 0.08 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| moteur | boat | Bateau à moteur 7 m | 🛥️ | 62000 | 520 |  | 0.08 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| voilier | boat | Voilier 12 m (occasion) | ⛵ | 125000 | 950 |  | 0.06 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| yacht | boat | Yacht 15 m type Azimut 50 (occasion) | 🛳️ | 900000 | 7500 |  | 0.07 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| superyacht | boat | Superyacht 40 m avec équipage | 🛳️ | 16000000 | 135000 |  | 0.06 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| foot1 | ult | Club de football de D1A (Pro League) | ⚽ | 250000000 | 2000000 |  | 0.03 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| mans | ult | Écurie d’endurance (24 Heures du Mans) | 🏎️ | 120000000 | 1500000 |  | 0.08 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| bbj | ult | Jet long-courrier aménagé (Boeing Business Jet) | ✈️ | 110000000 | 900000 |  | 0.06 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| tour | ult | Gratte-ciel à ton nom à Bruxelles (bureaux à louer) | 🏙️ | 900000000 | 1200000 |  | -0.015 |  |  |  |  |  |  | 5500000 |  |  |  |  |  |  |
| espace | ult | Voyage dans l’espace (tourisme spatial) | 🚀 | 55000000 | 0 |  |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  |
| maitres | coll | Collection de maîtres flamands (Rubens, Bruegel…) | 🖼️ | 400000000 | 300000 |  | 0 |  |  | 0.08 | 0.04 |  |  |  |  |  |  |  |  |  |
| gigayacht | boat | Yacht de 80 m avec 30 membres d’équipage | 🛳️ | 180000000 | 1500000 |  | 0.05 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| bugatti | car | Bugatti Chiron Sport (neuve) | 🏎️ | 3200000 | 9000 | 9000 | 0.03 | #1f4fa8 |  |  |  |  |  |  |  |  |  |  |  |  |
| phenom | lux | Jet privé Embraer Phenom 300E (neuf, pilotes compris) | 🛩️ | 11500000 | 95000 |  | 0.06 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| g700 | lux | Jet privé Gulfstream G700 (neuf, équipage compris) | ✈️ | 75000000 | 550000 |  | 0.05 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| foot | lux | Club de football de Challenger Pro League (D1B) | ⚽ | 12000000 | 350000 |  | 0.03 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ile | home | Île privée en Grèce avec villa | 🏝️ | 9500000 | 30000 |  | -0.02 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| capferrat | home | Villa à Saint-Jean-Cap-Ferrat (Côte d’Azur) | 🌴 | 28000000 | 45000 |  | -0.03 |  |  |  |  |  |  | 110000 |  | location de luxe à la semaine, moyenne sur l’année |  |  |  |  |
| rolex | lux | Montre Rolex Submariner | ⌚ | 10900 | 0 |  | -0.03 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| cheval | lux | Cheval de selle (pension en écurie) | 🐎 | 12000 | 550 |  | 0.05 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| piscine | lux | Piscine creusée (dans ton jardin) | 🏊 | 45000 | 120 |  | 0.03 |  |  |  |  | 1 |  |  |  |  |  |  |  |  |
| cessna | lux | Avion Cessna 172 (occasion) | 🛩️ | 185000 | 2100 |  | 0.03 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| helico | lux | Hélicoptère Robinson R44 (occasion) | 🚁 | 420000 | 5200 |  | 0.05 |  |  |  |  |  |  |  |  |  |  |  |  |  |
| canaries | exp | Une semaine aux Canaries (2 personnes) | 🏝️ | 2800 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| croisiere | exp | Croisière en Méditerranée (2 personnes) | 🚢 | 6500 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| dubai | exp | Séjour de luxe à Dubaï (2 personnes) | 🌇 | 14000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| f1 | exp | Week-end au Grand Prix de Spa-Francorchamps (paddock) | 🏁 | 4900 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ski | exp | Semaine au ski dans les Alpes (famille de 4) | ⛷️ | 5500 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| tomorrow | exp | Week-end à Tomorrowland (2 pass + hôtel) | 🎶 | 1900 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| loc_app | loc | Appartement 2 chambres à louer (Wallonie) | 🏢 | 206300 | 260 |  | -0.03 |  |  |  |  |  |  |  |  |  |  | 850 |  |  |
| loc_kot | loc | Kot étudiant à Louvain-la-Neuve | 🎓 | 145000 | 175 |  | -0.03 |  |  |  |  |  |  |  |  |  |  | 480 |  |  |
| loc_mais | loc | Maison 3 chambres à louer (Wallonie) | 🏠 | 269550 | 330 |  | -0.03 |  |  |  |  |  |  |  |  |  |  | 1000 |  |  |
| loc_garage | loc | Garage fermé à louer | 🚪 | 27000 | 20 |  | -0.02 |  |  |  |  |  |  |  |  |  |  | 85 |  |  |
| loc_imm | loc | Immeuble de rapport (4 appartements) | 🏬 | 690000 | 1000 |  | -0.03 |  |  |  |  |  |  |  |  |  |  | 3300 | 4 |  |
| loc_cell | loc | Cellule commerciale en centre-ville | 🏪 | 300000 | 450 |  | -0.02 |  |  |  |  |  |  |  |  |  |  | 1500 |  |  |
| vigne | loc | Château viticole à Saint-Émilion (15 ha, vente du vin) | 🍇 | 25000000 | 70000 |  | -0.02 |  |  |  |  |  |  |  |  |  |  | 125000 |  |  |
| bureaux | loc | Immeuble de bureaux loué à Namur (2 500 m²) | 🏢 | 6500000 | 9000 |  | -0.01 |  |  |  |  |  |  |  |  |  |  | 36000 |  |  |
| mariage | fam | Mariage (cérémonie, salle, traiteur pour 100 personnes) | 💍 | 22000 |  |  |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  |
| enfant | fam | Un enfant (naissance, puis frais chaque mois moins les allocations familiales) | 👶 | 3500 | 420 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |
| chien | fam | Chien (chiot de race) | 🐕 | 1200 | 110 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |
| chat | fam | Chat | 🐈 | 250 | 55 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 1 |
| hospi | fam | Assurance hospitalisation | 🏥 | 0 | 38 |  |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |
| sport | fam | Abonnement salle de sport | 🏋️ | 0 | 45 |  |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |
| golf | fam | Club de golf (droit d’entrée + cotisation) | ⛳ | 1500 | 160 |  |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |
| netflix | fam | Streaming, internet, GSM de la famille | 📺 | 0 | 95 |  |  |  | 1 |  |  |  |  |  |  |  |  |  |  |  |


## `GOALS` — Succès de Route Nette (97) (97 éléments)

| k | t | ok |
|---|---|---|
| g0 | Inscris ton entreprise à la BCE (📊 Entreprise) | ƒ |
| g1 | Termine ton premier petit boulot | ƒ |
| g2 | Achète ta première machine (🚜 Matériel) | ƒ |
| g3 | Embauche ton premier ouvrier (👷 Équipe) | ƒ |
| g4 | Achète une camionnette | ƒ |
| g5 | Assurance RC + certification VCA | ƒ |
| g6 | Remets ta première offre à un marché public | ƒ |
| g7 | Gagne ton premier marché public | ƒ |
| g8 | Engage Angélique, ton aide-comptable | ƒ |
| g9 | Engage un gestionnaire de chantier | ƒ |
| g10 | Achète une grosse machine (tracteur, balayeuse, hydrocureuse) | ƒ |
| g11 | Obtiens ta première agréation (classe 4) | ƒ |
| g12 | Monte une équipe de 15 personnes | ƒ |
| g13 | Engage un directeur | ƒ |
| g14 | Atteins 1 million € de chiffre d'affaires | ƒ |
| g15 | Agréation classe 6 : tu es une grande entreprise ! | ƒ |
| g16 | Ouvre un 2e dépôt (🚜 Matériel) | ƒ |
| g17 | Termine un projet d’innovation (📊 Entreprise → 🔬) | ƒ |
| g18 | Rachète un concurrent (📊 Entreprise → 🤝) | ƒ |
| g19 | Agréation classe 7 | ƒ |
| g20 | Ouvre une filiale en Europe | ƒ |
| g21 | Gagne un marché public de plus de 3 millions € | ƒ |
| g22 | Agréation classe 8 : la plus haute de Belgique | ƒ |
| g23 | Rachète les 2 plus gros concurrents | ƒ |
| g24 | Termine les 9 projets d’innovation | ƒ |
| g25 | Valeur de ton groupe : 100 millions € | ƒ |
| g26 | Entre en bourse sur Euronext Brussels | ƒ |
| g27 | Filiales dans les 6 pays | ƒ |
| g28 | Crée ta fondation et donne 5 millions € | ƒ |
| g29 | Valeur de ton groupe : 1 milliard € — légende de l’entretien routier | ƒ |
| h1 | Gagne 50 marchés publics | ƒ |
| h2 | Termine 100 chantiers | ƒ |
| h3 | Niveau de carrière 10 | ƒ |
| h4 | Équipe de 30 personnes | ƒ |
| h5 | 10 véhicules | ƒ |
| h6 | 3 dépôts | ƒ |
| h7 | Réussis les défis 6 mois d’affilée | ƒ |
| h8 | CA de 2 millions € sur un an | ƒ |
| h9 | Forme 10 ouvriers (formateur ou école) | ƒ |
| h10 | Rachète 3 concurrents | ƒ |
| h11 | Termine 3 grands chantiers | ƒ |
| h12 | Niveau de carrière 25 | ƒ |
| h13 | Gagne 100 marchés publics | ƒ |
| h14 | Équipe de 50 personnes | ƒ |
| h15 | CA de 5 millions € sur un an | ƒ |
| h16 | 25 véhicules | ƒ |
| h17 | Termine 500 chantiers | ƒ |
| h18 | Une filiale au niveau 3 | ƒ |
| h19 | 5 dépôts | ƒ |
| h20 | Termine 6 grands chantiers | ƒ |
| h21 | Niveau de carrière 50 | ƒ |
| h22 | Réussis les défis 12 mois d’affilée | ƒ |
| h23 | Équipe de 100 personnes | ƒ |
| h24 | CA de 25 millions € sur un an | ƒ |
| h25 | Gagne 250 marchés publics | ƒ |
| h26 | Rachète tous les concurrents de Wallonie | ƒ |
| h27 | Toutes tes filiales au niveau 3 (6 pays) | ƒ |
| h28 | 50 véhicules | ƒ |
| h29 | Forme 50 ouvriers | ƒ |
| h30 | Termine 9 grands chantiers | ƒ |
| h31 | Niveau de carrière 75 | ƒ |
| h32 | Équipe de 200 personnes | ƒ |
| h33 | Termine 1 000 chantiers | ƒ |
| h34 | CA de 50 millions € sur un an | ƒ |
| h35 | Ta fondation a donné 50 millions € | ƒ |
| h36 | Patrimoine privé de 100 millions € | ƒ |
| h37 | Gagne 500 marchés publics | ƒ |
| h38 | Termine les 12 grands chantiers | ƒ |
| h39 | CA de 100 millions € sur un an | ƒ |
| h41 | Possède au moins une machine de chaque sorte (37 machines) | ƒ |
| h42 | Fais 50 visites de chantier parfaites | ƒ |
| h43 | Prends 100 décisions de patron | ƒ |
| h44 | Donne 1 000 coups de main sur tes chantiers | ƒ |
| h45 | Fais venir ton premier intérimaire | ƒ |
| h46 | 100 intérimaires en même temps | ƒ |
| h47 | Engage 10 intérimaires en CDI | ƒ |
| h48 | Rachète l’agence d’intérim | ƒ |
| h49 | Filiales dans 3 pays | ƒ |
| h50 | Présent dans les 6 pays d’Europe | ƒ |
| h51 | Une filiale avec 80 de réputation locale | ƒ |
| h52 | Gagne 10 appels d’offres à l’étranger | ƒ |
| h53 | Fais gérer tes filiales par une holding | ƒ |
| h54 | Filiales dans les 10 pays | ƒ |
| h55 | Signe 5 contrats d’entretien | ƒ |
| h56 | Deviens n°1 du classement wallon | ƒ |
| h57 | Crée ta holding | ƒ |
| h58 | Ta holding vaut 10 millions € | ƒ |
| h59 | Transmets ta société à ton enfant | ƒ |
| h60 | Vends ton entreprise à un grand groupe | ƒ |
| h61 | Réputation personnelle de 80 | ƒ |
| h62 | Rénove une maison | ƒ |
| h63 | Remporte ta première concession d’autoroute | ƒ |
| h64 | Rachète un grand groupe européen | ƒ |
| h65 | Possède 3 industries | ƒ |
| h66 | Deviens la plus grande fortune de Belgique | ƒ |
| h67 | Donne 1 milliard € à de bonnes causes | ƒ |
| h40 | Niveau de carrière 100 : légende absolue | ƒ |


## `CLG` — Succès de la société de nettoyage (35 éléments)

| c0 | c1 | c2 |
|---|---|---|
| c1 | Inscris ta société (BCE + ONSS) | ƒ |
| c2 | Premier client signé | ƒ |
| c3 | Engage ta première personne | ƒ |
| c4 | Agrément titres-services | ƒ |
| c5 | 100 clients titres-services | ƒ |
| c6 | Premier marché public gagné | ƒ |
| c7 | 25 personnes | ƒ |
| c8 | CA de 1 M€ sur 12 mois | ƒ |
| c9 | Certification ISO 9001 | ƒ |
| c10 | Un contrat d’hôpital | ƒ |
| c11 | 100 personnes | ƒ |
| c12 | 1 000 clients titres-services | ƒ |
| c13 | CA de 10 M€ sur 12 mois | ƒ |
| c14 | 500 personnes | ƒ |
| c15 | 10 marchés publics gagnés | ƒ |
| c16 | Satisfaction moyenne de 85 (au moins 10 contrats) | ƒ |
| c17 | 2 000 personnes : un géant du secteur | ƒ |
| c18 | CA de 50 M€ sur 12 mois | ƒ |
| c19 | Ta société de nettoyage vaut 100 M€ | ƒ |
| c20 | 5 000 clients titres-services | ƒ |
| c21 | Fais une visite de contrôle parfaite | ƒ |
| c22 | 25 visites parfaites | ƒ |
| c23 | Prends 20 décisions de patron | ƒ |
| c24 | Niveau 10 | ƒ |
| c25 | Niveau 25 | ƒ |
| c26 | Niveau 50 : légende du nettoyage | ƒ |
| c27 | Termine ton premier grand contrat | ƒ |
| c28 | Termine les 8 grands contrats | ƒ |
| c29 | Rachète une société concurrente | ƒ |
| c30 | Deviens n°1 du nettoyage en Wallonie | ƒ |
| c31 | Ouvre un siège avec 8 agences | ƒ |
| c32 | Un an sans accident du travail (50 personnes ou plus) | ƒ |
| c33 | Absentéisme sous 5 % (100 personnes ou plus) | ƒ |
| c34 | Réputation de 95 | ƒ |
| c35 | Résultat de 1 M€ en un mois | ƒ |


## `SHG` — Succès de la chaîne de magasins (30 éléments)

| c0 | c1 | c2 |
|---|---|---|
| s1 | Ouvre ton premier magasin | ƒ |
| s2 | Reçois ta première livraison | ƒ |
| s3 | Fais 10 000 € de ventes en un jour | ƒ |
| s4 | Une satisfaction de 85 | ƒ |
| s5 | Un mois avec moins de 1 % de pertes | ƒ |
| s6 | Engage une gérante | ƒ |
| s7 | Chiffre d’affaires de 1 M€ sur 12 mois | ƒ |
| s8 | Un mois avec 10 000 € de bénéfice | ƒ |
| s9 | Lance ton premier folder | ƒ |
| s10 | Réussis un contrôle AFSCA | ƒ |
| s11 | Fais un inventaire | ƒ |
| s12 | Ouvre un 2e magasin | ƒ |
| s13 | Atteins le niveau 5 | ƒ |
| s14 | Termine un projet | ƒ |
| s15 | Réussis les 3 défis d’un mois | ƒ |
| s16 | Ouvre un supermarché | ƒ |
| s17 | Ouvre l’entrepôt central | ƒ |
| s18 | Lance ta marque propre | ƒ |
| s19 | Lance le drive | ƒ |
| s20 | Rachète un concurrent | ƒ |
| s21 | Termine un grand projet | ƒ |
| s22 | Accueille un franchisé | ƒ |
| s23 | 10 magasins | ƒ |
| s24 | CA de 10 M€ sur 12 mois | ƒ |
| s25 | Sauve 10 000 produits du gaspillage | ƒ |
| s26 | Série de 6 mois de défis réussis | ƒ |
| s27 | Atteins le niveau 20 | ƒ |
| s28 | Rachète l’agence d’intérim | ƒ |
| s29 | Numéro 1 du classement | ƒ |
| s30 | CA de 100 M€ sur 12 mois | ƒ |


## `ADM` — Démarches administratives Route Nette (3 éléments)

| clé | n | ic | p | d |
|---|---|---|---|---|
| bce | Inscription à la BCE (guichet d'entreprise) | 🧾 | 105 | Numéro d'entreprise et TVA. Obligatoire pour facturer. |
| rc | Assurance RC professionnelle | 🛡️ | 300 | Frais de dossier, puis environ 110 € par mois. |
| vca | Certification sécurité VCA* (audit + formations) | 🦺 | 3800 | Exigée pour travailler sur la voie publique. Audit de certification + formation VCA de base. |


## `CLS` — Classes d’agréation (seuils réels belges) (5 éléments)

| max | n | c | ca | w | r | dir |
|---|---|---|---|---|---|---|
| 75000 | Sans agréation |  |  |  |  |  |
| 900000 | Classe 4 | 181.5 | 100000 | 5 | 30 |  |
| 2730000 | Classe 6 | 605 | 600000 | 14 | 50 | ["dirt", "daf"] |
| 5450000 | Classe 7 | 1210 | 4000000 | 45 | 70 | ["dirt", "daf", "dirc"] |
| 1000000000000 | Classe 8 | 1815 | 10000000 | 90 | 85 | ["dirt", "daf", "dirc"] |


## `SITES` — Locaux / dépôts de Route Nette (6 éléments)

| clé | n | ic | v | d | rent | off | p | m | fx |
|---|---|---|---|---|---|---|---|---|---|
| home | Chez toi (garage et allée) | 🏠 | 2 | Tu ranges le matériel chez toi. Au-delà de 2 véhicules, il faut louer du terrain (350 €/véhicule/mois). |  |  |  |  |  |
| h1 | Hangar loué 300 m² + cour (zoning) | 🏚️ | 6 | Un vrai dépôt, sans bureaux (bureaux loués à part si tu as du personnel de bureau). | 1250 |  |  |  |  |
| h2 | Hangar loué 800 m² + bureaux | 🏢 | 14 | Grand hangar avec bureaux : plus de loyer de bureaux séparé. | 3400 | 1 |  |  |  |
| b1 | Entrepôt 400 m² à acheter (zoning de Fleurus) | 🏭 | 8 | À toi : il prend de la valeur. Petit atelier pour entretenir les machines. |  |  | 345000 | 720 | ["atel"] |
| b2 | Entrepôt 1 000 m² + bureaux + cour 3 000 m² | 🏭 | 20 | Atelier, cuve de gasoil professionnelle et aire de tri des déchets. |  | 1 | 980000 | 1650 | ["atel", "cuve", "tri"] |
| b3 | Site complet 2 500 m² : ateliers, bureaux, station de lavage | 🏗️ | 60 | Le dépôt d’une grosse entreprise, avec tout l’équipement. |  | 1 | 2450000 | 3900 | ["atel", "cuve", "tri", "lav"] |


## `EU` — Filiales européennes (10 éléments)

| clé | n | f | tax | setup | fix | pot | var | d | lock |
|---|---|---|---|---|---|---|---|---|---|
| fr | France (Hauts-de-France) | 🇫🇷 | 0.25 | 450000 | 32000 | 160000 | 0.72 | Marché énorme et proche, même langue. Les charges sociales françaises sont parmi les plus élevées d’Europe. |  |
| lu | Luxembourg | 🇱🇺 | 0.2387 | 380000 | 36000 | 150000 | 0.7 | Tout près, communes riches qui paient bien, mais salaires minimums très élevés. |  |
| nl | Pays-Bas | 🇳🇱 | 0.258 | 520000 | 40000 | 190000 | 0.71 | Gros budgets d’entretien des routes (Rijkswaterstaat), mais concurrence très forte. |  |
| de | Allemagne (Rhénanie-du-Nord) | 🇩🇪 | 0.3 | 650000 | 48000 | 240000 | 0.72 | Le plus grand marché, mais l’allemand est obligatoire et l’impôt est à ± 30 %. |  |
| es | Espagne | 🇪🇸 | 0.25 | 400000 | 26000 | 120000 | 0.74 | Moins cher, mais loin : difficile à surveiller depuis la Belgique. |  |
| ch | Suisse (Genève et Vaud) | 🇨🇭 | 0.14 | 900000 | 70000 | 300000 | 0.68 | Les prix les plus élevés d’Europe et des cantons qui paient très bien, mais des salaires suisses énormes. Débloqué à partir de 3 filiales. | 3 |
| it | Italie (Lombardie) | 🇮🇹 | 0.279 | 500000 | 30000 | 150000 | 0.74 | Grand réseau d’autoroutes, mais beaucoup de paperasse et des paiements publics lents. Débloqué à partir de 3 filiales. | 3 |
| at | Autriche (Tyrol) | 🇦🇹 | 0.23 | 480000 | 34000 | 160000 | 0.71 | Service d’hiver énorme dans les Alpes (ASFINAG), allemand obligatoire. Débloqué à partir de 3 filiales. | 3 |
| uk | Royaume-Uni (Kent) | 🇬🇧 | 0.25 | 700000 | 45000 | 220000 | 0.72 | Énorme marché (National Highways), mais depuis le Brexit : douane pour les machines et permis de travail. Débloqué à partir de 3 filiales. | 3 |
| pl | Pologne | 🇵🇱 | 0.19 | 320000 | 18000 | 95000 | 0.7 | Main-d’œuvre moins chère et impôt à 19 %, mais petits contrats. |  |


## `INNO` — Projets d’innovation (9 éléments)

| k | ic | n | c | d | lv | e |
|---|---|---|---|---|---|---|
| gps | 🛰️ | Suivi GPS et planning numérique des équipes | 85000 | 60 | 0 | +3 % de travail sur tous les chantiers |
| elec | 🔋 | Petit matériel sur batterie (débroussailleuses, souffleurs) | 140000 | 60 | 0 | Usure et carburant -5 % |
| drone | 🚁 | Drones d’inspection des talus et ouvrages | 220000 | 90 | 1 | +5 % de travail sur les marchés publics |
| hvo | 🌿 | Toute la flotte au HVO (diesel renouvelable) | 300000 | 90 | 1 | +5 points dans les critères environnementaux des offres |
| ia | 🤖 | Logiciel d’intelligence artificielle pour chiffrer les offres | 480000 | 120 | 2 | +4 offres en parallèle |
| robot | 🦾 | Robots de tonte autonomes pour les grandes surfaces | 650000 | 150 | 2 | Fauchage, tonte et débroussaillage +15 % |
| ecole | 🏫 | Centre de formation agréé (ton école) | 1800000 | 240 | 2 | Un ouvrier formé tous les 2 à 3 mois (en plus du formateur) |
| ecam | 🚛 | Camions électriques (prime wallonne déjà déduite) | 2500000 | 240 | 3 | Usure et carburant -20 % |
| compost | ♻️ | Centre de compostage des déchets verts | 4200000 | 365 | 3 | Mise en décharge -40 % et vente de compost ± 35 000 €/mois |


## `MEGA` — 12 grands chantiers de carrière (12 éléments)

| k | ic | n | d | lv | w | c | g | x | cls |
|---|---|---|---|---|---|---|---|---|---|
| m1 | 🏟️ | Abords du nouveau stade de Liège | 30 | 3 | 10 | 150000 | 260000 | 400 | 1 |
| m2 | 🌼 | Plan wallon de fauchage tardif « Bords de route » | 60 | 7 | 15 | 300000 | 520000 | 700 | 1 |
| m3 | 🅿️ | Réhabilitation de toutes les aires de la E42 | 90 | 12 | 25 | 600000 | 1050000 | 1100 | 2 |
| m4 | 🛣️ | Contrat d’entretien de 100 km de la E411 | 120 | 18 | 35 | 1200000 | 2100000 | 1600 | 2 |
| m5 | 🌉 | Nettoyage et sécurisation du viaduc de Huccorgne | 150 | 25 | 45 | 2000000 | 3500000 | 2300 | 2 |
| m6 | 🏗️ | Plan Infrastructures 2030 — lot espaces verts | 180 | 33 | 60 | 3500000 | 6100000 | 3200 | 3 |
| m7 | 🔄 | Entretien complet du ring de Charleroi (R3) | 210 | 42 | 75 | 5000000 | 8800000 | 4200 | 3 |
| m8 | ❄️ | Service d’hiver de toute la province de Luxembourg | 240 | 51 | 90 | 7000000 | 12300000 | 5400 | 3 |
| m9 | 🌊 | Restauration des berges de la Vesdre après les inondations | 300 | 61 | 110 | 10000000 | 17500000 | 7000 | 4 |
| m10 | 🏛️ | Bail d’entretien de toutes les autoroutes wallonnes (SOFICO) | 365 | 72 | 140 | 15000000 | 26000000 | 9000 | 4 |
| m11 | 🇪🇺 | Chantier européen : corridor E40 – E25 | 450 | 84 | 180 | 25000000 | 44000000 | 12000 | 4 |
| m12 | 👑 | Projet légendaire : des routes wallonnes impeccables | 540 | 95 | 250 | 40000000 | 72000000 | 16000 | 4 |


## `DECT` — Décisions du patron (Route Nette + filiales) (34 éléments)

| k | ic | ok | mk | o | def |
|---|---|---|---|---|---|
| syndic | ✊ | ƒ | ƒ | [["Accepter +2 %", "[fn]"], ["Prime unique de 300 €", "[fn]"], ["Refuser", "[fn]"]] | 2 |
| augm | 💶 | ƒ | ƒ | [["Accepter (+3 %)", "[fn]"], ["Refuser poliment", "[fn]"]] | 1 |
| facture | 🧾 | ƒ | ƒ | [["Faire un geste commercial", "[fn]"], ["Repasser gratuitement", "[fn]"], ["Mise en demeure", "[fn]"]] | 2 |
| panne | 🔧 | ƒ | ƒ | [["Concessionnaire", "[fn]"], ["Réparer nous-mêmes (risqué)", "[fn]"]] | 0 |
| journal | 📺 | ƒ | ƒ | [["Accepter l’interview", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| sponsor | ⚽ | ƒ | ƒ | [["Sponsoriser", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| vol | 🚨 | ƒ | ƒ | [["Porter plainte", "[fn]"], ["Plainte + caméras (4 500 €)", "[fn]"]] | 0 |
| orage | ⛈️ | ƒ | ƒ | [["Arrêter les chantiers (sécurité)", "[fn]"], ["Continuer le travail", "[fn]"]] | 0 |
| riverain | 😠 | ƒ | ƒ | [["Commencer à 8 h", "[fn]"], ["C’est autorisé : on continue", "[fn]"]] | 1 |
| fonds | 🎓 | ƒ | ƒ | [["Inscrire 2 ouvriers", "[fn]"], ["Pas maintenant", "[fn]"]] | 1 |
| gasoil | ⛽ | ƒ | ƒ | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| stagiaire | 🎒 | ƒ | ƒ | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| controle | 🦺 | ƒ | ƒ | [["On est prêts", "[fn]"]] | 0 |
| commune | 🏛️ | ƒ | ƒ | [["Accepter (1 journée offerte)", "[fn]"], ["Refuser poliment", "[fn]"]] | 1 |
| eu_fr_greve | 🇫🇷 | ƒ | ƒ | [["Payer des heures sup et des navettes", "[fn]"], ["Laisser les chantiers à l’arrêt", "[fn]"]] | 1 |
| eu_fr_urssaf | 🇫🇷 | ƒ | ƒ | [["Payer un expert-comptable pour préparer le dossier", "[fn]"], ["Faire confiance au directeur", "[fn]"]] | 1 |
| eu_de_din | 🇩🇪 | ƒ | ƒ | [["Investir dans le nouveau matériel", "[fn]"], ["Attendre", "[fn]"]] | 1 |
| eu_de_plan | 🇩🇪 | ƒ | ƒ | [["Embaucher une équipe en plus", "[fn]"], ["Rester à la taille actuelle", "[fn]"]] | 1 |
| eu_nl_rws | 🇳🇱 | ƒ | ƒ | [["Offre agressive (60 % de chances)", "[fn]"], ["Offre normale (30 %)", "[fn]"], ["Ne pas répondre", "[fn]"]] | 2 |
| eu_nl_prix | 🇳🇱 | ƒ | ƒ | [["Baisser tes prix aussi", "[fn]"], ["Tenir tes prix", "[fn]"]] | 1 |
| eu_lu_prem | 🇱🇺 | ƒ | ƒ | [["Acheter le matériel haut de gamme", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| eu_lu_smic | 🇱🇺 | ƒ | ƒ | [["Augmenter tes prix (risque de perdre un client)", "[fn]"], ["Absorber la hausse", "[fn]"]] | 1 |
| eu_es_cani | 🇪🇸 | ƒ | ƒ | [["Passer au travail de nuit", "[fn]"], ["Mettre les chantiers en pause", "[fn]"]] | 1 |
| eu_es_feder | 🇪🇸 | ƒ | ƒ | [["Monter un dossier (12 000 €, 70 % de chances)", "[fn]"], ["Laisser passer", "[fn]"]] | 1 |
| eu_pl_ue | 🇵🇱 | ƒ | ƒ | [["Agrandir l’équipe", "[fn]"], ["Rester prudent", "[fn]"]] | 1 |
| eu_pl_exode | 🇵🇱 | ƒ | ƒ | [["Augmenter les salaires", "[fn]"], ["Les laisser partir", "[fn]"]] | 1 |
| eu_ch_qual | 🇨🇭 | ƒ | ƒ | [["Obtenir la certification (45 000 €)", "[fn]"], ["S’en passer", "[fn]"]] | 1 |
| eu_it_pay | 🇮🇹 | ƒ | ƒ | [["Vendre les factures à une banque (affacturage, −4 %)", "[fn]"], ["Attendre et réclamer les intérêts", "[fn]"]] | 0 |
| eu_at_alpes | 🇦🇹 | ƒ | ƒ | [["Envoyer toutes les équipes (heures de nuit)", "[fn]"], ["Rester sur les contrats habituels", "[fn]"]] | 1 |
| eu_uk_brexit | 🇬🇧 | ƒ | ƒ | [["Payer un transitaire en douane (20 000 €)", "[fn]"], ["Attendre que ça se débloque", "[fn]"]] | 1 |
| eu_mkt | 📣 | ƒ | ƒ | [["Accepter (25 000 €)", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| eu_rach | 🤝 | ƒ | ƒ | [["Le racheter (prix ± 1 an de frais fixes)", "[fn]"], ["Pas intéressé", "[fn]"]] | 1 |
| eu_acc | 🚑 | ƒ | ƒ | [["Communiquer et indemniser (30 000 €)", "[fn]"], ["Laisser l’assurance gérer", "[fn]"]] | 1 |
| riv_poach | 🎣 | ƒ | ƒ | [["Augmenter son salaire de 5 % pour le garder", "[fn]"], ["Le laisser partir", "[fn]"]] | 1 |


## `LAWY` — Avocats (8 éléments)

| k | n | t | ic | lv | sp | fee |
|---|---|---|---|---|---|---|
| jeune | Me Kevin Dubois | Jeune avocat généraliste (Namur) | 🧑‍💼 | 1 | [] | 1500 |
| local | Cabinet Lambert & Associés | Petit cabinet de Charleroi | 👨‍⚖️ | 2 | ["social", "commercial"] | 4000 |
| comm | Me Laura Gilson | Droit commercial et recouvrement (Liège) | 👩‍💼 | 2 | ["commercial"] | 3500 |
| social | Me Sophie Renard | Spécialiste en droit social (tribunal du travail) | 👩‍⚖️ | 3 | ["social"] | 7500 |
| penal | Me Marc Collignon | Droit pénal social et accidents du travail | 👨‍⚖️ | 3 | ["social", "penal"] | 9000 |
| mp | Cabinet Delvaux | Droit des marchés publics (Conseil d’État) | 🏛️ | 3 | ["mp"] | 12000 |
| fisc | Me Olivier Henrard | Droit fiscal (ancien inspecteur des finances) | 📊 | 4 | ["fiscal"] | 15000 |
| top | Grand cabinet de l’avenue Louise | Bruxelles, toutes les spécialités, les meilleurs du pays | 💼 | 5 | ["social", "penal", "mp", "commercial", "fiscal"] | 38000 |


## `INS` — Assurances au choix (5 éléments)

| clé | n | ic | c | d |
|---|---|---|---|---|
| pj | Protection juridique | ⚖️ | ƒ | Paie ton avocat et les frais de procédure en cas de procès (pas les dommages ni les amendes). |
| bris | Bris de machines | 💥 | ƒ | Paie les réparations après une panne sur chantier (franchise 250 €). Ne remplace pas les révisions. |
| vol | Vol et incendie au dépôt | 🚨 | ƒ | Remplace le matériel volé ou brûlé (franchise 250 €). Sans elle, tu rachètes tout toi-même. |
| rg | Revenu garanti du patron | 🩺 | ƒ | En cas de burn-out ou de maladie, tu touches 2 500 €/mois sur ton compte privé (assurance d’indépendant). |
| hosp | Assurance hospitalisation du personnel | 🏥 | ƒ | Avantage apprécié par les ouvriers : plus motivés, et ils reviennent plus vite après un accident. |


## `ADS` — Publicité (4 éléments)

| clé | n | ic | p | m | b | d |
|---|---|---|---|---|---|---|
| web | Site internet + fiche Google | 🌐 | 1900 | 25 | 0.12 | Les clients te trouvent sur Google : +12 % de demandes. |
| lettr | Lettrage des véhicules (logo, téléphone) | 🚐 | 1400 | 0 | 0.08 | Ta camionnette devient une pub qui roule : +8 % de demandes. |
| gads | Publicité Google Ads et Facebook | 📣 | 0 | 350 | 0.15 | Budget mensuel, résiliable : +15 % de demandes. |
| toutes | Annonces dans les « toutes-boîtes » de ta région | 📰 | 0 | 180 | 0.07 | Les personnes âgées appellent pour leur haie : +7 % de demandes. |


## `RENT` — Location de matériel (€/jour) (37 éléments)

| clé | valeur |
|---|---|
| aspifeuilles | 70 |
| rogneuse | 120 |
| rouleau | 110 |
| tondap | 130 |
| desherb | 190 |
| chargeuse | 170 |
| fourgon | 110 |
| hydroseed | 220 |
| telesc | 240 |
| tma | 420 |
| laveuse | 650 |
| balaygr | 700 |
| epandeur | 600 |
| tunnel | 900 |
| marqauto | 1100 |
| taillehaie | 30 |
| souffleur | 30 |
| debrou | 35 |
| tondeuse | 40 |
| remorque | 35 |
| signal | 25 |
| karcher | 75 |
| fleche | 60 |
| broyeur | 140 |
| van | 95 |
| nacelle | 250 |
| balayeuse | 420 |
| tracteur | 380 |
| hydro | 550 |
| trons | 35 |
| plaque | 45 |
| batteuse | 90 |
| benne | 110 |
| pelle | 160 |
| traceuse | 180 |
| saleuse | 150 |
| benne19 | 350 |


## `TIERS` — Gammes de qualité du matériel (2 éléments)

| clé | n | ic | f | sp | us |
|---|---|---|---|---|---|
| 2 | Neuve, dernière génération | ⭐ | 1.8 | 0.1 | 0.1 |
| 3 | Haut de gamme (marque premium, toutes options) | 💎 | 3 | 0.2 | 0.2 |


## `TM` — Vrais modèles de marque par gamme (22 éléments)

| clé | 2 | 3 |
|---|---|---|
| taillehaie | ["Stihl HS 82 R", 760] | ["Stihl HSA 140 R sur batterie (avec batterie dorsale)", 1450] |
| souffleur | ["Stihl BR 700", 880] | ["Stihl BR 800 C-E", 1150] |
| debrou | ["Stihl FS 491 C-EM", 1320] | ["Stihl FS 561 C-EM", 1680] |
| tondeuse | ["Honda HRH 536 HX", 2050] | ["Toro TurfMaster 76 cm", 2900] |
| trons | ["Stihl MS 400 C-M", 1250] | ["Husqvarna 572 XP", 1500] |
| karcher | ["Kärcher HDS 8/18-4 C", 6500] | ["Kärcher HDS 13/20-4 S", 11000] |
| plaque | ["Weber CF 2", 2200] | ["Ammann APF 20/50", 2900] |
| remorque | ["Humbaur 1 300 kg basculante", 2900] | ["Ifor Williams 2 700 kg basculante", 5200] |
| aspifeuilles | ["Billy Goat aspirateur tracté", 9800] | ["Trilo S2 aspirateur de feuilles", 16500] |
| rogneuse | ["Stihl GH 370 S", 13500] | ["Vermeer SC30TX", 21000] |
| broyeur | ["Timberwolf TW 230", 19500] | ["Jensen A530", 28000] |
| van | ["Ford Transit plateau neuf", 40000] | ["Mercedes Sprinter plateau neuf", 52000] |
| fourgon | ["Ford Transit 9 places neuf", 42000] | ["Mercedes Sprinter 9 places neuf", 55000] |
| benne | ["Iveco Daily benne neuf", 48000] | ["Mercedes Sprinter benne neuf", 58000] |
| benne19 | ["DAF CF benne-grue (occasion récente)", 95000] | ["Mercedes Arocs benne-grue neuf", 165000] |
| nacelle | ["Klubb K32 neuve", 72000] | ["Ruthmann TBR 220 neuve", 115000] |
| tracteur | ["John Deere 6120M + épareuse neuve", 150000] | ["Fendt 516 Vario + épareuse Rousseau", 215000] |
| pelle | ["Kubota KX057-6 neuve", 68000] | ["Volvo ECR58 neuve", 82000] |
| chargeuse | ["Bobcat S70 neuve", 39000] | ["Kubota R085 neuve", 52000] |
| tondap | ["Kubota F3090 neuve", 32000] | ["John Deere 1580 TerrainCut neuve", 42000] |
| balayeuse | ["Hako Citymaster 1650 (occasion récente)", 90000] | ["Bucher CityCat 2020 neuve", 165000] |
| hydro | ["Hydrocureuse Scania (occasion 2020)", 180000] | ["Hydrocureuse Mercedes neuve", 320000] |


## `CONC` — Concessions PPP (dès 100 M€) (5 éléments)

| clé | n | ic | p | yrs | y | d | v |
|---|---|---|---|---|---|---|---|
| e411 | Concession de l’autoroute E411 Namur–Arlon | 🛣️ | 650000000 | 30 | 0.075 | Tu rénoves et entretiens 120 km d’autoroute ; la Région te paie une redevance de disponibilité. |  |
| tram | Maintenance des voies du tram de Liège | 🚋 | 300000000 | 20 | 0.08 | Entretien des voies, des quais et des abords pendant 20 ans. |  |
| tun | Nouveau tunnel sous la Meuse à Namur (péage) | 🚇 | 900000000 | 35 | 0.074 | Tu le construis et tu touches le péage : ça dépend du trafic (± 25 % selon les mois). | 0.25 |
| ring | Rénovation et entretien du Ring de Bruxelles | 🔄 | 1400000000 | 25 | 0.07 | Le plus gros chantier routier du pays, payé par la Région pendant 25 ans. |  |
| port | Accès routiers du port d’Anvers | ⚓ | 2200000000 | 30 | 0.068 | Ponts, échangeurs et routes du 2e port d’Europe. |  |


## `GIANT` — Groupes européens rachetables (5 éléments)

| clé | n | ic | p | y |
|---|---|---|---|---|
| alp | Alpenstrasse Bau AG (Autriche) | 🇦🇹 | 800000000 | 0.09 |
| ibe | Grupo Vial Ibérico SA (Espagne) | 🇪🇸 | 1200000000 | 0.085 |
| nord | NordWeg Infrastructuur NV (Pays-Bas) | 🇳🇱 | 2500000000 | 0.08 |
| ita | Strade Sicure Manutenzione SpA (Italie) | 🇮🇹 | 3500000000 | 0.078 |
| uk | TransEuropa Roads plc (Royaume-Uni) | 🇬🇧 | 6000000000 | 0.075 |


## `INDUS` — Industrie intégrée (5 éléments)

| clé | n | ic | p | inc | e |
|---|---|---|---|---|---|
| carr | Carrière de porphyre à Quenast | ⛰️ | 120000000 | 900000 | Mise en décharge et matériaux −15 % sur tes chantiers |
| enrob | Centrale d’enrobés (asphalte) à Seneffe | 🏭 | 45000000 | 350000 | Carburant et usure −8 % sur tes chantiers |
| pann | Usine de panneaux et de glissières à Charleroi | 🚧 | 80000000 | 600000 | +10 % sur les panneaux, glissières et clôtures |
| sel | Dépôt de sel de déneigement au port de Liège | 🧂 | 30000000 | 200000 | +10 % sur le déneigement et les dépôts de sel |
| gar | Garage poids lourds et carrosserie industrielle | 🔧 | 60000000 | 300000 | Usure des machines −15 % |


## `GIFTS` — Philanthropie (5 éléments)

| k | ic | n | c | r |
|---|---|---|---|---|
| hop | 🏥 | Une aile d’hôpital à ton nom (CHU de Namur) | 50000000 | 12 |
| uni | 🎓 | Une chaire et des bourses à l’université (UCLouvain) | 120000000 | 15 |
| rec | 🔬 | Un centre de recherche sur le cancer | 300000000 | 20 |
| ped | 🚸 | La sécurité routière devant toutes les écoles de Wallonie | 500000000 | 25 |
| fond | 🌍 | Ta grande fondation internationale (1 milliard) | 1000000000 | 40 |


## `RICH` — Classement des fortunes belges (fictif) (12 éléments)

| c0 | c1 |
|---|---|
| Famille Van Aelst | 38000000000 |
| Famille de Wyngaert | 21000000000 |
| Famille Delcourt | 12500000000 |
| Famille Verhaegen | 8200000000 |
| Famille Mertens-Dubois | 5600000000 |
| Famille Lambrecht | 4100000000 |
| Famille Coppieters | 3300000000 |
| Famille Hennuyer | 2600000000 |
| Famille Spoelberg-Antoine | 1900000000 |
| Famille Gilquin | 1400000000 |
| Famille Ravet | 1050000000 |
| Famille Dewandre | 820000000 |


## `STK` — Bourse privée : 17 actions réelles simulées (17 éléments)

| k | n | ic | s | p | v | d | y | m |
|---|---|---|---|---|---|---|---|---|
| abi | AB InBev | 🍺 | Bières (Belgique) | 55 | 0.22 | 0.06 | 0.018 | 5 |
| kbc | KBC Groupe | 🏦 | Banque (Belgique) | 92 | 0.24 | 0.07 | 0.05 | 5 |
| colr | Colruyt | 🛒 | Supermarchés (Belgique) | 38 | 0.24 | 0.03 | 0.03 | 9 |
| avh | Ackermans & van Haaren | ⚓ | Holding, dragage DEME (Belgique) | 215 | 0.18 | 0.07 | 0.02 | 5 |
| elia | Elia Group | ⚡ | Réseau électrique (Belgique) | 95 | 0.2 | 0.05 | 0.02 | 6 |
| diet | D’Ieteren Group | 🚗 | Voitures, vitrage (Belgique) | 170 | 0.24 | 0.07 | 0.02 | 6 |
| ucb | UCB | 💊 | Médicaments (Belgique) | 190 | 0.3 | 0.09 | 0.007 | 5 |
| prox | Proximus | 📶 | Télécoms (Belgique) | 7 | 0.22 | 0 | 0.08 | 4 |
| vinci | Vinci | 🛣️ | Autoroutes, BTP (France) | 120 | 0.2 | 0.07 | 0.04 | 4 |
| eiff | Eiffage | 🏗️ | BTP, concessions (France) | 110 | 0.22 | 0.07 | 0.04 | 5 |
| bouy | Bouygues (Colas) | 🚧 | Routes, construction (France) | 38 | 0.22 | 0.05 | 0.05 | 5 |
| holc | Holcim | 🧱 | Ciment (Suisse) | 80 | 0.22 | 0.07 | 0.04 | 5 |
| deere | Deere & Company | 🚜 | Tracteurs (États-Unis) | 440 | 0.26 | 0.08 | 0.013 | 11 |
| kubota | Kubota | 🦾 | Mini-pelles, tondeuses (Japon) | 12 | 0.28 | 0.05 | 0.025 | 6 |
| volvo | Volvo | 🚛 | Camions (Suède) | 25 | 0.28 | 0.07 | 0.05 | 4 |
| asml | ASML | 💻 | Machines à puces (Pays-Bas) | 700 | 0.35 | 0.12 | 0.009 | 4 |
| apple | Apple | 🍎 | Technologie (États-Unis) | 210 | 0.3 | 0.1 | 0.005 | 2 |


## `CASI` — Casinos (11 éléments)

| k | n | ic | max | w | bg | d |
|---|---|---|---|---|---|---|
| spa | Casino de Spa | 🏛️ | 100000 | 0 | linear-gradient(160deg,#4a1030,#1f0d2e) | Le plus vieux casino du monde (1763), dans les Ardennes. |
| namur | Casino de Namur | 🏰 | 100000 | 0 | linear-gradient(160deg,#10304a,#0d1a2e) | Au bord de la Meuse, au pied de la citadelle. |
| dinant | Casino de Dinant | ⛰️ | 100000 | 0 | linear-gradient(160deg,#2a3a10,#121d0b) | Au pied des rochers, face à la collégiale et à la Meuse. |
| chaud | Casino de Chaudfontaine | ♨️ | 100000 | 0 | linear-gradient(160deg,#103a3a,#0b1d1d) | Près de Liège, dans la ville des sources chaudes. |
| bxl | Grand Casino Brussels (Viage) | 🏙️ | 250000 | 0 | linear-gradient(160deg,#3a1010,#1d0b0b) | En plein centre de Bruxelles, à deux pas de la Grand-Place. |
| ostende | Casino Kursaal Ostende | ⚓ | 250000 | 0 | linear-gradient(160deg,#10284a,#0b142a) | Le grand Kursaal sur la digue de la mer du Nord. |
| blank | Casino de Blankenberge | 🏖️ | 100000 | 0 | linear-gradient(160deg,#4a3a10,#1d170b) | Sur la digue de Blankenberge, à la Côte belge. |
| middel | Casino de Middelkerke | 🌅 | 100000 | 0 | linear-gradient(160deg,#4a1030,#1d0b17) | Le casino tout neuf de Middelkerke, face à la mer. |
| knokke | Casino de Knokke | 🌊 | 500000 | 500000 | linear-gradient(160deg,#0f3d3a,#0b1f2a) | Le casino chic de la Côte belge, avec ses fresques de Magritte. |
| monaco | Casino de Monte-Carlo | 👑 | 5000000 | 5000000 | linear-gradient(160deg,#5a3a0a,#2a1505) | Le casino le plus célèbre du monde, à Monaco. |
| vegas | Bellagio, Las Vegas | 🎆 | 50000000 | 50000000 | linear-gradient(160deg,#3a0a5a,#120520) | Les fontaines, les néons et les tables sans limite. |


## `MACH` — Machines à sous (3 éléments)

| clé | n | sym | pay | two | d | jack |
|---|---|---|---|---|---|---|
| fruits | Fruits classique | [["🍒", 0.35], ["🍋", 0.25], ["🔔", 0.18], ["⭐", 0.12], ["7️⃣", 0.07], ["💎", 0.03]] | {"🍒": 7, "🍋": 10, "🔔": 20, "⭐": 50, "7️⃣": 150, "💎": 2000} | 1 | Gains fréquents mais petits. |  |
| diamant | Diamants (gros gains rares) | [["🍒", 0.35], ["🍋", 0.25], ["🔔", 0.18], ["⭐", 0.12], ["7️⃣", 0.07], ["💎", 0.03]] | {"🍒": 3, "🍋": 6, "🔔": 15, "⭐": 60, "7️⃣": 500, "💎": 6500} | 1 | Moins souvent, mais beaucoup plus gros. |  |
| jackpot | Méga Jackpot progressif | [["🍒", 0.36], ["🍋", 0.25], ["🔔", 0.18], ["⭐", 0.12], ["7️⃣", 0.07], ["👑", 0.02]] | {"🍒": 6, "🍋": 10, "🔔": 20, "⭐": 50, "7️⃣": 150} | 1 | 👑👑👑 = la cagnotte entière (si tu mises au moins 1 000 €). | 1 |


## `INV` — Placements privés (5 éléments)

| clé | n | ic | r | v | d |
|---|---|---|---|---|---|
| sav | Compte épargne réglementé | 🐷 | 0.015 | 0 | ± 1,5 %/an, sans risque. Intérêts exonérés jusqu’à ± 1 000 €/an. |
| etf | ETF monde (actions, compte-titres) | 📈 | 0.07 | 0.045 | ± 7 %/an en moyenne, mais ça monte et ça descend. Taxe sur les opérations de bourse 0,12 %. |
| gold | Or physique (lingots) | 🥇 | 0.05 | 0.035 | ± 5 %/an en moyenne, valeur refuge. Frais d’achat ± 3 %. |
| obl | Bon d’État belge (obligations) | 🇧🇪 | 0.028 | 0.002 | ± 2,8 %/an, garanti par l’État belge. Sans risque, mais rapporte moins que les actions. |
| pens | Épargne-pension | 👴 | 0.04 | 0.01 | Maximum 1 050 € par an, et 30 % rendus en réduction d’impôt chaque année. |


## `HINV` — Placements de la holding (5 éléments)

| clé | n | ic | p | y | g | d | r | v |
|---|---|---|---|---|---|---|---|---|
| imm | Immeuble de rapport (8 appartements à Namur) | 🏢 | 1600000 | 0.045 | 0.02 | Loyers ± 4,5 %/an nets de charges, + ± 2 %/an de valeur. Revenus taxés 25 % dans la holding. |  |  |
| bur | Bureaux loués à ta propre société | 🏬 | 1200000 | 0.06 | 0.015 | Ta société paie le loyer (déductible) à ta holding : ± 6 %/an. Une vraie astuce de patron belge. |  |  |
| etf | Portefeuille d’actions (gestion discrétionnaire) | 📈 | 250000 |  |  | ± 7 %/an en moyenne, avec des hauts et des bas. Plus-values sur actions exonérées pour une holding (sous conditions). | 0.07 | 0.045 |
| pme | 30 % d’une PME familiale (participation) | 🤝 | 750000 | 0.07 |  | Dividendes ± 7 %/an, exonérés (RDT). Petit risque de faillite de la PME. |  |  |
| sta | Ticket « business angel » dans une start-up belge | 🚀 | 50000 |  |  | Très risqué : 6 fois sur 10 tout est perdu, mais une start-up sur dix rapporte 10 à 30 fois la mise. Résultat dans 3 à 7 ans. |  |  |


## `HPART` — PME rachetables par la holding (10 éléments)

| k | ic | n | w | s | v | y | g | vol | risk | d |
|---|---|---|---|---|---|---|---|---|---|---|
| boul | 🥖 | Boulangerie industrielle Delvaux | Ciney | Alimentation | 6000000 | 0.08 | 0.02 | 0.03 | 0.001 | Fournit 300 supermarchés. Stable, peu de surprises. |
| gar | 🚗 | Garage multimarque Lemaire & Fils | Liège | Automobile | 2500000 | 0.1 | 0.01 | 0.05 | 0.003 | Atelier, carrosserie et vente d’occasions. Dépend de la conjoncture. |
| tran | 🚚 | Transports frigorifiques Mosan | Mouscron | Logistique | 9000000 | 0.09 | 0.02 | 0.05 | 0.002 | 60 camions frigorifiques. Sensible au prix du gasoil. |
| toit | 🏠 | Toitures Gérard | Namur | Construction | 3000000 | 0.11 | 0.02 | 0.06 | 0.004 | Rénovation de toitures et isolation (primes régionales). |
| immo | 🔑 | Agence immobilière du Brabant | Waterloo | Immobilier | 1800000 | 0.12 | 0.01 | 0.08 | 0.004 | Ventes et gestion locative. Très rentable, mais suit le marché immobilier. |
| bras | 🍺 | Brasserie artisanale des Fagnes | Ardennes | Boissons | 4000000 | 0.05 | 0.06 | 0.04 | 0.002 | Bières primées, export en forte croissance. Peu de dividendes, mais elle prend de la valeur. |
| soft | 💻 | Éditeur de logiciels Néo-Gestion | Louvain-la-Neuve | Technologie | 15000000 | 0.02 | 0.15 | 0.12 | 0.004 | Logiciel de gestion pour PME. Croissance forte, valeur très volatile. |
| veto | 🐾 | Réseau de cliniques vétérinaires | Wallonie | Santé | 7000000 | 0.09 | 0.04 | 0.03 | 0.001 | 8 cliniques. Secteur solide et en croissance. |
| pv | ☀️ | Installateur photovoltaïque SolarWal | Charleroi | Énergie | 5000000 | 0.1 | 0.03 | 0.1 | 0.005 | Très lié aux primes et aux prix de l’électricité : années fastes et années difficiles. |
| repos | 🏡 | Maison de repos Les Charmilles | Spa | Soins | 12000000 | 0.07 | 0.02 | 0.02 | 0.0007 | 120 lits, agréée par l’AVIQ. Revenus réguliers. |


## `PREP` — Réputation personnelle (4 éléments)

| k | ic | n | c | r | d |
|---|---|---|---|---|---|
| gala | 🥂 | Organiser un gala de charité | 50000 | 10 | Les élus et les grands clients viennent : réputation personnelle +10. |
| club | ⚽ | Devenir mécène du club de foot local | 25000 | 6 | Ton logo sur les maillots, tout le village en parle : +6. |
| conf | 🎤 | Donner une conférence à l’UWE (Union wallonne des entreprises) | 3000 | 4 | Tu racontes ton parcours devant 300 patrons : +4. |
| tv | 📺 | Passer dans une émission télé régionale | 0 | 5 | Gratuit, mais une seule fois par an. Avec une chargée de communication, ça se passe toujours bien. |


## `GLT` — Contrats du gestionnaire de locations (4 éléments)

| n | cap | c |
|---|---|---|
| 1 jour / semaine | 4 | 800 |
| Mi-temps | 10 | 1950 |
| Temps plein | 30 | 3900 |
| Temps plein + assistante | 999 | 7400 |


## `LVL` — Niveaux de vie (10 éléments)

| c0 | c1 | c2 |
|---|---|---|
| -1000000000000000 | Dans le rouge | 😬 |
| 0 | Débutant | 🙂 |
| 25000 | Ça roule | 😎 |
| 100000 | Confortable | 🛋️ |
| 300000 | Aisé | 🥂 |
| 1000000 | Millionnaire | 💎 |
| 5000000 | Grand patron | 🏆 |
| 20000000 | Magnat | 👑 |
| 100000000 | Empereur de la route | 🌍 |
| 1000000000 | Milliardaire | 🚀 |


## `BIGEV` — Grands événements économiques (5 éléments)

| clé | ic | n | d | t | j | mo | f | e |
|---|---|---|---|---|---|---|---|---|
| crise | 📉 | Crise économique | Les pouvoirs publics serrent le budget : 2 fois moins d’appels d’offres et 30 % de petits boulots en moins. | 0.5 | 0.7 | [6, 10] |  |  |
| gasoil | ⛽ | Flambée du gasoil | Le prix du diesel explose : carburant et usure +40 % sur tous les chantiers. |  |  | [4, 8] | 1.4 |  |
| relance | 🚀 | Plan de relance européen | Des milliards pour les routes : 60 % d’appels d’offres en plus, et des marchés 8 % plus chers. | 1.6 |  | [8, 12] |  | 1.08 |
| infl | 💸 | Forte inflation | L’inflation grimpe : la prochaine indexation des salaires sera beaucoup plus forte (+3,5 % en plus). |  |  | [6, 12] |  |  |
| hiver | 🥶 | Hiver extrême | Neige et gel en série : beaucoup plus de jours de neige, d’urgences et de marchés de déneigement. |  |  | [3, 4] |  |  |


## `AGN` — Agences d’intérim à racheter (6 éléments)

| k | n | p | pl |
|---|---|---|---|
| nam | Wallintérim Namur (siège et 6 bureaux) | 150000000 | 2500 |
| lie | Bureaux de Liège | 45000000 | 1050 |
| cha | Bureaux de Charleroi | 40000000 | 950 |
| lux | Luxembourg belge (Arlon, Marche) | 30000000 | 700 |
| bxl | Bruxelles | 80000000 | 1850 |
| fla | Flandre (Gand, Anvers) | 70000000 | 1650 |


## `TITLES` — Titres de carrière (11 éléments)

Débutant, Ouvrier confirmé, Chef d’équipe, Contremaître, Conducteur de travaux, Chef d’entreprise, Patron reconnu, Grand patron, Capitaine d’industrie, Légende de la route, Légende absolue


## `DQT` — Défis du mois Route Nette (12 éléments)

| k | ic | t | n | ok |
|---|---|---|---|---|
| prod | 🛠️ | ƒ | ƒ |  |
| done | ✅ | ƒ | ƒ |  |
| jobs | 🧰 | ƒ | ƒ |  |
| won | 🏛️ | ƒ | ƒ | ƒ |
| bid | 📨 | ƒ | ƒ | ƒ |
| hire | 👷 | ƒ | ƒ |  |
| prime | 🎁 | ƒ | ƒ |  |
| pv | 🏡 | ƒ | ƒ |  |
| visit | 🔍 | ƒ | ƒ |  |
| visit3 | 🏆 | ƒ | ƒ |  |
| dec | 📬 | ƒ | ƒ |  |
| tap | 👆 | ƒ | ƒ |  |


## `CLK` — Nettoyage : types de clients/contrats (8 éléments)

| clé | n | ic | prod | mkt | m2 | f | eq | pub |
|---|---|---|---|---|---|---|---|---|
| bur | Bureaux | 🏢 | 220 | 37 | [150, 4000] | [3, 5] |  |  |
| com | Commerce / magasin | 🛍️ | 250 | 36 | [100, 2500] | [5, 6] |  |  |
| med | Cabinet médical / maison de repos | 🩺 | 140 | 40 | [120, 3000] | [5, 5] | vap |  |
| eco | École / crèche | 🏫 | 170 | 35 | [400, 6000] | [5, 5] | mono |  |
| cop | Communs d’immeuble | 🏘️ | 300 | 36 | [150, 1500] | [1, 2] |  |  |
| ind | Industrie / agroalimentaire (nuit) | 🏭 | 300 | 41 | [2000, 20000] | [5, 6] | hp |  |
| hop | Hôpital | 🏥 | 120 | 42 | [8000, 60000] | [7, 7] | vap | 1 |
| adm | Bâtiment administratif | 🏛️ | 230 | 36 | [2000, 30000] | [5, 5] |  | 1 |


## `CLP` — Nettoyage : chantiers ponctuels (7 éléments)

| clé | n | ic | h | p | r | eq |
|---|---|---|---|---|---|---|
| fin | Nettoyage de fin de chantier | 🏗️ | [12, 160] | 40 | of |  |
| dem | Grand nettoyage après déménagement | 📦 | [6, 30] | 38 | of |  |
| moq | Shampoing de moquettes | 🧼 | [6, 40] | 42 | of | inj |
| des | Désinfection après sinistre | ♨️ | [8, 60] | 52 | of | vap |
| fac | Nettoyage de façade / parking | 💦 | [8, 80] | 48 | of | hp |
| vitp | Vitres d’un commerce ou d’une maison | 🪟 | [3, 24] | 46 | vi | perche |
| vith | Vitres en hauteur (immeuble) | 🏗️ | [24, 120] | 60 | vi | nacelle |


## `CLE` — Nettoyage : matériel (12 éléments)

| clé | n | ic | p | d |
|---|---|---|---|---|
| henry | Aspirateur Numatic Henry | 🧹 | 230 | Matériel de base : 1 pour 3 techniciennes. |
| chariot | Chariot de ménage complet | 🛒 | 450 | Matériel de base : 1 pour 2 techniciennes. |
| mono | Monobrosse | 🌀 | 1600 | Décapage et entretien des sols (écoles, crèches) : 1 par contrat. |
| autoc | Autolaveuse compacte | 🚿 | 3200 | Sols de 1 000 à 3 000 m² : 1 par contrat (reste sur place). |
| auto | Autolaveuse accompagnée | 🚿 | 9500 | Sols de 3 000 à 15 000 m² : 1 par contrat. |
| autor | Autolaveuse autoportée | 🚜 | 28000 | Sols de plus de 15 000 m² : 1 par contrat. |
| vap | Nettoyeur vapeur / désinfection | ♨️ | 1900 | Hôpitaux, maisons de repos, désinfection après sinistre. |
| hp | Nettoyeur haute pression eau chaude | 💦 | 3500 | Industrie, façades, parkings. |
| inj | Injecteur-extracteur (moquettes) | 🧼 | 1100 | Shampoing de moquettes et sièges. |
| perche | Perche à eau pure + osmoseur | 🪟 | 4200 | Vitres jusqu’à 4 étages, sans échelle. |
| nacelle | Nacelle 20 m (occasion) | 🏗️ | 32000 | Vitres et façades en hauteur. |
| van | Camionnette (Berlingo, occasion) | 🚐 | 15500 | 1 par chantier ponctuel en cours (450 €/mois : assurance, carburant). |


## `CLO` — Nettoyage : personnel de bureau (9 éléments)

| clé | n | nm | ic | m | d |
|---|---|---|---|---|---|
| plan | Planificatrice | Fatima El Amrani | 📅 | 4300 | Remplace les absentes (−40 % d’heures perdues) et accepte toute seule les nouveaux clients titres-services quand il y a de la place. |
| com | Commercial(e) | Olivier Mathieu | 🤝 | 5200 | +50 % de demandes de clients. Envoie lui-même les devis au prix du marché (réglable). |
| rh | Gestionnaire RH | Caroline Dethier | 🗂️ | 4400 | Recrute toute seule chaque lundi quand il manque des heures (Forem, Actiris, agences). Départs −30 %. |
| qual | Contrôleuse qualité | Sandrine Pirard | 🔍 | 4200 | Contrôles sur place : qualité +10 sur tous les contrats (1 pour 200 personnes sur le terrain). |
| tsr | Responsable d’agence titres-services | Nathalie Gilson | 🏠 | 4500 | +40 % de demandes titres-services, clients plus fidèles (1 agence pour ± 120 aides-ménagères). |
| off | Responsable des appels d’offres | Pierre Lemaire | 📑 | 5600 | Remet lui-même les offres aux marchés publics quand tu remplis les conditions (+5 points de qualité dans les offres). |
| compta | Comptable | Marc Wauthier | 🧮 | 4900 | Relance les clients : paiements 10 jours plus tôt en moyenne. |
| prev | Conseiller en prévention | Julien Dethier | 🦺 | 4600 | Accidents du travail −40 %, prime d’assurance accidents du travail −0,5 point. |
| dir | Directrice d’exploitation | Valérie Hanquet | 👩‍💼 | 8500 | Indispensable au-delà de 150 personnes : sans elle, l’organisation perd 10 % d’efficacité. Achète aussi le matériel manquant. |


## `CLR` — Nettoyage : fonctions (4 éléments)

| clé | n | ic | brut | k | cp | pool | hw | work |
|---|---|---|---|---|---|---|---|---|
| am | Aide-ménagère (titres-services) | 🏠 | 14.75 | 1.3 | CP 322.01 | ts | [19, 25, 30, 38] |  |
| tech | Technicienne de surface | 🧽 | 17.02 | 1.42 | CP 121 cat. 1A | of | [15, 20, 25, 30, 38] |  |
| vit | Laveur de vitres | 🪟 | 19.6 | 1.45 | CP 121 cat. 6 | vi | [38] |  |
| chef | Cheffe d’équipe | 🧑‍🔧 | 19.4 | 1.45 | CP 121 cat. 7 | of | [38] | 0.5 |


## `CLA` — Nettoyage : démarches (6 éléments)

| clé | n | c | d | req | delay | staff |
|---|---|---|---|---|---|---|
| bce | Inscription à la BCE (guichet d’entreprise) | 105 | Numéro d’entreprise et de TVA : obligatoire pour facturer. |  |  |  |
| onss | Immatriculation employeur à l’ONSS | 0 | Via un secrétariat social (15 €/travailleur/mois). Obligatoire avant d’engager. | ["bce"] |  |  |
| rc | RC exploitation + assurance accidents du travail | 900 | RC 600 €/an + accidents du travail ± 2,2 % des salaires (obligatoire). Les clients la demandent. | ["bce"] |  |  |
| tsag | Agrément titres-services (Région wallonne) | 2500 | Dossier, conseil et formation obligatoire des aides-ménagères. Réponse en ± 3 mois. Ensuite : ménage chez les particuliers payé en titres-services. | ["bce", "onss", "rc"] | 90 |  |
| iso | Certification ISO 9001 | 12000 | Audit qualité (350 €/mois ensuite). Demandée pour les gros marchés publics et les hôpitaux. Dès 10 personnes. | ["bce"] |  | 10 |
| eco | Écolabel (produits et méthodes) | 3000 | Produits écologiques (+10 % de consommables), +5 points dans les marchés publics. | ["bce"] |  |  |


## `CLSITE` — Nettoyage : locaux (6 éléments)

| clé | n | ic | cap | r |
|---|---|---|---|---|
| home | Chez toi (bureau à la maison) | 🏠 | 6 | 0 |
| bur | Petit bureau 60 m² + local | 🏢 | 30 | 900 |
| ag | Bureau + dépôt 250 m² | 🏬 | 150 | 2600 |
| reg | Siège régional + 3 agences | 🏙️ | 600 | 6500 |
| sieg | Siège + 8 agences en Wallonie | 🏛️ | 2000 | 16000 |
| hq | Grand siège + 20 agences | 🌆 | 1000000000 | 38000 |


## `CLMEGA` — Nettoyage : grands contrats (8 éléments)

| k | ic | n | d | lv | w | c | g | x |
|---|---|---|---|---|---|---|---|---|
| m1 | 🎪 | Foire agricole de Libramont (4 jours) | 20 | 3 | 15 | 20000 | 58000 | 200 |
| m2 | 🏟️ | Stade de football : nettoyage après chaque match pendant une saison | 60 | 6 | 30 | 60000 | 170000 | 350 |
| m3 | 🎵 | Festival de musique d’été (avant, pendant, après) | 30 | 9 | 60 | 110000 | 300000 | 500 |
| m4 | 🚉 | Grande gare wallonne : contrat d’un an | 120 | 13 | 120 | 300000 | 850000 | 800 |
| m5 | ✈️ | Terminal d’un aéroport régional | 180 | 18 | 250 | 700000 | 2000000 | 1200 |
| m6 | 🏛️ | Parlement et administrations régionales | 240 | 24 | 500 | 1500000 | 4200000 | 1800 |
| m7 | 🏥 | Réseau hospitalier universitaire (5 sites) | 365 | 32 | 1000 | 3500000 | 10000000 | 2600 |
| m8 | 🇪🇺 | Bâtiments européens à Bruxelles | 540 | 42 | 2000 | 8000000 | 24000000 | 4000 |


## `CLDEC` — Nettoyage : décisions (16 éléments)

| k | ic | t | d | ch | def |
|---|---|---|---|---|---|
| raise | 💶 | Augmentation demandée | Les techniciennes demandent 0,40 €/h de plus (au-dessus du barème). | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| keys | 🔑 | Clés perdues | Une employée a perdu le trousseau d’un client (bureaux). | [["Changer toutes les serrures (1 400 €)", "[fn]"], ["Ne rien dire", "[fn]"]] | 1 |
| theft | 💍 | Accusation de vol | Une cliente titres-services accuse son aide-ménagère d’avoir pris une bague. | [["Ouvrir une enquête et déclarer à l’assurance", "[fn]"], ["Licencier l’aide-ménagère", "[fn]"]] | 0 |
| prod | 🧴 | Hausse des produits | Ton fournisseur augmente ses prix de 6 %. | [["Accepter", "[fn]"], ["Changer de fournisseur", "[fn]"], ["Commander en gros (5 000 €)", "[fn]"]] | 0 |
| extra | 🌸 | Grand nettoyage demandé | Un client veut un grand nettoyage complet en plus de son contrat. | [["Accepter (chantier ponctuel)", "[fn]"], ["Refuser poliment", "[fn]"]] | 1 |
| union | ✊ | Délégation syndicale | Le syndicat demande une prime de 150 € par personne pour la fin d’année. | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | 0 |
| press | 📰 | Reportage télé | Une télé régionale veut filmer tes équipes au travail. | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| train | 🎓 | Formation professionnelle | Le fonds de formation propose une formation « techniques de nettoyage » pour 10 personnes (1 800 €). | [["Inscrire 10 personnes", "[fn]"], ["Pas maintenant", "[fn]"]] | 1 |
| flood | 🌊 | Inondation dans une école | Une école communale est inondée et cherche une entreprise en urgence. | [["Y aller (gros chantier urgent, +30 %)", "[fn]"], ["Pas d’équipe libre", "[fn]"]] | 1 |
| insp | 🕵️ | Contrôle de l’inspection sociale | Les inspecteurs vérifient les contrats, les horaires et les déclarations Dimona. | [["Ouvrir les dossiers", "[fn]"]] | 0 |
| van | 🚐 | Camionnette accidentée | Une camionnette a été emboutie sur un parking. | [["Réparer (2 800 €)", "[fn]"], ["La revendre en l’état", "[fn]"]] | 0 |
| night | 🌙 | Passage en horaire de nuit | Un client industriel veut que vous veniez la nuit (prime de nuit pour le personnel). | [["Accepter (+12 % de prix, prime de nuit 25 %)", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| poach | 🕴️ | Débauchage | Un concurrent veut débaucher ta meilleure cheffe d’équipe. | [["Augmenter sa paie (+300 €/mois)", "[fn]"], ["La laisser partir", "[fn]"]] | 1 |
| flu | 🤧 | Épidémie de grippe | Beaucoup d’absences cette semaine. | [["Payer des heures supplémentaires (+50 %)", "[fn]"], ["Tenir bon", "[fn]"]] | 0 |
| eco | 🌿 | Client « vert » | Un gros client exige des produits écologiques. | [["Passer aux produits écolabel", "[fn]"], ["Refuser", "[fn]"]] | 0 |
| pay | ⏳ | Retard de paiement | Un gros client paie avec 2 mois de retard. | [["Mise en demeure (avocat 600 €)", "[fn]"], ["Patienter", "[fn]"]] | 1 |


## `CLDIFF` — Nettoyage : difficulté (3 éléments)

| clé | n | ic | px | abs | pool | ren | d |
|---|---|---|---|---|---|---|---|
| f | Facile | 🙂 | 1.05 | 0.8 | 1.4 | 0.6 | Prix du marché +5 %, moins d’absences, plus de candidats, concurrents calmes. |
| n | Normal | 😐 | 1 | 1 | 1 | 1 | Comme en vrai. |
| d | Difficile | 😈 | 0.97 | 1.15 | 0.75 | 1.3 | Prix −3 %, plus d’absences, moins de candidats, concurrents agressifs. |


## `CLPAY` — Nettoyage : politique salariale (3 éléments)

| n | x | mot | turn | abs | pool |
|---|---|---|---|---|---|
| Barème du secteur | 1 | 0 | 1 | 1 | 1 |
| Barème + 5 % | 1.05 | 0.1 | 0.75 | 0.9 | 1.4 |
| Barème + 10 % | 1.1 | 0.2 | 0.55 | 0.8 | 1.8 |


## `CLADS` — Nettoyage : annonces de recrutement (3 éléments)

| clé | n | ic | c | k | d |
|---|---|---|---|---|---|
| forem | Offre d’emploi au Forem | 🏛️ | 0 | 6 | 7 |
| agence | Agence de sélection | 🤝 | 450 | 12 | 3 |
| salon | Salon de l’emploi | 🎪 | 1500 | 30 | 14 |


## `CLBIG` — Nettoyage : grands événements (4 éléments)

| clé | n | ic | d | m |
|---|---|---|---|---|
| tele | Télétravail massif | 💻 | Les entreprises vident leurs bureaux : −15 % d’heures sur les bureaux et commerces. | 6 |
| pand | Épidémie | 🦠 | Absences ×1,8, mais beaucoup de demandes de désinfection. | 4 |
| pen | Pénurie de main-d’œuvre | 🧑‍🤝‍🧑 | Deux fois moins de candidats sur le marché. | 6 |
| boom | Boom de la construction | 🏗️ | Beaucoup plus de nettoyages de fin de chantier. | 6 |


## `CLDQ` — Nettoyage : défis du mois (10 éléments)

| k | t | n | v | ok | end |
|---|---|---|---|---|---|
| sign | ƒ | ƒ | ƒ |  |  |
| vis | ƒ | ƒ | ƒ |  |  |
| jobs | ƒ | ƒ | ƒ |  |  |
| dec | ƒ | ƒ | ƒ |  |  |
| bid | ƒ | ƒ | ƒ | ƒ |  |
| ts | ƒ | ƒ | ƒ | ƒ |  |
| sat | ƒ | ƒ |  |  | ƒ |
| abs | ƒ | ƒ |  |  | ƒ |
| noc | ƒ | ƒ |  |  | ƒ |
| cov | ƒ | ƒ |  |  | ƒ |


## `CLSTY` — Nettoyage : styles de concurrents (5 éléments)

| clé | valeur |
|---|---|
| prix | Casseur de prix |
| qual | Champion de la qualité |
| ts | Spécialiste titres-services |
| hop | Spécialiste hôpitaux |
| fam | Entreprise familiale |


## `CLTIT` — Nettoyage : titres (10 éléments)

Débutant(e), Indépendant(e) du ménage, Petite patronne, Cheffe d’entreprise, Entrepreneur(e) reconnu(e), Leader régional, Référence wallonne, Grand groupe, Géant de la propreté, Légende du nettoyage


## `SHR` — Magasins : rayons (14 éléments)

| clé | n | ic | t | tva | co | dep |
|---|---|---|---|---|---|---|
| fl | Fruits et légumes | 🥬 | frais | 0.06 | 1.4 |  |
| bo | Boulangerie | 🥖 | amb | 0.06 | 1.45 |  |
| cr | Crèmerie | 🥛 | frais | 0.06 | 1.28 |  |
| vi | Boucherie et charcuterie | 🥩 | frais | 0.06 | 1.32 |  |
| su | Surgelés | 🧊 | surg | 0.06 | 1.32 |  |
| ep | Épicerie | 🥫 | amb | 0.06 | 1.28 |  |
| bs | Boissons | 🥤 | amb | 0.21 | 1.25 |  |
| hy | Hygiène et entretien | 🧴 | amb | 0.21 | 1.38 |  |
| sn | Snacks et confiserie | 🍫 | amb | 0.06 | 1.35 |  |
| nf | Non-alimentaire | 🔋 | amb | 0.21 | 1.45 |  |
| po | Poissonnerie | 🐟 | frais | 0.06 | 1.38 | poi |
| tr | Traiteur | 🍲 | frais | 0.06 | 1.55 | trt |
| cv | Cave à vins | 🍷 | amb | 0.21 | 1.45 | vin |
| fs | Fleurs et plantes | 💐 | amb | 0.06 | 1.8 | flr |


## `SHP` — Magasins : produits (109 éléments)

| clé | k | r | n | bp | pk | life | base | sea | wx | el |
|---|---|---|---|---|---|---|---|---|---|---|
| pom | pom | fl | Pommes (kg) | 1.35 | 10 | 21 | 18 | 0 | 0 | 1.2 |
| ban | ban | fl | Bananes (kg) | 1.05 | 18 | 6 | 22 | 0 | 0 | 1.1 |
| tom | tom | fl | Tomates (kg) | 1.9 | 6 | 7 | 14 | s | h | 1.2 |
| sal | sal | fl | Salade | 0.55 | 12 | 4 | 10 | s | h | 1.3 |
| car | car | fl | Carottes (kg) | 0.75 | 10 | 20 | 9 | w | c | 1 |
| pdt | pdt | fl | Pommes de terre (5 kg) | 2.6 | 6 | 40 | 8 | w | 0 | 0.8 |
| oig | oig | fl | Oignons (kg) | 0.85 | 10 | 30 | 6 | 0 | 0 | 0.9 |
| ora | ora | fl | Oranges (kg) | 1.4 | 15 | 14 | 9 | w | 0 | 1.2 |
| fra | fra | fl | Fraises (500 g) | 1.9 | 10 | 3 | 7 | s | h | 1.5 |
| cit | cit | fl | Citrons (filet) | 1.1 | 12 | 20 | 4 | 0 | 0 | 1 |
| pai | pai | bo | Pain gris tranché | 1.15 | 10 | 2 | 38 | 0 | 0 | 0.6 |
| bag | bag | bo | Baguette | 0.42 | 20 | 1 | 32 | 0 | 0 | 0.7 |
| cro | cro | bo | Croissants (x4) | 1.2 | 10 | 2 | 12 | 0 | 0 | 1.1 |
| pch | pch | bo | Pains au chocolat (x4) | 1.45 | 10 | 2 | 8 | 0 | 0 | 1.1 |
| cou | cou | bo | Cramique | 1.8 | 8 | 4 | 4 | 0 | 0 | 1 |
| mil | mil | cr | Lait demi-écrémé (1 L) | 0.72 | 12 | 10 | 30 | 0 | 0 | 0.6 |
| yao | yao | cr | Yaourts nature (x6) | 1.3 | 12 | 21 | 12 | 0 | 0 | 0.9 |
| yaf | yaf | cr | Yaourts aux fruits (x4) | 1.25 | 12 | 21 | 10 | 0 | 0 | 1 |
| beu | beu | cr | Beurre (250 g) | 1.75 | 20 | 45 | 9 | 0 | 0 | 0.8 |
| gou | gou | cr | Gouda en tranches | 1.85 | 12 | 25 | 10 | 0 | 0 | 0.9 |
| cam | cam | cr | Camembert | 1.4 | 12 | 20 | 5 | 0 | 0 | 1 |
| oeu | oeu | cr | Œufs (x12) | 2.3 | 10 | 25 | 11 | p | 0 | 0.8 |
| cfr | cfr | cr | Crème fraîche | 1.05 | 12 | 20 | 5 | w | c | 1 |
| jus | jus | cr | Jus d’orange frais (1 L) | 1.5 | 8 | 12 | 6 | 0 | 0 | 1.1 |
| fro | fro | cr | Fromage blanc | 1.1 | 12 | 18 | 5 | 0 | 0 | 1 |
| hac | hac | vi | Haché porc-bœuf (500 g) | 3.1 | 8 | 3 | 10 | 0 | 0 | 1.1 |
| pou | pou | vi | Filets de poulet (500 g) | 4.2 | 8 | 5 | 9 | 0 | 0 | 1.1 |
| jam | jam | vi | Jambon cuit (tranches) | 1.95 | 12 | 10 | 13 | 0 | 0 | 0.9 |
| sau | sau | vi | Saucisses de campagne (x4) | 2.4 | 10 | 6 | 6 | s | h | 1.3 |
| sal2 | sal2 | vi | Salami (tranches) | 1.7 | 12 | 20 | 7 | 0 | 0 | 1 |
| pat | pat | vi | Pâté de campagne | 1.3 | 12 | 15 | 5 | w | 0 | 1 |
| bbq | bbq | vi | Assortiment barbecue | 6.8 | 6 | 4 | 3 | s | h | 1.6 |
| ste | ste | vi | Steak de bœuf (2 pièces) | 6.2 | 6 | 4 | 4 | 0 | 0 | 1.3 |
| fri | fri | su | Frites surgelées (1 kg) | 1.6 | 10 | 365 | 9 | 0 | 0 | 1 |
| piz | piz | su | Pizzas surgelées | 1.95 | 10 | 365 | 8 | 0 | 0 | 1.2 |
| gla | gla | su | Glaces (bac 1 L) | 2.4 | 8 | 365 | 4 | s | h | 1.6 |
| leg | leg | su | Légumes surgelés | 1.2 | 12 | 365 | 5 | 0 | 0 | 1 |
| poi | poi | su | Poisson pané | 2.3 | 10 | 365 | 4 | 0 | 0 | 1.1 |
| crg | crg | su | Cônes glacés (x6) | 2.7 | 8 | 365 | 3 | s | h | 1.6 |
| pas | pas | ep | Spaghetti (500 g) | 0.65 | 20 | 720 | 12 | 0 | 0 | 0.9 |
| riz | riz | ep | Riz (1 kg) | 1.3 | 12 | 720 | 6 | 0 | 0 | 0.9 |
| sau2 | sau2 | ep | Sauce tomate | 0.95 | 12 | 540 | 8 | 0 | 0 | 1 |
| con | con | ep | Conserves de légumes | 0.7 | 24 | 720 | 8 | 0 | 0 | 0.9 |
| caf | caf | ep | Café moulu (500 g) | 3.4 | 12 | 360 | 8 | 0 | 0 | 0.8 |
| the | the | ep | Thé (x25) | 1.1 | 12 | 540 | 3 | w | c | 1 |
| cer | cer | ep | Céréales du petit-déjeuner | 1.85 | 12 | 270 | 7 | 0 | 0 | 1.1 |
| far | far | ep | Farine (1 kg) | 0.55 | 10 | 360 | 3 | x | 0 | 0.9 |
| suc | suc | ep | Sucre (1 kg) | 0.8 | 10 | 720 | 4 | 0 | 0 | 0.8 |
| hui | hui | ep | Huile de tournesol (1 L) | 1.6 | 12 | 360 | 5 | 0 | 0 | 0.9 |
| may | may | ep | Mayonnaise | 1.4 | 12 | 180 | 6 | s | h | 1 |
| sou | sou | ep | Soupe en brique | 1.2 | 12 | 300 | 5 | w | c | 1.1 |
| con2 | con2 | ep | Confiture | 1.5 | 12 | 360 | 4 | 0 | 0 | 1 |
| cho2 | cho2 | ep | Pâte à tartiner | 2.1 | 12 | 270 | 6 | 0 | 0 | 1.1 |
| eau | eau | bs | Eau plate (6 x 1,5 L) | 1.7 | 1 | 540 | 16 | s | h | 0.9 |
| eag | eag | bs | Eau pétillante (6 x 1 L) | 1.9 | 1 | 540 | 8 | s | h | 1 |
| col | col | bs | Cola (1,5 L) | 1.05 | 6 | 270 | 14 | s | h | 1.1 |
| lim | lim | bs | Limonade (1,5 L) | 0.8 | 6 | 270 | 8 | s | h | 1.2 |
| jua | jua | bs | Jus de pomme (1 L) | 0.85 | 6 | 270 | 7 | 0 | 0 | 1.1 |
| bie | bie | bs | Bières blondes (24 x 25 cl) | 11.5 | 1 | 270 | 4 | s | h | 1.3 |
| bis | bis | bs | Bière spéciale (6 x 33 cl) | 5.2 | 4 | 270 | 5 | x | 0 | 1.2 |
| vin | vin | bs | Vin rouge | 3.6 | 6 | 720 | 5 | x | 0 | 1.2 |
| vib | vib | bs | Vin blanc | 3.4 | 6 | 720 | 4 | s | h | 1.2 |
| cav | cav | bs | Crémant | 5.5 | 6 | 720 | 2 | x | 0 | 1.4 |
| pap | pap | hy | Papier toilette (x8) | 2.9 | 6 | 1500 | 6 | 0 | 0 | 0.8 |
| ess | ess | hy | Essuie-tout (x4) | 2.1 | 6 | 1500 | 4 | 0 | 0 | 0.8 |
| les | les | hy | Lessive liquide | 6.2 | 4 | 1080 | 3 | 0 | 0 | 0.9 |
| liq | liq | hy | Liquide vaisselle | 1.2 | 12 | 1080 | 4 | 0 | 0 | 0.9 |
| sav | sav | hy | Savon pour les mains | 1.05 | 12 | 1080 | 3 | 0 | 0 | 0.9 |
| dou | dou | hy | Gel douche | 1.6 | 12 | 1080 | 4 | 0 | 0 | 1 |
| den | den | hy | Dentifrice | 1.3 | 12 | 1080 | 4 | 0 | 0 | 1 |
| sha | sha | hy | Shampoing | 2.1 | 12 | 1080 | 3 | 0 | 0 | 1 |
| coc | coc | hy | Couches bébé (paquet) | 7.8 | 4 | 1080 | 2 | 0 | 0 | 0.8 |
| sac | sac | hy | Sacs poubelle | 2.2 | 10 | 1500 | 3 | 0 | 0 | 0.8 |
| chi | chi | sn | Chips (sachet) | 1.05 | 20 | 150 | 12 | s | h | 1.2 |
| chc | chc | sn | Chocolat au lait (tablette) | 1.15 | 20 | 300 | 9 | x | 0 | 1.1 |
| bis2 | bis2 | sn | Biscuits | 1.1 | 20 | 240 | 9 | 0 | 0 | 1.1 |
| bon | bon | sn | Bonbons | 1.2 | 20 | 360 | 5 | x | 0 | 1.2 |
| cac | cac | sn | Cacahuètes | 1.4 | 15 | 240 | 4 | s | 0 | 1.1 |
| spe | spe | sn | Speculoos | 1.3 | 20 | 270 | 5 | x | 0 | 1.1 |
| oeuc | oeuc | sn | Œufs en chocolat | 2.6 | 12 | 180 | 2 | p | 0 | 1.4 |
| gauf | gauf | sn | Gaufres de Liège (x6) | 1.7 | 12 | 30 | 6 | 0 | 0 | 1.1 |
| pil | pil | nf | Piles (x4) | 3.2 | 12 | 1800 | 2 | x | 0 | 1 |
| amp | amp | nf | Ampoules LED | 2.8 | 12 | 1800 | 1 | w | 0 | 1 |
| cha | cha | nf | Charbon de bois (5 kg) | 4.2 | 6 | 1800 | 2 | s | h | 1.4 |
| cart | cart | nf | Cartes de vœux | 1.5 | 20 | 1800 | 1 | x | 0 | 1.2 |
| bou | bou | nf | Bougies | 1.8 | 12 | 1800 | 1 | w | 0 | 1.1 |
| rasq | rasq | nf | Rasoirs jetables | 2.6 | 12 | 1800 | 1 | 0 | 0 | 1 |
| xsau | xsau | po | Saumon fumé (200 g) | 3.2 | 10 | 21 | 1.5 | x | 0 | 1.3 |
| xcab | xcab | po | Filet de cabillaud (kg) | 14 | 5 | 3 | 1.2 | 0 | 0 | 1.1 |
| xmou | xmou | po | Moules de Zélande (kg) | 3.5 | 10 | 3 | 3 | w | 0 | 1 |
| xcre | xcre | po | Crevettes grises (100 g) | 4.5 | 10 | 4 | 1.2 | s | 0 | 1.2 |
| xhui | xhui | po | Huîtres (x6) | 6 | 10 | 7 | 0.4 | x | 0 | 1.3 |
| xlsg | xlsg | tr | Lasagne (1 kg) | 4.5 | 6 | 5 | 2.5 | 0 | 0 | 1 |
| xvav | xvav | tr | Vol-au-vent (barquette) | 3.8 | 6 | 4 | 2.2 | w | 0 | 1 |
| xspc | xspc | tr | Salade poulet curry | 1.8 | 8 | 6 | 3 | 0 | 0 | 1.1 |
| xbou | xbou | tr | Boulettes sauce tomate | 3.2 | 6 | 4 | 2 | 0 | 0 | 1 |
| xcar | xcar | tr | Carbonnades flamandes | 4.2 | 6 | 4 | 1.6 | w | c | 1 |
| xpiz | xpiz | tr | Pizza fraîche | 2.3 | 8 | 7 | 3 | 0 | 0 | 1.2 |
| xbdx | xbdx | cv | Bordeaux AOC | 4.5 | 6 | 720 | 3 | 0 | 0 | 1.1 |
| xals | xals | cv | Vin blanc d’Alsace | 5 | 6 | 720 | 2 | 0 | 0 | 1.1 |
| xchp | xchp | cv | Champagne brut | 18 | 6 | 900 | 0.8 | x | 0 | 1.4 |
| xcav | xcav | cv | Cava | 4.2 | 6 | 720 | 1.2 | x | 0 | 1.3 |
| xros | xros | cv | Rosé de Provence | 4.8 | 6 | 720 | 1.8 | s | h | 1.1 |
| xwhi | xwhi | cv | Whisky (70 cl) | 18 | 6 | 1500 | 0.5 | x | 0 | 1.3 |
| xprt | xprt | cv | Porto | 6.5 | 6 | 900 | 0.6 | x | 0 | 1.2 |
| xbqt | xbqt | fs | Bouquet de saison | 6 | 10 | 5 | 3 | 0 | 0 | 1.4 |
| xorc | xorc | fs | Orchidée en pot | 7 | 8 | 20 | 1.2 | 0 | 0 | 1.3 |
| xpot | xpot | fs | Plants potagers | 1.8 | 12 | 10 | 3 | p | 0 | 1.2 |
| xchr | xchr | fs | Chrysanthèmes | 4 | 10 | 12 | 0.6 | 0 | 0 | 1.1 |


## `SHF` — Magasins : fournisseurs (12 éléments)

| clé | n | ic | r | px | min | fee | free | days | lead | rel | q | pay | d |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| wal | Grossiste Wallodis | 🚚 | ["ep", "bs", "hy", "sn", "nf", "su", "cr"] | 1 | 300 | 45 | 800 | [1, 3, 5] | 1 | 0.92 | 0.9 | 30 | Le grossiste à tout faire : presque tout le sec, un peu de frais. Pratique, prix moyens. |
| bc | Centrale Belgacentrale | 🏭 | ["ep", "bs", "hy", "sn", "nf", "su", "cr", "vi"] | 0.9 | 2500 | 0 | 0 | [2, 4] | 2 | 0.97 | 0.92 | 45 | Les meilleurs prix, mais gros minimum de commande et seulement deux jours de livraison. |
| mm | Marché matinal de Namur | 🧺 | ["fl"] | 0.95 | 100 | 35 | 0 | [1, 2, 3, 4, 5, 6] | 1 | 0.85 | 0.82 | 0 | Fruits et légumes livrés tôt le matin. Prix qui bougent avec les saisons, qualité variable. Payé comptant. |
| lp | Laiterie des Prés | 🐄 | ["cr"] | 0.98 | 150 | 20 | 0 | [1, 3, 5] | 1 | 0.96 | 0.95 | 30 | Crèmerie de qualité, très fiable. |
| bi | Boulangerie industrielle du Condroz | 🥐 | ["bo"] | 1 | 50 | 0 | 0 | [1, 2, 3, 4, 5, 6] | 1 | 0.94 | 0.88 | 15 | Pain et viennoiseries livrés chaque matin avant l’ouverture. |
| bm | Brasserie et boissons Mosane | 🍺 | ["bs"] | 0.92 | 400 | 30 | 1000 | [2, 5] | 2 | 0.93 | 0.9 | 30 | Boissons moins chères en volume. Livraisons lourdes : prévois la place. |
| pl | Producteurs locaux (circuit court) | 🌾 | ["fl", "cr", "vi"] | 1.22 | 80 | 15 | 0 | [3, 6] | 2 | 0.88 | 1.08 | 0 | Plus cher, mais produits plus frais (ils se gardent plus longtemps) et clients ravis. Payé comptant. |
| vd | Viandes Dethier | 🔪 | ["vi"] | 0.97 | 200 | 25 | 600 | [2, 4, 6] | 1 | 0.93 | 0.93 | 30 | Grossiste en viandes et charcuterie, chaîne du froid irréprochable. |
| mar | Marée d’Ostende | 🐟 | ["po"] | 1 | 200 | 40 | 800 | [2, 4, 5] | 1 | 0.92 | 0.85 | 15 | Poissons et fruits de mer de la criée d’Ostende, trois fois par semaine. |
| cav | Caves de la Meuse | 🍷 | ["cv", "bs"] | 0.96 | 500 | 0 | 0 | [1, 4] | 3 | 0.97 | 1.2 | 30 | Négociant en vins : grand choix, prix corrects, livraison en 3 jours. |
| cui | Cuisine centrale Mosane | 🍲 | ["tr"] | 1 | 150 | 25 | 0 | [1, 2, 3, 4, 5, 6] | 1 | 0.94 | 0.9 | 15 | Plats préparés belges livrés chaque matin. |
| flo | Criée aux fleurs de Hannut | 💐 | ["fs"] | 0.95 | 100 | 30 | 0 | [2, 5] | 1 | 0.9 | 0.85 | 0 | Fleurs coupées et plantes en pot. Payé comptant. |


## `SHT` — Magasins : types de magasins (7 éléments)

| clé | n | ic | m2 | cli | rent | cap | en | lv |
|---|---|---|---|---|---|---|---|---|
| sup | Supérette de quartier | 🏪 | 150 | 320 | 2500 | {"amb": 2500, "frais": 700, "surg": 350} | 1600 |  |
| supv | Supérette de ville | 🏬 | 300 | 620 | 5000 | {"amb": 5000, "frais": 1400, "surg": 700} | 2800 | 3 |
| sm | Supermarché | 🛒 | 1200 | 1500 | 14000 | {"amb": 16000, "frais": 4500, "surg": 2200} | 8500 | 8 |
| epi | Épicerie de village | 🏠 | 80 | 160 | 1100 | {"amb": 1200, "frais": 300, "surg": 120} | 800 |  |
| gare | Magasin de gare | 🚉 | 70 | 520 | 6500 | {"amb": 1000, "frais": 380, "surg": 80} | 1300 | 4 |
| gsm | Grand supermarché | 🏬 | 2500 | 2800 | 26000 | {"amb": 32000, "frais": 9000, "surg": 4500} | 16000 | 12 |
| hyp | Hypermarché | 🏟️ | 7000 | 6500 | 65000 | {"amb": 90000, "frais": 22000, "surg": 11000} | 42000 | 18 |


## `SHRK` — Magasins : formats (7 éléments)

epi, gare, sup, supv, sm, gsm, hyp


## `SHRL` — Magasins : fonctions (8 éléments)

| clé | n | ic | brut | k | hw |
|---|---|---|---|---|---|
| caisse | Caissier, caissière | 🧾 | 15.2 | 1.4 | [20, 25, 30, 38] |
| rayon | Employé(e) de rayon | 📦 | 15.2 | 1.4 | [20, 25, 30, 38] |
| etud | Étudiant(e) jobiste | 🎓 | 12.5 | 1.08 | [8, 12, 16] |
| gerant | Gérant(e) de magasin | 🧑‍💼 | 21.5 | 1.38 | [38] |
| acheteur | Acheteur, acheteuse | 🧮 | 23.5 | 1.38 | [38] |
| rh | Responsable RH | 🗂️ | 24 | 1.38 | [38] |
| qual | Responsable qualité (AFSCA) | 🧪 | 22.5 | 1.38 | [38] |
| boucher | Boucher, bouchère | 🔪 | 17.8 | 1.4 | [30, 38] |


## `SHDEP` — Magasins : services/départements (15 éléments)

| clé | n | ic | min | c | m | ray | cli | sat | d | rev |
|---|---|---|---|---|---|---|---|---|---|---|
| pain | Fournil (pain cuit sur place) | 🥖 | sup | 45000 | 4700 | {"bo": 1.5} | 1.03 | 1.02 | Pain chaud toute la journée : boulangerie ×1,5. Un boulanger compris. |  |
| bouc | Boucherie à la coupe | 🥩 | supv | 80000 | 5200 | {"vi": 1.4} | 1.03 | 1.02 | Viande coupée devant le client : boucherie ×1,4. Un boucher compris. |  |
| fro | Fromagerie à la coupe | 🧀 | supv | 35000 | 3900 | {"cr": 1.2} | 1.02 |  | Crèmerie ×1,2. |  |
| poi | Poissonnerie | 🐟 | sm | 90000 | 5600 |  | 1.03 |  | Ouvre le rayon poisson (fournisseur : Marée d’Ostende). |  |
| trt | Traiteur et plats préparés | 🍲 | sup | 40000 | 1200 |  | 1.02 |  | Ouvre le rayon traiteur (Cuisine centrale Mosane). |  |
| vin | Cave à vins | 🍷 | sup | 30000 | 400 |  | 1.01 |  | Ouvre le rayon vins (Caves de la Meuse). |  |
| flr | Coin fleurs | 💐 | epi | 8000 | 150 |  | 1.01 |  | Ouvre le rayon fleurs (Criée de Hannut). Énorme à la Saint-Valentin et à la Toussaint. |  |
| presse | Presse, tabac et Lotto | 📰 | epi | 12000 | 300 |  | 1.04 |  | Commissions sur la Loterie Nationale, les journaux et le tabac ; attire du monde. | 0.25 |
| colis | Point colis | 📦 | epi | 2500 | 50 |  | 1.02 |  | Les gens viennent chercher leurs colis… et font une course. | 0.03 |
| dab | Distributeur de billets | 🏧 | epi | 0 | -150 |  | 1.02 |  | La banque paie un loyer pour l’emplacement. |  |
| cafe | Coin café et snack | ☕ | sup | 25000 | 2200 |  | 1.02 | 1.01 | Café, croissants, sandwiches. | 0.18 |
| park | Grand parking | 🅿️ | sup | 150000 | 600 |  | 1.08 |  | Les clients viennent en voiture et achètent plus. |  |
| borne | Bornes de recharge | 🔌 | sup | 60000 | 250 |  | 1.01 |  | 4 bornes rapides : on recharge pendant les courses. | 0.12 |
| lav | Station de lavage | 🚿 | supv | 120000 | 900 |  | 1.01 |  | Recettes du lavage des voitures sur ton parking. | 0.07 |
| phar | Parapharmacie | 💊 | sm | 60000 | 3800 | {"hy": 1.3} | 1.02 |  | Hygiène ×1,3. Une conseillère comprise. |  |


## `SHPOS` — Magasins : positionnement prix (3 éléments)

| clé | n | ic | p | cli | sat | d |
|---|---|---|---|---|---|---|
| disc | Discount | 💸 | 0.94 | 1.1 | 0.97 | Prix −6 %, plus de clients, un peu moins de satisfaction. |
| std | Classique | 🛒 | 1 | 1 | 1 | Le juste milieu. |
| prem | Premium | ✨ | 1.07 | 0.9 | 1.04 | Prix +7 %, moins de clients mais plus satisfaits. |


## `SHMALL` — Magasins : centres commerciaux (5 éléments)

| k | n | ic | town | p | y | lv |
|---|---|---|---|---|---|---|
| rp | Retail park de Wavre | 🏗️ | Wavre | 14000000 | 0.065 | 15 |
| gal | Galerie commerçante de Namur | 🏬 | Namur | 38000000 | 0.06 | 20 |
| ccl | Centre commercial de Liège | 🏙️ | Liège | 120000000 | 0.055 | 25 |
| ccc | Grand centre commercial de Charleroi | 🌆 | Charleroi | 280000000 | 0.052 | 30 |
| ccb | Shopping de Bruxelles | 🗼 | Bruxelles | 650000000 | 0.048 | 38 |


## `SHDEC` — Magasins : décisions (16 éléments)

| k | ic | t | d | def | o | ok | mk |
|---|---|---|---|---|---|---|---|
| frigo | 🧊 | Panne d’un meuble frigo | Le meuble frigo de la crèmerie est tombé en panne ce matin. Le frais commence à chauffer. | 1 | [["Réparation urgente (2 400 €)", "[fn]"], ["Attendre le technicien (on jette le frais)", "[fn]"]] |  |  |
| aug | 💬 | Demande d’augmentation | ƒ | 1 | [["Accepter (+5 %)", "[fn]"], ["Refuser poliment", "[fn]"]] | ƒ | ƒ |
| fid | 💳 | Carte de fidélité | Un prestataire propose ta propre carte de fidélité : 900 €/mois, environ 4 % de clients en plus. | 1 | [["Lancer la carte", "[fn]"], ["Non merci", "[fn]"]] | ƒ |  |
| club | ⚽ | Sponsoring du club local | Le club de foot du quartier demande 2 500 € pour mettre ton logo sur les maillots. | 1 | [["Sponsoriser (2 500 €)", "[fn]"], ["Refuser", "[fn]"]] |  |  |
| influ | 📱 | Une influenceuse veut filmer | Une influenceuse liégeoise (180 000 abonnés) veut faire une vidéo dans ton magasin pour 1 500 €. | 1 | [["Accepter (1 500 €)", "[fn]"], ["Non", "[fn]"]] |  |  |
| vol | 🕵️ | Bande de voleurs repérée | Les caméras montrent une bande qui vole régulièrement dans les rayons. | 1 | [["Vigile pendant un mois (2 800 €)", "[fn]"], ["Porter plainte seulement", "[fn]"]] |  |  |
| canic | 🌡️ | Canicule annoncée | L’IRM annonce une semaine de canicule. Boissons fraîches et glaces vont s’arracher. | 1 | [["Commander 3 000 € de boissons et glaces en plus", "[fn]"], ["Ne rien faire", "[fn]"]] | ƒ |  |
| voirie | 🚧 | Travaux devant le magasin | La commune ouvre la rue pendant un mois : moins de passage. | 1 | [["Pub et parking provisoire (1 200 €)", "[fn]"], ["Faire avec", "[fn]"]] |  |  |
| excl | 🤝 | Proposition d’exclusivité | Wallodis propose une remise de 4 % si tu leur commandes ton épicerie pendant 6 mois. | 1 | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | ƒ |  |
| stag | 🎓 | Demande de stage IFAPME | Un jeune en formation de vendeur demande un stage de 3 mois (gratuit, ± 3 h de réassort par jour). | 0 | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] |  |  |
| peri | 📣 | Produit périmé sur les réseaux | Un client a posté la photo d’un yaourt périmé trouvé en rayon. | 1 | [["S’excuser + bon d’achat de 50 €", "[fn]"], ["Ignorer", "[fn]"]] |  |  |
| greve | 🚛 | Grève des transporteurs | Les chauffeurs routiers bloquent les dépôts : tes livraisons auront 2 jours de retard. | 1 | [["Transporteur privé (1 800 €)", "[fn]"], ["Accepter les retards", "[fn]"]] |  |  |
| banq | 🥫 | Banque alimentaire | La banque alimentaire propose de récupérer chaque semaine tes invendus encore bons. | 0 | [["Accepter", "[fn]"], ["Refuser", "[fn]"]] | ƒ |  |
| loyer | 🏠 | Hausse du loyer | ƒ | 0 | [["Accepter (+6 %)", "[fn]"], ["Négocier", "[fn]"]] |  |  |
| riv | ⚔️ | Guerre des prix | Le nouveau concurrent casse ses prix sur 50 produits. | 1 | [["Riposter : folder spécial (−15 %, 1 200 €)", "[fn]"], ["Garder mes prix", "[fn]"]] | ƒ |  |
| syndic | ✊ | Négociation syndicale | La délégation syndicale demande +2 % de salaire pour tout le personnel. Sinon, grève de 2 jours dans tous les magasins. | 0 | [["Accepter +2 %", "[fn]"], ["Proposer +1 % et une prime", "[fn]"], ["Refuser", "[fn]"]] | ƒ |  |


## `SHPRJ` — Magasins : projets (10 éléments)

| k | ic | n | lv | c | per | days | e |
|---|---|---|---|---|---|---|---|
| led | 💡 | LED et frigos fermés | 1 | 18000 | 1 | 20 | Énergie −25 %. |
| smiley | 😊 | Smiley AFSCA (autocontrôle certifié) | 2 | 3500 | 1 | 30 | Contrôles AFSCA bien meilleurs. |
| scan | 📲 | Caisses self-scan | 2 | 45000 | 1 | 30 | Capacité des caisses +30 %. |
| cam | 📹 | Caméras intelligentes | 3 | 15000 | 1 | 15 | Vols −40 %. |
| sol | ☀️ | Panneaux solaires sur le toit | 3 | 60000 | 1 | 45 | Énergie encore −25 %. |
| esl | 🏷️ | Étiquettes électroniques | 4 | 30000 | 1 | 30 | Réassort +12 % (moins de temps à changer les prix). |
| zero | ♻️ | Plan zéro gaspillage | 4 | 40000 | 0 | 30 | Les produits se gardent 15 % plus longtemps. |
| safe | 🦺 | Plan de prévention (dos, cutters, quais) | 3 | 12000 | 0 | 20 | Accidents du travail −40 %. |
| app | 📱 | Application de la chaîne | 5 | 150000 | 0 | 60 | +5 % de clients partout. |
| fresh | 🥗 | Rayons frais repensés | 6 | 80000 | 1 | 45 | Satisfaction +5 %. |


## `SHMEGA` — Magasins : grands projets (8 éléments)

| k | ic | n | lv | st | cost | rev | days |
|---|---|---|---|---|---|---|---|
| kerm | 🎡 | Ravitailler la kermesse de ta ville | 2 | 1 | 8000 | 13000 | 10 |
| cant | 🏫 | Fournir les cantines scolaires de la commune | 4 | 1 | 60000 | 86000 | 60 |
| noel | 🎄 | Village de Noël de Liège | 6 | 2 | 120000 | 175000 | 30 |
| franco | 🎸 | Ravitailler les Francofolies de Spa | 8 | 3 | 240000 | 350000 | 12 |
| dour | 🎪 | Supérettes du festival de Dour | 10 | 4 | 380000 | 560000 | 10 |
| army | 🪖 | Approvisionner une caserne pendant un an | 13 | 5 | 1100000 | 1500000 | 365 |
| hosp | 🏥 | Cafétérias et boutiques d’un hôpital | 16 | 8 | 1800000 | 2500000 | 365 |
| expo | 🌍 | Boutiques d’un grand salon international à Bruxelles | 20 | 12 | 3500000 | 4900000 | 20 |


## `SHDQ` — Magasins : défis du mois (10 éléments)

| k | t | g | v |
|---|---|---|---|
| ca | ƒ | ƒ | ƒ |
| cli | ƒ | ƒ | ƒ |
| ctrl | ƒ | ƒ | ƒ |
| fold | ƒ | ƒ | ƒ |
| inv | ƒ | ƒ | ƒ |
| train | ƒ | ƒ | ƒ |
| sat | ƒ | ƒ | ƒ |
| gasp | ƒ | ƒ | ƒ |
| okd | ƒ | ƒ | ƒ |
| dec | ƒ | ƒ | ƒ |


## `SHCN` — Magasins : concurrents (10 éléments)

| c0 | c1 |
|---|---|
| Prixdoux | disc |
| MaxiMarché | sup |
| Épi d’Or | prox |
| Super Meuse | sup |
| DiscountWal | disc |
| Bio & Vous | bio |
| Proxi Ardenne | prox |
| FraîchMarket | prox |
| Hyper Sambre | sup |
| Le Panier Malin | disc |


## `SHTOWN` — Magasins : villes (15 éléments)

| c0 | c1 | c2 |
|---|---|---|
| Namur | 1.1 | 0.9 |
| Liège | 1.15 | 1.1 |
| Charleroi | 1 | 1 |
| Mons | 0.95 | 0.9 |
| Ciney | 0.85 | 0.7 |
| Dinant | 0.85 | 0.75 |
| Arlon | 0.9 | 0.8 |
| Wavre | 1.1 | 1 |
| Huy | 0.9 | 0.85 |
| Marche-en-Famenne | 0.85 | 0.75 |
| Bruxelles | 1.35 | 1.3 |
| Luxembourg | 1.3 | 1.2 |
| Mouscron | 0.95 | 0.9 |
| Tournai | 1 | 0.95 |
| Verviers | 0.95 | 0.9 |


## `SHINS` — Magasins : assurances (2 éléments)

| clé | n | m | d | per |
|---|---|---|---|---|
| pj | Protection juridique | 95 | Paie l’avocat dans tous les procès. |  |
| pe | Perte d’exploitation | 180 | Rembourse le chiffre perdu quand un magasin est fermé (grève, AFSCA, sinistre). | 1 |


## `SHFIT` — Magasins : aménagement (7 éléments)

| clé | valeur |
|---|---|
| sup | 150000 |
| supv | 320000 |
| sm | 1400000 |
| epi | 70000 |
| gare | 120000 |
| gsm | 3200000 |
| hyp | 9500000 |


## `SHLN` — Magasins : caisses (7 éléments)

| clé | valeur |
|---|---|
| epi | 1 |
| gare | 3 |
| sup | 2 |
| supv | 4 |
| sm | 8 |
| gsm | 14 |
| hyp | 30 |


## `SHTIT` — Magasins : titres (11 éléments)

Épicier débutant, Commerçant, Gérant confirmé, Directeur de magasin, Patron de supérettes, Chef d’enseigne, Directeur régional, Distributeur wallon, Grand distributeur, Roi du commerce, Légende de la distribution


## `ACCL` —  (12 éléments)

| c0 | c1 |
|---|---|
| Commune de Gesves (service travaux) | com |
| Zoning industriel de Ghlin | pro |
| Supermarché Carrefour Market de Ciney | pro |
| Parc d’activités de Wavre | pro |
| Commune d’Ohey | com |
| Maison de repos Les Lilas | pro |
| Syndic Le Parc (copropriété) | pro |
| Hôpital régional de Dinant | pro |
| Golf de Durbuy | pro |
| Intercommunale BEP | com |
| Commune de Somme-Leuze | com |
| Camping du Lac de Virelles | pro |


## `ACJ` —  (9 éléments)

p_tonte, p_haie, p_dechets, p_debrous, p_karcher, p_feuilles, p_neige, p_desherb, p_grandpel


## `BUYERS` —  (7 éléments)

| c0 | c1 | c2 | c3 |
|---|---|---|---|
| SPW Mobilité et Infrastructures — Direction des routes de Namur | DRNa | ["N4", "N80", "N90", "N92", "N97", "E411", "E42"] | ["Namur", "Gembloux", "Andenne", "Dinant", "Ciney", "Rochefort", "Philippeville"] |
| SPW Mobilité et Infrastructures — Direction des routes de Liège | DRLg | ["N3", "N30", "N63", "N61", "E25", "E40", "E42"] | ["Liège", "Huy", "Waremme", "Seraing", "Hannut", "Esneux"] |
| SPW Mobilité et Infrastructures — Direction des routes du Luxembourg | DRLx | ["N4", "N89", "N81", "N82", "N85", "E25", "E411"] | ["Arlon", "Bastogne", "Libramont", "Neufchâteau", "Marche-en-Famenne", "Bouillon", "Durbuy"] |
| SPW Mobilité et Infrastructures — Direction des routes de Charleroi | DRCh | ["N5", "N53", "N54", "N90", "R3", "A54"] | ["Charleroi", "Fleurus", "Châtelet", "Thuin", "Chimay", "Couvin"] |
| SPW Mobilité et Infrastructures — Direction des routes de Mons | DRMo | ["N6", "N50", "N56", "E19", "E42", "R5"] | ["Mons", "Tournai", "Ath", "Soignies", "Mouscron", "La Louvière"] |
| SPW Mobilité et Infrastructures — Direction des routes du Brabant wallon | DRBw | ["N4", "N25", "N5", "E411", "R2"] | ["Wavre", "Nivelles", "Ottignies", "Jodoigne", "Waterloo"] |
| SPW Mobilité et Infrastructures — Direction des routes de Verviers | DRVe | ["N61", "N62", "N68", "E42", "A27"] | ["Verviers", "Spa", "Malmedy", "Eupen", "Stavelot"] |


## `CATN` —  (10 éléments)

| clé | valeur |
|---|---|
| aid | 🤝 Aides à l’emploi (ONSS, Forem) |
| in | 💶 Rentrées (clients, SPW) |
| sal | 💸 Salaires et personnel |
| fix | 🧾 Frais fixes et vie privée |
| use | ⛽ Carburant, usure, décharge |
| tax | 🏛️ Impôts et cotisations |
| buy | 🛒 Achats et investissements |
| loan | 🏦 Banque (prêts) |
| priv | 🏡 Versé sur ton compte privé |
| other | ⚠️ Amendes et imprévus |


## `CERTS` —  (7 éléments)

🌿 Débroussaillage et fauchage avancés, 🚧 Signalisation de chantier sur voirie, 🪚 Tronçonneuse et sécurité en élagage, 🦺 VCA – sécurité sur chantier, 🚜 Conduite de tracteur et d’épareuse, ⛑️ Secouriste d’entreprise, ♻️ Propreté publique et tri des déchets


## `CLBUY` —  (8 éléments)

Commune de, Ville de, CPAS de, Province de, Intercommunale de, Athénée royal de, Haute École de, SPW — bâtiments de


## `CLCLI` —  (8 éléments)

| clé | valeur |
|---|---|
| bur | ["Cabinet d’avocats", "Bureau comptable", "Agence immobilière", "Siège d’une mutualité", "Bureau d’architectes", "Agence d’intérim", "Société informatique", "Agence bancaire"] |
| com | ["Concession automobile", "Magasin de vêtements", "Salle de sport", "Pharmacie", "Magasin de bricolage", "Boulangerie (atelier)", "Supérette"] |
| med | ["Cabinet de kinés", "Maison médicale", "Cabinet dentaire", "Maison de repos privée", "Centre de radiologie"] |
| eco | ["Crèche privée", "École privée", "Centre de formation", "Académie de musique"] |
| cop | ["Copropriété", "Résidence-services", "Immeuble à appartements"] |
| ind | ["Usine agroalimentaire", "Entrepôt logistique", "Laiterie", "Imprimerie", "Abattoir"] |
| hop | ["CHR", "Clinique", "Hôpital"] |
| adm | ["Administration communale", "Centre administratif", "Maison de l’emploi"] |


## `CLCOMP` —  (7 éléments)

Les poubelles n’ont pas été vidées, Traces sur les vitres de l’accueil, Les toilettes étaient sales lundi matin, Poussière sur les bureaux, Le sol est resté collant, Une porte est restée ouverte après le passage, Le savon n’a pas été remis


## `CLIENTS` —  (19 éléments)

| c0 | c1 |
|---|---|
| Mme Lambert | part |
| M. Dupont | part |
| Mme Collignon | part |
| M. Henrard | part |
| Mme Pirard | part |
| M. Lejeune | part |
| M. et Mme Gilson | part |
| Mme Delhaye | part |
| Résidence Les Tilleuls | pro |
| Camping du Lac | pro |
| Supermarché du coin | pro |
| Garage Renard | pro |
| Ferme Delvaux | pro |
| Maison de repos Les Lilas | pro |
| Syndic Le Parc | pro |
| RFC Club de foot | pro |
| Commune (service travaux) | com |
| École communale | com |
| CPAS | com |


## `CLPF` —  (36 éléments)

Fatima, Nathalie, Sylvie, Aïcha, Maria, Ana, Sandra, Laetitia, Fabienne, Malika, Nadia, Joëlle, Rita, Khadija, Elena, Monique, Samira, Christelle, Valérie, Sofia, Patricia, Isabelle, Yasmina, Carine, Ioana, Agnieszka, Martine, Fanny, Sabrina, Leila, Grace, Mélanie, Rosa, Anne, Béatrice, Hanane


## `CLPM` —  (14 éléments)

Mohamed, Kevin, Paulo, Jean, Ahmed, David, Marius, Christophe, Youssef, Tomasz, Steve, Ibrahim, Luis, Michel


## `CLRIV` —  (12 éléments)

Net Plus Wallonie, Brillance Services, Clean Meuse, ProNet Hainaut, Éclat Propreté, Hygiène & Co, Ardenne Propreté, Multinet Sud, Sambre Nettoyage, Cristal Clean, Lumière Services, Net’Express


## `CLVB` —  (9 éléments)

| c0 | c1 |
|---|---|
| 🗑️ | Poubelle pas vidée |
| 💧 | Sol mouillé sans panneau |
| 🕸️ | Toile d’araignée |
| 🧴 | Produit sans étiquette |
| 🚪 | Porte laissée ouverte |
| 💡 | Lumières restées allumées |
| 🧻 | Plus de papier toilette |
| 🪟 | Traces sur les vitres |
| 🧤 | Gants abandonnés |


## `CL_PRICE` —  

`25000000`


## `COEF` —  

`1.6`


## `DIPL` —  (22 éléments)

| clé | valeur |
|---|---|
| signal | ["Formation Forem : signalisation de chantier", "CQ6 Ouvrier en voirie", "Attestation VCA de base"] |
| paveur | ["CQ6 Paveur", "Formation IFAPME : paveur", "Formation Forem : ouvrier en voirie"] |
| peintre | ["Formation Forem : marquage routier", "CQ6 Peintre", "Formation interne chez un spécialiste du marquage"] |
| etu | ["CESS en cours (technique de qualification)", "Bachelier en cours (Haute École)"] |
| man | ["CEB", "CE1D", "CQ6 Ouvrier en horticulture", "Formation Forem : ouvrier en espaces verts"] |
| qual | ["CQ6 Ouvrier qualifié en horticulture", "CESS technique : agronomie", "Formation IFAPME : entrepreneur parcs et jardins"] |
| chauf | ["CQ6 Mécanique", "CESS professionnel", "Formation Forem : conducteur poids lourd"] |
| chef | ["CESS technique : construction", "Formation IFAPME : chef d'équipe", "Bachelier en agronomie (non terminé)"] |
| aide | ["Bachelier en comptabilité (Haute École)"] |
| orga | ["Master en gestion des ressources humaines"] |
| terr | ["Bachelier en gestion des ressources humaines + 10 ans de chantier"] |
| plan | ["Bachelier en marketing / assistante de direction"] |
| offre | ["Bachelier en construction + formation marchés publics"] |
| cond | ["Bachelier en construction (conducteur de travaux)"] |
| compta | ["Bachelier en comptabilité", "Expert-comptable ITAA (stagiaire)"] |
| rh | ["Master en gestion des ressources humaines"] |
| secr | ["Bachelier assistant(e) de direction"] |
| metreur | ["Bachelier en construction, option métreur-deviseur"] |
| gest | ["Bachelier en construction", "Bachelier en agronomie"] |
| dirt | ["Master ingénieur civil des constructions"] |
| daf | ["Master en sciences de gestion", "Expert-comptable ITAA"] |
| dirc | ["Master en sciences commerciales"] |


## `EMPLO` —  (3 éléments)

| clé | valeur |
|---|---|
| ouv | ["Ets Lambotte & Fils (ouvrier d'entretien)", "Agence d'intérim (missions dans le bâtiment)", "Commune de Ciney (ouvrier communal)", "Parcs et Jardins Lemaire", "Ferme familiale (aide agricole)", "Intercommunale de pr… |
| bur | ["Fiduciaire Dumont & Associés", "Bâti-Meuse SA (service administratif)", "Administration communale de Namur", "Bureau d'études Gérard", "Secrétariat social (gestionnaire de dossiers)", "Intercommunale de développemen… |
| dir | ["Groupe routier wallon SA (directeur de division)", "Bâti-Meuse SA (directeur de projets)", "Ardenne Entretien SA (responsable de région)", "Banque (chargé de relations entreprises)", "Consultant indépendant"] |


## `ENTR` —  (5 éléments)

| c0 | c1 | c2 |
|---|---|---|
| Nord-Infra Services SA (France) | 0.98 | 72 |
| Rijnland Wegbeheer NV (Pays-Bas) | 0.97 | 75 |
| Meuse & Sambre Infra SA | 1 | 70 |
| Eurovoirie Groupe SA | 0.96 | 78 |
| Groupe Ardoise Travaux SA | 0.99 | 73 |


## `EUCO` —  (4 éléments)

0.9, 1, 1.1, 1.2


## `EUDEC` —  (19 éléments)

| k | c | ic | t | o | def |
|---|---|---|---|---|---|
| eu_fr_greve | fr | 🇫🇷 | Grève nationale des transports : tes équipes n’arrivent plus sur les chantiers. | [["Payer des heures sup et des navettes", "[fn]"], ["Laisser les chantiers à l’arrêt", "[fn]"]] | 1 |
| eu_fr_urssaf | fr | 🇫🇷 | L’URSSAF annonce un contrôle des cotisations sociales. | [["Payer un expert-comptable pour préparer le dossier", "[fn]"], ["Faire confiance au directeur", "[fn]"]] | 1 |
| eu_de_din | de | 🇩🇪 | Une nouvelle norme DIN impose du matériel de signalisation plus moderne. | [["Investir dans le nouveau matériel", "[fn]"], ["Attendre", "[fn]"]] | 1 |
| eu_de_plan | de | 🇩🇪 | Le gouvernement fédéral lance un énorme plan d’investissement dans les routes. | [["Embaucher une équipe en plus", "[fn]"], ["Rester à la taille actuelle", "[fn]"]] | 1 |
| eu_nl_rws | nl | 🇳🇱 | Rijkswaterstaat lance un contrat géant d’entretien des digues et autoroutes. | [["Offre agressive (60 % de chances)", "[fn]"], ["Offre normale (30 %)", "[fn]"], ["Ne pas répondre", "[fn]"]] | 2 |
| eu_nl_prix | nl | 🇳🇱 | Un concurrent néerlandais casse les prix pour te prendre tes clients. | [["Baisser tes prix aussi", "[fn]"], ["Tenir tes prix", "[fn]"]] | 1 |
| eu_lu_prem | lu | 🇱🇺 | Une commune très riche veut un contrat d’entretien « premium » avec du matériel haut de gamme. | [["Acheter le matériel haut de gamme", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| eu_lu_smic | lu | 🇱🇺 | Le salaire social minimum luxembourgeois augmente. | [["Augmenter tes prix (risque de perdre un client)", "[fn]"], ["Absorber la hausse", "[fn]"]] | 1 |
| eu_es_cani | es | 🇪🇸 | Canicule : plus de 40 °C l’après-midi sur les chantiers. | [["Passer au travail de nuit", "[fn]"], ["Mettre les chantiers en pause", "[fn]"]] | 1 |
| eu_es_feder | es | 🇪🇸 | Des fonds européens (FEDER) financent la rénovation des routes rurales. | [["Monter un dossier (12 000 €, 70 % de chances)", "[fn]"], ["Laisser passer", "[fn]"]] | 1 |
| eu_pl_ue | pl | 🇵🇱 | La Pologne reçoit d’énormes fonds européens pour ses routes. | [["Agrandir l’équipe", "[fn]"], ["Rester prudent", "[fn]"]] | 1 |
| eu_pl_exode | pl | 🇵🇱 | Tes meilleurs ouvriers polonais partent travailler en Allemagne, mieux payés. | [["Augmenter les salaires", "[fn]"], ["Les laisser partir", "[fn]"]] | 1 |
| eu_ch_qual | ch | 🇨🇭 | Le canton exige une certification qualité suisse (ISO + label local) pour les marchés publics. | [["Obtenir la certification (45 000 €)", "[fn]"], ["S’en passer", "[fn]"]] | 1 |
| eu_it_pay | it | 🇮🇹 | La région paie tes factures avec 6 mois de retard. | [["Vendre les factures à une banque (affacturage, −4 %)", "[fn]"], ["Attendre et réclamer les intérêts", "[fn]"]] | 0 |
| eu_at_alpes | at | 🇦🇹 | Hiver record dans les Alpes : ASFINAG cherche des équipes de déneigement en urgence. | [["Envoyer toutes les équipes (heures de nuit)", "[fn]"], ["Rester sur les contrats habituels", "[fn]"]] | 1 |
| eu_uk_brexit | uk | 🇬🇧 | Nouvelles règles douanières : tes machines sont bloquées au port de Douvres. | [["Payer un transitaire en douane (20 000 €)", "[fn]"], ["Attendre que ça se débloque", "[fn]"]] | 1 |
| eu_mkt | * | 📣 | Ton directeur demande un budget publicité et salons professionnels. | [["Accepter (25 000 €)", "[fn]"], ["Refuser", "[fn]"]] | 1 |
| eu_rach | * | 🤝 | Un petit concurrent local est à vendre. | [["Le racheter (prix ± 1 an de frais fixes)", "[fn]"], ["Pas intéressé", "[fn]"]] | 1 |
| eu_acc | * | 🚑 | Accident grave sur un chantier de ta filiale : la presse locale en parle. | [["Communiquer et indemniser (30 000 €)", "[fn]"], ["Laisser l’assurance gérer", "[fn]"]] | 1 |


## `EUDT` —  (4 éléments)

| clé | n | ic | d | rv | fix | bad | good | rl | ramp |
|---|---|---|---|---|---|---|---|---|---|
| p | Prudent | 🛡️ | Peu de risques et une bonne image locale, mais une croissance plus lente. | 0.95 | 1 | 0.5 | 0.8 | 1 |  |
| a | Ambitieux | 🚀 | Grosse croissance et démarrage plus rapide (12 mois), mais il prend des risques qui coûtent parfois cher. | 1.2 | 1.05 | 1.8 | 1.6 | 0 | 12 |
| e | Économe | 🪙 | Frais fixes 20 % plus bas, mais il décroche moins de nouveaux contrats. | 0.92 | 0.8 | 1 | 0.8 | 0 |  |
| n | Directeur d’origine | 👔 | Le directeur nommé à la création de la filiale (ancienne version du jeu). | 1 | 1 | 1 | 1 | 0 |  |


## `EUMKT` —  (10 éléments)

| clé | valeur |
|---|---|
| ch | 90000000 |
| it | 70000000 |
| at | 45000000 |
| uk | 110000000 |
| fr | 60000000 |
| lu | 25000000 |
| nl | 80000000 |
| de | 120000000 |
| es | 50000000 |
| pl | 40000000 |


## `EUNM` —  (10 éléments)

| clé | valeur |
|---|---|
| fr | [["Julien", "Moreau"], ["Claire", "Lefebvre"], ["Nicolas", "Fontaine"], ["Sophie", "Garnier"], ["Antoine", "Roussel"]] |
| lu | [["Marc", "Schmit"], ["Anne", "Weber"], ["Paul", "Hoffmann"], ["Carole", "Wagner"], ["Luc", "Muller"]] |
| nl | [["Joost", "de Vries"], ["Sanne", "Bakker"], ["Pieter", "Jansen"], ["Eva", "Visser"], ["Ruud", "Smit"]] |
| de | [["Thomas", "Becker"], ["Katrin", "Schulz"], ["Stefan", "Wolf"], ["Julia", "Neumann"], ["Markus", "Braun"]] |
| es | [["Javier", "García"], ["Lucía", "Martínez"], ["Carlos", "López"], ["Elena", "Sánchez"], ["Pablo", "Romero"]] |
| ch | [["Lukas", "Meier"], ["Sarah", "Favre"], ["Daniel", "Keller"], ["Nadia", "Rochat"], ["Reto", "Brunner"]] |
| it | [["Marco", "Rossi"], ["Giulia", "Bianchi"], ["Luca", "Ferrari"], ["Chiara", "Colombo"], ["Andrea", "Ricci"]] |
| at | [["Florian", "Gruber"], ["Lisa", "Huber"], ["Johann", "Pichler"], ["Anna", "Steiner"], ["Michael", "Moser"]] |
| uk | [["James", "Smith"], ["Emma", "Taylor"], ["Oliver", "Brown"], ["Charlotte", "Wilson"], ["Harry", "Evans"]] |
| pl | [["Piotr", "Nowak"], ["Anna", "Kowalska"], ["Tomasz", "Wiśniewski"], ["Magda", "Wójcik"], ["Marek", "Zieliński"]] |


## `EUPOS` —  (11 éléments)

| clé | valeur |
|---|---|
| ch | [200, 170] |
| it | [250, 205] |
| at | [268, 138] |
| uk | [92, 42] |
| be | [150, 92] |
| nl | [166, 50] |
| lu | [186, 124] |
| de | [232, 88] |
| fr | [110, 150] |
| es | [62, 200] |
| pl | [292, 70] |


## `EUTN` —  (10 éléments)

| clé | valeur |
|---|---|
| fr | ["Entretien des accotements de la RN2 (Aisne)", "Fauchage des routes départementales du Nord", "Viabilité hivernale du Pas-de-Calais"] |
| lu | ["Entretien des routes de la commune de Luxembourg-Ville", "Déneigement de l’A1 (Ponts et Chaussées)", "Espaces verts du Kirchberg"] |
| nl | ["Entretien des digues de Zélande (Rijkswaterstaat)", "Fauchage des bords de l’A2", "Propreté des aires de l’A12"] |
| de | ["Entretien de l’A3 près de Cologne (Autobahn GmbH)", "Service d’hiver de la Ruhr", "Fauchage des routes fédérales B1 et B51"] |
| es | ["Entretien de l’A-7 sur la Costa del Sol", "Débroussaillage anti-incendie en Andalousie", "Propreté des routes de Valence"] |
| pl | ["Entretien de l’autoroute A4 (GDDKiA)", "Service d’hiver de Cracovie", "Fauchage des routes de Silésie"] |
| ch | ["Entretien de l’A1 entre Genève et Lausanne (OFROU)", "Service d’hiver du canton de Vaud", "Espaces verts de la ville de Zurich"] |
| it | ["Entretien de l’A4 Milan-Turin", "Débroussaillage des routes de Lombardie", "Propreté des aires de l’A1"] |
| at | ["Service d’hiver des cols du Tyrol (ASFINAG)", "Entretien de l’A1 Vienne-Salzbourg", "Fauchage des routes de Styrie"] |
| uk | ["Entretien de la M25 (National Highways)", "Gritting d’hiver dans le Kent", "Fauchage des routes du Yorkshire"] |


## `FAUTES` —  (8 éléments)

| c0 | c1 |
|---|---|
| passe beaucoup de temps sur son GSM | 0 |
| fait des pauses beaucoup trop longues | 0 |
| arrive en retard le matin | 0 |
| attend qu'on lui dise quoi faire et travaille très lentement | 0 |
| passe son temps dans la camionnette | 0 |
| ne porte pas ses EPI (gilet, casque) au bord de la route malgré les consignes | 1 |
| a été vu en train de boire de l'alcool sur le chantier | 1 |
| a quitté le chantier sans prévenir | 1 |


## `FEM` —  (0 éléments)

|  |
|



## `FERIES` —  (1 éléments)

| clé | 0-1 | 2-29 | 4-1 | 4-6 | 4-17 | 6-21 | 7-15 | 10-1 | 10-11 | 11-25 |
|---|---|---|---|---|---|---|---|---|---|---|
| 2027 | Nouvel An | Lundi de Pâques | Fête du Travail | Ascension | Lundi de Pentecôte | Fête nationale | Assomption | Toussaint | Armistice | Noël |


## `GESTN` —  (8 éléments)

Christophe Hubert, Fanny Leclercq, Didier Massart, Julie Wautier, Kevin Jacquet, Laurent Pirotte, Céline Dethier, Nicolas Gillard


## `HKS` —  (3 éléments)

rn, cl, sh


## `IMG` —  (79 éléments)

| clé | valeur |
|---|---|
| sandero | ["fr:Dacia Sandero", "en:Dacia Sandero"] |
| vwgolf | ["fr:Volkswagen Golf VIII", "en:Volkswagen Golf Mk8"] |
| modely | ["fr:Tesla Model Y", "en:Tesla Model Y"] |
| x5 | ["fr:BMW X5", "en:BMW X5"] |
| rangerover | ["en:Range Rover (L460)", "fr:Range Rover"] |
| p911 | ["fr:Porsche 911 (992)", "en:Porsche 992"] |
| classeg | ["fr:Mercedes-Benz Classe G", "en:Mercedes-Benz G-Class"] |
| urus | ["fr:Lamborghini Urus", "en:Lamborghini Urus"] |
| ferrari | ["en:Ferrari 296", "fr:Ferrari 296 GTB"] |
| cullinan | ["fr:Rolls-Royce Cullinan", "en:Rolls-Royce Cullinan"] |
| o_golf | ["fr:Volkswagen Golf VII", "en:Volkswagen Golf Mk7"] |
| o_m3 | ["fr:Tesla Model 3", "en:Tesla Model 3"] |
| o_s3 | ["en:BMW 3 Series (G20)", "fr:BMW Série 3"] |
| o_hilux | ["fr:Toyota Hilux", "en:Toyota Hilux"] |
| o_911 | ["fr:Porsche 911 (997)", "en:Porsche 997"] |
| o_g | ["fr:Mercedes-Benz Classe G", "en:Mercedes-Benz G-Class"] |
| mt07 | ["fr:Yamaha MT-07", "en:Yamaha MT-07"] |
| gs | ["en:BMW R1300GS", "en:BMW R1250GS", "fr:BMW R 1250 GS"] |
| harley | ["en:Harley-Davidson Fat Boy"] |
| campingcar | ["fr:Camping-car", "en:Motorhome"] |
| quad | ["fr:Quad (véhicule)", "en:All-terrain vehicle"] |
| appart | ["en:Apartment", "fr:Appartement"] |
| maison | ["fr:Maison individuelle", "en:Single-family detached home"] |
| villa | ["fr:Villa (maison)", "en:Villa"] |
| maitre | ["fr:Maison de maître"] |
| chateau | ["fr:Château de Modave", "fr:Château de Vêves"] |
| chalet | ["fr:Chalet", "en:Chalet"] |
| cote | ["fr:Knokke-Heist", "fr:Côte belge"] |
| zodiac | ["fr:Bateau pneumatique semi-rigide", "en:Rigid inflatable boat"] |
| moteur | ["en:Motorboat", "fr:Bateau à moteur"] |
| voilier | ["fr:Voilier", "en:Sailboat"] |
| yacht | ["fr:Azimut Yachts", "en:Azimut Yachts", "en:Motor yacht"] |
| superyacht | ["en:Superyacht", "fr:Yacht"] |
| bugatti | ["fr:Bugatti Chiron", "en:Bugatti Chiron"] |
| phenom | ["fr:Embraer Phenom 300", "en:Embraer Phenom 300"] |
| g700 | ["en:Gulfstream G700", "fr:Gulfstream G700"] |
| taycan | ["fr:Porsche Taycan", "en:Porsche Taycan"] |
| classes | ["fr:Mercedes-Benz Classe S", "en:Mercedes-Benz S-Class"] |
| q8 | ["fr:Audi Q8 e-tron", "en:Audi Q8 e-tron"] |
| xc90 | ["fr:Volvo XC90", "en:Volvo XC90"] |
| o_a6 | ["fr:Audi A6", "en:Audi A6"] |
| jacuzzi | ["en:Hot tub", "fr:Spa (bain)"] |
| solaire | ["fr:Panneau solaire", "en:Solar panel"] |
| rolex | ["fr:Rolex Submariner", "en:Rolex Submariner"] |
| cheval | ["fr:Selle français", "en:Horse"] |
| piscine | ["fr:Piscine", "en:Swimming pool"] |
| cessna | ["fr:Cessna 172", "en:Cessna 172"] |
| helico | ["fr:Robinson R44", "en:Robinson R44"] |
| canaries | ["fr:Tenerife", "en:Tenerife"] |
| croisiere | ["en:Cruise ship", "fr:Paquebot de croisière"] |
| dubai | ["fr:Burj Khalifa", "en:Burj Khalifa"] |
| f1 | ["fr:Circuit de Spa-Francorchamps", "en:Circuit de Spa-Francorchamps"] |
| eq_tondap | ["en:Riding mower", "fr:Tondeuse autoportée"] |
| eq_rogneuse | ["en:Stump grinder", "fr:Rogneuse de souches"] |
| eq_rouleau | ["fr:Compacteur", "en:Road roller"] |
| eq_chargeuse | ["en:Skid-steer loader", "fr:Chargeuse compacte"] |
| eq_fourgon | ["fr:Volkswagen Crafter", "en:Volkswagen Crafter"] |
| eq_tma | ["en:Truck-mounted attenuator", "fr:Atténuateur de chocs"] |
| eq_epandeur | ["en:Winter service vehicle", "fr:Saleuse"] |
| eq_taillehaie | ["fr:Taille-haie", "en:Hedge trimmer"] |
| eq_souffleur | ["fr:Souffleur de feuilles", "en:Leaf blower"] |
| eq_debrou | ["fr:Débroussailleuse", "en:String trimmer"] |
| eq_tondeuse | ["fr:Tondeuse à gazon", "en:Lawn mower"] |
| eq_remorque | ["en:Trailer (vehicle)", "fr:Remorque (véhicule)"] |
| eq_signal | ["fr:Cône de signalisation", "en:Traffic cone"] |
| eq_karcher | ["fr:Nettoyeur haute pression", "en:Pressure washer"] |
| eq_broyeur | ["fr:Broyeur de végétaux", "en:Woodchipper"] |
| eq_van | ["fr:Ford Transit", "en:Ford Transit"] |
| eq_nacelle | ["fr:Nacelle élévatrice", "en:Aerial work platform"] |
| eq_balayeuse | ["en:Street sweeper", "fr:Balayeuse de voirie"] |
| eq_tracteur | ["fr:Épareuse", "en:Flail mower"] |
| eq_hydro | ["fr:Hydrocureuse", "en:Vacuum truck"] |
| eq_trons | ["fr:Tronçonneuse", "en:Chainsaw"] |
| eq_plaque | ["en:Plate compactor", "fr:Plaque vibrante"] |
| eq_benne | ["fr:Iveco Daily", "en:Iveco Daily"] |
| eq_pelle | ["fr:Mini-pelle", "en:Compact excavator"] |
| eq_traceuse | ["en:Road surface marking", "fr:Marquage routier"] |
| eq_saleuse | ["fr:Saleuse", "en:Winter service vehicle"] |
| eq_benne19 | ["fr:Camion-benne", "en:Dump truck"] |


## `IRAF` —  

`197`


## `ITR` —  (4 éléments)

man, qual, chauf, engin


## `JOURS` —  (7 éléments)

dimanche, lundi, mardi, mercredi, jeudi, vendredi, samedi


## `KENOPAY` —  (3 éléments)

| clé | valeur |
|---|---|
| 3 | 5 |
| 4 | 43 |
| 5 | 500 |


## `KIND` —  (5 éléments)

| clé | valeur |
|---|---|
| social | droit social |
| mp | marchés publics |
| fiscal | droit fiscal |
| commercial | droit commercial |
| penal | droit pénal social |


## `LOU_AG` —  

`0.08`


## `MOIS` —  (12 éléments)

janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre


## `MORT_RATE` —  

`0.033`


## `NOMS` —  (20 éléments)

Dubois, Lambert, Martin, Dupont, Peeters, Simon, Laurent, Leclercq, Renard, Lejeune, Hubert, Collard, Gilson, Pirard, Wauters, Massart, Delvaux, Lemaire, Jacquet, Fontaine


## `ORGC` —  (14 éléments)

| clé | valeur |
|---|---|
| terr | ["terh", "terf", "tern"] |
| plan | ["plan"] |
| offre | ["offre"] |
| cond | ["cond"] |
| recru | ["recc", "recr"] |
| chefp | ["cpp", "cpr", "cpw", "cpt", "cps"] |
| recouv | ["recd"] |
| secr | ["off"] |
| metreur | ["metreur"] |
| meca | ["meca"] |
| qhse | ["qhse"] |
| flotte | ["flotte"] |
| achat | ["ach", "achr", "achs"] |
| form | ["form"] |


## `PAL` —  (4 éléments)

| grass | grass2 | leaf | hillF | hillN | field | ground |
|---|---|---|---|---|---|---|
| #9cb487 | #7f9a70 | None | #a9bccb | #8aa58f | ["#b3b79a", "#a2a88a"] | #8f9d7c |
| #7ccc52 | #5eac3d | ["#7fd35a", "#9be06e", "#62bf47"] | #9cc5c9 | #74b36c | ["#c4e07a", "#9ccf5a"] | #6cb846 |
| #86c049 | #68a338 | ["#3f9a3d", "#4fae47", "#2f8436"] | #99bfc6 | #5fa357 | ["#ead06a", "#b9d66a"] | #79b142 |
| #a2ad4e | #848f3d | ["#e38b2b", "#cf5a2b", "#e9b93a", "#b16c2c"] | #b2b8b2 | #959f5e | ["#c49a55", "#a8a05a"] | #97a149 |


## `PAVJ` —  (4 éléments)

trottoirs, pmr, pontage, p_allee


## `PCAT` —  (7 éléments)

| c0 | c1 |
|---|---|
| car | 🚗 Voitures neuves |
| occ | 🚗 Voitures d’occasion |
| moto | 🏍️ Motos et loisirs |
| home | 🏠 Immobilier |
| boat | ⛵ Bateaux et yachts |
| lux | 💎 Luxe |
| exp | 🌴 Vacances et sorties |


## `PGRP` —  (8 éléments)

| c0 | c1 |
|---|---|
| 🏠 Immobilier | ["home", "loc"] |
| 🔨 Ma maison | ["reno"] |
| 🖼️ Collections | ["coll"] |
| 🚗 Véhicules | ["car", "occ", "moto"] |
| ⛵ Bateaux | ["boat"] |
| 💎 Luxe | ["lux"] |
| 🌌 Démesure | ["ult"] |
| 👨‍👩‍👧 Famille et abonnements | ["fam"] |


## `PREN` —  (32 éléments)

Kevin, Jordan, Mehdi, Steve, Dylan, Bryan, Julien, Maxime, Thomas, Sébastien, Rachid, Jonathan, Cédric, Michaël, Aurélie, Laura, Sarah, Ludovic, Grégory, Benoît, Fabrice, Yannick, Damien, Jessica, Loïc, Arnaud, Samir, Gaëtan, Nathalie, Youssef, Quentin, Jérôme


## `PROC` —  (3 éléments)

| clé | n | d |
|---|---|---|
| fm | Marché de faible montant | Moins de 30 000 € : le pouvoir adjudicateur consulte au moins 3 entreprises. Pas de publication. |
| pn | Procédure négociée sans publication préalable | Moins de 143 000 € : entreprises invitées via e-Procurement. |
| po | Procédure ouverte | Avis publié au Bulletin des Adjudications : toutes les entreprises peuvent remettre offre. Estimation publiée. |


## `RBOSS` —  (14 éléments)

Jean-Marc Lhoest, Didier Bastin, Pascale Gobert, Frédéric Noël, Véronique Laloux, Philippe Dachouffe, Christophe Lekeu, Bernadette Mathieu, Olivier Jadot, Sabine Collard, Gérard Thiry, Luc Hansoul, Martine Debras, Pierre Wéry


## `RCA` —  (3 éléments)

1200000, 4500000, 18000000


## `RIVT` —  (12 éléments)

| c0 | c1 | c2 | c3 | c4 |
|---|---|---|---|---|
| Vert-Bord SRL | 0 | ["dechets", "debrous", "panneaux"] | 0.96 | 48 |
| Ets Lambotte & Fils | 0 | ["dechets", "debrous", "glissieres"] | 1 | 55 |
| EcoBerme SRL | 0 | ["dechets", "panneaux", "glissieres"] | 0.93 | 40 |
| Condroz Paysage | 0 | ["debrous", "elagage", "dechets"] | 0.99 | 58 |
| Fauche & Fils SRL | 1 | ["fauchage", "debrous", "talus", "enherb"] | 0.95 | 62 |
| Ardenne Entretien SA | 1 | ["fauchage", "elagage", "debrous", "dechets"] | 0.98 | 66 |
| Mosan Services SA | 1 | ["balayage", "avaloirs", "dechets", "panneaux", "lavage", "desherbspw"] | 0.97 | 60 |
| Hainaut Voirie SA | 1 | ["avaloirs", "balayage", "glissieres", "bassins", "trottoirs"] | 1.01 | 57 |
| Famenne Travaux SRL | 1 | ["elagage", "debrous", "fauchage", "souches"] | 0.94 | 52 |
| Val de Meuse Services | 1 | ["panneaux", "glissieres", "balayage"] | 0.99 | 63 |
| Routes Propres SA | 2 | ["dechets", "panneaux", "glissieres", "debrous", "fauchage", "balayage", "elagage", "avaloirs", "fosses", "nids", "marquage", "deneig", "glis_pose", "invasives", "abattage", "desherbspw", "souches", "talus", "bassins"… | 1.02 | 74 |
| Wallonie Entretien Routier SA | 2 | ["dechets", "panneaux", "glissieres", "debrous", "fauchage", "balayage", "elagage", "avaloirs", "fosses", "nids", "marquage", "deneig", "glis_pose", "invasives", "abattage", "desherbspw", "souches", "talus", "bassins"… | 0.97 | 78 |


## `ROUGE` —  (18 éléments)

1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36


## `RSTY` —  (5 éléments)

| clé | valeur |
|---|---|
| casse | ["🔪", "Casseur de prix", "Remet des offres très basses pour gagner à tout prix."] |
| hiver | ["❄️", "Spécialiste de l’hiver", "Imbattable sur le déneigement et le salage."] |
| qual | ["⭐", "Champion de la qualité", "Prix plus élevés, mais très bonne réputation."] |
| agr | ["🎣", "Chasseur de têtes", "Essaie de débaucher tes meilleurs ouvriers."] |
| fam | ["🏡", "Entreprise familiale", "Prudente et régulière, très ancrée localement."] |


## `SCR` —  (6 éléments)

| c0 | c1 |
|---|---|
| 1000 | 0.0001 |
| 100 | 0.001 |
| 10 | 0.02 |
| 5 | 0.04 |
| 2 | 0.1 |
| 1 | 0.2 |


## `SFX` —  (4 éléments)

| clé | valeur |
|---|---|
| atel | 🔧 Atelier : usure des machines -8 % |
| cuve | ⛽ Cuve de gasoil (achat en vrac) : carburant -7 % |
| tri | ♻️ Aire de tri : mise en décharge -25 % |
| lav | 🚿 Station de lavage : matériel propre, +1 réputation par chantier fini |


## `SHCTY` —  (4 éléments)

| clé | valeur |
|---|---|
| disc | Discount |
| sup | Supermarchés |
| prox | Proximité |
| bio | Bio |


## `SHMDD` —  (6 éléments)

ep, bs, hy, sn, cr, su


## `SHPD` —  

`pom\|fl\|Pommes (kg)\|1.35\|10\|21\|18\|0\|0\|1.2 ban\|fl\|Bananes (kg)\|1.05\|18\|6\|22\|0\|0\|1.1 tom\|fl\|Tomates (kg)\|1.90\|6\|7\|14\|s\|h\|1.2 sal\|fl\|Salade\|0.55\|12\|4\|10\|s\|h\|1.3 car\|fl\|Carottes (kg)\|…`


## `SHWD` —  (7 éléments)

0.62, 0.82, 0.88, 0.92, 1, 1.18, 1.45


## `SH_AG` —  

`18000000`


## `SH_PRICE` —  

`75000000`


## `SITE_RATE` —  

`0.042`


## `SKIN` —  (6 éléments)

#f1c9a5, #e0ac7e, #c68a5a, #8d5a3b, #f5d6b8, #d9a066


## `SKY` —  (5 éléments)

| clé | valeur |
|---|---|
| sun | ["#2f8ff0", "#9fd6ff", "#e6f6ff"] |
| cloud | ["#6c9ccc", "#c6dbea", "#e8f0f5"] |
| rain | ["#536677", "#91a1ae", "#b9c4cc"] |
| storm | ["#28323f", "#55616f", "#7d8996"] |
| snow | ["#a3b3c3", "#d6e0e9", "#f2f6f9"] |


## `SPD` —  (4 éléments)

0, 4500, 1800, 600


## `SPWJ` —  (52 éléments)

dechets, panneaux, glissieres, debrous, fauchage, balayage, elagage, avaloirs, fosses, nids, marquage, deneig, glis_pose, invasives, abattage, desherbspw, souches, talus, bassins, trottoirs, enherb, lavage, autoroute, tunnels, marq_auto, deneig_auto, balay_auto, egouts, grilles, tags, affiches, bornes, panneaux_pose, cloture, ronds, plantations, haies_spw, batraciens, ravel, abribus, poubelles, accident, feuillesspw, pontage, gabions, bermes, falaises, ruisseaux, epareuse_auto, depots_sel, pmr, aires


## `TEAMS` —  (14 éléments)

| c0 | c1 |
|---|---|
| Club Brugge | 88 |
| Union Saint-Gilloise | 86 |
| Anderlecht | 84 |
| Genk | 82 |
| La Gantoise | 78 |
| Antwerp | 78 |
| Standard de Liège | 75 |
| Sporting Charleroi | 73 |
| Malines | 72 |
| Cercle Brugge | 70 |
| Westerlo | 69 |
| OH Louvain | 68 |
| Saint-Trond | 66 |
| Dender | 64 |


## `TERRK` —  (10 éléments)

man, qual, chauf, engin, grimp, ramas, signal, paveur, peintre, chef


## `TOWNS` —  (28 éléments)

Namur, Liège, Charleroi, Mons, Arlon, Bastogne, Dinant, Marche-en-Famenne, Wavre, Nivelles, Tournai, Verviers, Huy, Ciney, Libramont, Spa, Durbuy, Philippeville, Gembloux, Ath, Andenne, Rochefort, Neufchâteau, Waremme, Bouillon, Chimay, Malmedy, Hannut


## `VOK` —  (12 éléments)

👷, 🦺, 🚧, ⛑️, 🧹, 🚜, 🪣, 🌳, 🚛, 🧤, 🛞, 🪚


## `VPB` —  (10 éléments)

| c0 | c1 |
|---|---|
| 📱 | Ouvrier au GSM pendant le travail |
| 🚬 | Cigarette à côté du jerrycan d’essence |
| 🍺 | Canette de bière sur le chantier |
| 🩴 | Pas de chaussures de sécurité |
| 👕 | Gilet fluo oublié au bord de la route |
| 🔥 | Feu de déchets (interdit) |
| ⛔ | Panneau de chantier renversé |
| 🛢️ | Fuite d’huile de la machine |
| 😴 | Ouvrier qui dort dans la camionnette |
| 🎧 | Casque audio au lieu des protections auditives |


## `VPPAY` —  (9 éléments)

| c0 | c1 |
|---|---|
| Quinte flush royale | 800 |
| Quinte flush | 50 |
| Carré | 25 |
| Full | 9 |
| Couleur | 6 |
| Quinte | 4 |
| Brelan | 3 |
| Deux paires | 2 |
| Paire de valets ou mieux | 1 |


## `WDM` —  

`21.7`


## `WX` —  (5 éléments)

| ic | n | f | k |
|---|---|---|---|
| ☀️ | Soleil | 1 | sun |
| ⛅ | Nuageux | 1 | cloud |
| 🌧️ | Pluie | 0.7 | rain |
| ⛈️ | Orage | 0 | storm |
| ❄️ | Neige | 0 | snow |


# PARTIE D — État d’une nouvelle partie (`defaults()`)

Structure de la sauvegarde au départ (clé localStorage `routenette-save`). Les modules (nettoyage `st.cl`, magasins `st.shop`, vie privée `st.priv`, holding `pv().ph`…) ajoutent leurs champs plus tard.

```json
{
 "schema": 6,
 "name": "Ma petite entreprise",
 "cash": 3000,
 "rep": 10,
 "day": 0,
 "adm": {},
 "cls": 0,
 "loan": 0,
 "nid": 2,
 "workers": [
  {
   "id": 1,
   "n": "Toi",
   "r": "boss",
   "boss": 1,
   "sk": 1,
   "day": 0,
   "pc": 0,
   "skin": 0,
   "base": 1,
   "mot": 1,
   "hd": 0,
   "warn": 0
  }
 ],
 "eq": {},
 "tenders": [],
 "jobs": [],
 "contracts": [],
 "inv": [],
 "cand": [],
 "log": [],
 "stats": {
  "won": 0,
  "lost": 0,
  "done": 0,
  "ca": 0,
  "spw": 0,
  "earned": 0
 },
 "refs": {},
 "riv": null,
 "priv": {
  "cash": 0,
  "own": [],
  "tr": 0
 },
 "salAcc": 0,
 "reports": [],
 "mStart": 3000,
 "mCapex": 0,
 "mLoan": 0,
 "lastTax": null,
 "srl": 0,
 "mon": {},
 "mv": [],
 "lastMon": null,
 "goals": {},
 "sel": null,
 "wx": 0,
 "started": false,
 "snd": 1,
 "over": false,
 "itq": [],
 "itAcc": 0
}
```


# PARTIE E — Index de toutes les fonctions du code

786 fonctions nommées dans `index.html` (5337 lignes, 920 Ko). Format : `nom(paramètres)` · ligne.


## Nettoyage (2e entreprise) (107)

`clAccTick()` L4351 · `clAcq(n,ok)` L4270 · `clAd(k)` L4397 · `clAdTick()` L4398 · `clAdm(k)` L3930 · `clAnCard()` L4433 · `clAnDay(cap,lost,D,tsd)` L4431 · `clAnswer(q)` L3945 · `clApport(a,ok)` L4073 · `clAutoHire()` L4031 · `clAva(w,sz)` L4189 · `clBack(a)` L4075 · `clBankrupt()` L4080 · `clBar(p,col)` L4134 · `clBid(id,coef,silent)` L3965 · `clBigMonth()` L4402 · `clBoost(id)` L4335 · `clBuilding(x,y,w,h,col,roof,lit,sign)` L4359 · `clBuy(k,n)` L3933 · `clBuyMiss()` L3934 · `clCV(id)` L4320 · `clCandGen()` L3917 · `clCap()` L3888 · `clCareerUI()` L4264 · `clCli()` L4158 · `clCompAct(id,i,auto)` L4308 · `clCompCard()` L4311 · `clCompTick()` L4305 · `clCost(a,l)` L4298 · `clCreate(cap,by)` L4112 · `clCreateUI()` L4109 · `clCrisisUI()` L4078 · `clCtrUI(id)` L4330 · `clDecAct(id,i,auto)` L4301 · `clDecCard()` L4302 · `clDecTick()` L4299 · `clDemGen()` L3938 · `clDiv(a,ok)` L4070 · `clDqCard()` L4428 · `clDqGen()` L4424 · `clDqMonth()` L4427 · `clDqTick()` L4425 · `clDqWin(t)` L4426 · `clDraw(t)` L4361 · `clFire(id,ok)` L3924 · `clFix(C)` L4356 · `clFixedL()` L3900 · `clGoalCard()` L4136 · `clGoals()` L4100 · `clHire(id,silent)` L3920 · `clHireAuto(r)` L3923 · `clHome()` L4148 · `clHours(id,d)` L4324 · `clInvC(c)` L4038 · `clLoan(a)` L4077 · `clLog(t,imp)` L3874 · `clMach(c)` L3881 · `clMat()` L4205 · `clMegaGo(k,ok)` L4259 · `clMegaTick()` L4263 · `clMonth()` L4039 · `clMove(k,ok)` L4242 · `clMv(a,l,cat)` L3873 · `clNeeds()` L3882 · `clNew(name,cap)` L3871 · `clNotifUI()` L4355 · `clNotifs()` L4353 · `clOffHire(k,d)` L3927 · `clOpen(t)` L3967 · `clPerson(r)` L3915 · `clPoolWeek()` L4395 · `clPrime(id)` L4325 · `clPub()` L4181 · `clQualScore()` L3964 · `clQuote(id,lv,silent)` L3943 · `clRankCard()` L4278 · `clRenAct(id,a,auto)` L4406 · `clRenCard()` L4410 · `clRenTick()` L4409 · `clRender(headOnly)` L4118 · `clReneg(id)` L4336 · `clRenew(c)` L4405 · `clRivGen()` L4268 · `clRptAct(id,a)` L4314 · `clRptCard()` L4318 · `clRptTick()` L4313 · `clSeg(cur,items,k)` L4132 · `clSell(k)` L3935 · `clSetPay(i,ok)` L4391 · `clSiteCard()` L4209 · `clSoc()` L4211 · `clStop(id,ok)` L4337 · `clTabs()` L4128 · `clTeam()` L4191 · `clTenGen()` L3952 · `clTenReq(t)` L3957 · `clTick()` L3975 · `clTile(l,v,cls)` L4133 · `clTodo()` L4138 · `clTrain(id)` L4326 · `clTsAccept(silent)` L4029 · `clUnlock(ok,by)` L4103 · `clVisDraw()` L4342 · `clVisEnd()` L4347 · `clVisTap(i)` L4346 · `clVisit(id)` L4339 · `clXP(n)` L4249


## Magasins (3e entreprise) (139)

`shAfsca(s)` L4951 · `shAn(r,ca,cg,ls)` L4902 · `shArrive(o)` L4729 · `shAutoOrder()` L4787 · `shAutoOrder0()` L4788 · `shAvg(s,p)` L4703 · `shBalance()` L4986 · `shBankrupt()` L4847 · `shBest(p)` L4790 · `shBest0(p)` L4791 · `shBuyBld(loan)` L5256 · `shCancel(id)` L4727 · `shCandGen()` L4782 · `shCap(c)` L4886 · `shCapS(s)` L5210 · `shCliF(s)` L4891 · `shCloseStore(ok)` L5258 · `shCmd()` L4863 · `shCmd2()` L5129 · `shCompBuy(id,ok)` L5032 · `shCompGen()` L5030 · `shCreate(cap,by)` L4831 · `shCreateUI()` L4827 · `shCrisisUI()` L4846 · `shDecAct(id,i,auto)` L4948 · `shDecCard()` L4949 · `shDecTick()` L4946 · `shDelDays(f,from,n)` L4701 · `shDep(k)` L5249 · `shDiv(a,ok)` L4818 · `shDqCard()` L4927 · `shDqGen()` L4923 · `shDqTick()` L4925 · `shDraw(t)` L5273 · `shEcGo(k)` L5038 · `shEq(k)` L5250 · `shEvt(d)` L5190 · `shEvtCard()` L5269 · `shFire(id,ok)` L4784 · `shFireLaw(w)` L5090 · `shFix2(S)` L4888 · `shFix3(S)` L5215 · `shFixed2(L)` L5048 · `shFixedL()` L4793 · `shFolder()` L4984 · `shFour()` L4870 · `shFrAcc(ok)` L5041 · `shFrCA(f)` L5040 · `shFrGo()` L5039 · `shGBtn(on,lab,fn,extra)` L5099 · `shGaspi(s,d)` L4957 · `shGoals()` L4822 · `shGrp()` L5100 · `shHire(id)` L4783 · `shHome()` L4849 · `shHomeTop()` L5096 · `shHours(s)` L4757 · `shImmo()` L5266 · `shIncoming(s,p,until)` L4705 · `shInsTog(k)` L5046 · `shInvent()` L4985 · `shItAgGo(ok)` L5043 · `shItHire(id)` L4976 · `shItOrder(r,n,wk)` L4975 · `shLawAct(id,a)` L4961 · `shLawCard()` L4966 · `shLawNew(k,amt,t)` L4960 · `shLawTick()` L4964 · `shLoan(a)` L4819 · `shLog(t,imp)` L4693 · `shMag()` L4871 · `shMag2()` L5228 · `shMallBuy(k,ok)` L5263 · `shMallSell(k,ok)` L5264 · `shMddGo()` L5037 · `shMegaGo(k)` L5013 · `shMegaTick()` L5014 · `shMgr(s)` L4756 · `shMonth()` L4802 · `shMonth2()` L5050 · `shMq(k,n)` L4903 · `shMv(a,l,cat)` L4692 · `shNeed(s)` L4977 · `shNew(nm,cap,town)` L4689 · `shNewOrder(f)` L4713 · `shNotifUI()` L4845 · `shNotifs()` L4844 · `shOpenGo()` L5023 · `shOpenUI()` L5018 · `shOrderUI()` L4714 · `shPerson(r)` L4781 · `shPmAdd(s,k,v)` L5217 · `shPrjGo(k)` L5001 · `shPrjTick()` L5002 · `shPromo(p,pct)` L4816 · `shQ(p,d)` L4722 · `shRank()` L5093 · `shRayF(s,r)` L5207 · `shRecOrder()` L4982 · `shReceive(id,mode)` L4730 · `shRender(headOnly)` L4837 · `shReno()` L5251 · `shRestock(s,capR)` L4758 · `shRhAuto(wd)` L4978 · `shRoom(s)` L4724 · `shRpt(w,k)` L4968 · `shRptAct(id,a,auto)` L4969 · `shRptCard()` L4972 · `shSatS(s)` L5208 · `shSeason(p)` L4708 · `shSellBld(ok)` L5257 · `shSellDay(s,d,wd)` L4759 · `shSend(silent)` L4725 · `shSetCo(r,v)` L4815 · `shSetS(k,v)` L5248 · `shSoc()` L4877 · `shSoc2()` L5125 · `shStock()` L4858 · `shStock2()` L5128 · `shStore(k,town,S)` L4690 · `shStoreF(s)` L5206 · `shStoreMonth(S)` L5218 · `shStoreSel()` L4848 · `shSuggest(s,p,f,dd)` L4706 · `shSuggestAll()` L4723 · `shSvcDay(s,cli)` L5268 · `shTabs()` L4836 · `shTeam()` L4874 · `shTeam2()` L5120 · `shTick()` L4739 · `shTick2(d,wd)` L5074 · `shTmp(s,f,days,n)` L4901 · `shTrain(id)` L4974 · `shTruck()` L5026 · `shUnlock(ok,by)` L4824 · `shUpgrade(k,ok)` L5252 · `shWhGo(buy)` L5025 · `shWx(p)` L4709 · `shXP(n)` L4909


## Holding de groupe (18)

`hApport(k)` L4475 · `hBuyPart(k,pct,ok)` L4496 · `hCall(k)` L4485 · `hCapital(k,a,ok)` L4486 · `hCreate(cap)` L4472 · `hCreateUI()` L4465 · `hEnt(k)` L4478 · `hLend(k,a)` L4484 · `hLog(t,imp)` L4459 · `hMonth()` L4510 · `hOffers()` L4494 · `hOrg()` L4535 · `hOut(a,ok)` L4490 · `hPoolDay()` L4508 · `hSellCl(ok)` L4504 · `hSellPart(id,ok)` L4500 · `hTile(l,v,c)` L4539 · `hUp(k,a)` L4481


## Filiales Europe (26)

`euBack(k)` L1039 · `euBid(k,i)` L1034 · `euCard()` L1099 · `euCreate(k,i)` L992 · `euDecAct(id,i,k)` L1081 · `euDirCard(k,c,i,mode)` L987 · `euDirUI(k)` L996 · `euDiv(k)` L708 · `euFiche(k)` L1082 · `euFicheOps(k,F)` L1105 · `euGen(k)` L986 · `euHoldAuto()` L1046 · `euMach(k,t)` L1041 · `euMachUI(k)` L1043 · `euMap()` L1075 · `euMonth()` L1001 · `euOpen(k)` L990 · `euReq()` L707 · `euScene(k)` L2021 · `euSell(k,ok)` L714 · `euSend(k,n)` L1037 · `euSwap(k,i)` L997 · `euTenderTick(k,F)` L1029 · `euUI()` L717 · `euUp(k,ok)` L710 · `euVal(k)` L713


## Locations privées / gestionnaire (27)

`glAuto()` L2494 · `glBld(id,on)` L2490 · `glBldCard(o)` L2485 · `glCands()` L2456 · `glFire(ok)` L2481 · `glHire(i,ok)` L2474 · `glSave()` L2457 · `glTier(t)` L2480 · `glUI(t)` L2458 · `louAct(id,a,ok)` L2497 · `louCard(o)` L2511 · `louDay()` L2400 · `louDelay(m,lv)` L2384 · `louEnd(o,exp)` L2391 · `louFee(o)` L2380 · `louFix(o)` L2371 · `louFree(o,msg)` L2389 · `louJuge(o,auto)` L2397 · `louMkt(o)` L2368 · `louMonth(o)` L2406 · `louSetup(id,m,lv)` L2427 · `louStart(id)` L2451 · `louStart0(o,m,lv)` L2445 · `louStat(o)` L2386 · `louTaxM(o)` L2381 · `louTaxTick()` L2423 · `louTen(o,m,r,d)` L2369


## Vie privée (80)

`agOut(ok)` L3281 · `bacPlay()` L2672 · `bjDraw(msg)` L2667 · `bjHit()` L2658 · `bjStart()` L2657 · `bjStop(nat)` L2659 · `bonusGo(ok)` L3226 · `casEnd()` L2629 · `casPay(bet)` L2627 · `casWin(a)` L2628 · `cashFx()` L2818 · `ccCard()` L3326 · `ccMonth()` L3299 · `ccMove(a)` L3293 · `ccPayBack()` L3298 · `cmGo()` L3282 · `cmp(u,bpc,gc)` L504 · `collMonth()` L1210 · `diceRoll()` L2693 · `familyMonth()` L1207 · `flipGo(id,ok)` L3312 · `flipMonth()` L3315 · `invMove(k,a)` L2755 · `invoice(amt,delay,lbl)` L1392 · `kenoPlay()` L2700 · `kenoTog(n)` L2699 · `lifeEvents()` L2549 · `liqOut(ok)` L3224 · `liqPut(a)` L3223 · `mkDay()` L2596 · `mkMonth()` L2598 · `mkTex()` L3450 · `mkW(r)` L1524 · `pBien(id)` L3189 · `pBiens(own)` L3181 · `pBuy(k,loan,ok)` L2534 · `pCharge(o)` L2382 · `pEv(t,a,toast)` L2529 · `pHead()` L2809 · `pPhoto(k)` L3179 · `pScene()` L2798 · `pSell(id,ok)` L2540 · `pSellVal(o)` L2527 · `pShop(net)` L3201 · `pThumb(k,ic)` L3178 · `pTransfer(a,kind)` L2543 · `pValue(o)` L2530 · `parisBet(i,k)` L1215 · `parisGen()` L1214 · `phBuy(k)` L3241 · `phDiv(a)` L3239 · `phGo(ok)` L3236 · `phMonth()` L3243 · `phOut(a)` L3240 · `phSell(id)` L3242 · `phTrans(ok)` L3250 · `privClose()` L2795 · `privInvest()` L2745 · `privMonth()` L2564 · `privMonthly()` L2533 · `pvBudget()` L3158 · `pvGo(k)` L2796 · `pvHappy(net)` L3169 · `pvHome(net,worth)` L3171 · `pvMonth4()` L3284 · `pvMonth5()` L3329 · `pvPayMore()` L3267 · `pvTable(t)` L1387 · `pvWorthTick()` L3170 · `roulSpin()` L2632 · `scrBuy()` L2704 · `scrOpen(i)` L2707 · `slotSpin()` L2645 · `stkBuy(k,amt)` L2601 · `stkSell(k,part)` L2604 · `vpDeal()` L2686 · `vpDraw()` L2690 · `vpEval(h)` L2682 · `vpGo()` L2688 · `vpHold(i)` L2687


## Intérim (19)

`itAgYear()` L1904 · `itArrive()` L1831 · `itBack(id,ok)` L1837 · `itBackAll(onlyFree,ok)` L1840 · `itBusySet()` L1856 · `itBuy(k,ok)` L1905 · `itCond()` L1873 · `itDaily(work,x)` L1864 · `itDelay(n)` L1824 · `itFeel(w)` L1848 · `itHire(id,ok,by)` L1850 · `itHireAll(ok)` L1858 · `itLater(id)` L1862 · `itMonth()` L1902 · `itNeed()` L1857 · `itOrder(r,n,dur,by)` L1826 · `itOrderUI()` L1830 · `itReturn(w)` L1836 · `itStars(w)` L1844


## Géant / milliardaire (11)

`indexTick()` L1957 · `mBtn(t,k,D)` L2075 · `mCard(t,k)` L2077 · `mOwned()` L2074 · `megaBuy(t,k,ok)` L2052 · `megaGift(k,ok)` L2065 · `megaGo(k,ok)` L885 · `megaMonth()` L2060 · `megaSell(t,k,ok)` L2057 · `megaTick()` L891 · `richRank()` L2068


## Personnel / rôles automatiques (48)

`achBuy(t,why)` L2163 · `achCard()` L2190 · `achLog(t)` L2159 · `achStatus()` L2183 · `achWants()` L2165 · `achatNeed()` L2176 · `achatTick()` L2177 · `autoAccept()` L1777 · `autoBid()` L1788 · `autoStaff()` L1790 · `avatar(w,sz)` L1585 · `avatar0(w,sz)` L1586 · `bureauMoney()` L3054 · `bureauPrio()` L3023 · `chefpTick()` L1894 · `condRebalance()` L1783 · `cvOf(w)` L1609 · `cvUI(kind,ix)` L1622 · `fire(id,ok)` L2119 · `hire(i)` L2113 · `hireBlock(kind,ix)` L1637 · `hireRole(r)` L2115 · `interview(ix)` L1644 · `observe(c,crew)` L1534 · `orgIdle(w)` L2909 · `orgLog(t)` L2908 · `orgStatus()` L3007 · `orgaCard()` L3017 · `orgaTick()` L2992 · `pick2r(g,a)` L1601 · `pickFor(c,onlyFree)` L1763 · `recruTick(x)` L1882 · `roleAfford(r,F)` L3062 · `roleGain(r,F)` L3058 · `rolesMonth()` L1953 · `rptAct(id,a,ok)` L1546 · `staffStat(w)` L1571 · `terCard()` L2985 · `terLog(t)` L2914 · `terNeed()` L2919 · `terPlan()` L2938 · `terSnap()` L2932 · `terStats()` L2978 · `terStatus()` L2971 · `terWhy(R)` L2970 · `terrTick()` L2962 · `trainOne(by)` L1772 · `trainPC(id)` L2121


## Marchés publics (19)

`awardMe(t)` L1378 · `bidGo(id)` L1351 · `bidTotal(pu,t)` L1329 · `bidUI(id)` L1331 · `bidUpd(id)` L1348 · `decide(t)` L1365 · `draw(t)` L3588 · `drawMetre(id)` L1342 · `drawVisit()` L922 · `genJob(force)` L1252 · `genTender(forceJob,urgent)` L1280 · `openBids(t)` L1355 · `recEligible(t)` L1182 · `recUI(id)` L1183 · `rect(x,y,w,h,c)` L3462 · `spwCheck(c)` L1190 · `spwF()` L1309 · `spwReq(t)` L1308 · `spwReq0(t)` L1310


## Dessin / scène (13)

`car(x,y,c,flip,s)` L3499 · `coinPop(a)` L3458 · `confetti(n)` L1749 · `hills(par,base,amp,col,seed)` L3478 · `house(x,y,s,c,roof)` L3485 · `introEnd()` L3785 · `introRun(force)` L3732 · `introTog()` L3798 · `shadow(x,y,w,a)` L3464 · `sweeper(x,y,t)` L3516 · `tractor(x,y,t,vy,park)` L3509 · `van(x,y,t,load)` L3492 · `worker(x,y,t,o)` L3534


## Divers (simulation, interface, argent, calendrier…) (279)

`LZmk()` L503 · `acAccept(id)` L1980 · `acCard()` L1989 · `acMonth()` L1983 · `acOffer()` L1977 · `acRefuse(id)` L1981 · `accReq(r)` L754 · `acceptJob(id,FW)` L1263 · `accidentTick()` L1132 · `acqUI()` L767 · `acquire(n,ok)` L755 · `adCard()` L1249 · `adToggle(k)` L1244 · `addFriend(o,show)` L814 · `addSite(k,loan,ok)` L664 · `addWork(d,n)` L578 · `addXP(n)` L841 · `adviceCard()` L3380 · `aidList()` L1487 · `amGo(id)` L1198 · `arrowTrailer(x,y,t)` L3506 · `ask(txt,yes,o)` L2786 · `askYes()` L2790 · `b64d(c)` L804 · `barrierSign(x,y)` L3532 · `bars(H,w,h)` L3376 · `base()` L1526 · `beacon(x,y,t)` L3490 · `bigEvCard()` L1972 · `bigEvTick()` L1969 · `bilanCard()` L3117 · `bizSum()` L3402 · `bourseUI()` L789 · `branchPile(x,y)` L3584 · `bush(x,y,r,pal)` L3574 · `buy(t)` L2157 · `buyAdm(k)` L2198 · `buyFees(k,loan)` L2531 · `buyTier(t,tr,ok)` L2154 · `carPct()` L893 · `careerUI()` L899 · `chalGo(u)` L1219 · `chevrons(x,y,w,h)` L3491 · `chkV(man)` L5301 · `church(x,y,s)` L3486 · `circ(x,y,r,c)` L3463 · `clawback()` L2344 · `cleanReports()` L1566 · `cleaner(x,y,t,o)` L4360 · `closeM()` L2791 · `clsFor(v,nat)` L1277 · `clsOk(u)` L2199 · `cone(x,y)` L3531 · `confLoop(p)` L1750 · `conge(x)` L575 · `copySave()` L2767 · `copyTxt(t)` L807 · `costWarn(r,nm)` L2982 · `costWarnMonth()` L2984 · `dashCard()` L3394 · `dayKind(d)` L576 · `dec(len,rv,gn)` L512 · `decAct(id,i)` L969 · `decCard()` L971 · `decTick(work)` L964 · `defaults()` L473 · `doIns()` L5326 · `dqCard()` L908 · `dqGen()` L858 · `dqTick()` L865 · `dropSite(id,ok)` L670 · `dropW(w)` L1567 · `easter(y)` L570 · `ell(x,y,rx,ry,c)` L3466 · `empireCard()` L794 · `eqPlan(j,ex)` L1325 · `events(work)` L1514 · `excavator(x,y,t,ax)` L3526 · `exportSave()` L2766 · `f(n)` L1750 · `failUI()` L1470 · `ferie(x)` L572 · `finUI()` L894 · `finish(c)` L1491 · `fixedList()` L610 · `fondGive(a,ok)` L786 · `fortuneCard()` L3324 · `frame(now)` L3743 · `freeCount()` L1262 · `freeEq(t,ex)` L1321 · `freeW(ex)` L1322 · `friendHash()` L817 · `friendUI(u)` L821 · `friendsCard()` L828 · `fullScreen()` L3723 · `goalCard()` L2848 · `goals()` L1753 · `grate(x,y,dirty)` L3579 · `grpMonth()` L761 · `grpSell(i,ok)` L759 · `grpValue()` L774 · `healthMonth()` L1203 · `hedge(x,y,w,trim,i)` L3580 · `hh(n)` L3457 · `hidePhoto(k)` L3150 · `hillY(x,par,base,amp,seed)` L3477 · `holdGo(ok)` L1047 · `hubHoldCard()` L4533 · `hubShopCard()` L4225 · `hydroTruck(x,y,t,gx,gy)` L3522 · `importGo()` L2769 · `importUI()` L2768 · `inApp()` L5313 · `inSeason(J,m)` L1259 · `inoGo(k,ok)` L739 · `inoTick()` L743 · `inoUI()` L744 · `insCard()` L1234 · `insLater()` L5325 · `insTog(k,ok)` L1231 · `ipoGo(ok)` L779 · `ipoReq()` L778 · `ipoSell(ok)` L782 · `ippYear(x)` L1458 · `isAndroid()` L5314 · `isChrome()` L5315 · `isIOS()` L5312 · `jasonW()` L1647 · `jobHead(J,sub,right)` L2849 · `jobMiss(o)` L1260 · `lateBy(c)` L1781 · `lawAct(id,a,ok)` L1163 · `lawCard()` L1187 · `lawChoose(kind,base,title,cb)` L1158 · `lawOpen(c,w)` L1139 · `lawPick(k)` L1162 · `lawTick()` L1168 · `leaves(x,y,i,pal)` L3583 · `litter(x,y,r)` L3556 · `liveRes()` L3370 · `ln(x1,y1,x2,y2,c,w)` L3468 · `load()` L535 · `loadImg(k)` L3141 · `loan(k)` L2762 · `loanStep(L)` L652 · `log(t,toast)` L583 · `loop(now)` L3721 · `lorry(x,y,c,flip,s)` L3503 · `lzCompact()` L532 · `lzDone(d)` L529 · `lzPut(k,z)` L527 · `lzSend(m)` L530 · `lzW()` L526 · `migrate(s)` L476 · `monNow()` L3119 · `monthTax(mn)` L1459 · `mortPay(capital)` L2532 · `moveSite(k,loan,ok)` L654 · `mpSoon()` L3786 · `mv(a,t,cat,agg)` L1455 · `nacelleTruck(x,y,t,tx,ty)` L3519 · `newRivals()` L472 · `notifUI()` L2019 · `notifs()` L2009 · `oldcar(x,y,t,trailer)` L3504 · `optUI()` L3789 · `pasteFriend()` L819 · `pauseC(id)` L1568 · `paving(x,y,w,dirty,i)` L3581 · `payAids()` L1490 · `paySalary()` L2334 · `photo(k)` L3151 · `pmc(x,y,c)` L3563 · `poly(pts,c)` L3469 · `preavisW(w)` L1528 · `primeAll()` L1563 · `primeTeam(ok)` L1564 · `rAo()` L2879 · `rBi()` L3421 · `rBourse()` L2735 · `rCasino()` L2708 · `rCh()` L2850 · `rCl()` L4135 · `rEq()` L3063 · `rHold()` L3253 · `rHold2()` L4540 · `rHoldOld()` L3254 · `rHub()` L4228 · `rIt()` L1913 · `rMega()` L2081 · `rMt()` L3103 · `rPb()` L2870 · `rPv()` L3330 · `rSh()` L4843 · `railSeg(x,y,w,dirty,r)` L3572 · `rankCard()` L2005 · `rdS(k)` L524 · `realCost(t)` L1328 · `refreshCand()` L1648 · `relaunch()` L1473 · `releve()` L3121 · `rename()` L2763 · `render(headOnly)` L2825 · `renderTick()` L2824 · `rentOf(o)` L2378 · `repAct(k)` L3305 · `repCard()` L3309 · `repMonth()` L3308 · `rescue()` L1477 · `restart(force)` L2765 · `restorePrev(ok)` L542 · `revise(t,ok)` L1119 · `rivMonth()` L2001 · `rivP(r)` L1999 · `rng(seed)` L1581 · `rr(x,y,w,h,r,c)` L3467 · `rs()` L3455 · `saltTruck(x,y,t)` L3529 · `save(force)` L546 · `saveFull(retry)` L528 · `saveQuit()` L558 · `say` · `season()` L3470 · `seenCost(t,p)` L1327 · `selC()` L3461 · `sell(t,ok)` L2197 · `sellCo(ok)` L3319 · `setName()` L2764 · `setPU(id,i,v)` L1347 · `setSal(v)` L2337 · `shareMe()` L809 · `showIns(force)` L5316 · `showModal(h)` L2783 · `sickMonth()` L3317 · `sign(x,y,kind,dirty,t)` L3564 · `siteAlloc()` L644 · `siteCard()` L685 · `siteMonth()` L653 · `siteUI(mode)` L675 · `snap()` L799 · `snd(f,d,type,v,delay)` L587 · `snowCover(x,y,w)` L3585 · `spark(D,w,h)` L3372 · `sparkS(D,w,h)` L2733 · `specB(c,crew)` L1952 · `standalone()` L5311 · `startDraw(id)` L1798 · `startGo(id)` L1809 · `startUI(id)` L1758 · `step(n)` L2821 · `stepPU(id,i,s)` L1346 · `strHash(t)` L1580 · `stub(x,y)` L3576 · `subK(id,ok)` L1194 · `succUI()` L793 · `tab(t)` L2794 · `tallGrass(x,y,i,t,flowers)` L3577 · `taxAudit()` L1186 · `tick()` L1395 · `tick0()` L1396 · `toastMsg(t,ev)` L584 · `togW(cid,wid)` L1808 · `tree(x,y,s,pal,trim,shape)` L3479 · `trueUnit(j)` L1278 · `tryHire(kind,ix)` L1642 · `turbine(x,y,s,t,ph)` L3487 · `unassign(w)` L1561 · `unionTick()` L1127 · `upCls()` L2200 · `visTap(i)` L926 · `visitEnd()` L927 · `visitUI(id)` L918 · `wearUse(t,c)` L1117 · `weather()` L1390 · `wheel(x,y,r)` L3489 · `withdraw(id)` L1353 · `workCard(ao)` L2104 · `workDaysSince(d)` L1569 · `wxUrgent()` L1123


---
*Fin du dossier.*
