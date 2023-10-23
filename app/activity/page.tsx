import ActivityUserCard from "@/components/ActivityUserCard";
import Navbar from "@/components/Navbar";

export default function ActivityPage() {
    return (
        <div>
            <Navbar />

            <div className="p-4 pb-16 flex flex-col gap-2">
                <h1 className="text-neutral-50 text-3xl font-bold mb-2">Activity</h1>
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
                <ActivityUserCard />
            </div>
        </div>
    )
}