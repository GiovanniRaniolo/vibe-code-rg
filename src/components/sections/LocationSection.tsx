import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink, Instagram } from "lucide-react";
import { locationContent } from "@/content/location";

export const LocationSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center mb-12">{locationContent.title}</h3>
        
        <div className="bg-secondary/30 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Logo e Nome */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="p-1.5 rounded-full border-2 border-primary/50 bg-secondary/30"
                >
                  <img
                    src={locationContent.venue.logo}
                    alt={locationContent.venue.name}
                    className="h-24 w-24 object-contain rounded-full"
                  />
                </motion.div>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
                {locationContent.venue.name}
                <motion.a
                  href={locationContent.social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
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
              <motion.a
                href={locationContent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold mb-1 group-hover:text-primary transition-colors">{locationContent.address.label}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{locationContent.address.street}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{locationContent.address.city}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{locationContent.address.country}</p>
                </div>
              </motion.a>

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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
