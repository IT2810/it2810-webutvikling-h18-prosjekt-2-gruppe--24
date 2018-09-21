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

Tittelen reflekterer valgene brukeren har gjort av kategorier og fane.

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

Innlasting av bilder, tekst (og ikke musikk) med Ajax. Filene ligger lokalt.

- [ ] Forklare hvordan vi har håndtert følgende (med caching?):
  > Når filen først er lest, så skal innholdet lagres på klienten slik at de ikke blir å lastes flere ganger hvis en bruker blar frem og tilbake i en utstilling.
  - Dette skjer automatisk når man bruker AJAX-teknikken.
  - [Skjermbildet av det at faktisk fungerer]

### Responsiv design

Vi har gjort flere grep for at siden skal se bra ut uavhengig av vindusstørrelse.
Hele siden er implementert med flexbox.
Innenfor `ArtDisplay` er flexbox satt opp med `wrap` slik at lydavspilleren og teksten blir plassert under bildet når det blir for trangt om plassen.
I `App` er topp-flexbox-konteineren satt opp i `row` for brede vinduer og `column` for smale vinduer.
Vi implementerte dette med media query i CSS for å kunne endre andre ting på siden samtidig som denne endringen.
Spesielt viktig er det at kategoriene med valg blir plassert ved siden av hverandre istedenfor over hverandre (en flexbox blir satt til `row`).
I tillegg har vi implementert enda en media query som slår inn dersom siden blir veldig smal (typisk mobilskjerm i høydeformat) og plasserer kategorivalgene under hverandre igjen.
Vi syntes at det så best ut slik på mobile og andre små skjermer.

Størrelsen på bildet blir også tilpasset bredden på vinduet.
For å unngå at bilder på høykant blir veldig store la vi inn en relativ høydebegrensning på bildene på 70 % av vinduets høyde. Dette har bare en effekt når vinduet er bredt, som på en PC-skjerm.

Slik vi har satt det opp, blir bildene og andre elementer vist i sin fulle bredde slik de skal på en smal mobilskjerm.
Vi har derfor ikke sett at å legge til en `viewport`-`meta`-tag gjør noen positiv forskjell, og vi har derfor valgt å ikke ha det med.

### Bruk av Git

- [ ] Forklare at vi har brukt pull request-er for å koble commits til issues.
  - Det er lett å glemme å skrive issuen i hver eneste commit
  - Det er god/bedre visuell støtte for å koble PR mot issues i GitHub

### Testing

- [ ] Dokumentere hvordan vi har testet (#40)
