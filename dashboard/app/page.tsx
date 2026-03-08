import { StatCards } from "@/components/StatCards";
import { IssuesCard } from "@/components/IssuesCard";
import { Resolved } from "@/components/Resolved";
import { ProtectionOverview } from "@/components/ProtectionOverview";
import { Documents } from "@/components/Documents";
import { Activity } from "@/components/Activity";


export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto px-6 py-10 space-y-10">
      
        <StatCards/>
        <IssuesCard/>
        <Resolved/>
        <ProtectionOverview/>
        <Documents/>
        <Activity/>
      
    </main>
  );
}
