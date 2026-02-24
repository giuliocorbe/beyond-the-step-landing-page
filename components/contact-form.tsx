"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-accent/30 bg-accent/5 p-12 text-center">
        <div className="h-px w-12 bg-accent" />
        <h3 className="font-serif text-2xl text-foreground">Grazie!</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Il tuo messaggio è stato inviato. Ti risponderemo al più presto.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Nome <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none"
          placeholder="Il tuo nome"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Indirizzo email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none"
          placeholder="La tua email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Messaggio <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="resize-none border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none"
          placeholder="Scrivi il tuo messaggio..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-widest uppercase text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
      >
        Invia modulo
      </button>
    </form>
  )
}
