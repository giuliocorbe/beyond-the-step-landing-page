export function QuoteBanner() {
  return (
    <section className="bg-accent py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <blockquote className="flex flex-col items-center gap-6">
          <div className="h-px w-12 bg-accent-foreground/30" />
          <p className="font-serif text-2xl leading-relaxed text-accent-foreground italic sm:text-3xl lg:text-4xl text-pretty">
            {'"Per me, ballare non è mai stato solo eseguire sequenze, ma trovare una forma di danza espressiva e comunicativa capace di dare voce a ciò che le parole non sanno dire."'}
          </p>
          <div className="h-px w-12 bg-accent-foreground/30" />
          <cite className="text-xs tracking-[0.35em] uppercase text-accent-foreground/60 not-italic">
            Linda Franzoso
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
