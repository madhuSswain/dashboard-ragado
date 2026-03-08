"use client"

import { useState } from "react";
import { Button } from "./ui/Button";

type Variant = "primary" | "secondary";

type Action = {
  label: string;
  variant: Variant;
};

type Issue = {
  id: number;
  title: string;
  description: string;
  status: string;
  actions: Action[];
};

export function IssuesCard() {
  
  const [issues, setIssues] = useState<Issue[]>([
    {
      id: 1,
      title: "Your contract requires more cover than you currently have",
      description:
        "Your current business details do not reflect the level of liability referenced in your client agreements. This may expose you to uncovered costs if a claim arises.",
      status: "Needs attention",
      actions: [
        {label: "Review contracts", variant:"secondary"},
        {label: "Adjust protection", variant:"primary"}
      ]
    },
    {
      id: 2,
      title: "A required document is missing for this type of work",
      description:
        "Businesses carrying out this activity typically retain a current health and safety policy. This could result in gaps if requested by a client or authority.",
      status: "Review recommended",
      actions: [
        {label: "Upload document", variant:"secondary"},
        {label: "Acknowledge", variant:"primary"}
      ]
    }
  ]);


  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Issues
      </h2>

      {issues.map((issue) => (
        <div key={issue.id} className="border border-border rounded-md p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold leading-snug">
            {issue.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {issue.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
            {issue.status}
          </span>
          <div className="flex gap-2">
            {issue.actions.map((action) => (
              <Button key={action.label} variant={action.variant}>
                {action.label}
              </Button>
            ))}
              
          </div>
        </div>
    </div>
      
      ))}
      
    </section>
  );
}
