import Image from "next/image"

interface PageHeaderProps {
  subtitle: string
  title: string
  description?: string
  image: string
  imageAlt: string
}

export function PageHeader({ subtitle, title, description, image, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 min-h-[50vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-4xl">
        <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/60 font-sans">
          {subtitle}
        </p>
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        <div className="h-px w-16 bg-accent" />
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
