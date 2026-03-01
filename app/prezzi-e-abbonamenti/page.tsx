import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Check, Gift, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Prezzi e Abbonamenti | Beyond the Step",
  description:
    "Scopri i piani flessibili di Beyond the Step: abbonamenti mensili, pacchetti lezioni, lezioni private e collaborazioni. Lezione di prova gratuita.",
}

const plans = [
  {
    name: "Lezioni di Gruppo",
    subtitle: "Adulti",
    featured: false,
    options: [
      { label: "Abbonamento mensile", price: "30", unit: "/mese" },
      { label: "Pacchetto 10 lezioni", price: "60", unit: "" },
    ],
  },
  {
    name: "Lezioni di Gruppo",
    subtitle: "Bambini",
    featured: true,
    options: [
      { label: "Abbonamento mensile", price: "50", unit: "/mese" },
    ],
  },
  {
    name: "Lezioni Private",
    subtitle: "& Collaborazioni",
    featured: false,
    options: [
      { label: "Lezioni private", price: "Su misura", unit: "" },
      { label: "Collaborazioni videoclip/progetti", price: "Su misura", unit: "" },
    ],
  },
]

const benefits = [
  {
    icon: Gift,
    title: "Lezione di prova gratuita",
    description: "Inizia il tuo percorso senza impegno con una lezione di prova completamente gratuita.",
  },
  {
    icon: Users,
    title: "Porta un amico",
    description: "Porta un amico e ricevi subito uno sconto del 20% sul tuo prossimo acquisto!",
  },
  {
    icon: Check,
    title: "Sconti pagamento anticipato",
    description: "Offriamo sconti vantaggiosi con pagamenti anticipati per più mesi.",
  },
]

export default function PrezziPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          subtitle="Prezzi e Abbonamenti"
          title="Scegli Beyond the Step"
          description="Scopri i nostri piani flessibili, pensati per accompagnarti nel tuo percorso unico. Che tu sia un principiante o un ballerino esperto, abbiamo l'opzione perfetta per te."
          image="/images/course-contemporary.jpg"
          imageAlt="Danzatori contemporanei"
        />

        {/* Pricing cards */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                Piani e prezzi
              </p>
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Piani e prezzi per ogni esigenza
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                Siamo felici di offrirti diverse modalità per partecipare alle nostre attività,
                pensate per adattarsi al meglio al tuo stile e ai tuoi obiettivi. Dal movimento
                libero alle collaborazioni professionali, c&#39;è un percorso per tutti.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={`${plan.name}-${plan.subtitle}`}
                  className={`flex flex-col border p-8 transition-all ${
                    plan.featured
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 inline-flex w-fit text-xs tracking-widest uppercase text-accent">
                      Più popolare
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-card-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
                  <div className="mt-6 h-px bg-border" />
                  <div className="mt-6 flex flex-1 flex-col gap-4">
                    {plan.options.map((opt) => (
                      <div key={opt.label} className="flex flex-col gap-1">
                        <span className="text-sm text-muted-foreground">{opt.label}</span>
                        <span className="flex items-baseline gap-1">
                          {opt.price.match(/^\d/) ? (
                            <>
                              <span className="font-serif text-3xl text-card-foreground">
                                {opt.price}
                              </span>
                              <span className="text-lg text-card-foreground">&euro;</span>
                              {opt.unit && (
                                <span className="text-sm text-muted-foreground">{opt.unit}</span>
                              )}
                            </>
                          ) : (
                            <span className="text-base text-card-foreground">{opt.price}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/dove-trovarci"
                    className={`mt-8 inline-flex items-center justify-center border px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all ${
                      plan.featured
                        ? "border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent"
                        : "border-foreground/20 text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    Contattaci
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Puoi contattarci via mail a{" "}
              <a
                href="mailto:franzosolinda@gmail.com"
                className="text-accent hover:underline"
              >
                franzosolinda@gmail.com
              </a>{" "}
              o su WhatsApp al{" "}
              <a href="tel:+393343773202" className="text-accent hover:underline">
                334 377 3202
              </a>
              .
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                Vantaggi esclusivi e come iniziare
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                Vogliamo che tu scopra la magia di beyond the step, uno spazio per muoversi,
                creare e interpretare insieme, qui a Castelfranco di Sopra, Arezzo. I nostri
                costi sono pensati per essere accessibili.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex flex-col items-center gap-4 p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-accent">
                    <b.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                href="/dove-trovarci"
                className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
              >
                Contattaci per iniziare
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
