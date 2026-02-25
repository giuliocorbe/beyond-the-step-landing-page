import Image from "next/image"
import Link from "next/link"

export function VisionSection() {
  return (
    <section id="visione" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Chi Siamo
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Oltre il passo, verso l&#39;anima
          </h2>
          <div className="mt-2 h-px w-16 bg-accent" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/(Nessun oggetto)/859889eb-9ad0-4484-ab59-a83ecad00e72.jpeg"
              alt="Linda Franzoso, fondatrice di Beyond the Step"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-foreground sm:text-3xl text-balance">
              Linda Franzoso
            </h3>
            <div className="h-px w-12 bg-accent" />
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              Il nostro viaggio qui, a &#39;beyond the step&#39;, nasce dal desiderio di farvi
              scoprire un modo autentico di muovervi e di esprimervi. Vogliamo condividere
              con voi la nostra filosofia: uno spazio per muoversi, creare e interpretare
              insieme, andando oltre il semplice passo.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              La danza è parte di me da 19 anni. Come tecnico certificato CONI, metto la mia
              competenza professionale al servizio di chi vuole andare oltre la semplice
              esecuzione tecnica. Il mio obiettivo è trasmettere la capacità di interpretare
              la musica e le proprie emozioni.
            </p>
            <Link
              href="/chi-siamo"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
            >
              <span>Scopri di più</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
