# Terre Brute Atelier

Projet pédagogique Oreegami : HTML, CSS, JavaScript natifs et WordPress.

## Parcours

- [Accueil statique historique](https://stekinn.github.io/terre-brute-landing/) : conservé.
- [Landing cartes cadeaux finale](https://stekinn.github.io/terre-brute-landing/cartes-cadeaux.html) : nouvelle page avec simulateur de prix et FAQ.
- [Site WordPress](https://terre-brute-atelier.rf.gd/) : ateliers, dates, panier, Stripe TEST et e-mails.
- [Maquettes mobile et desktop](https://www.figma.com/design/yhNE8liZh7H4gc0UU7i19d/Terre-Brute-Atelier---Landing-finale).

## Sources et interactions

Accueil : index.html et assets/ historiques. Landing cadeaux : cartes-cadeaux.html, cadeaux.css, cadeaux.js et cadeaux-*.jpg. Le simulateur calcule prix × personnes, entre 1 et 8, via input/change et Intl.NumberFormat. La FAQ details/summary est utilisable au clavier ; JavaScript synchronise aria-expanded. Les boutons de commande rejoignent WooCommerce.

## Dossier de remise du 29 octobre 2026

Le ZIP Terre-Brute-livrables-1-2.zip contient les sources de la landing, l’extension WordPress 1.0.28, les maquettes SVG, les PDF et leurs sources Markdown, la recette et la préparation ElevenLabs. Les mots de passe et clés d’API sont exclus.

Les trois PDF sont aussi disponibles à la racine du dépôt. Lire DOSSIER-REMISE.md pour l’installation et les limites. Ce paquet ne remplace pas une sauvegarde complète de WordPress. La connexion Gmail, Stripe et les contenus de la base ne sont pas exportés.

## Vérifications et limites

Contrôles observés : stage × 4 = 720 €, quantité zéro rejetée, FAQ au clavier, panier WordPress et administration accessibles. Une réservation Stripe TEST n°69 avait été validée avec réduction du stock. La recette liste les autres contrôles encore ouverts, dont l’achat complet d’une carte cadeau. Les maquettes importées restent à relire visuellement. Aucun score Lighthouse, WAVE ou EcoIndex n’est revendiqué ; la mission 3 reste distincte.

## Usage de l’IA

Codex a aidé à produire le code, la documentation et les exports depuis le brief et les décisions de l’apprenant. Les textes et données de démonstration du projet ne prouvent pas l’existence d’une entreprise réelle. Le journal initial JOURNAL-IA.md est conservé ; la mise à jour actuelle ajoute une vraie publication datée, sans reconstituer d’anciens commits.
