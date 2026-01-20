import InfoIcon from '@/assets/images/Challenge/Panel/Info.svg?react'
import CaretLeftIcon from '@/assets/images/Challenge/Panel/CaretLeft.svg?react'

interface PanelProps {
  currentDay: number
  totalDays: number
  challengeName: string
  onBack?: () => void
}

const Panel = ({ currentDay, totalDays, challengeName, onBack }: PanelProps) => {
  return (
    <div className="w-full bg-defaultBg border-t border-borderMuted border-b border-borderMuted px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-textPrimary hover:opacity-70 transition-opacity"
          >
            <CaretLeftIcon className="w-5 h-5 fill-current" />
            <span className="text-sm">Back</span>
          </button>
          
          <div className="h-4 w-px bg-borderMuted" />
          
          <span className="text-sm font-semibold text-textPrimary">
            Day {currentDay} of {totalDays}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-md font-semibold text-textPrimary">{challengeName}</span>
          
          <button className="text-textPrimary hover:opacity-70 transition-opacity">
            <InfoIcon className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Panel