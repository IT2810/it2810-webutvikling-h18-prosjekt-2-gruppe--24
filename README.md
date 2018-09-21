# IT2810 – Prosjekt 2
Dette er det andre prosjekt i IT2810 Webutvikling. Gruppen består av Mathias Bynke, Henrik Grønbech og Maria Osen

## Dokumentasjon

### Hvordan kjøre

### Funksjonalitet
Nettsiden skulle ifølge kravspesifikasjonen la brukeren veksle mellom 3 kategorier av 3 forskjellige medietyper, tekst, lyd og bilde.
Hen skulle også kunne vise 4 ulike konstellasjoner innen hver kategori.
Vi har løst dette ved å ha et valgpanel med radioknapper som lar brukeren velge en kombinasjon av kategorier.
Med faner (implementert med knapper øverst på siden) kan brukeren bytte mellom bildene, tekstene og musikken innen hver kategori.
Når brukeren først laster inn siden, blir hen vist en tilfeldig fane og en tilfeldig kombinasjon av kategorier.

### React
Vi har basert løsningen på React og JSX.
Vi har lagd tre komponenter med klasser (i tillegg til App) ...
Sender funksjoner som props til barnekomponenter for å ...

### Musikk
Musikken er hentet fra incompetech.com.
Detaljert informasjon om hver låt er å finne i samme mappe som hver enkelt fil.
Vi har redusert bitraten på filene for å redusere filstørrelsen til ca. 1–2 MB per fil.

### Ajax
Innlasting av bilder, tekst (og ikke musikk) med Ajax. Filene ligger lokalt.

- [ ] Forklare hvordan vi har håndtert følgende (med caching?):
> Når filen først er lest, så skal innholdet lagres på klienten slik at de ikke blir å lastes flere ganger hvis en bruker blar frem og tilbake i en utstilling.
  - Dette skjer automatisk når man bruker AJAX-teknikken.
  - [Skjermbildet av det at faktisk fungerer]

### Responsiv design
Hva som skjer når bredden på skjermen endrer seg (ting bytter plass fra høyre til under).
Hva som skjer når høyden på skjermen endrer seg (maks høyde på bildet endrer seg).

- [ ] Forklare vår løsning for responsiv design. Spesielt hvorfor vi ikke har brukt viewport og media-queries.

### Bruk av Git
- [ ] Forklare at vi har brukt pull request-er for å koble commits til issues.
  - Det er lett å glemme å skrive issuen i hver eneste commit
  - Det er god/bedre visuell støtte for å koble PR mot issues i GitHub

### Testing
- [ ] Dokumentere hvordan vi har testet (#40)
