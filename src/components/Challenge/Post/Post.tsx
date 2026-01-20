import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostMedia from './PostMedia'
import PostFooter from './PostFooter'
import SubmissionHeader from './SubmissionHeader'

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
  isSubmission?: boolean
}

const Post = ({ author, timestamp, text, media, reactions, commentsCount, isSubmission = false }: PostProps) => {
  const postContent = (
    <div className="w-full bg-solid rounded-2xl overflow-hidden border border-borderMuted max-w-[640px]">
      <PostHeader author={author} timestamp={timestamp} />
      <PostContent text={text} />
      {media && <PostMedia image={media.image} isVideo={media.isVideo} />}
      <PostFooter reactions={reactions} commentsCount={commentsCount} />
    </div>
  )

  if (isSubmission) {
    return <SubmissionHeader>{postContent}</SubmissionHeader>
  }

  return postContent
}

export default Post
