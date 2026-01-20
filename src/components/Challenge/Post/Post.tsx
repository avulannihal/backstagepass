import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostMedia from './PostMedia'
import PostFooter from './PostFooter'

interface PostProps {
  author: {
    name: string
    avatar?: string
  }
  timestamp: string
  text: string
  media?: {
    image: string
    isVideo?: boolean
  }
  reactions: {
    count: number
    emojis: string[]
  }
  commentsCount: number
}

const Post = ({ author, timestamp, text, media, reactions, commentsCount }: PostProps) => {
  return (
    <div className="w-full bg-solid rounded-2xl overflow-hidden border border-borderMuted">
      <PostHeader author={author} timestamp={timestamp} />
      <PostContent text={text} />
      {media && <PostMedia image={media.image} isVideo={media.isVideo} />}
      <PostFooter reactions={reactions} commentsCount={commentsCount} />
    </div>
  )
}

export default Post
