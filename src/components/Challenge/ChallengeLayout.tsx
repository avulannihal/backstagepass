
import Panel from '../layout/Panel'
import Sidebar from './Sidebar/Sidebar'

const ChallengeLayout = () => {
    //api call here

  return (
    <div className="flex flex-col">
        <Panel currentDay={1} totalDays={30} challengeName="9-Day Fitness Challenge" />
        <div className="flex">
          <Sidebar active={1} />
          <div className='w-full h-full bg-red-500'>

          </div>
        </div>

    </div>
  )
}

export default ChallengeLayout