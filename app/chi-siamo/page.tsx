import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Chi Siamo | Beyond the Step",
  description:
    "Scopri la storia di Linda Franzoso, fondatrice di Beyond the Step. 19 anni di danza, competizioni e spettacoli teatrali al servizio dell'espressione autentica.",
}

export default function ChiSiamoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          subtitle="Chi Siamo"
          title="Oltre il passo, verso l'anima."
          description="Il nostro viaggio qui, a 'beyond the step', nasce dal desiderio di farvi scoprire un modo autentico di muovervi e di esprimervi."
          image="/images/silk-viscose-velvet-tc000025.webp"
          imageAlt="Beyond the Step - Scuola di Danza"
        />

        {/* Intro */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-center text-lg leading-relaxed text-muted-foreground text-pretty">
              Vogliamo condividere con voi la nostra filosofia: uno spazio per muoversi, creare e
              interpretare insieme, andando oltre il semplice passo. Qui, la danza è un linguaggio
              di libertà, un&#39;opportunità per connettersi con l&#39;anima attraverso il movimento e la musica.
            </p>
          </div>
        </section>

        {/* Il mio percorso */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/linda-portrait.jpg"
                  alt="Linda Franzoso, fondatrice di Beyond the Step"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                  Il mio percorso
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                  19 anni di passi e passioni
                </h2>
                <div className="h-px w-12 bg-accent" />
                <blockquote className="flex flex-col gap-4 border-l-2 border-accent pl-6">
                  <p className="text-base leading-relaxed text-muted-foreground italic text-pretty">
                    {'"La danza è parte di me da 19 anni. È un viaggio iniziato per pura necessità personale, un modo per esplorare me stessa prima ancora di mostrarmi agli altri. In questi anni ho vissuto il palco in ogni sua sfaccettatura: dal rigore e l\'energia delle competizioni agonistiche di Hip Hop, fino alla magia narrativa degli spettacoli teatrali."'}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground italic text-pretty">
                    {'"Per me, ballare non è mai stato solo eseguire sequenze, ma trovare una forma di danza espressiva e comunicativa capace di dare voce a ciò che le parole non sanno dire."'}
                  </p>
                </blockquote>
                <Link
                  href="/corsi-e-orari"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
                >
                  <span>Scopri i corsi</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* L'Insegnamento */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-6 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/gallery-3.jpg"
                    alt="Linda Franzoso durante una lezione"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:order-1">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                  La missione
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                  L&#39;Insegnamento: Trasmettere consapevolezza
                </h2>
                <div className="h-px w-12 bg-accent" />
                <blockquote className="flex flex-col gap-4 border-l-2 border-accent pl-6">
                  <p className="text-base leading-relaxed text-muted-foreground italic text-pretty">
                    {'"L\'insegnamento è il tassello che completa la mia missione. Come tecnico certificato CONI, metto la mia competenza professionale al servizio di chi vuole andare oltre la semplice esecuzione tecnica."'}
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground italic text-pretty">
                    {'"Il mio obiettivo non è solo insegnare dei passi, ma trasmettere la capacità di interpretare la musica e le proprie emozioni. Attraverso il movimento, guido i miei allievi verso una nuova consapevolezza di sé, aiutandoli a sentirsi finalmente bene nel proprio corpo e in armonia con la propria anima."'}
                  </p>
                </blockquote>
                <Link
                  href="/progetti-e-collaborazioni"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
                >
                  <span>Guarda le performance</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-accent py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <blockquote className="font-serif text-2xl leading-relaxed text-accent-foreground italic sm:text-3xl text-pretty">
                {'"Hai una visione che aspetta di prendere vita? Trasformiamo insieme il tuo suono in un\'immagine indimenticabile. Sono pronta a dare forma alla tua prossima sfida creativa."'}
              </blockquote>
              <div className="h-px w-12 bg-accent-foreground/30" />
              <cite className="text-xs tracking-[0.35em] uppercase text-accent-foreground/60 not-italic">
                Linda Franzoso
              </cite>
              <Link
                href="/dove-trovarci"
                className="mt-4 inline-flex items-center justify-center border border-accent-foreground/30 px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-accent-foreground hover:text-accent"
              >
                Contattami e inizia il tuo percorso
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
