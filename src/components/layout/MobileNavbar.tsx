import sidebarBg from '@/assets/images/sidebar/bg.jpg'
import InfoIcon from '@/assets/images/Challenge/Panel/Info.svg?react'
import CaretLeftIcon from '@/assets/images/Challenge/Panel/CaretLeft.svg?react'
import { days } from '@/constants/contants'

const MobileNavbar = ({ active, onDayClick }: { active: number, onDayClick: (dayId: number) => void }) => {
  return (
    <div
      className='pt-4 w-full flex flex-col relative overflow-hidden rounded-b-3xl'
      style={{
        backgroundImage: `url(${sidebarBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='absolute inset-0'
        style={{
          background: 'radial-gradient(circle, rgba(var(--bg) / 0.67) 30%, rgb(var(--bg)) 100%)',
          backdropFilter: 'blur(50px)',
        }}
      />

      <div className='relative z-10 flex items-center justify-between px-4 pt-4'>
        <button
          className="flex items-center gap-1 text-textPrimary hover:opacity-70 transition-opacity"
        >
          <CaretLeftIcon className="w-5 h-5 fill-current" />
          <span className="text-md font-semibold text-textPrimary">9-Day Fitness Challenge</span>
        </button>


        <button className="text-textPrimary hover:opacity-70 transition-opacity">
          <InfoIcon className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Space below for future additions */}
      <div className='relative z-10 flex-1 flex gap-4 px-4 scrollbar-hide overflow-x-auto mt-8'>
        {days.map((day) => {
          const isActive = active === day.id
          return (
            <button
              key={day.id}
              onClick={() => onDayClick(day.id)}
              className={`relative flex items-center justify-center cursor-pointer p-4 transition-colors ${
                isActive 
                  ? 'bg-bg rounded-t-full' 
                  : 'hover:bg-bg/50 rounded-t-full'
              }`}
            >
              <span className={`text center flex flex-col items-center ${
                day.locked ? 'text-textSecondary' : 'text-textPrimary'
              }`}>
                <span className="text-sm">
                  {day.name.split('-')[0].trim()}
                </span>
                <span className="text-lg font-semibold">
                  {day.name.split('-')[1].trim()}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNavbar
