import { CardProps } from '@/interfaces'

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default Card
