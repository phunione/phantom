import { useState } from 'react'
import { Link } from 'react-router-dom'

function SideNavBar() {
  const [currPathName, setCurrentPathName] = useState(window.location.pathname)
  const pathName = window.location.pathname

  const links = [
    { id: 'm-1', name: 'Actors', to: '/actor' },
    { id: 'm-2', name: 'Banks', to: '/banks' },
    { id: 'm-3', name: 'Bankers', to: '/bankers' },
    { id: 'm-4', name: 'ID(s)', to: '/ids' },
    {
      id: 'm-5',
      name: 'Companies',
      to: '/companies',
    },
    {
      id: 'm-6',
      name: 'Add?',
      to: '/add',
    },
  ]

  const link = links.find((link) => link.to == pathName)
  const [currPathId, setCurrentPathId] = useState(link ? link.id : '/')

  function handleLinkClick(link) {
    setCurrentPathName(link.to)
    setCurrentPathId(link.id)
  }

  return (
    <div className="bg-tertiary min-h-screen w-1/5 text-white">
      {/* Logo */}
      <div className="py-7">
        <h1 className="text-center text-4xl">Phantom</h1>
      </div>

      {/* Links */}
      <div className="mt-2 text-2xl">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            onClick={() => handleLinkClick(link)}
            className={`inline-block w-full rounded-2xl py-3 ${
              pathName === currPathName && link.id === currPathId
                ? 'bg-primary hover:text-white'
                : 'hover:bg-primary text-gray-400 hover:text-white'
            } transition-colors`}
          >
            <p className="mx-20 text-lg">{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNavBar
