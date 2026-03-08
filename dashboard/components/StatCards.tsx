"use client"

import { useState } from "react"

export function StatCards() {
    
    const [stats] = useState({
        issues: 2,
        lastChecked: "Last checked today",

        protection: [
            { name: "Public Liability" , status: "Active" },
            { name: "Professional Indemnity", status: "Active" },
            { name: "Employers Liability", status: "Not detected" }
        ],

        monitoring: "Enabled",
        monitoringType: "Continuous",

        renewalDate: "12 Sep 2026",
        renewalPolicy: "Public Liability"
    })

    return(
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {/* 1st card - Issues*/}
        <div className="border border-border rounded-md p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Issues</p>
            <p className="text-sm font-semibold">{stats.issues} Need Attention</p>
            <p className="text-xs text-muted-foreground">{stats.lastChecked}</p>
        </div>

         {/* 2nd card - protection*/}
         <div className="border border-border rounded-md p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Active Protection</p>
            <div className="space-y-0.5">
                {stats.protection.map((item, index) => (
                    <p key={index} className="text-xs">
                    {item.name} -{""} 
                    <span className="text-foreground font-medium">{item.status}</span>
                   </p>
                ))}
                
            </div>
         </div>

         {/* 3rd card - monitoring*/}
         <div className="border border-border rounded-md p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Monitoring</p>
            <p className="text-sm font-semibold">{stats.monitoring}</p>
            <p className="text-xs text-muted-foreground">{stats.monitoringType}</p>
         </div>

         {/* 4th card - renewal */}
        <div className="border border-border rounded-md p-4 space-y-1">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Next Renewal</p>
            <p className="text-sm font-semibold">{stats.renewalDate}</p>
            <p className="text-xs text-muted-foreground">{stats.renewalPolicy}</p>
        </div>

        </section>
        
    )
}