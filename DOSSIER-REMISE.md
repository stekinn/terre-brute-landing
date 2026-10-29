# Terre Brute Atelier / Dossier de remise

Version du 29 octobre 2026. Le site est un projet pédagogique ; les paiements restent en mode Stripe TEST.

## Accès

- Site WordPress : https://terre-brute-atelier.rf.gd/
- Landing cadeaux WordPress : https://terre-brute-atelier.rf.gd/cartes-cadeaux/
- Maquettes : https://www.figma.com/design/yhNE8liZh7H4gc0UU7i19d/Terre-Brute-Atelier---Landing-finale
- Dépôt : https://github.com/stekinn/terre-brute-landing
- Landing cadeaux statique : https://stekinn.github.io/terre-brute-landing/cartes-cadeaux.html

## Contenu

- mission-1-landing/ : HTML, CSS, JavaScript et photos locales de la landing cadeaux. Ouvrir index.html ; aucune compilation. Les boutons d’achat rejoignent WordPress.
- mission-2-wordpress/ : sources et ZIP installable de l’extension Terre Brute Site et ateliers, version 1.0.28.
- maquettes/ : sources SVG mobile et desktop. Figma conserve les textes et les formes en calques éditables ; l’import nécessite une dernière relecture graphique.
- documents/ : guide utilisateur, arborescence et choix techniques, état de recette. Versions PDF et Markdown.
- recette-responsive/ : cadres de contrôle aux largeurs 320, 390, 768 et 1440 px.
- preuves/ : captures de référence. Les captures ne remplacent pas un audit d’accessibilité.
- chatbot-elevenlabs/ : base de connaissances, consignes et intégration à préparer. Agent non activé à ce stade.

## JavaScript à expliquer à l’oral

assets/gift.js écoute change et input, lit le prix dans data-price, valide un entier de 1 à 8, puis calcule prix × personnes. Intl.NumberFormat formate le montant en euros. Le submit prépare une URL d’ajout au panier WooCommerce. La FAQ utilise details/summary et le script synchronise aria-expanded. VS Code est un éditeur ; le langage employé est bien JavaScript.

## Installation et limites

Le ZIP de l’extension se met à jour dans Extensions > Ajouter > Téléverser. Il dépend de WordPress, WooCommerce et de l’extension de base Terre Brute Landing déjà installée. Ce dossier n’est pas une sauvegarde complète de la base, de la médiathèque ni du thème. Les clés de paiement, secrets OAuth et mots de passe sont exclus. Ne pas désinstaller l’extension du site existant pour la réinstaller.

Les sources statiques sont un instantané : les changements WordPress nécessitent une nouvelle publication GitHub. Les cartes cadeaux sont valables un an ; la réservation du bénéficiaire se gère avec l’équipe via sa référence de commande. La recette PDF détaille ce qui a été contrôlé et ce qui reste à faire. Mission 3 et chatbot opérationnel ne sont pas annoncés comme terminés.
