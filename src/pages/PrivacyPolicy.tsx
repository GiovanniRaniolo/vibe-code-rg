import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { privacyContent } from "@/content/privacy";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{privacyContent.title}</h1>
            <p className="text-muted-foreground">Ultimo aggiornamento: {privacyContent.lastUpdate}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {privacyContent.sections.map((section) => (
              <div key={section.id} className="bg-card border border-primary/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">{section.id}. {section.title}</h2>
                {section.content.map((item, idx) => (
                  <div key={idx} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {item.type === 'contact' && (
                      <>
                        <strong>{item.name}</strong><br />
                        P.IVA: {item.vat}<br />
                        Email: {item.email}
                      </>
                    )}
                    {item.type === 'text' && (
                      <>
                        {item.text.includes('non raccoglie direttamente') ? (
                          <p>
                            Questo sito web <strong>non raccoglie direttamente dati personali</strong> degli utenti.
                          </p>
                        ) : item.text.includes('cookie tecnici necessari') ? (
                          <p>
                            Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento del sito stesso.
                          </p>
                        ) : item.text.includes('Lu.ma') ? (
                          <p>
                            Il processo di iscrizione e pagamento al corso è gestito interamente dalla piattaforma esterna <strong>Lu.ma</strong>.
                          </p>
                        ) : item.linkTo ? (
                          <p>
                            Non vengono utilizzati cookie di profilazione, marketing o analytics. Per maggiori dettagli consulta la nostra{' '}
                            <a href={item.linkTo} className="text-primary hover:underline">Cookie Policy</a>.
                          </p>
                        ) : item.emailLink ? (
                          <p>
                            Per esercitare i tuoi diritti, contattaci all'indirizzo:{' '}
                            <a href={`mailto:${item.emailLink}`} className="text-primary hover:underline">{item.emailLink}</a>
                          </p>
                        ) : (
                          <p>{item.text}</p>
                        )}
                      </>
                    )}
                    {item.type === 'link' && (
                      <p>
                        {item.text}{' '}
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {item.urlText}
                        </a>
                      </p>
                    )}
                    {item.type === 'list' && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {item.items.map((listItem, listIdx) => (
                          <li key={listIdx}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-xl p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">{privacyContent.cta.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {privacyContent.cta.text}{' '}
                <a href={`mailto:${privacyContent.cta.email}`} className="text-primary hover:underline font-semibold">
                  {privacyContent.cta.email}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
