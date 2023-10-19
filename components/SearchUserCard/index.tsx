import FollowButton from "../FollowButton";

export default function SearchUserCard() {
    return (
        <div className="flex items-start my-1">
            <div className="bg-neutral-50 h-10 w-10 rounded-full 
                flex flex-none justify-center items-center
            "/>
            <div className="flex gap-4 w-full justify-between 
                border-b pb-3 ml-3 border-neutral-800
            ">
                <div className="flex flex-col">
                    <h1 className="text-neutral-50">USERNAME</h1>
                    <h1 className="text-neutral-600">NAME</h1>
                    {/* <h1 className="text-neutral-50">FOLLOWERS</h1> */}
                </div>
                <FollowButton />
            </div>
        </div>
    )
}