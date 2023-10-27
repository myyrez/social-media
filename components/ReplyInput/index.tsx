import PostButton from "../PostButton";

export default function ReplyInput() {
    return (
        <div className="h-16 w-full fixed flex justify-around items-center bottom-0 bg-neutral-900">
            <input className="
            px-4 py-1 w-8/12 h-fit rounded-full my-2
            bg-neutral-800 caret-white text-neutral-50
            placeholder:text-neutral-600
            focus:outline-none" 
            type="text" placeholder={`Reply`} />

            <PostButton />
        </div>
    )
}