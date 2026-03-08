export function Resolved() {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Resolved
      </h2>
      <button className="w-full text-left border border-border rounded-md px-5 py-4 hover:bg-muted/50 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right h-4 w-4 text-muted-foreground transition-transform"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <span className="text-sm text-muted-foreground">
              Insurance details confirmed
            </span>
          </div>
          <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
            Resolved
          </span>
        </div>
      </button>
    </section>
  );
}
