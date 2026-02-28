import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { MapPin, Mail, Phone, Clock, Instagram } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Dove Trovarci | Beyond the Step",
  description:
    "Vieni a trovarci a Via Pretolli, Castelfranco di Sopra (AR). Aperti tutti i giorni tranne la domenica. Contattaci per informazioni.",
}

const contactDetails = [
  {
    icon: MapPin,
    label: "Indirizzo",
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
    href: "tel:+393343773202",
  },
  {
    icon: Clock,
    label: "Orari di apertura",
    lines: ["Lunedì - Sabato: aperto", "Domenica: chiuso"],
  },
]

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/lindafranzoso?igsh=OTdrczdhM3Rxd2lz&utm_source=qr." },
  { label: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@franzosolinda?_r=1&_t=ZN-94GksZe4Msg" },
]

export default function DoveTrovarciPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          subtitle="Dove Trovarci"
          title="Vieni a trovarci"
          description="Ci troviamo facilmente nella zona sportiva di Castelfranco di Sopra, un punto di riferimento comodo e ben riconoscibile per tutti."
          image="/images/silk-viscose-velvet-tc000025.webp"
          imageAlt="Beyond the Step - Scuola di Danza"
        />

        {/* Location info + form */}
        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              {/* Left: Info */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                    Informazioni
                  </p>
                  <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                    Dove trovarci
                  </h2>
                  <div className="h-px w-12 bg-accent" />
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                    Il nostro studio è aperto tutti i giorni della settimana per accoglierti,
                    ad eccezione della domenica. Vieni a scoprire come Beyond the Step ti porta
                    {' "'}Oltre il passo, verso l&#39;anima{'"'}.
                  </p>
                </div>

                {/* Contact cards */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 border border-border p-6"
                    >
                      <item.icon className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs tracking-widest uppercase text-muted-foreground">
                          {item.label}
                        </span>
                        {item.lines.map((line) =>
                          item.href ? (
                            <a
                              key={line}
                              href={item.href}
                              className="text-sm text-foreground transition-colors hover:text-accent"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm text-foreground">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                    Seguici
                  </p>
                  <div className="flex items-center gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                    Posizione
                  </p>
                  <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
                    Ci troviamo qui
                  </h2>
                  <div className="h-px w-12 bg-accent" />
                </div>
                {/* Map embed */}
                <div className="relative aspect-video overflow-hidden border border-border">
                  <Image
                    src="/images/studio-location.jpg"
                    alt="Vista di Castelfranco di Sopra"
                    fill
                    className="object-cover"
                    quality={75}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
                    <a
                      href="https://maps.app.goo.gl/B35Axis2yZyhtBzS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-primary-foreground/40 bg-background/90 px-6 py-3 text-sm font-medium tracking-widest uppercase text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
                    >
                      Apri in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
