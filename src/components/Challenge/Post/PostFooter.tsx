import SmileyIcon from '@/assets/images/Challenge/post/Smiley.svg?react'
import ChatCircleIcon from '@/assets/images/Challenge/post/ChatCircle.svg?react'

interface PostFooterProps {
  reactions: {
    count: number
    emojis: string[]
  }
  commentsCount: number
}

const PostFooter = ({ reactions, commentsCount }: PostFooterProps) => {
  return (
    <div className="px-4 py-3 flex items-center justify-between border-t border-borderMuted">
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-borderMuted hover:bg-borderMuted/80 transition-colors">
          <div className="flex items-center gap-1">
            {reactions.emojis.map((emoji, index) => (
              <span key={index} className="text-sm">{emoji}</span>
            ))}
          </div>
          <span className="text-textPrimary text-sm font-medium">{reactions.count}</span>
        </button>
        <button className="w-8 h-8 bg-borderMuted  rounded-full border border-borderMuted flex items-center justify-center hover:bg-borderMuted transition-colors text-textPrimary">
          <SmileyIcon className="w-5 h-5 fill-current" />
        </button>
        <button className="w-8 h-8 bg-borderMuted  rounded-full border border-borderMuted flex items-center justify-center hover:bg-borderMuted transition-colors text-textPrimary">
          <ChatCircleIcon className="w-5 h-5 fill-current" />
        </button>
      </div>
      <span className="text-textPrimary text-sm">{commentsCount} Comments</span>
    </div>
  )
}

export default PostFooter
