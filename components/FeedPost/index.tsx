import { Post } from "@/app/lib/definitions"
import { fetchComments, fetchLikes } from "@/app/lib/data"
import LikeButton from "../LikeButton"
import ShareButton from "../ShareButton"
import CommentButton from "../CommentButton"
import Link from "next/link"

export default async function FeedPost({ post, }: { post: Post }) {
    const likes = await fetchLikes()
    const comments = await fetchComments()
    var commentCount = 0

    comments.forEach(comment => {
        if (comment.post_id == post.post_id) {
            commentCount++
        }
    })
    
    return (
        <div className="w-full h-fit py-3 px-3 border-b border-neutral-800 flex">
            <div className="
                w-11
                flex flex-col justify-between items-center
                ">
                <div className="bg-neutral-50 h-10 w-10 rounded-full flex flex-none justify-center items-center" />
                {commentCount < 1
                    ? <span className="hidden"></span>
                    : 
                    <>
                        <div className="bg-neutral-600 w-px h-full my-2 rounded-full" />
                        <div className="bg-neutral-50 h-5 w-5 rounded-full flex flex-none justify-center items-center" />
                    </>
                }
                
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

                <Link href={`/${post.user_id}/${post.post_id}`}>{post.content}</Link>

                <div className="flex gap-5 my-1">
                    <LikeButton post={post} likes={likes} />
                    <CommentButton post={post} comments={comments} />
                    <ShareButton />
                </div>

                {commentCount < 1 || commentCount !> 1
                    ? <span className="hidden"></span>
                    : <Link href={`/${post.user_id}/${post.post_id}`} className="text-neutral-600">{commentCount} Reply </Link>
                }

                {commentCount > 1
                    ? <Link href={`/${post.user_id}/${post.post_id}`} className="text-neutral-600">{commentCount} Replies </Link>
                    : <span className="hidden"></span>
                }
            </div>
        </div>
    )
}