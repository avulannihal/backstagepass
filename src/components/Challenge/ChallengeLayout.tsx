import { useState } from 'react'
import Panel from '../layout/Panel'
import Sidebar from './Sidebar/Sidebar'
import Post from './Post/Post'
import post1Image from '@/assets/images/Challenge/post/post1.png'

const ChallengeLayout = () => {
    const [activeDay, setActiveDay] = useState(1)

  return (
    <div className="flex flex-col">
        <Panel currentDay={activeDay} totalDays={30} challengeName="9-Day Fitness Challenge" />
        <div className="flex">
          <Sidebar active={activeDay} onDayClick={setActiveDay} />
          <div className='w-full h-full bg-bg flex flex-col items-center p-4 overflow-y-auto'>


            <div className=' w-full flex justify-center pt-10'>
              <Post
                author={{
                  name: "Ashraf Idrishi"
                }}
                timestamp="1s"
                text="Today's challenge workout completed—feeling stronger already"
                media={{
                  image: post1Image,
                  isVideo: true
                }}
                reactions={{
                  count: 18,
                  emojis: ["🙏", "😍"]
                }}
                commentsCount={10}
                isSubmission={true}
              />
            </div>

          </div>
        </div>

    </div>
  )
}

export default ChallengeLayout