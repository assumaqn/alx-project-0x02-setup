import { useState } from 'react'
import Header from '@/components/layout/Header'

import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'

interface Post {
  title: string
  content: string
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }])
  }

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome to the Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create New Post
      </button>

      <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </main>
  )
}
