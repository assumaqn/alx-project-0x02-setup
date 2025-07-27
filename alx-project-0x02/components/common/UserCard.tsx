import { UserProps } from '@/interfaces'

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-blue-700">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  )
}

export default UserCard
