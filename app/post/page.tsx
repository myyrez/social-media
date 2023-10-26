import Navbar from "@/components/Navbar";
import PostButton from "@/components/PostButton";

export default function PostPage() {
    return (
        <div>
            <Navbar />
            <div className="fixed bottom-16 right-2">
                <PostButton />
            </div>

            <div className="p-4 pb-16 flex flex-col gap-2">
                <h1 className="text-neutral-50 text-3xl font-bold">New code</h1>

                <div className="flex my-2">
                    <div className="w-11 flex flex-col justify-between items-center">
                        <div className="bg-neutral-50 h-10 w-10 rounded-full flex flex-none justify-center items-center" />
                    </div>
                    <div className="
                        text-neutral-50
                        h-full w-4/5 
                        flex flex-col gap-2
                        px-4">
                        <div className="flex justify-between">
                            <h1 className="font-semibold">USERNAME</h1>
                        </div>

                        <span className="textarea placeholder:text-neutral-600" autoFocus role="textbox" placeholder="Write code" contentEditable></span>
                    </div>
                </div>
            </div>
        </div>
    )
}