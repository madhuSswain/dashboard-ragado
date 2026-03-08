export function Activity() {
    return(
        <section className="space-y-3">
            <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Activity
            </h2>
            <div className="border border-border rounded-md divide-y">
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                        Public Liability certificate verified
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        Today, 09:14
                    </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                        Monitoring check completed
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        Today, 06:00
                    </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                        Health &amp; Safety policy flagged as missing
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        Yesterday, 14:32
                    </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                        Contract cover gap identified
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        Yesterday, 14:32
                    </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">
                        Professional Indemnity certificate uploaded
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        27 Feb 2026
                    </span>
                </div>
            </div>
        </section>
    )
}