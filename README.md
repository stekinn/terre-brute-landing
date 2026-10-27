# Terre Brute Atelier — Offrir un atelier

Landing page pédagogique de la mission 1 du brief Oreegami. Intégration HTML5, CSS3 et JavaScript natif, sans framework CSS ni constructeur de pages.

## Fonctionnement

- Trois formules : initiation à 55 €, stage à 180 €, cycle à 390 €.
- Simulateur : formule × nombre de personnes, de 1 à 8, montant actualisé en direct.
- FAQ : accordéon avec boutons, aria-expanded et navigation au clavier.
- Menu mobile, liens internes et cartes défilantes sur mobile.
- Mise en page mobile-first, Flexbox et Grid ; points de rupture à 768 et 1100 px.
- Respect de la préférence de réduction des animations.

## Fichiers

- index.html : structure sémantique et contenu.
- assets/landing.css : charte, typographies et responsive.
- assets/landing.js : calcul, validation, menu et FAQ.
- assets/*.webp : images et texture issues des aperçus disponibles de la maquette.

## Voir la page

Ouvrir index.html dans un navigateur. Aucune compilation requise. Les polices Fraunces 600 et Inter sont chargées depuis Google Fonts ; une connexion est nécessaire pour ces polices.

Pour GitHub Pages : Settings → Pages → Deploy from a branch → main → /(root).

## Vérifications et limites

Les interactions et les largeurs mobiles ont été vérifiées sur l’intégration WordPress issue de ce code. Les validations W3C, l’audit Lighthouse et les essais complets de 320 à 1920 px de cette version statique restent à réaliser : aucun score n’est revendiqué.

Il s’agit d’une démonstration pédagogique. Le bouton de préparation affiche un message de démonstration : aucune réservation, aucun paiement ni achat réel n’est effectué. La vente en mode test relève du site WordPress de la mission 2.

Les images disponibles sont de faible résolution et seront à remplacer par les originaux haute définition optimisés. Les avis agrégés et les données de l’atelier proviennent du scénario du brief ; ce ne sont pas des données vérifiées d’une entreprise réelle.

## Usage de l’IA

Le code a été élaboré avec l’aide de Codex, à partir de la maquette Figma et du brief. Cette première publication rassemble le travail déjà réalisé ; elle ne reconstitue pas un historique de commits antérieur. Le journal détaillé des demandes, corrections et décisions doit être complété par l’apprenant et remis avec le dossier. Chaque partie du code doit pouvoir être expliquée à l’oral.

## Suite du travail

- Corriger les écarts visuels avec la maquette finale.
- Valider HTML et CSS auprès du W3C et corriger les erreurs éventuelles.
- Tester clavier, contrastes et affichage entre 320 et 1920 px.
- Mesurer les performances de la page publiée.
- Documenter les évolutions par des commits explicites.
