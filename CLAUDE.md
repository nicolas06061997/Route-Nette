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
- Salaires : barèmes CP 124 (cat. I ≈ 17,74 €/h en 2024) × charges patronales et pécules ; employés selon salaires moyens belges (aide-comptable ≈ 3 000 € brut).
- Marchés publics : faible montant < 30 000 €, procédure négociée sans publication < 143 000 €, procédure ouverte au-delà ; agréation (AR 14/04/2024 : classe 1 ≤ 819 000 €, classe 2 ≤ 2 640 000 €) pour les travaux > 75 000 € ; amende pour retard art. 86 RGE R = 0,45 × M × n²/N² (max 5 %) ; cautionnement 5 % ; délais en jours ouvrables ; jours fériés belges et congés du bâtiment ; chômage intempéries.
- Personnel de bureau fixe : aide-comptable **Angélique** (demandé par l'utilisateur), comptable Marc Delvaux, RH Sophie Lambert, secrétaire Nadia Benali, métreur Olivier Gérard, directeurs Philippe Renard (technique), Isabelle Marchal (DAF), Thierry Collard (commercial).

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
