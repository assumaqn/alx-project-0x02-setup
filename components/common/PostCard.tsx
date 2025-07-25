import { PostProps } from '@/interfaces'

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700 mb-3">{content}</p>
      <span className="text-sm text-gray-500">Posted by user {userId}</span>
    </div>
  )
}

export default PostCard
