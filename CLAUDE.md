# Route Nette

Jeu mobile 2D (PWA) de gestion d'entreprise d'entretien des routes en Wallonie : on part de zéro, petits boulots, machines, ouvriers, puis marchés publics du SPW.
Un seul fichier `index.html` (canvas 2D, aucune dépendance sauf la police Google « Nunito »), publié par GitHub Pages depuis la branche `main`.
Projet indépendant : ne rien mélanger avec La Fine Crasse ni Krinkels Plan.

L'utilisateur parle français et n'est pas développeur : réponses courtes, en français, étape par étape.

## À chaque modification du jeu
1. Changer `APPV` (second `<script>` en bas de `index.html`) **et** `v` dans `version.json` (même valeur, format `AAAA-MM-JJ.n`, différente à chaque fois).
   Mettre dans `notes` de `version.json` une phrase courte : elle s'affiche dans « Nouvelle mise à jour disponible ».
   Le service worker est enregistré en `sw.js?v=APPV` : son cache (`routenette-<version>`) change tout seul.
2. Commit + push sur `main` ; GitHub Pages publie en 2-3 minutes.

## Sauvegarde : ne JAMAIS faire perdre la progression
- Clé `localStorage` `routenette-save` (+ copie `routenette-bak`). **Ne jamais renommer ces clés.**
- Nouveau champ dans l'état : l'ajouter dans `defaults()` ; `migrate()` complète les vieilles sauvegardes. Monter `SCHEMA` si une conversion est nécessaire et l'écrire dans `migrate()`.
- Ne jamais supprimer une clé de `EQ` ou `JOBS` sans prévoir le remboursement dans `migrate()`.
- Code de sauvegarde (export/import) dans l'onglet Entreprise.

## Lancer
`python3 -m http.server 8000` puis `http://localhost:8000/`. Pas de build.

## Réalisme (Belgique)
- Prix HTVA du matériel relevés en 2026 (annonces truck1.be/.fr, machineseeker, hellopro, moniteurautomobile.be, ledenicheur) : nacelle 20 m occasion 20-45 k€, balayeuse compacte occasion 25-65 k€, hydrocureuse occasion 36-120 k€, Transit plateau 2019 ≈ 25 k€ HTVA, Stihl FS 461 ≈ 1 200 €.
- Salaires ouvriers : barème 2026 CP 145.04 parcs et jardins (cat. 1 = 16,00 €/h … cat. 5 = 18,87 €/h), coût employeur annuel ≈ brut × 1,68 réparti sur ± 236 jours prestés (manœuvre 225 €/jour) ; étudiants max 650 h/an (`w.hy`) ; employés selon salaires moyens belges (aide-comptable ≈ 3 000 € brut).
- Diesel 2,45 €/L TVAC (oct. 2026) → coûts `u` des machines selon la consommation réelle. Impôts : IPP progressif `ippYear()` (25/40/45/50 % + 7,5 % communal, quotité exemptée 10 910 €), cotisations d'indépendant 20,5 % (min. 890 €/trimestre, max. 5 103 €), ISOC 25 % (dirigeant payé < 45 000 €). Intérêts du découvert 9 %/an. Assurance accidents du travail ± 4 % de la masse salariale (jardins).
- Pouvoirs publics : délai unique de paiement de 30 jours depuis le 1/1/2025 (parfois en retard dans le jeu) ; cautionnement 5 % par garantie bancaire (commission ± 1,5 %).
- Marchés publics : faible montant < 30 000 €, procédure négociée sans publication < 143 000 €, procédure ouverte au-delà ; agréation (AR 14/04/2024 : classe 1 ≤ 819 000 €, classe 2 ≤ 2 640 000 €) pour les travaux > 75 000 € ; amende pour retard art. 86 RGE R = 0,45 × M × n²/N² (max 5 %) ; cautionnement 5 % ; délais en jours ouvrables ; jours fériés belges et congés du bâtiment ; chômage intempéries.
- Personnel de bureau fixe : aide-comptable **Angélique Mawet** (nom demandé par l'utilisateur), comptable Marc Delvaux, RH Sophie Lambert, secrétaire Nadia Benali, métreur Olivier Gérard, directeurs Philippe Renard (technique), Isabelle Marchal (DAF), Thierry Collard (commercial).

## Structure du script principal
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
- **Photos réelles** : `IMG` = titres d'articles Wikipédia (fr puis en) pour chaque bien privé et chaque machine (`eq_…`). Le téléphone appelle l’API MediaWiki `…wikipedia.org/w/api.php?…prop=pageimagesLe téléphone appelle l'API REST `…wikipedia.org/api/rest_v1/page/summary/<titre>` (CORS autorisé)origin=*` (CORS autorisé) et affiche la miniature Wikimedia Commons avec un lien 📷 vers l'article (auteur et licence). Cache `localStorage` `rn-img2` (échecs retentés après 24 h). Le serveur de développement n'a pas accès à Wikipédia : photos non vérifiées une par une.
