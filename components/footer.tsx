export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background-light">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 text-primary">
            </div>
            <span className="text-base font-bold">Soto Cipto Roso</span>
          </div>
          <p className="text-sm text-text-light/70">
            © {new Date().getFullYear()} Soto Cipto Roso. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}