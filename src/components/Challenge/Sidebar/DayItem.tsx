import { days } from '@/constants/contants'
import RoundedCorners from './RoundedCorners'
import DayIcon from './DayIcon'

const DayItem = ({ day, isActive }: { day: typeof days[0], isActive: boolean }) => {
  return (
    <div className={`relative p-4 ${isActive ? 'bg-bg rounded-l-full' : ''}`}>
      {isActive && <RoundedCorners />}
      
      <div className="flex items-center justify-between">
        <h6 className={day.locked ? 'text-textSecondary' : 'text-textPrimary'}>
          {day.name}
        </h6>
        <DayIcon isActive={isActive} isLocked={day.locked} />
      </div>
    </div>
  )
}

export default DayItem
