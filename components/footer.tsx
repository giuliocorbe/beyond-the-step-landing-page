export function Footer() {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="font-serif text-sm tracking-widest uppercase text-primary-foreground/40">
            Beyond the Step
          </p>
          <p className="text-xs text-primary-foreground/30">
            {'\u00A9'} {new Date().getFullYear()} Beyond the Step &mdash; Linda Franzoso. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
