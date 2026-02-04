import { courseData } from './course'

export const pricingContent = {
  title: 'Investi nel Tuo Futuro',
  subtitle: '21 ore che ti danno autonomia completa come developer.',

  // Luma Event Configuration
  luma: {
    eventId: 'evt-kXz94QZmFdkKk3b',
    eventUrl: 'https://lu.ma/event/evt-kXz94QZmFdkKk3b',
    useEmbed: true, // true = embed button, false = direct link
  },

  urgency: {
    badge: 'EARLY BIRD ATTIVO',
    countdown: {
      enabled: true,
      text: 'Sconto valido fino al',
      deadline: courseData.earlyBird.deadline,
      deadlineDisplay: courseData.earlyBird.deadlineDisplay,
      expiredText: 'Offerta scaduta - prezzo standard applicato',
    },
    availability: {
      total: courseData.seats.total,
      booked: courseData.seats.booked,
      label: 'posti rimasti',
      urgencyThreshold: 5, // Mostra urgency quando rimangono <= 5 posti
      soldOutText: "SOLD OUT - Lista d'attesa disponibile",
      progressTitle: 'Disponibilità Posti',
      bookedText: 'su',
      bookedSuffix: 'posti già prenotati',
    },
  },

  inPersonBadge: 'FORMAZIONE IN PRESENZA',

  features: {
    type: 'FORMAZIONE INTENSIVA',
    price: '€400',
    originalPrice: null, // Rimuovi barrato per più credibilità
    duration: '7 LEZIONI × 3 ORE',
    priceNote: `Early Bird fino al ${courseData.earlyBird.deadlineDisplay}`,
  },

  pricing: {
    mainPrice: '€400',
    priceLabel: 'Prezzo Early Bird',
    standardPrice: '€500',
    standardPriceLabel: `(Prezzo standard dopo il ${courseData.earlyBird.deadlineDisplay})`,
    recommendedLabel: 'CONSIGLIATO',

    paymentOptions: [
      {
        id: 'one-time',
        label: 'Pagamento Unico',
        price: '€400',
        savings: 'Risparmi €100',
        recommended: true,
      },
      {
        id: 'installments',
        label: '3 Rate Mensili',
        price: '€167/mese',
        total: '€500 totali',
        recommended: false,
      },
    ],
  },

  countdownLabels: {
    days: 'Giorni',
    hours: 'Ore',
    minutes: 'Min',
    seconds: 'Sec',
  },

  included: {
    title: 'Tutto Incluso',
    items: [
      '21 ore di formazione live in presenza',
      'Repository GitHub con template e soluzioni',
      'Community Telegram lifetime',
      'Code review 1-to-1 del tuo MVP',
      'Certificato di completamento',
      'Materiali didattici e cheat sheet',
      'Supporto post-corso fino al deploy MVP',
    ],
  },

  guarantee: {
    icon: 'shield',
    title: 'Garanzia 100% Soddisfatti',
    description:
      'Se dopo la Lezione 2 decidi che il corso non fa per te, ti rimborsiamo le 5 lezioni rimanenti. Senza domande.',
    badge: 'RISK-FREE',
  },

  cta: {
    primary: courseData.ctaText,
    secondary: 'Oppure scrivici su Telegram',
    telegram: 'https://t.me/glitchsociety_dev',
  },

  priceDetails:
    '21 ORE IN AULA • MATERIALI LIFETIME • CERTIFICATO • COMMUNITY PRIVATA',
}
