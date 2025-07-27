import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const navItems = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/posts', label: 'Posts' },
]

const Header = () => {
  const router = useRouter()

  return (
    <header className="bg-blue-600 text-white py-4 mb-6">
      <nav className="flex justify-center gap-6">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={clsx(
              'hover:underline',
              router.pathname === path ? 'font-bold underline' : ''
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
