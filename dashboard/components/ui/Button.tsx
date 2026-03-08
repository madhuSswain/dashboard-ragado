
type variant = "primary" | "secondary";

export function Button({ 
    variant = "primary", children 
}:{
    variant?: variant;
    children: React.ReactNode;
}) {

    const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3";

    const styles = {
        primary: "bg-primary text-[var(--primary-foreground)] hover:bg-primary/90",
        secondary: "bg-secondary text-[var(--secondary-foreground)] hover:bg-secondary/80"
    };

    return(
        <button className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    )
}