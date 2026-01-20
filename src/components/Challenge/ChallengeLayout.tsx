import React from 'react'
import Panel from '../layout/Panel'

const ChallengeLayout = () => {
    //api call here
  return (
    <div className="flex flex-col">
        <Panel currentDay={1} totalDays={30} challengeName="9-Day Fitness Challenge" />
    </div>
  )
}

export default ChallengeLayout