import WidgetsGrid from "@/components/dashboard/WidgetsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard'
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="mt-2 text-xl">Informacion general</span>
        <WidgetsGrid />
    </div>
  )
}
