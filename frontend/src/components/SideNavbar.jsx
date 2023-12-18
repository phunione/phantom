import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userActions.js'
import { useDispatch, useSelector } from 'react-redux'

function SideNavBar() {
  const [currPathName, setCurrentPathName] = useState(window.location.pathname)
  const pathName = window.location.pathname

  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const links = [
    { id: 'm-1', name: 'Actors', to: '/actor' },
    { id: 'm-2', name: 'Banks', to: '/bank' },
    { id: 'm-3', name: 'Bankers', to: '/banker' },
    { id: 'm-4', name: 'Owners', to: '/owner' },
    {
      id: 'm-5',
      name: 'Companies',
      to: '/company',
    },
    {
      id: 'm-6',
      name: 'Unique Relations',
      to: '/unique-relation',
    },
    userInfo?.is_superuser || userInfo?.is_excel_company_user
      ? {
          id: 'm-7',
          name: 'Excel Companies',
          to: '/excel-company',
        }
      : {},
    {
      id: 'm-8',
      name: 'Add?',
      to: '/add',
    },
  ]

  const link = links.find((link) => link.to === pathName)
  const [currPathId, setCurrentPathId] = useState(link ? link.id : '/')

  function handleLinkClick(link) {
    setCurrentPathName(link.to)
    setCurrentPathId(link.id)
  }

  useEffect(() => {}, [pathName])

  return (
    <div className="flex min-h-screen w-1/5 flex-col items-center justify-evenly bg-tertiary text-white">
      {/* Logo */}
      <div className="py-7">
        <Link to="/">
          <h1 className="text-center text-4xl">Phantom</h1>
        </Link>
      </div>

      {/* Links */}
      <div className="text-2xl">
        {links.map(
          (link, idx) =>
            link?.to && (
              <Link
                key={idx}
                to={link.to}
                onClick={() => handleLinkClick(link)}
                className={`inline-block w-full rounded-2xl py-3 ${
                  pathName === currPathName && link.id === currPathId
                    ? 'bg-primary hover:text-white'
                    : 'text-gray-400 hover:bg-primary hover:text-white'
                } transition-colors`}
              >
                <p className="text-center text-lg">{link.name}</p>
              </Link>
            ),
        )}
      </div>

      <div className={'flex h-1/6 w-full items-center justify-evenly'}>
        {userInfo?.is_superuser && (
          <Link
            to="/register"
            onClick={() => handleLinkClick({ to: '/register', id: 'm-9' })}
            className={`inline-block w-full rounded-2xl py-3 ${
              pathName === currPathName && 'm-9' === currPathId
                ? 'bg-primary hover:text-white'
                : 'text-gray-400 hover:bg-primary hover:text-white'
            } transition-colors`}
          >
            <p className="text-center text-lg">Register</p>
          </Link>
        )}
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(logout())
          }}
          className="inline-block w-full rounded-2xl py-3 text-gray-400 transition-colors hover:bg-primary hover:text-white"
        >
          <p className="text-center text-lg">Logout</p>
        </button>
      </div>
    </div>
  )
}

export default SideNavBar
