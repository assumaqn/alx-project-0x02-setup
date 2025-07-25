'use client'

import { useEffect, useState } from 'react'
import { UserProps } from '@/interfaces'
import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  )
}
