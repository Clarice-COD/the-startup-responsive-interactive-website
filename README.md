[INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Ride Out - the startup responsive interactive website
Voor het bedrijf Ride Out ga ik een responsive en interactieve web pagina programmeren. 

## Beschrijving

### Doel van de opdracht vanuit de klant
Het doel van dit project is het ontwikkelen van een interactieve website die verschillende fietsroutes vanuit Komoot van Ride Out laat zien. De fietsroutes worden weergegeven op een scherm in de winkel. Deze website toont de routes en bevat een QR-code waarmee bezoekers de routes kunnen bekijken op hun mobiele telefoon en zo door kunnen klikken op een route naar keuze.

### Gevraagde oplevering vanuit de klant
Voor dit project worden twee pagina’s opgeleverd:

1. Webpagina voor het scherm in de winkel:
- Resolutie: 1080 x 1920 pixels
- Bevat een slideshow en een QR-code die verwijst naar de mobiele pagina
- Er is een Figma-bestand beschikbaar als basis voor het ontwerp

2. Mobiele pagina voor routes:
- Responsive design
- Toont een overzicht van de fietsroutes met aanvullende informatie
- Er is een Figma-bestand beschikbaar als basis voor het ontwerp

Zie meer informatie in de [debriefing](https://github.com/Clarice-COD/the-startup-responsive-interactive-website/issues/2)



### De huisstijl van Ride Out
[Figma bestand](https://www.figma.com/design/D2uZCMGovzNcc8JzulmwMi/I-love-web?node-id=0-1&p=f&m=dev)

Kleurgebruik:

<img width="659" alt="Scherm­afbeelding 2025-01-21 om 22 52 54" src="https://github.com/user-attachments/assets/8fcccea0-ea71-4996-83dc-20a7e670d5df" />

### Responsive
Ik ben begonnen met mobile first. Mobile word het meest gebruikt, zelfs meer dan desktop. Ook is het werken vanuit een klein formaat naar een groot formaat gunstiger omdat niet altijd alle content past op zo'n klein scherm dus kan je daar rekening mee houden. 

Formaten waarop ik heb gefocust
- mobiel
- tablet
- laptop
- laptop L

<img width="300" alt="Scherm­afbeelding 2025-01-21 om 23 08 19" src="https://github.com/user-attachments/assets/2a947121-7704-4944-b636-d3dd20d28ad3" />


Op vraag van de klant heb ik de eerste pagina spiciek op het formaat 1080 x 1920 gemaakt. Dit is het formaat van een scherm die in de winkel staat.

<img width="325" alt="Scherm­afbeelding 2025-01-21 om 23 09 50" src="https://github.com/user-attachments/assets/4ffd4e49-7136-48b7-a2d1-7db74a2362f3" />

### Kleur contrast
Ik heb alle kleuren in het ontwerp van Ride Out getest en de meeste kwamen goed uit de test behalve het onderstaande voorbeeld. Deze test is voor de user friendly en het contrast tussen het verschil ligt heel erg laag. 

<img width="300" alt="Scherm­afbeelding 2025-01-21 om 17 17 41" src="https://github.com/user-attachments/assets/a1b811ff-e74f-408b-899e-709da9919296" />

Vandaar dat ik ben gaan onderzoeken naar andere tinten groen die wel goed scoren in de test. Dit is belangrijk omdat best veel mensen beperkt zijn in hun zicht. 1 op de 12 mannen heeft een vorm van kleurenblind en zou dit dus niet kunnen lezen. De orginele groen gebruik ik wel in de donkere versie, omdat dit uitstekend uit de test was gekomen. Voor de lichte website heb ik dus een donkerdere tint groen gebruikt. Zie het verschil in leesbaarheid hieronder:

Before:

<img width="300" alt="Scherm­afbeelding 2025-01-22 om 21 20 12" src="https://github.com/user-attachments/assets/9c123d4d-3337-4c86-9108-3a7ab6f02abb" />

After:

<img width="300" alt="Scherm­afbeelding 2025-01-22 om 21 20 22" src="https://github.com/user-attachments/assets/fd35dd5e-b97e-410a-8f30-5b1bc300dc55" />

### Automatic slider (scherm winkel)
Deze slider werkt automatisch en is voor op het scherm in de winkel. Elk beeld word 8 secondes in beeld getoond en schuift dan op zodat het volgende beeld getoond word. Deze automatische slider is eindeloos. Zodra de laatste slider in beeld is gebracht schuift die weer in de tegenover gestelde richting terug naar slide 1, enzovoorts. 

https://github.com/user-attachments/assets/1cfa36f0-874a-459c-87fa-0567cdc4db6c


### klickable & scroll (web pagina)
De slider is zowel klikbaar als te scrollen dus beide zijn mogelijk. 

https://github.com/user-attachments/assets/aaa51010-76b0-45fa-b98f-8dccacf75207







### Interacties



<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken

### HTML structuur
Code kan al snel onoverzichtelijk ogen. Vandaar het belang om code goed gestructureerd te onderhouden. Zo werk ik veel met ruimtes tussen de codes om groepen te vormen. Elke keer wanneer er elementen samen tot een groep behoren verschuif ik het een stuk naar rechts.
https://github.com/Clarice-COD/the-startup-responsive-interactive-website/blob/db60b6f66d7ee584fa91a49d60a81e80a3403ff1/index.html#L45-L67

### CSS structuur
De volgorde van de CSS is gebaseerd op de volgorde van de HTML.
https://github.com/Clarice-COD/the-startup-responsive-interactive-website/blob/db60b6f66d7ee584fa91a49d60a81e80a3403ff1/index.html#L19-L20
https://github.com/Clarice-COD/the-startup-responsive-interactive-website/blob/db60b6f66d7ee584fa91a49d60a81e80a3403ff1/index.css#L69-L87


### Nesten van @media
Het nesten van @media bestaat nog niet zo lang, maar is wel mogelijk. Inplaats van al dat gescroll staat nu alle informatie die bij elkaar horen samen in hetzelfde vlak.
https://github.com/Clarice-COD/the-startup-responsive-interactive-website/blob/db60b6f66d7ee584fa91a49d60a81e80a3403ff1/index.css#L289-L307

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


