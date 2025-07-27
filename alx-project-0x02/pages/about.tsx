import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

export default function AboutPage() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-6">About This Project</h1>

      <div className="space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </main>
  )
}
