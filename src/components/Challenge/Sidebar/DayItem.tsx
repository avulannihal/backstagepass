import { days } from '@/constants/contants'
import RoundedCorners from './RoundedCorners'
import DayIcon from './DayIcon'

const DayItem = ({ day, isActive, onClick }: { day: typeof days[0], isActive: boolean, onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-4 w-full text-left transition-colors ${
        isActive 
          ? 'bg-bg rounded-l-full' 
          : 'hover:bg-bg/50 rounded-l-full'
      }`}
    >
      {isActive && <RoundedCorners />}
      
      <div className="flex items-center justify-between">
        <h6 className={day.locked ? 'text-textSecondary' : 'text-textPrimary'}>
          {day.name}
        </h6>
        <DayIcon isActive={isActive} isLocked={day.locked} />
      </div>
    </button>
  )
}

export default DayItem
