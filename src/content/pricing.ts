export const pricingContent = {
  title: "Investimento nel Tuo Futuro",
  subtitle: "21 ore che ti danno autonomia completa come developer. Il ROI più alto che trovi.",
  
  urgency: {
    badge: "EARLY BIRD ATTIVO",
    countdown: {
      enabled: true,
      text: "Sconto valido fino al",
      deadline: "2025-12-15T23:59:59", // 15 Dicembre 2025
      expiredText: "Offerta scaduta - prezzo standard applicato"
    },
    availability: {
      total: 12,
      booked: 7,
      label: "posti rimasti",
      urgencyThreshold: 5, // Mostra urgency quando rimangono <= 5 posti
      soldOutText: "SOLD OUT - Lista d'attesa disponibile"
    }
  },
  
  inPersonBadge: "FORMAZIONE IN PRESENZA",
  
  features: {
    type: "FORMAZIONE INTENSIVA",
    price: "€997",
    originalPrice: null, // Rimuovi barrato per più credibilità
    duration: "7 LEZIONI × 3 ORE",
    priceNote: "Early Bird fino al 15 Dicembre"
  },
  
  pricing: {
    mainPrice: "€997",
    priceLabel: "Prezzo Early Bird",
    standardPrice: "€1.297",
    standardPriceLabel: "(Prezzo standard dopo il 15 Dicembre)",
    
    paymentOptions: [
      {
        id: "one-time",
        label: "Pagamento Unico",
        price: "€997",
        savings: "Risparmi €300",
        recommended: true
      },
      {
        id: "installments",
        label: "3 Rate Mensili",
        price: "€349/mese",
        total: "€1.047 totali",
        recommended: false
      }
    ]
  },
  
  included: {
    title: "Tutto Incluso",
    items: [
      "21 ore di formazione live in presenza",
      "Repository GitHub con template e soluzioni",
      "Community Discord lifetime",
      "Code review 1-to-1 del tuo MVP",
      "Certificato di completamento",
      "Registrazioni lifetime delle lezioni",
      "Materiali didattici e cheat sheet",
      "Supporto post-corso fino al deploy MVP"
    ]
  },
  
  guarantee: {
    icon: "shield",
    title: "Garanzia 100% Soddisfatti",
    description: "Se dopo la Lezione 2 decidi che il corso non fa per te, rimborso completo. No questions asked.",
    badge: "RISK-FREE"
  },
  
  cta: {
    primary: "Prenota il Posto #8/12",
    secondary: "Oppure scrivici su WhatsApp",
    whatsapp: "+39 320 180 6418"
  },
  
  priceDetails: "21 ORE IN AULA • MATERIALI LIFETIME • CERTIFICATO • COMMUNITY PRIVATA"
};
