import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink, Instagram, Wine, Users, Laptop } from "lucide-react";
import { locationContent } from "@/content/location";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center mb-12">{locationContent.title}</h3>
        
        {/* Card con gradient border animato */}
        <div className="relative group">
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative pattern background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Badge con icon */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2">
                  <Wine className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">Formazione in Presenza</span>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Logo e Nome */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <div className="mb-8 flex justify-center md:justify-start">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-full border-2 border-primary/50 bg-secondary/30 shadow-lg shadow-primary/20"
                    >
                      <img
                        src={locationContent.venue.logo}
                        alt={locationContent.venue.name}
                        className="h-32 w-32 md:h-36 md:w-36 object-contain rounded-full"
                      />
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
                    {locationContent.venue.name}
                    <motion.a
                      href={locationContent.social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                      aria-label={locationContent.social.label}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    {locationContent.venue.description}
                  </p>
                </motion.div>

                {/* Indirizzo e Contatti */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6"
                >
                  {/* Indirizzo */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 group"
                  >
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold mb-1 group-hover:text-primary transition-colors">{locationContent.address.label}</p>
                      <p className="text-sm text-muted-foreground">{locationContent.address.street}</p>
                      <p className="text-sm text-muted-foreground">{locationContent.address.city}</p>
                      <p className="text-sm text-muted-foreground">{locationContent.address.country}</p>
                    </div>
                  </motion.div>

                  {/* Telefono */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">{locationContent.contact.label}</p>
                      <a 
                        href={`tel:${locationContent.contact.phone}`}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {locationContent.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-black font-semibold"
                    >
                      <a
                        href={locationContent.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" />
                        {locationContent.mapButton.text}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
