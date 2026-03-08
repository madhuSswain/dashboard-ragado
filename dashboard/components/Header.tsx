
export function Header() {
    return(
        <header className="border-b border-border">
            <div className="max-w-[900px] mx-auto px-6 h-14 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight">Coverify</span>
            

            <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium">Acme Services Ltd</span>
                <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">Active</span>
            </div>

            <nav className="flex items-center gap-5">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accounts</button>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documents</button>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign out</button>
            </nav>
            </div>
        </header>
    );

}