import { useState } from 'react'
import Panel from '../layout/Panel'
import Sidebar from './Sidebar/Sidebar'
import Post from './Post/Post'
import { posts } from '@/constants/posts'

const ChallengeLayout = () => {
    const [activeDay, setActiveDay] = useState(1)

  return (
    <div className="flex flex-col h-screen">
        <Panel currentDay={activeDay} totalDays={30} challengeName="9-Day Fitness Challenge" />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar active={activeDay} onDayClick={setActiveDay} />
          <div className='w-full bg-bg flex flex-col items-center overflow-y-auto'>
            <div className='w-full flex flex-col items-center gap-6 py-10 px-4'>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  author={post.author}
                  timestamp={post.timestamp}
                  text={post.text}
                  media={post.media}
                  reactions={post.reactions}
                  commentsCount={post.commentsCount}
                  isSubmission={post.isSubmission}
                />
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default ChallengeLayout