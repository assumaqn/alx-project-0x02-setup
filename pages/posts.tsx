'use client'

import { useEffect, useState } from 'react'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'
import Header from '@/components/layout/Header'

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await res.json()

      const formattedPosts: PostProps[] = data.map((post: any) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        userId: post.userId,
      }))

      setPosts(formattedPosts)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  )
}
