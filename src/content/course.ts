/**
 * UNICA FONTE DI VERITÀ per i dati del corso
 * Modifica SOLO questo file per aggiornare date e disponibilità
 */

export const courseData = {
  // === DATE ===
  startDate: '21 Febbraio 2026',
  startDateUppercase: '21 FEBBRAIO 2026',

  // Early Bird
  earlyBird: {
    deadline: '2026-02-20T23:59:59',
    deadlineDisplay: '20 Febbraio 2026',
  },

  // === DISPONIBILITÀ ===
  seats: {
    total: 12,
    booked: 7,
  },

  // === COMPUTED VALUES ===
  get available() {
    return this.seats.total - this.seats.booked
  },

  get nextSeatNumber() {
    return this.seats.booked + 1
  },

  // Stringhe derivate per UI
  get availabilityText() {
    return `${this.startDateUppercase} • ULTIMI ${this.available} POSTI`
  },

  get ctaText() {
    return `Prenota il Posto #${this.nextSeatNumber}/${this.seats.total}`
  },

  // Location (usata in FAQ)
  location: {
    name: 'Eretico',
    address: 'via Benedetto Brin 8',
    city: 'Marina di Ragusa (RG)',
    description: 'una vineria sonica trasformata in hub tech',
  },

  schedule: {
    day: 'sabato',
    time: '15:00 alle 18:00',
    weeks: 7,
  },
}
