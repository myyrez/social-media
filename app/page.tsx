import FeedPost from '@/components/FeedPost'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='pb-16'>
      <Navbar />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  )
}
