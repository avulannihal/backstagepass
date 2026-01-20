import sidebarBg from '@/assets/images/sidebar/bg.jpg'
import { days } from '@/constants/contants'
import DayItem from './DayItem'

const Sidebar = ({ active, onDayClick }: { active: number, onDayClick: (dayId: number) => void }) => {
  return (
    <div 
      className='max-w-[160px] md:max-w-[250px] w-full h-[calc(100vh-110px)] flex flex-col relative overflow-hidden'
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
      

      <div className='relative z-10 flex flex-col h-full pt-16 pl-3 md:pl-5'>
        {days.map((day) => (
          <DayItem 
            key={day.id}
            day={day}
            isActive={active === day.id}
            onClick={() => onDayClick(day.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar