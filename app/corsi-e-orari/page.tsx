import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Corsi e Orari | Beyond the Step",
  description:
    "Scopri i corsi di danza di Beyond the Step: Modern & Urban Pop per bambini e ragazzi, Dance & Training per adulti e lezioni private di gestualità e interpretazione.",
}

const courses = [
  {
    title: "Children & Junior: Danza Moderna & Urban Pop",
    image: "/images/course-children.jpg",
    imageAlt: "Bambini e ragazzi durante una lezione di danza moderna",
    points: [
      "Mix esplosivo di Modern e Urban Pop.",
      "Sviluppo della coordinazione e della fiducia in sé.",
      "Un luogo dove la personalità diventa danza.",
    ],
  },
  {
    title: "Adulti: Dance & Training",
    image: "/images/course-adults.jpg",
    imageAlt: "Adulti durante una lezione di dance training",
    points: [
      "Allenamento dinamico tra fitness e fluidità.",
      "Migliora postura, tono muscolare e scarica lo stress.",
      "Muovi il corpo per liberare la mente.",
    ],
  },
  {
    title: "Lezioni Private: Gestualità & Interpretazione",
    image: "/images/course-private.jpg",
    imageAlt: "Lezione privata di gestualità e interpretazione",
    points: [
      "Focus esclusivo su gestualità e interpretazione.",
      "Percorso personalizzato per far emergere la tua luce.",
      "Il dettaglio tecnico che trasforma la tua performance.",
    ],
  },
]

export default function CorsiOrariPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          subtitle="I Nostri Percorsi"
          title="Oltre il passo, verso l'anima"
          description="Beyond the Step offre una varietà di corsi pensati per ispirare e coinvolgere, dai più piccoli agli adulti, ognuno con la sua energia e il suo stile unico."
          image="/images/hero-dance.jpg"
          imageAlt="Danzatrice in movimento"
        />

        {/* Courses */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                I nostri percorsi di danza
              </p>
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Trova il percorso che fa per te
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
            </div>

            <div className="flex flex-col gap-20 lg:gap-28">
              {courses.map((course, i) => (
                <article
                  key={course.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h3 className="font-serif text-2xl text-foreground sm:text-3xl text-balance">
                      {course.title}
                    </h3>
                    <div className="h-px w-12 bg-accent" />
                    <ul className="flex flex-col gap-4">
                      {course.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <Link
                href="/dove-trovarci"
                className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
              >
                Prenota una lezione di prova
              </Link>
            </div>
          </div>
        </section>

        {/* Info banner */}
        <section className="bg-accent py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-serif text-2xl text-accent-foreground sm:text-3xl lg:text-4xl text-balance">
                Muoviti. Connettiti. Esprimiti.
              </h2>
              <div className="h-px w-12 bg-accent-foreground/30" />
              <p className="text-base leading-relaxed text-accent-foreground/85 text-pretty">
                Beyond the Step è più di una semplice scuola di danza. È uno spazio dove ogni gesto
                racconta una storia, la tua. Crediamo nella libertà di movimento senza filtri,
                nell&#39;aggregazione attraverso l&#39;energia del gruppo e nella libera interpretazione
                dell&#39;anima. Vieni a scoprire il tuo ritmo interiore a Castelfranco di Sopra, Arezzo.
              </p>
            </div>
          </div>
        </section>

        {/* A chi sono rivolti */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                  Per tutti
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                  A chi sono rivolti i nostri corsi?
                </h2>
                <div className="h-px w-12 bg-accent" />
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  I nostri corsi sono pensati per tutti: da bambini curiosi di scoprire il mondo
                  della danza, con i percorsi Children & Junior, agli adulti che desiderano
                  rimettersi in forma divertendosi con Dance & Training, fino a chi cerca un
                  percorso più intimo e personalizzato con le Lezioni Private di Gestualità &
                  Interpretazione. Bambini e adulti troveranno qui il loro spazio per crescere e
                  fiorire, nella nostra sede di Castelfranco di Sopra, Arezzo Italia.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                  La differenza
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                  Il nostro ingrediente segreto
                </h2>
                <div className="h-px w-12 bg-accent" />
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  Ciò che rende Beyond the Step davvero unico è la nostra enfasi sulla creatività
                  espressiva. Non si tratta solo di tecnica, ma di dare spazio all&#39;individualità,
                  permettendo a ogni partecipante di connettersi profondamente con se stesso e di
                  tradurre emozioni in movimento. È un luogo dove l&#39;autenticità e l&#39;interpretazione
                  personale sono celebrate, per una danza che va oltre il semplice passo.
                </p>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <Link
                href="/dove-trovarci"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
              >
                <span>Chiedi informazioni sui corsi</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
