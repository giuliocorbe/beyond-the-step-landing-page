import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-dance.jpg"
        alt="Danzatrice contemporanea in movimento"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.35em] uppercase text-primary-foreground/70 font-sans">
          Scuola di Danza &mdash; Castelfranco di Sopra, Arezzo
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-primary-foreground sm:text-6xl lg:text-8xl text-balance">
          Beyond the Step
        </h1>
        <div className="mx-auto h-px w-24 bg-accent" />
        <p className="max-w-2xl font-serif text-lg leading-relaxed text-primary-foreground/85 italic sm:text-xl lg:text-2xl text-pretty">
          {'"Scomponi il movimento, libera l\u2019emozione: dove la tecnica svanisce, l\u2019anima diventa visibile."'}
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/corsi-e-orari"
            className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
          >
            Scopri i corsi
          </Link>
          <Link
            href="/chi-siamo"
            className="inline-flex items-center justify-center border border-primary-foreground/40 px-8 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-all hover:border-accent hover:text-accent"
          >
            Chi siamo
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-primary-foreground/50">Scroll</span>
        <div className="h-12 w-px bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  )
}
