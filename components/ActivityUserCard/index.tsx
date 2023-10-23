import FollowButton from "../FollowButton";
import SeeButton from "../SeeButton";

export default function ActivityUserCard() {
    return (
        <div className="flex items-start my-1">
            <div className="relative">
                <div className="bg-neutral-50 h-10 w-10 rounded-full 
                    flex flex-none justify-center items-center
                "/>
                <div className="bg-purple-500 border-2 border-neutral-900
                    absolute h-6 w-6 top-5 left-5 rounded-full
                    flex flex-none justify-center items-center
                "/>
            </div>
            <div className="flex gap-4 w-full justify-between 
                border-b pb-3 ml-3 border-neutral-800
            ">
                <div className="flex flex-col">
                    <h1 className="text-neutral-50">USERNAME</h1>
                    <h1 className="text-neutral-600">ACTIVITY</h1>
                </div>
                <FollowButton />
                {/* <SeeButton /> */}
            </div>
        </div>
    )
}