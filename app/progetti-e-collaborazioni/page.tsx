import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { ProjectsMediaCarousel } from "@/components/projects-media-carousel"
import { Film, Music, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Progetti e Collaborazioni | Beyond the Step",
  description:
    "Visione coreografica, regia video e presenza come ballerina. Collaboriamo insieme per creare videoclip, eventi live e progetti creativi.",
}

const services = [
  {
    icon: Film,
    title: "Direzione Artistica Videoclip",
    description:
      "Dalla visione coreografica alla regia video, creo immagini che restano impresse. Ogni brano ha un'anima che aspetta di essere vista.",
  },
  {
    icon: Music,
    title: "Eventi Live",
    description:
      "Cura di performance ed eventi dal vivo, portando la danza come linguaggio espressivo per dare un volto unico al tuo suono.",
  },
  {
    icon: Sparkles,
    title: "Collaborazioni Creative",
    description:
      "Dalla sfida creativa alla realizzazione: collaboriamo per trasformare la tua visione in qualcosa di memorabile.",
  },
]

export default function ProgettiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          subtitle="Progetti e Collaborazioni"
          title="Creiamo insieme qualcosa di memorabile"
          image="/images/silk-viscose-velvet-tc000025.webp"
          imageAlt="Beyond the Step - Scuola di Danza"
        />

        {/* Main quote */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/(Nessun oggetto)/49cb7a2e-18c7-405d-be50-fd6fea7bce3d.JPG"
                  alt="Performance di danza dal vivo"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                  La mia visione
                </p>
                <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                  Ogni brano ha un&#39;anima che aspetta di essere vista
                </h2>
                <div className="h-px w-12 bg-accent" />
                <blockquote className="border-l-2 border-accent pl-6">
                  <p className="text-base leading-relaxed text-muted-foreground italic text-pretty">
                    {'"Metto la mia visione coreografica, la regia video e la mia presenza come ballerina al servizio della tua musica, per creare immagini che restano. Dalla direzione artistica di un videoclip alla cura di un evento live, sono pronta a collaborare per dare un volto unico al tuo suono."'}
                  </p>
                </blockquote>
                <Link
                  href="/dove-trovarci"
                  className="mt-4 inline-flex w-fit items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
                >
                  Collabora con noi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                Cosa posso fare per te
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col items-center gap-5 bg-card p-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-accent">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-card-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery of projects */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                Portfolio
              </p>
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                I miei progetti
              </h2>
              <div className="mt-2 h-px w-16 bg-accent" />
            </div>
            <ProjectsMediaCarousel />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-serif text-2xl text-accent-foreground sm:text-3xl lg:text-4xl text-balance">
                Creiamo insieme qualcosa di memorabile?
              </h2>
              <div className="h-px w-12 bg-accent-foreground/30" />
              <Link
                href="/dove-trovarci"
                className="mt-4 inline-flex items-center justify-center border border-accent-foreground/30 px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-accent-foreground hover:text-accent"
              >
                Contattami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
