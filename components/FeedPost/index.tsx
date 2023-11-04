import { Post } from "@/app/lib/definitions"
import { fetchComments, fetchLikes } from "@/app/lib/data"
import LikeButton from "../LikeButton"
import ShareButton from "../ShareButton"
import CommentButton from "../CommentButton"

export default async function FeedPost({ post, }: { post: Post }) {
    const likes = await fetchLikes()
    const comments = await fetchComments()
    
    return (
        <div className="w-full h-fit py-3 px-3 border-b border-neutral-800 flex">
            <div className="
                w-11
                flex flex-col justify-between items-center
                ">
                <div className="bg-neutral-50 h-10 w-10 rounded-full flex flex-none justify-center items-center" />
                <div className="bg-neutral-600 w-px h-full my-2 rounded-full" />
                <div className="bg-neutral-50 h-5 w-5 rounded-full flex flex-none justify-center items-center" />
            </div>
            <div className="
                text-neutral-50
                h-full w-full 
                flex flex-col gap-2
                px-4">
                <div className="flex justify-between">
                    <h1 className="font-semibold">{post.username}</h1>
                    <div className="flex gap-4">
                        <h1 className="text-neutral-600">3w</h1>
                    </div>
                </div>

                <div>{post.content}</div>

                <div className="flex gap-5">
                    <LikeButton post={post} likes={likes} />
                    <CommentButton post={post} comments={comments} />
                    <ShareButton />
                </div>

                <h1 className="text-neutral-600">REPLIES</h1>
            </div>
        </div>
    )
}