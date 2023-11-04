import { BiHeart } from "react-icons/bi"
import { Likes, Post } from "@/app/lib/definitions"

export default function LikeButton({ post, likes }: { post: Post, likes: Likes[] }) {
    var likeCount = 0
    
    likes.forEach(like => {
        if (like.post_id == post.post_id) {
            likeCount++
        }
    })

    return (
        <form className="flex gap-2">
            <button className="text-2xl" type="submit"><BiHeart /></button>
            {likeCount < 1 
                ? <span className="hidden"></span>
                : <p>{likeCount}</p>
            }
        </form>
    )
}