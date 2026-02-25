import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    title: "Children & Junior",
    subtitle: "Danza Moderna & Urban Pop",
    description:
      "Mix esplosivo di Modern e Urban Pop. Sviluppo della coordinazione e della fiducia in sé. Un luogo dove la personalità diventa danza.",
    image: "/images/(Nessun oggetto)/b183bbc8-f8ec-4acf-886f-4112e9411c8c.jpeg",
  },
  {
    title: "Adulti",
    subtitle: "Dance & Training",
    description:
      "Allenamento dinamico tra fitness e fluidità. Migliora postura, tono muscolare e scarica lo stress. Muovi il corpo per liberare la mente.",
    image: "/images/(Nessun oggetto)/dff799c8-67f8-4a7e-b514-f60be3394a57.jpeg",
  },
  {
    title: "Lezioni Private",
    subtitle: "Gestualità & Interpretazione",
    description:
      "Focus esclusivo su gestualità e interpretazione. Percorso personalizzato per far emergere la tua luce.",
    image: "/images/(Nessun oggetto)/fd60a2a8-e556-46f9-b1fd-7d4376b69f06.jpeg",
  },
]

export function CoursesSection() {
  return (
    <section id="corsi" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            I Nostri Percorsi
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            I nostri percorsi di danza
          </h2>
          <div className="mt-2 h-px w-16 bg-accent" />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Beyond the Step offre una varietà di corsi pensati per ispirare e coinvolgere,
            dai più piccoli agli adulti, ognuno con la sua energia e il suo stile unico.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col overflow-hidden bg-card transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-foreground/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-8">
                <h3 className="font-serif text-xl text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-xs tracking-widest uppercase text-accent">
                  {course.subtitle}
                </p>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {course.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/corsi-e-orari"
            className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
          >
            Scopri tutti i corsi
          </Link>
          <Link
            href="/prezzi-e-abbonamenti"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
          >
            <span>Prezzi e abbonamenti</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
