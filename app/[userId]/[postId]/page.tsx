import { Post } from "@/app/lib/definitions";
import Reply from "@/components/Reply";
import ReplyInput from "@/components/ReplyInput";
import { fetchComments, fetchLikes, fetchPost } from "@/app/lib/data";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import CommentButton from "@/components/CommentButton";
import ShareButton from "@/components/ShareButton";

export default async function UserPostPage({ 
    params: { userId, postId } 
}: { 
    params: { 
        userId: string,
        postId: string 
    } 
}) {
    const post = await fetchPost()
    const comments = await fetchComments()
    const likes = await fetchLikes()

    return (
        post.filter(p => p.post_id == parseInt(postId) && p.user_id == parseInt(userId)).map(p => (

            <div className="text-neutral-50 pb-16">
                <ReplyInput />

                <div className="
                    fixed top-0 w-full bg-neutral-900
                    flex gap-4 p-4 border-b border-neutral-800 text-xl mb-4">
                    <Link href={'/'} className="h-7 flex items-center"><BiArrowBack className='text-3xl' /></Link>
                </div>
                
                <div className="px-4 mt-20 flex flex-col gap-4">
                    <div className="flex w-full gap-4 items-center">
                        <div>
                            <div className="bg-neutral-50 h-10 w-10 rounded-full flex flex-none justify-center items-center" />
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="font-semibold">{p.username}</div>
                            <div>
                                <h1 className="text-neutral-600">3w</h1>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {p.content}
                    </div>

                </div>

                <div className="flex px-4 py-3 gap-4 border-b border-neutral-800">
                    <LikeButton post={p} likes={likes} />
                    <CommentButton post={p} comments={comments} />
                    <ShareButton />
                </div>

                {comments.filter(comment => comment.post_id == p.post_id).map(comment => (
                    <Reply key={comment.comment_id} comments={comment} post={p} />
                ))}
            </div>
        ))
    )
}