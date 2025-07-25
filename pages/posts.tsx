import Header from '@/components/layout/Header'

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-purple-600">Posts Page</h1>
        <p className="mt-4 text-gray-700">This is where posts would be listed.</p>
      </main>
    </>
  )
}
