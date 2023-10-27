import Reply from "@/components/Reply";
import ReplyInput from "@/components/ReplyInput";

export default function UserPostPage() {
    return (
        <div className="text-neutral-50 pb-16">
            <ReplyInput />

            <div className="flex gap-4 p-3 border-b border-neutral-800 text-xl mb-4">
                <div>X</div>
            </div>
            
            <div className="px-4 flex flex-col gap-4">
                <div className="flex w-full gap-4 items-center">
                    <div>
                        <div className="bg-neutral-50 h-10 w-10 rounded-full flex flex-none justify-center items-center" />
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="font-semibold">USERNAME</div>
                        <div>
                            <h1 className="text-neutral-600">3w</h1>
                        </div>
                    </div>
                </div>

                <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam quasi totam? Iure ex minima modi voluptatum velit commodi, mollitia atque totam? Recusandae, sunt ducimus? At porro iusto animi velit.
                </div>

            </div>

            <div className="flex px-4 py-3 gap-4 border-b border-neutral-800">
                <div>LIKE</div>
                <div>COMMENT</div>
                <div>SHARE</div>
            </div>

            <Reply />
            <Reply />
            <Reply />
            <Reply />
            <Reply />
        </div>
    )
}