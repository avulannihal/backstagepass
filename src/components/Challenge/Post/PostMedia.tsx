interface PostMediaProps {
  image: string
  isVideo?: boolean
}

const PostMedia = ({ image }: PostMediaProps) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <img 
        src={image} 
        alt="Post media" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default PostMedia
