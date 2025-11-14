import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Zap, Globe, Briefcase, BookOpen, Code2, Users, Target, Github, Twitter, Linkedin, Youtube, Instagram, Mail, FileText, Shield, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-border py-4"
      >
        <div className="container mx-auto px-4">
          <img src="/glitch_logo.png" alt="Every" className="h-8" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Impara <span className="text-primary">Claude Code</span> in Un Giorno
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl mb-4">
            Un workshop live per principianti con <span className="font-semibold">Dan Shipper</span>—porta a casa un progetto funzionante e la sicurezza per usare
          </p>
          <p className="text-xl mb-8">Claude con il codice ogni giorno</p>
          
          <p className="text-muted-foreground mb-2 max-w-2xl mx-auto">
            Usa un curriculum guidato e lezioni di gruppo, lavora con supporto pratico—usando gli strumenti che Claude già conosce—come React, JavaScript, HTML e CSS.
          </p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lavora sulla tua idea di app in tempo reale. Rendila tua. Pubblicala nel mondo. Nessuna esperienza richiesta.
          </p>
          
          <p className="text-sm text-muted-foreground mb-6">
            DICEMBRE 2024 SOLD OUT • DICEMBRE 2025 IN ESAURIMENTO
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12">
            Inizia e Lancia una Nuova App (È Semplice)
          </Button>
        </motion.div>

        {/* Browser Window Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-secondary rounded-t-lg p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
                className="w-3 h-3 rounded-full bg-yellow-500"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
            </div>
            <div className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground ml-4">
              Benvenuto su Claude Code
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="bg-black p-8"
          >
            <div className="pixelated-text text-6xl md:text-8xl text-primary leading-tight">
              CLAUDE<br/>CODE
            </div>
          </motion.div>
        </motion.div>

        {/* Image Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[1, 2, 3].map((num, idx) => (
            <motion.div
              key={num}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="bg-secondary border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                  Arte Classica {num}
                </div>
                <div className="p-4 text-sm">
                  {idx === 0 && "Concentrati sui concetti fondamentali di Claude Code che trasformeranno il tuo modo di programmare"}
                  {idx === 1 && "Sviluppa ed esegui un progetto reale da casa, e guarda un esperto analizzare questi concetti dal vivo (5 minuti per sprint per le demo)"}
                  {idx === 2 && "Costruisci la community scambiando idee tra tutti i partecipanti e Dan su concetti, suggerimenti, trucchi e difficoltà"}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-primary max-w-4xl mx-auto"
      />

      {/* What You'll Learn Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">Cosa imparerai (e farai)</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Code2, text: "Cos'è Claude Code—come usarlo partendo da zero" },
                { icon: Target, text: "Impara strumenti e framework moderni utili" },
                { icon: BookOpen, text: "Esci dalla giornata usando Claude in modo concreto" },
                { icon: Zap, text: "Distribuisci un'applicazione come un ingegnere o trasforma un'idea in realtà" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex gap-4"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.text}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8">Come funziona la giornata</h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Impara i fondamenti—familiarizza con Claude, scopri come funziona e comprendi i concetti chiave",
                "Pratica—una serie di esercizi per allenare le competenze chiave",
                "Costruisci qualcosa insieme—una sessione di coding dal vivo dove costruiremo un'app",
                "Lavora sulla tua idea—segui la nostra guida per creare un'app usando un template"
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex gap-4"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="text-primary font-bold text-xl flex-shrink-0">{idx + 1}</div>
                  <div>
                    <p>{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Risultati che puoi aspettarti
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { 
              icon: "code", 
              text: "Entra nella giornata senza esperienza di programmazione ed esci con un'applicazione live" 
            },
            { 
              icon: Zap, 
              text: "Capisci non solo come usare Claude ma perché—impara i fondamenti che guidano quando e come usare l'AI" 
            },
            { 
              icon: Globe, 
              text: "Un'applicazione live—porta la tua visione nel mondo alla fine della giornata" 
            },
            { 
              icon: Briefcase, 
              text: "Un percorso chiaro per costruire le tue prossime 10 applicazioni—capisci cosa ha senso come progetto AI" 
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                {item.icon === "code" ? (
                  <div className="pixelated-text text-4xl text-primary">CLAUDE<br/>CODE</div>
                ) : (
                  <item.icon className="w-12 h-12 text-primary" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Cosa ottieni
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
        >
          {[
            { icon: BookOpen, text: "Un curriculum completo che ti porta da zero a esperto" },
            { icon: Users, text: "Una giornata intera di workshop online dal vivo con Dan e 20-30 partecipanti" },
            { icon: Code2, text: "Un corso di una giornata intera—copre tutto ciò di cui hai bisogno per passare da principiante a professionista" },
            { icon: Zap, text: "Un'app funzionante entro la fine della giornata—qualcosa di piccolo di cui essere incredibilmente orgoglioso" },
            { icon: Target, text: "Una guida scritta in un setting di gruppo live per creare app—ottieni accesso a vita a tutti i materiali" },
            { icon: Globe, text: "Registrazioni delle sessioni del workshop da integrare nella tua vita al tuo ritmo" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center"
            >
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-sm">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2"
        >
          <p>Ecco tutti i componenti del corso di una giornata che ti porteranno da zero al deploy della tua prima app:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Cos'è Claude Code e come funziona? (45 min)</li>
            <li>I fondamenti—cosa devi sapere per programmare con Claude (2 ore)</li>
            <li>Inizia un'idea—trova un'idea su cui vale la pena lavorare e avvia la tua app</li>
            <li>Costruzione guidata dal vivo—guarda Dan costruire un'app dal vivo, dall'inizio alla fine</li>
            <li>Tempo di lavoro—costruisci la tua app, fai domande, ottieni supporto da Dan e altri compagni di classe</li>
            <li>Prova a condividere l'app, rispondi alle domande</li>
          </ul>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h3 className="text-2xl font-bold mb-2">Dettagli</h3>
          <div className="flex justify-center gap-8 text-sm mb-8">
            <div>
              <span className="font-semibold">VIRTUALE 1:1</span>
            </div>
            <div>
              <span className="font-semibold">€2.495 €1.495</span>
            </div>
            <div>
              <span className="font-semibold">10x 60 ORE</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-secondary border-border p-8 mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
                className="text-5xl font-bold mb-2"
              >
                €1.500
              </motion.div>
              <div className="text-muted-foreground mb-6">Per la giornata</div>
              <p className="text-sm text-muted-foreground mb-6">
                PAGAMENTO UNICO • UNA VOLTA SOLA • COMPLETA UN'APP REALE
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Iscriviti al Workshop Oggi
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">A note from Dan</h3>
          <div className="grid md:grid-cols-[200px,1fr] gap-8">
            <div className="aspect-square bg-muted rounded flex items-center justify-center text-muted-foreground">
              Dan's Photo
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                I want to tell you about one of the most incredible days I've ever had. It was April 13th, 2024, and I was teaching a small group of people how to build apps with Claude Code for the very first time.
              </p>
              <p>
                I wasn't sure what to expect. Would people get it? Would they be able to build something? Would they have fun?
              </p>
              <p>
                The answer was yes to all three. By the end of the day, every single person had built and deployed a working application. Not a tutorial. Not a toy. A real app that they could share with friends and family.
              </p>
              <p>
                The most amazing part wasn't just that everyone shipped something. It was how they felt at the end. There was this palpable sense of "I can do this. I can build things. I can make my ideas real."
              </p>
              <p>
                That feeling is what this workshop is about. Not just learning Claude Code, but discovering that you have the power to build anything you can imagine.
              </p>
              <p>
                I hope you'll join me for a day that might just change how you see yourself and what you're capable of.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Domande frequenti
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">È dal vivo o a ritmo autonomo?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Questo è un workshop dal vivo di una giornata intera. Lavorerai insieme a Dan e un piccolo gruppo di altri partecipanti. Riceverai le registrazioni dopo per rivedere tutto ciò che hai perso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Devo sapere programmare?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No! Questo workshop è pensato per principianti assoluti. Se non hai mai scritto una riga di codice prima, sei nel posto giusto. Inizieremo dalle basi e costruiremo da lì.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">E se non posso partecipare alla sessione dal vivo?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Consigliamo vivamente di partecipare dal vivo così puoi fare domande e ricevere supporto in tempo reale. Ma se non puoi, avrai accesso a tutte le registrazioni e i materiali.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">E se so già programmare?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Ottimo! Attraverserai i fondamenti velocemente e avrai più tempo per lavorare sul tuo progetto. Molti sviluppatori esperti hanno seguito questo workshop per imparare a lavorare efficacemente con gli strumenti di coding AI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">Quanto dura il workshop?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Il workshop dura circa 6-8 ore, con pause durante la giornata. Inizieremo la mattina e alla sera avrai un'applicazione distribuita.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">Cosa devo portare/avere pronto?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Solo un computer e una connessione internet. Forniremo tutti gli strumenti, i template e la guida di cui hai bisogno. Assicurati di avere un account Claude configurato prima che inizi il workshop.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">Posso costruire quello che voglio?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sì! Forniamo template e guida per aiutarti a iniziare, ma sei libero di costruire quello che vuoi. Molte persone arrivano con un'idea già in mente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">C'è una community a cui posso unirmi?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sì! Tutti i partecipanti al workshop ottengono accesso alla nostra community Discord privata dove puoi continuare a imparare, condividere progetti e ricevere supporto da Dan e altri alumni.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-left">Qual è la vostra politica di rimborso?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Offriamo una garanzia di rimborso di 30 giorni. Se non sei soddisfatto del workshop per qualsiasi motivo, faccelo sapere entro 30 giorni e ti rimborseremo l'intero importo dell'acquisto.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-border py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <img src="/glitch_logo.png" alt="Every" className="h-8 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Cosa Succede Dopo</h3>
            <p className="text-muted-foreground mb-12">Rimani in contatto. Costruisci l'app dei tuoi sogni in un giorno</p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4 mb-12"
            >
              {[
                { icon: Twitter, label: "Twitter", url: "https://twitter.com/placeholder" },
                { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/placeholder" },
                { icon: Github, label: "GitHub", url: "https://github.com/placeholder" },
                { icon: Youtube, label: "YouTube", url: "https://youtube.com/placeholder" },
                { icon: Instagram, label: "Instagram", url: "https://instagram.com/placeholder" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Footer Links Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-5 gap-8 text-sm mb-12 pb-12 border-b border-border"
            >
              {[
                { 
                  title: "Corso", 
                  links: [
                    { name: "Panoramica", url: "#overview" },
                    { name: "Curriculum", url: "#curriculum" },
                    { name: "Istruttori", url: "#instructors" },
                    { name: "Testimonianze", url: "#testimonials" },
                    { name: "FAQ", url: "#faq" }
                  ] 
                },
                { 
                  title: "Risorse", 
                  links: [
                    { name: "Documentazione", url: "https://docs.placeholder.com" },
                    { name: "Tutorial", url: "https://tutorials.placeholder.com" },
                    { name: "Blog", url: "https://blog.placeholder.com" },
                    { name: "Video Guide", url: "https://videos.placeholder.com" },
                    { name: "Community", url: "https://community.placeholder.com" }
                  ] 
                },
                { 
                  title: "Azienda", 
                  links: [
                    { name: "Chi Siamo", url: "https://about.placeholder.com" },
                    { name: "Team", url: "https://team.placeholder.com" },
                    { name: "Carriere", url: "https://careers.placeholder.com" },
                    { name: "Partnership", url: "https://partners.placeholder.com" },
                    { name: "Contatti", url: "https://contact.placeholder.com" }
                  ] 
                },
                { 
                  title: "Supporto", 
                  links: [
                    { name: "Help Center", url: "https://help.placeholder.com" },
                    { name: "Supporto Tecnico", url: "https://support.placeholder.com" },
                    { name: "Stato Sistema", url: "https://status.placeholder.com" },
                    { name: "Feedback", url: "https://feedback.placeholder.com" }
                  ] 
                },
                { 
                  title: "Legale", 
                  links: [
                    { name: "Privacy Policy", url: "https://privacy.placeholder.com" },
                    { name: "Termini di Servizio", url: "https://terms.placeholder.com" },
                    { name: "Cookie Policy", url: "https://cookies.placeholder.com" },
                    { name: "Licenze", url: "https://licenses.placeholder.com" }
                  ] 
                }
              ].map((section, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
                  <ul className="space-y-2.5 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <motion.li 
                        key={linkIdx}
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        <a 
                          href={link.url} 
                          target={link.url.startsWith('http') ? "_blank" : undefined}
                          rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                          {link.name}
                          {link.url.startsWith('http') && (
                            <Globe className="w-3 h-3 opacity-50" />
                          )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span>© 2025 Gl!tch. Tutti i diritti riservati.</span>
              </div>
              <div className="flex items-center gap-6">
                <motion.a 
                  href="mailto:info@glitch.placeholder.com"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>info@glitch.com</span>
                </motion.a>
                <span className="text-muted-foreground/50">|</span>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Pagamenti sicuri</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
