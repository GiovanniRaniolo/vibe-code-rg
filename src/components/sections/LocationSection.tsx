import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink, Instagram, Wine, Users, Laptop } from "lucide-react";
import { locationContent } from "@/content/location";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
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
          
          <div className="relative bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20 rounded-2xl p-6 md:p-8 overflow-hidden">
            {/* Decorative pattern background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Logo e Nome */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <div className="mb-6 flex items-center justify-center md:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-full border-2 border-primary/50 bg-secondary/30 shadow-lg shadow-primary/20 flex-shrink-0"
                    >
                      <img
                        src={locationContent.venue.logo}
                        alt={locationContent.venue.name}
                        className="h-24 w-24 md:h-30 md:w-30 object-contain rounded-full"
                      />
                    </motion.div>
                    <h4 className="text-3xl font-bold text-primary flex items-center gap-3">
                      <Wine className="w-7 h-7 text-primary" />
                      {locationContent.venue.name}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {locationContent.venue.description}
                  </p>
                </motion.div>

                {/* Indirizzo e Contatti */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6 md:pt-6"
                >
                  {/* Indirizzo e Telefono affiancati */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 md:pt-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-[7]"
                    >
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
                      >
                        <a
                          href={locationContent.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          Google Maps
                        </a>
                      </Button>
                    </motion.div>
                    
                    <motion.a
                      href={locationContent.social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-[3] flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-colors"
                      aria-label={locationContent.social.label}
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                      <span className="hidden sm:inline text-sm font-medium text-primary">Instagram</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
