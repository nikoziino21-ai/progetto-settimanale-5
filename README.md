Bloom — Studio di Design :
Una landing page pensata per uno studio di design fittizio, pulita, moderna e completamente responsive.   

Per sviluppare il sito ho usato solo gli strumenti studiati durante il corso, senza librerie o framework esterni:
HTML5 per la struttura semantica delle sezioni.   
CSS3 per la grafica (Flexbox, media queries, transizioni, trasformazioni e @keyframes).   
JavaScript per gestire le interazioni come il menu, il tema scuro, la modale e lo scroll.   
Font Awesome (via CDN) per le icone.   

Come ho sviluppato il progetto
Ho preferito procedere per gradi, seguendo una struttura passo dopo passo:
Impostazione Mobile-First & Base:
Sono partita creando la struttura HTML di base e l'header. Per la versione mobile i link sono incolonnati sotto al logo, mentre salendo di risoluzione (tablet e desktop) si spostano a destra sfruttando Flexbox (justify-content: space-between), con l'header che resta sticky in alto.   
Ho realizzato la Hero section con un gradiente di sfondo, il titolo principale, il sottotitolo e il bottone per l'azione, centrando tutto con Flexbox.   
Ho aggiunto la griglia dei servizi con tre card e l'effetto di sollevamento al passaggio del mouse (hover).   

Sezioni successive e interazioni:
Ho creato la sezione dei Lavori con una griglia in stile social e immagini placeholder.   
Ho aggiunto la sezione Team con le schede dei membri e le animazioni di entrata scaglionate.   
Ho scritto la parte in JS per far sì che, quando l'utente scorre la pagina di più di 100px, l'header si compatti aggiungendo la classe .scrolled.   

Funzionalità extra:
Modale per il preventivo: Si apre cliccando sulla CTA principale, con un overlay sfumato e un'animazione di entrata.   
Carosello infinito: Un blocco di testimonial che scorre in loop continuo grazie a un'animazione @keyframes in orizzontale (translateX).   
Dark Mode: Un bottone di toggle nella navigazione che cambia i colori della pagina modificando le classi sul <body>.   

Accessibilità: Ho inserito il supporto a prefers-reduced-motion per chi preferisce ridurre le animazioni.
