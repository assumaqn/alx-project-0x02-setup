import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex gap-4 justify-center">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  )
}

export default Header
