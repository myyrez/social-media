import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchUserCard from "@/components/SearchUserCard";

export default function SearchPage() {
    return (
        <div className="">
            <Navbar />

            <div className="p-4 flex flex-col gap-2">
                <h1 className="text-neutral-50 text-3xl font-bold">Search</h1>
                <SearchBar />
            <SearchUserCard />
            <SearchUserCard />
            <SearchUserCard />
            <SearchUserCard />
            </div>
        </div>
    )
}