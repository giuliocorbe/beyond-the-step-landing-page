import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Dove siamo",
    lines: ["Via Pretolli", "52026 Castelfranco di Sopra (AR)"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["franzosolinda@gmail.com"],
    href: "mailto:franzosolinda@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    lines: ["334 377 3202"],
    href: "https://wa.me/393343773202",
  },
]

export function ContactSection() {
  return (
    <section id="contatti" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/60">
            Contatti
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Inizia il tuo viaggio
          </h2>
          <div className="mt-2 h-px w-16 bg-accent" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70 text-pretty">
            Contattaci per scoprire i nostri corsi e trovare il percorso
            più adatto a te. La prima lezione di prova è gratuita.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 border border-primary-foreground/10 p-8 text-center"
            >
              <item.icon className="h-6 w-6 text-accent" />
              <h3 className="text-sm tracking-widest uppercase text-primary-foreground/60">
                {item.label}
              </h3>
              <div className="flex flex-col gap-1">
                {item.lines.map((line) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-primary-foreground/80">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to contact page */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/dove-trovarci"
            className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </section>
  )
}
