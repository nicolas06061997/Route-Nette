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

## Structure du script principal
- **Données** : `EQ` (matériel, prix HTVA réalistes, `u` = coût par jour d'usage, `veh` = assurance), `ADM` (BCE, RC, VCA), `CLS` (agréation des entrepreneurs, seuils réels), `JOBS` (`p:1` = petit boulot privé, sinon marché SPW ; `rate` par ouvrier-jour, `pu` prix unitaire, `need` matériel, `pc` permis C, `vis` décor).
- **Simulation** : `tick()` = un jour (salaires, `fixedList()`, avancement, factures `st.inv` payées avec délai, appels d'offres, événements, objectifs `GOALS`).
- **Marchés SPW** : `genTender`, conditions `spwReq`, offre `bidUI`, attribution `resolveBid` (75 % prix, 25 % réputation).
- **Interface** : onglets `rCh`, `rPb`, `rAo`, `rEq`, `rMt`, `rBi` ; fenêtres `showModal`.
- **Scène** : `draw(t)` vue de côté en parallaxe (ciel/météo `WX`, saisons `PAL`, collines, éoliennes, route, voitures, décor par métier, véhicules `van`, `tractor`, `sweeper`, `nacelleTruck`, `hydroTruck`, `arrowTrailer`, ouvriers `worker`).
- Second `<script>` : version, mises à jour (`version.json`), installation (bouton, bandeau).
