import post1Image from '@/assets/images/Challenge/post/post1.png'

export interface PostData {
  id: string
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

export const posts: PostData[] = [
  {
    id: "1",
    author: {
      name: "Ashraf Idrishi"
    },
    timestamp: "1s",
    text: "Today's challenge workout completed—feeling stronger already",
    media: {
      image: post1Image,
      isVideo: true
    },
    reactions: {
      count: 18,
      emojis: ["🙏", "😍"]
    },
    commentsCount: 10,
    isSubmission: true
  },
  {
    id: "2",
    author: {
      name: "Sarah Johnson"
    },
    timestamp: "5m",
    text: "Just finished my morning run! The weather was perfect today 🌞",
    media: {
      image: post1Image,
      isVideo: false
    },
    reactions: {
      count: 24,
      emojis: ["🔥", "💪"]
    },
    commentsCount: 8
  },
  {
    id: "3",
    author: {
      name: "Mike Chen"
    },
    timestamp: "12m",
    text: "Day 3 of the challenge and I'm already feeling the difference. Consistency is key!",
    reactions: {
      count: 31,
      emojis: ["👏", "🎯", "💯"]
    },
    commentsCount: 15
  },
  {
    id: "4",
    author: {
      name: "Emma Wilson"
    },
    timestamp: "1h",
    text: "Completed today's workout with my workout buddy. Teamwork makes the dream work! 💪",
    media: {
      image: post1Image,
      isVideo: true
    },
    reactions: {
      count: 42,
      emojis: ["❤️", "🔥", "💪"]
    },
    commentsCount: 22
  }
]
