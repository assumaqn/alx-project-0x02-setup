import { useState } from 'react'

interface PostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (title: string, content: string) => void
}

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(title, content)
    setTitle('')
    setContent('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 font-bold">&times;</button>
        <h2 className="text-xl font-semibold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostModal
