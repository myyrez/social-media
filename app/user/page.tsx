import Navbar from "@/components/Navbar";
import SuggestedForYou from "@/components/SuggestedForYou";

export default function UserPage() {
    return (
        <div className="text-neutral-50">
            <Navbar />

            <div className="flex px-5 justify-end my-2">
                <button className="flex">LOGOUT</button>
            </div>

            <div className="flex justify-between px-5">
                <div>
                    <h1 className="font-bold text-xl">USERNAME</h1>
                    <h1>NAME</h1>
                    <h1 className="text-neutral-600">FOLLOWERS</h1>
                </div>
                <div className="bg-neutral-50 h-14 w-14 rounded-full 
                    flex flex-none justify-center items-center
                "/>
            </div>
            
            <div className="flex justify-between px-5 my-4 gap-4">
                <button className="rounded-lg border border-neutral-800 font-semibold text-neutral-50 px-6 w-full py-1 h-fit">Edit profile</button>
                <button className="rounded-lg border border-neutral-800 font-semibold text-neutral-50 px-6 w-full py-1 h-fit">Share profile</button>
            </div>

            <div className="px-5 text-lg">
                <h1 className="mb-2">Suggested for you</h1>
                
                <div className="flex overflow-scroll gap-2 no-scrollbar">
                    <SuggestedForYou />
                    <SuggestedForYou />
                    <SuggestedForYou />
                </div>
            </div>

            <div className="relative border-t border-b my-4 py-3 font-semibold
                border-neutral-800 text-neutral-600 flex justify-around">
                <h1>Codes</h1>
                <h1>Replies</h1>
                <div className="absolute bottom-0 left-0 border-neutral-50 h-[2px] w-1/2 bg-neutral-50" />
            </div>
        </div>
    )
}