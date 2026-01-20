interface PostContentProps {
  text: string
}

const PostContent = ({ text }: PostContentProps) => {
  return (
    <div className="px-4 pb-3">
      <p className="text-textPrimary text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export default PostContent
