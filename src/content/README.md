# Content Files - Guida per Collaboratori

Questa cartella contiene tutti i testi della landing page, separati dal codice React per facilitare le modifiche senza conflitti.

## 📁 Struttura dei File

### `hero.ts`
Contiene i testi della sezione hero (intestazione principale):
- Titolo principale
- Sottotitolo con nome istruttore
- Descrizione del corso
- Testo disponibilità date
- Call-to-action button
- Testo finestra browser

### `cards.ts`
Array delle 3 card con immagini:
- Ogni card ha: id, title, description

### `learning.ts`
Due sezioni principali:
- **learningContent**: Cosa imparerai (4 item con icone)
- **dayWorkflowContent**: Come funziona la giornata (4 step numerati)

### `outcomes.ts`
Risultati attesi dal corso:
- Titolo sezione
- 4 item con tipo icona e testo

### `benefits.ts`
Benefici e curriculum:
- 6 item con icone dei benefici
- Sezione curriculum con intro e 6 punti elenco

### `pricing.ts`
Dettagli prezzo:
- Titolo e features (formato, pricing, durata)
- Prezzo principale
- Descrizioni e CTA

### `faq.ts`
9 domande frequenti:
- Ogni domanda ha: id, question, answer

### `footer.ts`
Tutto il footer:
- Heading (titolo e sottotitolo)
- Social links (5 piattaforme con icon, label, url)
- Navigation (5 colonne con links)
- Bottom bar (copyright, email, pagamenti sicuri)

## ✏️ Come Modificare i Testi

1. Apri il file corrispondente alla sezione che vuoi modificare
2. Modifica solo i testi nelle stringhe (tra virgolette)
3. **NON** modificare i nomi delle proprietà (es: `title`, `description`, ecc.)
4. **NON** modificare la struttura degli oggetti
5. Salva il file - le modifiche saranno automatiche

## 🎨 Note sulle Icone

Nei file content, le icone sono riferite come stringhe:
- `"code"` → Icona codice
- `"zap"` → Icona fulmine
- `"globe"` → Icona globo
- `"bookOpen"` → Icona libro aperto
- `"users"` → Icona utenti
- `"target"` → Icona bersaglio

Non modificare questi valori a meno che non si voglia cambiare l'icona.

## ⚠️ Importante

- Mantieni sempre le virgolette doppie `"` per le stringhe
- Mantieni i caratteri speciali italiani (è, à, ù, ò)
- Non rimuovere le virgole tra gli oggetti
- Non modificare gli `export const` all'inizio dei file

## 🚀 Esempio di Modifica

**Prima:**
```typescript
title: "Impara Claude Code in Un Giorno"
```

**Dopo:**
```typescript
title: "Diventa Esperto di Claude Code in 24 Ore"
```

✅ Modifica valida - solo il testo cambiato
