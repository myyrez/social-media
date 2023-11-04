import FeedPost from '@/components/FeedPost'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { fetchPost } from './lib/data'

export default async function Home() {
  const posts = await fetchPost()

  return (
    <div className='pb-16'>
      <Navbar />

      {posts.map(post => (
        <FeedPost key={post.post_id} post={post}/>
      ))}
    </div>
  )
}
