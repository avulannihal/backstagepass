
import Panel from '../layout/Panel'
import Sidebar from './Sidebar'

const ChallengeLayout = () => {
    //api call here

  return (
    <div className="flex flex-col">
        <Panel currentDay={1} totalDays={30} challengeName="9-Day Fitness Challenge" />
        <div className="flex">
          <Sidebar active={1} />
          <div className=''>

          </div>
        </div>

    </div>
  )
}

export default ChallengeLayout