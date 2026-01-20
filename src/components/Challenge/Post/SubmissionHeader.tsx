import { useEffect, useState } from 'react'
import bgSubmission from '@/assets/images/Challenge/post/bgsubmission.png'

interface SubmissionHeaderProps {
  children: React.ReactNode
}

const SubmissionHeader = ({ children }: SubmissionHeaderProps) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      className="w-full max-w-[640px] rounded-2xl overflow-hidden"
      style={{
        backgroundColor: isDark ? '#132D21' : '#E6F6EB'
      }}
    >
      {/* Header Section */}
      <div 
        className="relative px-6 py-4 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgSubmission})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h2 
          className="text-lg font-semibold relative z-10"
          style={{
            color: isDark ? '#3DD68C' : '#218358'
          }}
        >
          Your Submission
        </h2>
      </div>
      
      {/* Content Section (Post) */}
      <div className="[&>div]:rounded-none [&>div]:border-0">
        {children}
      </div>
    </div>
  )
}

export default SubmissionHeader
