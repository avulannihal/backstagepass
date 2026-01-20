import CheckCircle from '@/assets/images/sidebar/CheckCircle.svg?react'
import LockSimple from '@/assets/images/sidebar/LockSimple.svg?react'

const DayIcon = ({ isActive, isLocked }: { isActive: boolean, isLocked: boolean }) => {
  if (isActive && !isLocked) {
    return <CheckCircle className="w-5 h-5 flex-shrink-0" />
  }
  if (isLocked) {
    return <LockSimple className="w-5 h-5 flex-shrink-0 text-textSecondary" />
  }
  return null
}

export default DayIcon
