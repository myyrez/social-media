import { BiComment } from "react-icons/bi";
import { Comments, Post } from "@/app/lib/definitions"

export default function CommentButton({ post, comments }: { post: Post, comments: Comments[] }) {
    var commentCount = 0
    
    comments.forEach(comment => {
        if (comment.post_id == post.post_id) {
            commentCount++
            console.log('oi')
        }
    })

    return (
        <form className="flex gap-2">
            <button className="text-2xl" type="submit"><BiComment /></button>
            {commentCount < 1
                ? <span className="hidden"></span>
                : <p>{commentCount}</p>
            }
        </form>
    )
}