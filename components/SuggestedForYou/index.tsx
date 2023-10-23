import FollowButton from "../FollowButton";

export default function SuggestedForYou() {
    return (
        <div className="bg-neutral-800 rounded-2xl 
            h-48 w-40 px-4 py-4
            flex flex-col gap-3 justify-center items-center
        ">
            <div className="bg-neutral-50 h-14 w-14 rounded-full 
                flex flex-none justify-center items-center
            "/>
            <div className="flex flex-col items-center">
                <h1 className="text-base">USERNAME</h1>
                <h1 className="text-sm text-neutral-500">NAME</h1>
            </div>
            <FollowButton />
        </div>
    )
}