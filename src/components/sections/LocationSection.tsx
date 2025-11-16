import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { locationContent } from "@/content/location";

export const LocationSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center mb-12">{locationContent.title}</h3>
        
        <div className="bg-secondary/30 border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo e Nome */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="mb-6 flex justify-center md:justify-start">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={locationContent.venue.logo}
                  alt={locationContent.venue.name}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{locationContent.venue.name}</h4>
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
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">{locationContent.address.label}</p>
                  <p className="text-sm text-muted-foreground">{locationContent.address.street}</p>
                  <p className="text-sm text-muted-foreground">{locationContent.address.city}</p>
                  <p className="text-sm text-muted-foreground">{locationContent.address.country}</p>
                </div>
              </div>

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

              {/* Link Mappa */}
              <motion.a
                href={locationContent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary rounded-lg px-4 py-3 text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>{locationContent.mapButton.text}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
