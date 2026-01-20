import sidebarBg from '@/assets/images/sidebar/bg.jpg'
import { days } from '@/constants/contants'
import CheckCircle from '@/assets/images/sidebar/CheckCircle.svg?react'
import LockSimple from '@/assets/images/sidebar/LockSimple.svg?react'

const Sidebar = ({ active }: { active: number }) => {
  return (
    <div 
      className='max-w-[250px] w-full h-[calc(100vh-110px)] flex flex-col relative overflow-hidden'
      style={{
        backgroundImage: `url(${sidebarBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className='absolute inset-0'
        style={{
          background: 'radial-gradient(circle, rgba(var(--bg) / 0.67) 30%, rgb(var(--bg)) 100%)',
          backdropFilter: 'blur(50px)',
        }}
      />
      
      <div className='relative z-10 flex flex-col h-full pt-16 pl-5'>
        {days.map((day) => {
          const isActive = active === day.id
          return (
            <div 
              className={`relative p-4 ${isActive ? 'bg-bg rounded-l-full' : ''}`}
              key={day.id}
            >
              {isActive && (
                <>
                  {/* Top inverse curve */}
                  <div 
                    className='absolute -top-5 right-0 w-5 h-5'
                    style={{
                      background: 'radial-gradient(circle at 0 0, transparent 20px, rgb(var(--bg)) 20px)'
                    }}
                  />
                  {/* Bottom inverse curve */}
                  <div 
                    className='absolute -bottom-5 right-0 w-5 h-5'
                    style={{
                      background: 'radial-gradient(circle at 0 100%, transparent 20px, rgb(var(--bg)) 20px)'
                    }}
                  />
                </>
              )}
              <div className="flex items-center justify-between">
                <h6 className={`${day.locked ? 'text-textSecondary' : 'text-textPrimary'}`}>
                  {day.name}
                </h6>
                {isActive && !day.locked ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : day.locked ? (
                  <LockSimple className="w-5 h-5 flex-shrink-0 text-textSecondary" />
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar