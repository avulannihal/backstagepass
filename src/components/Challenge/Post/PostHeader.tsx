import DotsIcon from '@/assets/images/Challenge/post/dots.svg?react'
import avatarImage from '@/assets/images/Navbar/Avatar.png'

interface PostHeaderProps {
  author: {
    name: string
    avatar?: string
  }
  timestamp: string
}

const PostHeader = ({ author, timestamp }: PostHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-borderMuted flex items-center justify-center">
          <img 
            src={author.avatar || avatarImage} 
            alt={author.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex flex-col">
          <h6 className="text-textPrimary font-semibold text-sm">{author.name}</h6>
          <span className="text-textSecondary text-xs">{timestamp}</span>
        </div>
      </div>
      <button className="text-textSecondary hover:text-textPrimary transition-colors">
        <DotsIcon className="w-6 h-6 fill-current" />
      </button>
    </div>
  )
}

export default PostHeader
