export function ProtectionOverview() {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Protection Overview
      </h2>
      <div className="border border-border rounded-md overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b border-border">
              <tr className="border-b border-border transition-colors data-[state=selected]:bg-muted hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has(role=checkbox])]:pr-0 text-xs">
                  Cover Type
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-xs">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-xs">
                  Limit
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-xs">
                  Source
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-xs">
                  Renewal
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b border-border transition-colors data-[state=selected]:bg-muted hover:bg-muted/50">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm font-medium">
                  Public Liability
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-foreground font-medium">
                    Active
                  </span>
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm">
                  £5,000,000
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  Verified
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  12 Sep 2026
                </td>
              </tr>
              <tr className="border-b border-border transition-colors data-[state=selected]:bg-muted hover:bg-muted/50">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm font-medium">
                  Professional Indemnity
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-foreground font-medium">
                    Active
                  </span>
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm">
                  £1,000,000
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  Verified
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  04 Mar 2027
                </td>
              </tr>
              <tr className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm font-medium">
                  Employers Liability
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    Not detected
                  </span>
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  —
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  —
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-sm text-muted-foreground">
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
