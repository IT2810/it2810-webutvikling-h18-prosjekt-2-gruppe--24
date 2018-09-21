# IT2810 – Prosjekt 2

Dette er det andre prosjektet i IT2810 Webutvikling på NTNU høsten 2018. Gruppen består av Mathias Bynke, Henrik Grønbech og Maria Osen.

## Hvordan kjøre

Hvis du vil kjøre prosjektet lokalt, må du først klone dette repoet. Naviger deretter til rotmappen i prosjektet og kjør disse kommandoene

```bash
npm i # kort for `npm install`
npm start
```

Nettsiden skal også være tilgjengelig på http://it2810-28.idi.ntnu.no/prosjekt2

## Dokumentasjon

### Funksjonalitet

Nettsiden skulle ifølge kravspesifikasjonen la brukeren veksle mellom 3 kategorier av 3 forskjellige medietyper, tekst, lyd og bilde.
Hen skulle også kunne vise 4 ulike konstellasjoner innen hver kategori.
Vi har løst dette ved å ha et valgpanel med radioknapper som lar brukeren velge en kombinasjon av kategorier.
Med faner (implementert med knapper øverst på siden) kan brukeren bytte mellom bildene, tekstene og musikken innen hver kategori.
Når brukeren først laster inn siden, blir hen vist en tilfeldig fane og en tilfeldig kombinasjon av kategorier.

### React

Vi har basert løsningen på React og JSX.
Rotkomponenten heter `App`. Den deler siden grovt inn i deler, hvorav tre er egne komponenter: `OptionPanel`, `ArtDisplay` og `Tabs`.
Disse tar seg av henholdsvis valg av kategorier; visning av bilde, tekst og lydavspiller; og knappene som bytter mellom faner.
Hva som skal vises, er til enhver tid bestemt av oppføringer i tilstanden til `App`-komponenten.
Når brukeren trykker på en fane eller en kategori, er det funksjoner i `App` som oppdaterer disse oppføringene med `setState`.
Disse funksjonene og oppføringene blir sendt ned til barnekomponentene som egenskaper («properties»).

### Musikk

Musikken er hentet fra incompetech.com.
Detaljert informasjon om hver låt er å finne i samme mappe som hver enkelt fil.
Vi har redusert bitraten på filene for å redusere filstørrelsen til ca. 1–2 MB per fil.

### Ajax

Vi bruker AJAX kun med den javascript-funksjonen `fetch` – vi bruker ingen tredjepartsbiblioteker til dette.
`fetch` er en noe nyere metode, men nå støttet av de [største nettleserene](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility).
Innlasting av bilder, tekst (og ikke musikk) med Ajax.
Filene ligger lokalt.

Filene blir automatisk cachet av flese nettleserene.
Når man sender en en `GET`-request, og man allerede har lastet ned den daten man spør fra om før, får man 304 som svar.
Dette viser at dataene blir cachet fra i nettleseren.
Man kan se dette ved å se på fanen som tilsvarere _Network_ i Google Chrome i _inspiseringsverktøy_.

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
