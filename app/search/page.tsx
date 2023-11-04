import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SearchUserCard from "@/components/SearchUserCard";
import { fetchUser } from "../lib/data";

export default async function SearchPage() {
    const users = await fetchUser()

    return (
        <div className="">
            <Navbar />

            <div className="p-4 pb-16 flex flex-col gap-2">
                <h1 className="text-neutral-50 text-3xl font-bold">Search</h1>

                <SearchBar />
                
                {users.map(user => (
                    <SearchUserCard key={user.user_id} user={user} />
                ))}
            </div>
        </div>
    )
}